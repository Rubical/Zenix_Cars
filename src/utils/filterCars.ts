import { carsData } from "../data/car/car.data";
import { ICar } from "../types/car.types";

export const filterCars = (query: string): ICar => {
  return carsData.filter((el) => el.car.brand === query)[0];
};
