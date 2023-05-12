import React, { FC } from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../logo.webp";

const Footer: FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "50px",
      }}
    >
      <img style={{ width: "180px", height: "55px" }} src={logo} />
      <Box
        sx={{
          display: "flex",
          columnGap: "20px",
          marginTop: "20px",
        }}
      >
        <Link
          href={"https://www.facebook.com/evgeniy.pivovarov.9"}
          target={"_blank"}
        >
          <FacebookIcon
            sx={{
              color: "#4049c1",
              width: "30px",
              height: "30px",
              transition: "color 0.1s ease-in",
              "&:hover": {
                color: "#313896",
              },
            }}
          ></FacebookIcon>
        </Link>
        <Link href={"https://t.me/evgenyoh"} target={"_blank"}>
          <TelegramIcon
            sx={{
              color: "#4049c1",
              width: "30px",
              height: "30px",
              transition: "color 0.1s ease-in",
              "&:hover": {
                color: "#313896",
              },
            }}
          ></TelegramIcon>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/yauheni-pivavarau-b5665116a/"}
          target={"_blank"}
        >
          <LinkedInIcon
            sx={{
              color: "#4049c1",
              width: "30px",
              height: "30px",
              transition: "color 0.1s ease-in",
              "&:hover": {
                color: "#313896",
              },
            }}
          ></LinkedInIcon>
        </Link>
      </Box>
      <Typography
        sx={{
          color: "#6f7387",
          paddingTop: "30px",
          fontSize: "13px",
          fontWeight: "500",
          width: "100%",
          textAlign: "center",
        }}
      >
        &copy; 2023 Rubical. All rights reserved
      </Typography>
    </Container>
  );
};

export default Footer;
