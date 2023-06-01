import { basketSlice } from "./basket/basketSlice";
import { configureStore } from "@reduxjs/toolkit";
import { mealsSlice } from "./meals/mealsSlice";
import { snackbarSlice } from "./snackbar/snackbar";

export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [snackbarSlice.name]: snackbarSlice.reducer,
  },
});
