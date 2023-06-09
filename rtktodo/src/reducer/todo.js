import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  addTodoState: {
    loading: false,
    done: false,
    err: null,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // initialState:initialState,
  reducers: {
    addTodo(state, action) {
      // [...state, action.payload]
      // immer, 불변성으로 자동으로 지켜주는 라이브러리, 자체 설치
      state.todos.unshift(action.payload);
    },
    updateTodo(state, action) {
      const { id, updatedTodo } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = updatedTodo.title;
        todo.content = updatedTodo.content;
        todo.state = updatedTodo.state;
      }
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleCheck(state, action) {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.state = !todo.state;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleCheck } =
  todoSlice.actions;
// 액션 자동생성 createAction 함수를 만들지 않아도 dispatch의 action명을 함수로 사용하여 매개변수에
// 액션 객체를 전달받을 수 있다
// ex) dispatch(addTodo(newTodo))
