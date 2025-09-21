import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { productApi } from "@/infrastructure/api/productApi";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
