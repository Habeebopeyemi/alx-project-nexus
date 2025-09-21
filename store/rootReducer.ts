import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import { productApi } from "@/infrastructure/api/productApi";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  [productApi.reducerPath]: productApi.reducer,
});

export default rootReducer;
