import React, { FC } from "react";
import { IShowcaseCar } from "../../types/carShowcase.types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

interface IShowCaseCarInfo extends Omit<IShowcaseCar, "logo"> {}

const Showcase: FC<IShowCaseCarInfo> = ({ brand, model, color, carSlogan }) => {
  return (
    <Container
      sx={{
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: "30px",
          marginBottom: "30px",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "800",
            fontSize: "60px",
            padding: "10px",
          }}
        >
          {brand}
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "800",
            fontSize: "60px",
            backgroundColor: color,
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          {model}
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        <Typography
          sx={{ color: "lightgray", fontSize: "14px", width: "700px" }}
        >
          {carSlogan}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            position: "relative",
            zIndex: "10",
            width: "800px",
            height: "500px",
          }}
          src={`https://cdn.imagin.studio/getImage?&make=${brand}&modelFamily=${model}&customer=img&paintDescription=${color}&angle=23&zoomType=fullscreen`}
          alt="audi"
        />
      </Box>
    </Container>
  );
};

export default Showcase;
