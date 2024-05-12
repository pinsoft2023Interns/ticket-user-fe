import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slice";

export const store = () => {
  return configureStore({
    reducer: { counterReducer },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
