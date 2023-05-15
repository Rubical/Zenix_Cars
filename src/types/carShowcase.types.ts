export interface IShowcaseCar {
  car: TypeCar;
  theme: TypeTheme;
}

export type TypeCar = {
  brand: string;
  model: string;
  carColor: "red" | "blue" | "brown" | "gray";
  carSlogan: string;
  car0__100: number;
  engine: string;
  gearbox: string;
};

export type TypeTheme = { primaryColor: string; secondaryColor: string };
