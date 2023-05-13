import { useTypedSelector } from "./useTypedSelector";

export const useCarShowcase = () => {
  const carShowcase = useTypedSelector((state) => state.carShowcase);
  return carShowcase;
};
