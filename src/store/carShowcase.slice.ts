import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShowcaseCar } from "../types/carShowcase.types";

interface IShowcaseSlice extends IShowcaseCar {
  isLoading: boolean;
}

const initialState: IShowcaseSlice = {
  car: {
    brand: "audi",
    model: "r8",
    carColor: "red",
    carSlogan: "Being Ahead through Technology.",
    car0__100: 3.7,
    engine: "5.2L V10",
    gearbox: "7 speed",
  },
  theme: {
    primaryColor: "#982d35",
    secondaryColor: "#876f6f",
  },
  isLoading: true,
};

export const carShowcaseSlice = createSlice({
  name: "carShowcase",
  initialState,
  reducers: {
    changeShowcaseCar: (state, action: PayloadAction<IShowcaseCar>) => {
      state.car = action.payload.car;
      state.theme = action.payload.theme;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { changeShowcaseCar, startLoading, stopLoading } =
  carShowcaseSlice.actions;
export default carShowcaseSlice.reducer;
