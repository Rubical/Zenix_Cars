"use client";

import React, { FC, useEffect } from "react";
import SmokeBackground from "./smokeBackground/SmokeBackground";
import Showcase from "./showcase/Showcase";
import Partners from "./partners/Partners";
import FeaturedCars from "./featuredCars/FeaturedCars";
import CustomerExperience from "./customerExperience/CustomerExperience";
import Banner from "./banner/Banner";

const Home: FC = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main>
      <SmokeBackground />
      <Showcase />
      <Partners />
      <FeaturedCars />
      <CustomerExperience />
      <Banner />
    </main>
  );
};

export default Home;
