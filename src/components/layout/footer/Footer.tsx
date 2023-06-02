"use client";

import React, { FC } from "react";
import Logo from "../Logo";
import { IShowcaseCar } from "../../../types/carShowcase.types";
import { Box, Container, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface IFooter extends Pick<IShowcaseCar, "theme"> {}

const Footer: FC<IFooter> = ({ theme }) => {
  const { primaryColor, secondaryColor } = theme;
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "50px",
      }}
    >
      <Logo carColor={primaryColor} textColor={secondaryColor} />
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
              color: secondaryColor,
              width: "30px",
              height: "30px",
              transition: "opacity 0.1s ease-in",
              "&:hover": {
                opacity: "0.8",
              },
            }}
          ></FacebookIcon>
        </Link>
        <Link href={"https://t.me/evgenyoh"} target={"_blank"}>
          <TelegramIcon
            sx={{
              color: secondaryColor,
              width: "30px",
              height: "30px",
              transition: "opacity 0.1s ease-in",
              "&:hover": {
                opacity: "0.8",
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
              color: secondaryColor,
              width: "30px",
              height: "30px",
              transition: "opacity 0.1s ease-in",
              "&:hover": {
                opacity: "0.8",
              },
            }}
          ></LinkedInIcon>
        </Link>
      </Box>
      <Typography
        sx={{
          color: secondaryColor,
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
