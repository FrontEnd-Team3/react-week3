import { useEffect, useState } from "react";
import { axiosInstance } from "utils/axios";

const useTodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [isAddTodoModal, setIsAddTodoModal] = useState(false);

  const getTodoList = async () => {
    try {
      const res = await axiosInstance.get("/todo");
      setTodoList(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async (title, content) => {
    try {
      if (!title || !content) {
        const err = new Error();
        err.type = "empty error";
        err.message = "빈칸을 채워주세요";
        console.log(err);
      }
      await axiosInstance.post("/todo", {
        title,
        content,
      });
      getTodoList();
      setIsAddTodoModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodo = async (id, content) => {
    try {
      await axiosInstance.put(`/todo/${id}`, {
        content,
      });
      getTodoList();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axiosInstance.delete(`/todo/${id}`);
      getTodoList();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return {
    todoList,
    addTodo,
    updateTodo,
    deleteTodo,
    isAddTodoModal,
    setIsAddTodoModal,
  };
};

export default useTodoList;
