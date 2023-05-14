import * as React from "react";
import Logo from "../Logo";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { IShowcaseCar } from "../../../types/carShowcase.types";
import { FC } from "react";

interface IHeader extends Pick<IShowcaseCar, "theme"> {}

const Header: FC<IHeader> = ({ theme }) => {
  const { primaryColor, secondaryColor } = theme;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        background: "transparent",
        padding: "15px 50px",
        marginBottom: "60px",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, marginRight: "250px" }}
          >
            <Logo carColor={primaryColor} textColor={secondaryColor} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Logo carColor={primaryColor} textColor={secondaryColor} />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              columnGap: "40px",
            }}
          >
            <Button
              disableRipple={true}
              sx={{
                color: secondaryColor,
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": {
                  opacity: "0.8",
                  backgroundColor: "transparent",
                },
              }}
            >
              Home
            </Button>
            <Button
              disableRipple={true}
              sx={{
                color: secondaryColor,
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": {
                  opacity: "0.8",
                  backgroundColor: "transparent",
                },
              }}
            >
              Configurator
            </Button>
            <Button
              disableRipple={true}
              sx={{
                color: secondaryColor,
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": {
                  opacity: "0.8",
                  backgroundColor: "transparent",
                },
              }}
            >
              History
            </Button>
          </Box>
          <Box>
            <Button
              disableRipple={true}
              sx={{
                color: secondaryColor,
                "&:hover": {
                  opacity: "0.8",
                  backgroundColor: "transparent",
                },
              }}
            >
              <SearchIcon sx={{ width: "30px", height: "30px" }} />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
