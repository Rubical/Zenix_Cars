import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShowcaseCar } from "../components/types/carShowcase.types";

const initialState: IShowcaseCar = {
  brand: "audi",
  model: "r8",
  color: "red",
  logo: {
    logoCarColor: "rgb(136,34,34)",
    logoTextColor: "rgb(98,83,83)",
  },
  carSlogan:
    "Many cars claim racing heritage, but the Audi R8 Coupe is a true thoroughbred. Sharing 50 percent of its parts with the R8 GT3 LMS race car, it was born on the track and built for the road.",
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
