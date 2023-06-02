"use client";

import React, { FC } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import guyImg from "./guy.png";
import { useCarShowcase } from "../../../../hooks/useCarShowcase";
import { List, ListItem } from "@mui/material";
import Loader from "../../../UI/loader/Loader";
import { useActions } from "../../../../hooks/useActions";
import backgroundImg from "./background.png";
import ellipseImg from "./ellipse.svg.png";
import vectorImg from "./vector.svg.png";
import tireTrackImg from "./tire-track.png";
import Image from "next/image";

const CustomerExperience: FC = () => {
  const { stopLoading } = useActions();
  const { theme, car, isLoading } = useCarShowcase();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <Typography
        sx={{
          fontSize: "55px",
          fontWeight: "600",
          width: "100%",
          maxWidth: "800px",
          lineHeight: "1.3",
          marginBottom: "80px",
        }}
      >
        <img
          style={{ position: "absolute", left: "0" }}
          src={backgroundImg}
          alt="background"
        />
        <img
          style={{ position: "absolute", right: "0" }}
          src={tireTrackImg}
          alt="tire-track"
        />
        <img />
        We are ensuring the best customer experience
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            rowGap: "20px",
          }}
        >
          <img
            style={{ width: "200px", position: "relative" }}
            src={guyImg}
            alt="guy-img"
          />
          <Typography sx={{ width: "250px", textAlign: "start" }}>
            A car (or automobile) is a wheeled motor vehicle used for
            transportation. Most definitions of cars
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
            Learn More
          </Button>
        </Box>
        <Box>
          {isLoading ? (
            <Loader theme={theme} />
          ) : (
            <Image
              width={800}
              height={500}
              onLoad={() => stopLoading()}
              style={{
                display: isLoading ? "none" : "flex",
                transform: "rotate(90deg)",
              }}
              src={`https://cdn.imagin.studio/getImage?&make=${car.brand}&modelFamily=${car.model}&customer=img&paintDescription=${car.carColor}&angle=33&zoomType=fullscreen`}
              alt="car"
            />
          )}
        </Box>
        <List>
          <ListItem>
            <Typography>260</Typography>
            <Typography>Unique Vehicles</Typography>
          </ListItem>
          <ListItem>
            <Typography>180k</Typography>
            <Typography>Annual Visitor</Typography>
          </ListItem>
          <ListItem>
            <Typography>190k</Typography>
            <Typography>Exhibit Space</Typography>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default CustomerExperience;
