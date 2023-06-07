import teslaLogo from "./tesla-logo.svg";
import chevroletLogo from "./chevrolet-logo.svg";
import audiLogo from "./audi-logo.svg";
import ferrariLogo from "./ferrari-logo.svg";
import { TypePartner } from "../../types/partners.types";

export const partners: TypePartner[] = [
  {
    brand: teslaLogo,
    slogan:
      "Tesla, Inc. is an American electric vehicle and clean energy company based in Austin, Texas, United States.",
  },
  {
    brand: chevroletLogo,
    slogan:
      "Chevrolet, colloquially referred to as Chevy and formally the Chevrolet Division of General Motors Company.",
  },
  {
    brand: audiLogo,
    slogan:
      "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.",
  },
  {
    brand: ferrariLogo,
    slogan:
      "Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939.",
  },
];
