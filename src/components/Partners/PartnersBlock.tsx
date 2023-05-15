import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import tireTrack from "./tire-track.svg";
import teslaLogo from "./tesla-logo.svg";
import chevroletLogo from "./chevrolet-logo.svg";
import audiLogo from "./audi-logo.svg";
import ferrariLogo from "./ferrari-logo.svg";
import PartnersCard from "../UI/cards/PartnersCard";
import { TypeCar } from "../../types/carShowcase.types";
import { useCarShowcase } from "../../hooks/useCarShowcase";

const PartnersBlock = () => {
  type TypePartner = Pick<TypeCar, "brand" | "carSlogan">;

  const partners: TypePartner[] = [
    {
      brand: teslaLogo,
      carSlogan:
        "Tesla, Inc. is an American electric vehicle and clean energy company based in Austin, Texas, United States.",
    },
    {
      brand: chevroletLogo,
      carSlogan:
        "Chevrolet, colloquially referred to as Chevy and formally the Chevrolet Division of General Motors Company.",
    },
    {
      brand: audiLogo,
      carSlogan:
        "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.",
    },
    {
      brand: ferrariLogo,
      carSlogan:
        "Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939.",
    },
  ];

  const { theme } = useCarShowcase();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "110px",
      }}
    >
      <img
        style={{ position: "absolute", left: "0" }}
        src={tireTrack}
        alt="tire-track"
      />
      <Box sx={{ width: "520px" }}>
        <Typography
          sx={{
            fontSize: "55px",
            fontWeight: "600",
            color: "white",
            position: "relative",
            zIndex: "10",
            lineHeight: "1.3",
            marginBottom: "40px",
          }}
        >
          We are working with 130+ top class partner around the world
        </Typography>
        <Button
          disableRipple={true}
          sx={{
            backgroundColor: theme.primaryColor,
            padding: "15px 20px",
            color: "white",
            transition: "opacity 0.1s ease-in",
            "&:hover": {
              backgroundColor: theme.primaryColor,
              opacity: "0.8",
            },
          }}
        >
          Explore Now
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "30px",
          rowGap: "30px",
          width: "590px",
        }}
      >
        {partners.map((partner) => (
          <PartnersCard
            key={partner.brand}
            brand={partner.brand}
            carSlogan={partner.carSlogan}
          />
        ))}
      </Box>
    </Container>
  );
};

export default PartnersBlock;
