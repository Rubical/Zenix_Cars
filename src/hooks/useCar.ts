import { useTypedSelector } from "./useTypedSelector";

export const useCar = () => {
  const car = useTypedSelector((state) => state.car);
  return car;
};
