"use client";

import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TypeCar } from "../../../types/carShowcase.types";
import { useCarShowcase } from "../../../hooks/useCarShowcase";
import Image from "next/image";

const PartnersCard: FC<Pick<TypeCar, "brand" | "carSlogan">> = ({
  brand,
  carSlogan,
}) => {
  const { theme } = useCarShowcase();

  return (
    <Box
      sx={{
        width: "280px",
        height: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 23px",
        backgroundColor: "rgba(87,87,87,0.2)",
        boxShadow:
          "inset 1px 1px 4px rgba(65, 65, 65, 0.58), inset -1px -1px 4px rgba(65, 65, 65, 0.58)",
        cursor: "pointer",
        transition: "all 0.2s ease-in",
        "&:hover": {
          backgroundColor: theme.secondaryColor,
          transform: "translateY(-20px)",
        },
      }}
    >
      <Image src={brand} alt="brand" />
      <Typography
        sx={{
          marginTop: "30px",
          fontSize: "13px",
          color: "white",
          textAlign: "center",
        }}
      >
        {carSlogan}
      </Typography>
    </Box>
  );
};

export default PartnersCard;
