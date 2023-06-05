import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToBasketRequest, getBasketRequest, incrementFoodRequest, decrementFoodRequest, deleteBasketRequest } from "../../api/basketService";

export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBasketRequest();
      return response.data.data.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);

export const addItem = createAsyncThunk(
  "basket/addItem",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await addToBasketRequest(payload);

      dispatch(getBasket());

      return await response.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);

export const incrementFood = createAsyncThunk(
  "basket/putincrementFood",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await incrementFoodRequest(payload);

      dispatch(getBasket());

      return await response.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const decrementFood = createAsyncThunk(
  "basket/putdecrementFood",
  async (payload, { dispatch, rejectWithValue }) => {
    if (payload.amount !== 0) {
      try {
        const response = await decrementFoodRequest(payload);

        dispatch(getBasket());

        return await response.items;
      } catch (error) {
        return rejectWithValue(error);
      }
    } else {
      try {
        const response = await deleteBasketRequest(payload);

        dispatch(getBasket());

        return await response.items;
      } catch (error) {
        return rejectWithValue(
          error?.response?.message || "Something went wrong!"
        );
      }
    }
  }
);
