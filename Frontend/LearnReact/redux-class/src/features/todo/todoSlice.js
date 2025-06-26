import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // State, action
    addTodo: (state, asction) => {
      const newTodo = {
        id: nanoid(),
        task: asction.payload,
        isDone: false,
      };
      state.todos.push(newTodo); // direct mutaion,  no need for this - [...todos, newTodo]
    },

    deleteTodo: (state, action) => {
      //action.payload will contain id which we want to delete
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    markAsDone: (state, action) => {
      // action.payload will have id which we want to apply this feature
      state.todos = state.todos.map((todo) => {
        if (todo.id == action.payload) {
          return { ...todo, isDone: true };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
