import { createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, name: "зробити домашку", checked: false },
    { id: 2, name: "позвонити мамі", checked: true },
    { id: 3, name: "задонатити на дрони", checked: true },
    { id: 4, name: "поділити на нуль", checked: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const { name } = action.payload;
      state.push({
        id: state.length + 1,
        name,
        checked: false,
      });
    },
    checkTodo: (state, action) => {
      const { id, checkAll } = action.payload;

      if (checkAll !== undefined) {
        return state.map((todo) => ({ ...todo, checked: checkAll }));
      } else {
        
        const todoIndex = state.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
          state[todoIndex] = {
            ...state[todoIndex],
            checked: !state[todoIndex].checked,
          };
         }
        }
      },
       deleteCheckedTodos: (state) => {
        return state.filter((todo) => !todo.checked);
    },

    
  },
});

export const { addTodo, checkTodo, deleteCheckedTodos } = todoSlice.actions;


export default todoSlice.reducer;
