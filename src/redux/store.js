import { configureStore } from "@reduxjs/toolkit";
import checkReducer from "./checkslice";

const store = configureStore({
  reducer: {
    checklist: checkReducer,
  },
});
export default store;
