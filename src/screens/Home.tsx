import React, { FC } from "react";
import FogBackground from "../components/UI/animation/FogBackground/FogBackground";
import Box from "@mui/material/Box";
import Showcase from "../components/сar/Showcase/Showcase";
import { useCarShowcase } from "../hooks/useCarShowcase";

const Home: FC = () => {
  const { brand, model, carColor, carSlogan, theme } = useCarShowcase();
  return (
    <Box style={{ width: "100%" }}>
      <FogBackground carColor={carColor} />
      <Showcase
        brand={brand}
        model={model}
        carColor={carColor}
        carSlogan={carSlogan}
        theme={theme}
      />
    </Box>
  );
};

export default Home;
