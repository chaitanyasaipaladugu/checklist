import { createSlice } from "@reduxjs/toolkit";
let id = 0;
const checkSlice = createSlice({
  name: "checklist",
  initialState: {
    items: [],
    filter: "all", // all | done | not_done
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: id++, text: action.payload, done: false });
    },
    toggleItem: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.done = !item.done;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((i) => !i.done);
    },
  },
});

export const { addItem, toggleItem, clearCompleted, setFilter } =
  checkSlice.actions;
export default checkSlice.reducer;
