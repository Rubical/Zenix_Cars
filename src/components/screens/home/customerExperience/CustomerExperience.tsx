import React, { FC } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import guyImg from "./guy.png";
import { useCar } from "../../../../hooks/useCar";
import { List, ListItem } from "@mui/material";
import backgroundImg from "./background.png";
import tireTrackImg from "./tire-track.png";
import Image from "next/image";

const CustomerExperience: FC = () => {
  const { theme, car, isLoading } = useCar();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        marginBottom: "210px",
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
        We are ensuring the best customer experience
      </Typography>
      <Image
        style={{ position: "absolute", left: "0" }}
        src={backgroundImg}
        alt="background"
      />
      <Image
        style={{ position: "absolute", right: "0" }}
        src={tireTrackImg}
        alt="tire-track"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            rowGap: "20px",
          }}
        >
          <Image
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
        <Box sx={{ position: "relative" }}>
          <Image
            width={1350}
            height={850}
            style={{
              display: isLoading ? "none" : "flex",
              transform: "rotate(90deg)",
              position: "relative",
              zIndex: "10",
            }}
            src={`https://cdn.imagin.studio/getImage?&make=${car.brand}&modelFamily=${car.model}&customer=img&paintDescription=${car.color}&angle=33&zoomType=fullscreen`}
            alt="car"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "20px",
              right: "205px",
              width: "380px",
              height: "380px",
              zIndex: "5",
            }}
          >
            <svg
              width="351"
              height="352"
              viewBox="0 0 571 572"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="285.384"
                cy="286.057"
                r="283.688"
                stroke={theme.primaryColor}
                strokeWidth="3"
                strokeDasharray="10 20"
              />
            </svg>
          </Box>
          <Box sx={{ position: "absolute", top: "130px", right: "200px" }}>
            <svg
              width="51"
              height="103"
              viewBox="0 0 71 143"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66.6289 142.317L70.5772 131.466L59.2058 133.472L66.6289 142.317ZM0.368891 2.44512C17.5147 18.1752 50.9872 65.3514 64.0822 133.637L66.0464 133.26C52.8759 64.581 19.2038 17.0108 1.72095 0.971379L0.368891 2.44512Z"
                fill={theme.primaryColor}
              />
            </svg>
          </Box>
        </Box>
        <List sx={{ width: "200px", paddingTop: "40px" }}>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{ fontSize: "40px", fontWeight: "600", color: "#f1c80e" }}
            >
              260
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>Unique Vehicles</Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{ fontSize: "40px", fontWeight: "600", color: "#2aa8a8" }}
            >
              180k
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>Annual Visitor</Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{ fontSize: "40px", fontWeight: "600", color: "#c826d3" }}
            >
              190k
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>Exhibit Space</Typography>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default CustomerExperience;
