import React, { FC } from "react";
import FogBackground from "../components/UI/background/FogBackground/FogBackground";
import Box from "@mui/material/Box";
import Showcase from "../components/Showcase/Showcase";
import PartnersBlock from "../components/Partners/PartnersBlock";

const Home: FC = () => {
  return (
    <Box style={{ width: "100%" }}>
      <FogBackground />
      <Showcase />
      <PartnersBlock />
    </Box>
  );
};

export default Home;
