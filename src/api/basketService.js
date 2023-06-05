import { axiosInstance } from "../lib/axiosInstans";

export const getBasketRequest = () => {
  return axiosInstance.get("/basket");
};

export const getMealsRequest=()=>{
  return axiosInstance.get('/foods')
}

export const addToBasketRequest = (data) => {
  return axiosInstance.post(`/foods/${data.id}/addToBasket`, {
    amount: data.amount,
  });
};

export const incrementFoodRequest = (data) => {
  return axiosInstance.put(`/basketItem/${data.id}/update`, {
    amount: data.amount + 1,
  });
};

export const decrementFoodRequest = ({id, amount}) => {
  return axiosInstance.put(`/basketItem/${id}/update`, {
    amount: amount,
  });
};

export const deleteBasketRequest = (data) => {
  return axiosInstance.delete(`/basketItem/${data.id}/delete`);
};
