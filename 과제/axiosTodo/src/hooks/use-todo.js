import { useTodoList } from "context/todo";
import { useEffect } from "react";
import { axiosInstance } from "utils/axios";

const useTodo = () => {
  const { todoList, setTodoList } = useTodoList();

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const res = await axiosInstance.get("/todo");
        console.log(res);
        setTodoList(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTodoList();
  }, []);

  return [todoList, setTodoList];
};
export default useTodo;
