import { DELETE } from "./types";

export const clearProduct = (name) => {
  return (dispatch) => {
    dispatch({
      type: DELETE,
      payload: name,
    });
  };
};
