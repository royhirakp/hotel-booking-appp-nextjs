import {
  configureStore,
  // combineReducers
} from "@reduxjs/toolkit";
import bookingReducer from "./slices/BookingSlice";
import Rooms from "@/redux/slices/MockData";
import Filterslice from "@/redux/slices/FilterSlice";
// persist
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";

//code / for api request auth and get data
import { userLoginRegister } from "./apiRequest/LoginRegister";

// const createNoopStorage = () => {
//   return {
//     getItem(_key: any) {
//       return Promise.resolve(null);
//     },
//     setItem(_key: any, value: any) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key: any) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window !== "undefined"
//     ? createWebStorage("local")
//     : createNoopStorage();

// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const reducer = combineReducers({
//   Booking: bookingReducer,
//   roomArray: Rooms,
//   Filterslice: Filterslice,
//   [userLoginRegister.reducerPath]: userLoginRegister.reducer,
//   // [getBooksData.reducerPath]: getBooksData.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: {
    Booking: bookingReducer,
    roomArray: Rooms,
    Filterslice: Filterslice,
    [userLoginRegister.reducerPath]: userLoginRegister.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userLoginRegister.middleware),
  //   {
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
