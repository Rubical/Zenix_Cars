import React, { FC, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { IShowcaseCar } from "../../../types/carShowcase.types";
import { useActions } from "../../../hooks/useActions";
import { showCaseCarsData } from "../../../data/showcase.data";

const Showcase: FC<IShowcaseCar> = ({
  brand,
  model,
  carColor,
  carSlogan,
  theme,
}) => {
  const [activeCarBtn, setActiveCarBtn] = useState("design");
  const { primaryColor, secondaryColor } = theme;
  const { changeShowcaseCar } = useActions();

  const switchShowcaseCar = (category: string) => {
    const selector =
      category === "design"
        ? "audi"
        : category === "comfort"
        ? "mercedes"
        : category === "safety"
        ? "volvo"
        : "volkswagen";
    const activeCar = showCaseCarsData.filter((car) => car.brand === selector);
    setActiveCarBtn(category);
    changeShowcaseCar(activeCar[0]);
  };

  return (
    <Container
      sx={{
        color: "white",
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
          {carSlogan}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            position: "relative",
            zIndex: "10",
            width: "800px",
            height: "500px",
          }}
          src={`https://cdn.imagin.studio/getImage?&make=${brand}&modelFamily=${model}&customer=img&paintDescription=${carColor}&angle=23&zoomType=fullscreen`}
          alt="car"
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
            onClick={() => switchShowcaseCar("design")}
            disableRipple={true}
            sx={{
              textTransform: "none",
              color: activeCarBtn === "design" ? primaryColor : secondaryColor,
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
            onClick={() => switchShowcaseCar("comfort")}
            disableRipple={true}
            sx={{
              textTransform: "none",
              color: activeCarBtn === "comfort" ? primaryColor : secondaryColor,
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
            onClick={() => switchShowcaseCar("safety")}
            disableRipple={true}
            sx={{
              textTransform: "none",
              color: activeCarBtn === "safety" ? primaryColor : secondaryColor,
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
            onClick={() => switchShowcaseCar("spaces")}
            disableRipple={true}
            sx={{
              textTransform: "none",
              color: activeCarBtn === "spaces" ? primaryColor : secondaryColor,
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
    </Container>
  );
};

export default Showcase;
