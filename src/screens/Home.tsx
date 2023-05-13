import React, { FC } from "react";
import FogBackground from "../components/UI/animation/FogBackground/FogBackground";
import Box from "@mui/material/Box";
import Showcase from "../components/Car/Showcase/Showcase";
import { useCarShowcase } from "../hooks/useCarShowcase";

const Home: FC = () => {
  const { brand, model, color, carSlogan } = useCarShowcase();
  return (
    <Box style={{ width: "100%" }}>
      <FogBackground color={color} />
      <Showcase
        brand={brand}
        model={model}
        color={color}
        carSlogan={carSlogan}
      />
    </Box>
  );
};

export default Home;
