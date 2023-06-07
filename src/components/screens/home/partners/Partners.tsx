import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import tireTrack from "./tire-track.svg";
import PartnersCard from "./PartnersCard";
import { useCar } from "../../../../hooks/useCar";
import Image from "next/image";
import { partners } from "../../../../data/partners/partners.data";

const Partners = () => {
  const { theme } = useCar();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "110px",
      }}
    >
      <Image
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
            slogan={partner.slogan}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Partners;
