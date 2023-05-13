import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

interface IShowcase {
  brand: string;
  model: string;
  color: string;
  info: string;
}

const Showcase: FC<IShowcase> = ({ brand, model, color, info }) => {
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
          {info}
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
