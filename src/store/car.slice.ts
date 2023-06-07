import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICar } from "../types/car.types";

interface ICarSlice extends ICar {
  isLoading: boolean;
}

const initialState: ICarSlice = {
  car: {
    brand: "audi",
    model: "r8",
    color: "red",
    slogan: "Being Ahead through Technology.",
    time0__100: 3.7,
    engine: "5.2L V10",
    gearbox: "7 speed",
  },
  theme: {
    primaryColor: "#982d35",
    secondaryColor: "#876f6f",
  },
  isLoading: true,
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    changeCar: (state, action: PayloadAction<ICar>) => {
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

export const { changeCar, startLoading, stopLoading } = carSlice.actions;
export default carSlice.reducer;
