type TypeLogo = {
  logoCarColor: string;
  logoTextColor: string;
};

export interface IShowcaseCar {
  brand: string;
  model: string;
  color: "red" | "blue" | "brown" | "gray";
  carSlogan: string;
  logo: TypeLogo;
}
