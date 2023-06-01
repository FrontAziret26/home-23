import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRequest } from "../../lib/fetchAPI";

export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchRequest("/basket");
      return response.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something wrong wrong! "
      );
    }
  }
);

export const addItem = createAsyncThunk(
  "basket/addItem",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchRequest(`/foods/${payload.id}/addToBasket`, {
        method: "POST",
        body: { amount: payload.amount },
      });

      dispatch(getBasket());

      return await response.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something wrong wrong! "
      );
    }
  }
);

export const incrementFood = createAsyncThunk(
  "basket/putincrementFood",
  async ({ amount, id }, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetchRequest(`/basketItem/${id}/update`, {
        method: "PUT",
        body: { amount: amount + 1 },
      });

      dispatch(getBasket());

      return await response.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const decrementFood = createAsyncThunk(
  "basket/putdecrementFood",
  async ({ amount, id }, { dispatch, rejectWithValue }) => {
    if (amount !== 0) {
      try {
        const response = await fetchRequest(`/basketItem/${id}/update `, {
          method: "PUT",
          body: { amount: amount },
        });

        dispatch(getBasket());

        return await response.items;
      } catch (error) {
        return rejectWithValue(error);
      }
    } else {
      try {
        const response = await fetchRequest(`/basketItem/${id}/delete`, {
          method: "DELETE",
        });

        dispatch(getBasket());

        return await response.items;
      } catch (error) {
        return rejectWithValue(
          error?.response?.message || "Something wrong wrong! "
        );
      }
    }
  }
);
