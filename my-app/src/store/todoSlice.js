import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await axios.get(
      "https://6568d4b49927836bd9757b47.mockapi.io/todos"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error.message);
    throw error;
  }
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoArray: [], status: 'idle', error: null
  },
  reducers: {
    addTodo: (state, action) => {
      const { name } = action.payload;
      state.todoArray.push({
        id: state.todoArray.length + 1,
        name,
        checked: false,
      });
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.todoArray.find((todo) => todo.id === id);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
    toggleAllTodos: (state) => {
      const allChecked = state.todoArray.every((todo) => todo.checked);
      state.todoArray.forEach((todo) => {
        todo.checked = !allChecked;
      });
    },
    deleteCompletedTodos: (state) => {
      state.todoArray = state.todoArray.filter((todo) => !todo.checked);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todoArray = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addTodo, toggleTodo, toggleAllTodos, deleteCompletedTodos } = todoSlice.actions;

export const selectTodos = (state) => state.todos;
export default todoSlice.reducer;

