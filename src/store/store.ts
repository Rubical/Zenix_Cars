import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carShowcaseReducer from "./carShowcase.slice";

const rootReducer = combineReducers({
  carShowcase: carShowcaseReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
