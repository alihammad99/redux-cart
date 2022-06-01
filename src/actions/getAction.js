import { GET_NUMBERS } from "./types";

export const getNumbers = () => {
  return (dispatch) => {
    console.log("Get Numbers");
    dispatch({
      type: GET_NUMBERS,
    });
  };
};
