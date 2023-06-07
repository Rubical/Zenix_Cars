import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TypeCar } from "../../../../types/car.types";

type TypeCarParameters = Pick<TypeCar, "time0__100" | "engine" | "gearbox">;

const CarParametersCard: FC<TypeCarParameters> = ({
  time0__100,
  engine,
  gearbox,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        columnGap: "40px",
        padding: "35px 85px",
        marginTop: "-50px",
        marginLeft: "200px",
        width: "650px",
        borderRadius: "10px",
        backgroundColor: "rgba(0,0,0,0.29)",
        boxShadow:
          "inset 1px 1px 4px rgba(65, 65, 65, 0.58), inset -1px -1px 4px rgba(65, 65, 65, 0.58)",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
          {time0__100}s
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
          From 0-60 mph
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
          {engine}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
          Engine
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
          {gearbox}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "lightgray" }}>
          Gearbox
        </Typography>
      </Box>
    </Box>
  );
};

export default CarParametersCard;
