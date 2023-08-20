import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world ", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState, // Corrected typo here
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    updateTodo: (state, action) => {
      const updatedTodo = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      state.todos = updatedTodo;
    },
    editTodo: (state, action) => {
      const { id, value } = action.payload;
      if (value !== '') {
        const updatedTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, text: value } : todo
        );
        state.todos = updatedTodos;
      }
    },
    
  },
});

export const { addTodo, removeTodo, updateTodo,editTodo } = todoSlice.actions;
export default todoSlice.reducer; // Added semicolon at the end
