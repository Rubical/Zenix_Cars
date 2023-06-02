"use client";

import React, { FC } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";
import { useCarShowcase } from "../../../../hooks/useCarShowcase";
import Loader from "../../../UI/loader/Loader";
import { useActions } from "../../../../hooks/useActions";
import backgroundCarImg from "./feature-card-background.png";
import Image from "next/image";

const FeaturedCars: FC = () => {
  const { car, theme, isLoading } = useCarShowcase();
  const { brand, model, carColor } = car;
  const { stopLoading } = useActions();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "210px",
      }}
    >
      <Box sx={{ position: "absolute", left: "0" }}>
        <Box
          sx={{
            display: isLoading ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            width: "800px",
            height: "500px",
          }}
        >
          <Loader theme={theme} />
        </Box>
        <Image
          style={{
            position: "absolute",
            zIndex: "5",
            width: "800px",
            height: "520px",
          }}
          src={backgroundCarImg}
          alt="background"
        />
        <Image
          width={800}
          height={500}
          style={{
            display: isLoading ? "none" : "flex",
            position: "relative",
            zIndex: "10",
          }}
          src={`https://cdn.imagin.studio/getImage?&make=${brand}&modelFamily=${model}&customer=img&paintDescription=${carColor}&angle=09&zoomType=fullscreen`}
          alt="car"
          onLoadingComplete={() => stopLoading()}
        />
      </Box>
      <Box sx={{ color: "white" }}>
        <Typography
          sx={{
            fontSize: "55px",
            fontWeight: "600",
            width: "100%",
            maxWidth: "600px",
            lineHeight: "1.3",
          }}
        >
          Featured cars
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
            marginTop: "30px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          <ListItem
            sx={{
              color:
                car.brand === "audi"
                  ? theme.primaryColor
                  : theme.secondaryColor,
              fontSize: car.brand === "audi" ? "25px" : "20px",
            }}
          >
            Audi
          </ListItem>
          <ListItem
            sx={{
              color:
                car.brand === "mercedes"
                  ? theme.primaryColor
                  : theme.secondaryColor,
              fontSize: car.brand === "mercedes" ? "25px" : "20px",
            }}
          >
            Mercedes
          </ListItem>
          <ListItem
            sx={{
              color:
                car.brand === "volvo"
                  ? theme.primaryColor
                  : theme.secondaryColor,
              fontSize: car.brand === "volvo" ? "25px" : "20px",
            }}
          >
            Volvo
          </ListItem>
          <ListItem
            sx={{
              color:
                car.brand === "volkswagen"
                  ? theme.primaryColor
                  : theme.secondaryColor,
              fontSize: car.brand === "volkswagen" ? "25px" : "20px",
            }}
          >
            Volkswagen
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default FeaturedCars;
