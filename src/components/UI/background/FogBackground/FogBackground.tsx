import React, { FC } from "react";
import style from "./FogBackground.module.css";
import smokeGray from "./smoke-gray.png";
import smoke1Red from "./red/smoke-red-1.png";
import smoke2Red from "./red/smoke-red-2.png";
import smoke3Red from "./red/smoke-red-3.png";
import smoke1Blue from "./blue/smoke-blue-1.png";
import smoke2Blue from "./blue/smoke-blue-2.png";
import smoke3Blue from "./blue/smoke-blue-3.png";
import smoke1Brown from "./brown/smoke-brown-1.png";
import smoke2Brown from "./brown/smoke-brown-2.png";
import smoke3Brown from "./brown/smoke-brown-3.png";
import smoke1Gray from "./gray/smoke-gray-1.png";
import smoke2Gray from "./gray/smoke-gray-2.png";
import smoke3Gray from "./gray/smoke-gray-3.png";
import { useCarShowcase } from "../../../../hooks/useCarShowcase";

interface ISmokeImages {
  red1: string;
  red2: string;
  red3: string;
  blue1: string;
  blue2: string;
  blue3: string;
  brown1: string;
  brown2: string;
  brown3: string;
  gray1: string;
  gray2: string;
  gray3: string;
}

const images: ISmokeImages = {
  red1: smoke1Red,
  red2: smoke2Red,
  red3: smoke3Red,
  blue1: smoke1Blue,
  blue2: smoke2Blue,
  blue3: smoke3Blue,
  brown1: smoke1Brown,
  brown2: smoke2Brown,
  brown3: smoke3Brown,
  gray1: smoke1Gray,
  gray2: smoke2Gray,
  gray3: smoke3Gray,
};

const FogBackground: FC = () => {
  const { car } = useCarShowcase();
  const { carColor } = car;
  return (
    <section className={style.agSmokeBlock}>
      <div className={style.agSmoke1}>
        <img src={images[(carColor + 1) as keyof ISmokeImages]} alt="smoke" />
      </div>
      <div className={`${style.agSmoke1} ${style.agSmoke__delay1}`}>
        <img src={images[(carColor + 1) as keyof ISmokeImages]} alt="smoke" />
      </div>
      <div className={`${style.agSmoke1} ${style.agSmoke__delay2}`}>
        <img src={images[(carColor + 1) as keyof ISmokeImages]} alt="smoke" />
      </div>
      <div className={style.agSmoke2}>
        <img src={images[(carColor + 2) as keyof ISmokeImages]} alt="smoke" />
      </div>
      <div className={`${style.agSmoke2} ${style.agSmoke__delay1}`}>
        <img src={images[(carColor + 2) as keyof ISmokeImages]} alt="smoke" />
      </div>
      <div className={`${style.agSmoke2} ${style.agSmoke__delay2}`}>
        <img src={images[(carColor + 2) as keyof ISmokeImages]} alt="smoke" />
      </div>
      <div className={style.agSmoke3}>
        <img src={images[(carColor + 3) as keyof ISmokeImages]} alt="smoke" />
      </div>
      <div className={`${style.agSmoke3} ${style.agSmoke__delay1}`}>
        <img src={images[(carColor + 3) as keyof ISmokeImages]} alt="smoke" />
      </div>
      <div className={`${style.agSmoke3} ${style.agSmoke__delay2}`}>
        <img src={images[(carColor + 3) as keyof ISmokeImages]} alt="smoke" />
      </div>
      <div className={style.agSmoke4}>
        <img src={smokeGray} alt="smoke" />
      </div>
      <div className={`${style.agSmoke4} ${style.agSmoke__delay1}`}>
        <img src={smokeGray} alt="smoke" />
      </div>
      <div className={`${style.agSmoke4} ${style.agSmoke__delay2}`}>
        <img src={smokeGray} alt="smoke" />
      </div>
      <div className={style.agFormatContainer}></div>
    </section>
  );
};

export default FogBackground;
