import React, { FC } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useCar } from "../../../../hooks/useCar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Banner: FC = () => {
  const { car, theme } = useCar();
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "50px 70px",
        marginBottom: "150px",
        backgroundColor: "rgba(87,87,87,0.2)",
        boxShadow:
          "inset 1px 1px 4px rgba(65, 65, 65, 0.58), inset -1px -1px 4px rgba(65, 65, 65, 0.58)",
      }}
    >
      <Box sx={{ color: "white", marginLeft: "50px" }}>
        <Typography
          sx={{
            fontSize: "55px",
            fontWeight: "600",
            width: "500px",
            lineHeight: "1.3",
            marginBottom: "30px",
          }}
        >
          Wanna get more special offers ?
        </Typography>
        <Typography
          sx={{ width: "450px", textAlign: "start", marginBottom: "30px" }}
        >
          Be the first who will get all information about our product in email
          by subscribe our mailling list
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
          Subscribe Now
        </Button>
      </Box>
      <Image
        width={650}
        height={350}
        src={`https://cdn.imagin.studio/getImage?&make=${car.brand}&modelFamily=${car.model}&customer=img&paintDescription=${car.color}&angle=29&zoomType=fullscreen`}
        alt="car"
      />
    </Container>
  );
};

export default Banner;
