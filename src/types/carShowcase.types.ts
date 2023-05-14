export interface IShowcaseCar {
  brand: string;
  model: string;
  carColor: "red" | "blue" | "brown" | "gray";
  carSlogan: string;
  theme: { primaryColor: string; secondaryColor: string };
}
