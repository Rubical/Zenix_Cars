export interface ICar {
  car: TypeCar;
  theme: TypeTheme;
}

export type TypeCar = {
  brand: string;
  model: string;
  color: "red" | "blue" | "brown" | "gray";
  slogan: string;
  time0__100: number;
  engine: string;
  gearbox: string;
};

export type TypeTheme = { primaryColor: string; secondaryColor: string };
