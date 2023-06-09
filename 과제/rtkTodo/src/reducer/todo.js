import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { todoMock } from "__mock__/datas/todo.data";

const initialState = {
  todos: todoMock,
  addTodoState: {
    loading: false,
    done: false,
    err: null,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // Thunk 사용 전 rtk로만 작성한 코드
  reducers: {
    // addTodo(state, action) {
    //   state.todos.unshift(action.payload);
    // },
    // deleteTodo(state, action) {
    //   state.todos = state.todos.filter((el) => el.id !== action.payload);
    // },
    updateTodoContent(state, action) {
      const index = state.todos.findIndex((el) => el.id === action.payload.id);
      state.todos[index].content = action.payload.content;
      state.todos[index].state = action.payload.state;
    },
    updateTodoState(state, action) {
      const index = state.todos.findIndex((el) => el.id === action.payload.id);
      state.todos[index].state = action.payload.state;
    },
  },
  extraReducers: (builder) => {
    // 추가
    builder.addCase(addTodo.pending, (state) => {
      state.addTodoState.loading = true;
      state.addTodoState.done = false;
      state.addTodoState.err = null;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.unshift(action.payload);
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.addTodoState.err = null;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.addTodoState.loading = false;
      state.addTodoState.done = false;
      state.addTodoState.err = action.payload;
    });
    // 삭제
    builder.addCase(deleteTodo.pending, (state) => {
      state.addTodoState.loading = true;
      state.addTodoState.done = false;
      state.addTodoState.err = null;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.addTodoState.err = null;
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.addTodoState.loading = false;
      state.addTodoState.done = false;
      state.addTodoState.err = action.err.message;
    });
    // 내용 수정
    // builder.addCase(updateTodoContent.pending, (state) => {
    //   state.addTodoState.loading = true;
    //   state.addTodoState.done = false;
    //   state.addTodoState.err = null;
    // });
    // builder.addCase(updateTodoContent.fulfilled, (state, action) => {
    //   const index = state.todos.findIndex((el) => el.id === action.payload.id);
    //   state.todos[index].content = action.payload.content
    //   state.addTodoState.loading = false;
    //   state.addTodoState.done = true;
    //   state.addTodoState.err = null;
    // });
    // builder.addCase(updateTodoContent.rejected, (state, action) => {
    //   state.addTodoState.loading = false;
    //   state.addTodoState.done = false;
    //   state.addTodoState.err = action.err.message;
    // });
  },
});

// export const { addTodo } = todoSlice.actions;
// export const { deleteTodo } = todoSlice.actions;
export const { updateTodoContent } = todoSlice.actions;
export const { updateTodoState } = todoSlice.actions;
export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async ({ title, content }) => {
    const res = await axios.post("/api/todo", { title, content });
    return res.data;
  }
);

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  try {
    await axios.delete(`/api/todo/${id}`);
    return id;
  } catch (err) {
    throw new Error("Failed to DELETE:(");
  }
});

// export const updateTodoContent = createAsyncThunk(
//   "todo/updateTodoContent",
//   async (updatedContent) => {
//     try {
//       const res = await axios.request({
//         url: `/api/todo/${updatedContent.id}}`,
//         method: "PUT",
//         data: updatedContent,
//       });

//       return res.data;
//     } catch (err) {
//       console.error(err);
//     }
//   }
// );
