import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useActions } from "../../../../hooks/useActions";
import { useCar } from "../../../../hooks/useCar";
import Loader from "../../../loader/Loader";
import CarParametersCard from "./CarParametersCard";
import Image from "next/image";
import { filterCars } from "../../../../utils/filterCars";

const Showcase: FC = () => {
  const { car, theme, isLoading } = useCar();
  const { brand, model, color, slogan, engine, time0__100, gearbox } = car;
  const { primaryColor, secondaryColor } = theme;
  const { stopLoading, changeCar } = useActions();

  return (
    <Container
      sx={{
        color: "white",
        marginBottom: "110px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: "30px",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "800",
            fontSize: "60px",
            padding: "10px",
          }}
        >
          {brand}
        </Typography>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "800",
            fontSize: "60px",
            backgroundColor: primaryColor,
            padding: "10px 20px",
            borderRadius: "10px",
            minWidth: "110px",
            textAlign: "center",
          }}
        >
          {model}
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        <Typography
          sx={{ color: "lightgray", fontSize: "14px", width: "700px" }}
        >
          {slogan}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
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
          width={800}
          height={500}
          style={{
            visibility: isLoading ? "hidden" : "visible",
            position: isLoading ? "absolute" : "relative",
            zIndex: "10",
          }}
          src={`https://cdn.imagin.studio/getImage?&make=${brand}&modelFamily=${model}&customer=img&paintDescription=${color}&angle=28&zoomType=fullscreen`}
          alt="car"
          priority={true}
          onLoad={() => stopLoading()}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            rowGap: "20px",
            marginTop: "120px",
            backgroundColor: "rgba(0,0,0,0.29)",
            height: "max-content",
            padding: "15px 10px",
            borderRadius: "10px",
            boxShadow:
              "inset 1px 1px 4px rgba(65, 65, 65, 0.58), inset -1px -1px 4px rgba(65, 65, 65, 0.58)",
          }}
        >
          <Button
            onClick={() => changeCar(filterCars("audi"))}
            disableRipple={true}
            sx={{
              textTransform: "none",
              color: car.brand === "audi" ? primaryColor : secondaryColor,
              fontSize: "15px",
              fontWeight: "600",
              "&:hover": {
                opacity: "0.8",
                backgroundColor: "transparent",
              },
            }}
          >
            Design
          </Button>
          <Button
            onClick={() => changeCar(filterCars("mercedes"))}
            disableRipple={true}
            sx={{
              textTransform: "none",
              color: car.brand === "mercedes" ? primaryColor : secondaryColor,
              fontSize: "15px",
              fontWeight: "600",
              "&:hover": {
                opacity: "0.8",
                backgroundColor: "transparent",
              },
            }}
          >
            Comfort
          </Button>
          <Button
            onClick={() => changeCar(filterCars("volvo"))}
            disableRipple={true}
            sx={{
              textTransform: "none",
              color: car.brand === "volvo" ? primaryColor : secondaryColor,
              fontSize: "15px",
              fontWeight: "600",
              "&:hover": {
                opacity: "0.8",
                backgroundColor: "transparent",
              },
            }}
          >
            Safety
          </Button>
          <Button
            onClick={() => changeCar(filterCars("volkswagen"))}
            disableRipple={true}
            sx={{
              textTransform: "none",
              color: car.brand === "volkswagen" ? primaryColor : secondaryColor,
              fontSize: "15px",
              fontWeight: "600",
              "&:hover": {
                opacity: "0.8",
                backgroundColor: "transparent",
              },
            }}
          >
            Spaces
          </Button>
        </Box>
      </Box>
      <CarParametersCard
        time0__100={time0__100}
        engine={engine}
        gearbox={gearbox}
      />
    </Container>
  );
};

export default Showcase;
