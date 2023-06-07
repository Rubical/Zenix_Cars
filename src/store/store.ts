import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carReducer from "./car.slice";

const rootReducer = combineReducers({
  car: carReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
