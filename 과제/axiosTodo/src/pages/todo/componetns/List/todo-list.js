import { useEffect } from "react";
import OneTodo from "./one-todo";
import { axiosInstance } from "utils/axios";

const TodoList = ({ todoList, setTodoList }) => {
  //   const updatTodo = (id, content) => {
  //     const _todoList = [...todoList];
  //     const todo = _todoList.find((todo) => todo.id === id);
  //     todo.content = content;
  //     setTodoList(_todoList);
  //   };

  const updateTodo = async (id, content, state) => {
    try {
      await axiosInstance.put(`/todo/${id}`, { content, state });
      const _todoList = [...todoList];
      const todo = _todoList.find((todo) => todo.id === id);
      todo.content = content;
      todo.state = state;
      setTodoList(_todoList);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTodoState = async (id, content, state) => {
    try {
      await axiosInstance.put(`/todo/${id}`, { content, state });
      const _todoList = [...todoList];
      const todo = _todoList.find((todo) => todo.id === id);
      todo.content = content;
      todo.state = !state;
      setTodoList(_todoList);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      if (window.confirm("정말 삭제하시겠습니까")) {
        // const _todoList = todoList.filter((todo) => todo.id !== id);
        // setTodoList(_todoList);
        await axiosInstance.delete(`/todo/${id}`);
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <>
      {todoList.map((todo) => (
        <OneTodo
          todo={todo}
          updateTodo={updateTodo}
          updateTodoState={updateTodoState}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};
export default TodoList;
