"use client";

import React, { FC } from "react";
import SmokeBackground from "./smokeBackground/SmokeBackground";
import Showcase from "./showcase/Showcase";
import Partners from "./partners/Partners";
import FeaturedCars from "./featuredCars/FeaturedCars";
import CustomerExperience from "./customerExperience/CustomerExperience";

const Home: FC = () => {
  return (
    <main>
      <SmokeBackground />
      <Showcase />
      <Partners />
      <FeaturedCars />
      <CustomerExperience />
    </main>
  );
};

export default Home;
