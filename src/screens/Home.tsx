import React, { FC } from "react";
import FogBackground from "../components/UI/animation/FogBackground/FogBackground";
import Box from "@mui/material/Box";
import Showcase from "../components/Car/Showcase/Showcase";

const Home: FC = () => {
  return (
    <Box style={{ width: "100%" }}>
      <FogBackground color={"blue"} />
      <Showcase
        brand={"volkswagen"}
        model={"transporter"}
        color={"blue"}
        info={
          "Many cars claim racing heritage, but the Audi R8 Coupe is a true thoroughbred. Sharing 50 percent of its parts with the R8 GT3 LMS race car, it was born on the track and built for the road."
        }
      />
    </Box>
  );
};

export default Home;
