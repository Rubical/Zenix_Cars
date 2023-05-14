import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShowcaseCar } from "../types/carShowcase.types";

const initialState: IShowcaseCar = {
  brand: "audi",
  model: "r8",
  carColor: "red",
  theme: {
    primaryColor: "#982d35",
    secondaryColor: "#876f6f",
  },
  carSlogan: "Being Ahead through Technology.",
};

export const carShowcaseSlice = createSlice({
  name: "carShowcase",
  initialState,
  reducers: {
    changeShowcaseCar: (state, action: PayloadAction<IShowcaseCar>) => {
      return action.payload;
    },
  },
});

export const { changeShowcaseCar } = carShowcaseSlice.actions;
export default carShowcaseSlice.reducer;
