import { ADD_PRODUCT_TO_BASKET } from "./types";

export const addToBasket = (productName) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_TO_BASKET,
      payload: productName,
    });
  };
};
