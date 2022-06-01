import { combineReducers } from "redux";
import basketReducers from "./basketReducer";

export default combineReducers({
  basketState: basketReducers,
});
