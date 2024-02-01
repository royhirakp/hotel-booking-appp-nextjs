import {
  configureStore,
  // combineReducers
} from "@reduxjs/toolkit";

import { userLoginRegister } from "./apiRequest/LoginRegister";
export const store = configureStore({
  // reducer: persistedReducer,
  reducer: {
    [userLoginRegister.reducerPath]: userLoginRegister.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userLoginRegister.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
