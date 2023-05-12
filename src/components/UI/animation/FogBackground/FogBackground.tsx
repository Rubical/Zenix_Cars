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
import smoke2Gray from "./gray/smoke-gray-1.png";
import smoke3Gray from "./gray/smoke-gray-1.png";

interface FogBackground {
  color: string;
}

const FogBackground: FC<FogBackground> = ({ color }) => {
  return (
    <section className={style.agSmokeBlock}>
      <div className={style.agSmoke1}>
        <img src={smoke1Gray} />
      </div>
      <div className={`${style.agSmoke1} ${style.agSmoke__delay1}`}>
        <img src={`../${color}/smoke-${color}-1.png`} />
      </div>
      <div className={`${style.agSmoke1} ${style.agSmoke__delay2}`}>
        <img src={"smoke1" + color} />
      </div>
      <div className={style.agSmoke2}>
        <img src={"smoke2" + color} />
      </div>
      <div className={`${style.agSmoke2} ${style.agSmoke__delay1}`}>
        <img src={"smoke2" + color} />
      </div>
      <div className={`${style.agSmoke2} ${style.agSmoke__delay2}`}>
        <img src={"smoke2" + color} />
      </div>
      <div className={style.agSmoke3}>
        <img src={"smoke3" + color} />
      </div>
      <div className={`${style.agSmoke3} ${style.agSmoke__delay1}`}>
        <img src={"smoke3" + color} />
      </div>
      <div className={`${style.agSmoke3} ${style.agSmoke__delay2}`}>
        <img src={"smoke3" + color} />
      </div>
      <div className={style.agSmoke4}>
        <img src={smokeGray} />
      </div>
      <div className={`${style.agSmoke4} ${style.agSmoke__delay1}`}>
        <img src={smokeGray} />
      </div>
      <div className={`${style.agSmoke4} ${style.agSmoke__delay2}`}>
        <img src={smokeGray} />
      </div>
      <div className={style.agFormatContainer}></div>
    </section>
  );
};

export default FogBackground;
