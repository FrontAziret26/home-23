import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMealsRequest } from "../../api/basketService";

export const getFoods = createAsyncThunk(
  "meals/getMeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMealsRequest("/foods");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong"
      );
    }
  }
);
