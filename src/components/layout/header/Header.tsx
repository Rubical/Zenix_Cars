import * as React from "react";
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
import logo from "../logo.webp";

function Header() {
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
            <img
              src={logo}
              style={{ width: "180px", height: "55px" }}
              alt="logo"
            />
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
            <img
              src={logo}
              style={{ width: "180px", height: "55px" }}
              alt="logo"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              columnGap: "40px",
            }}
          >
            <Button
              sx={{
                color: "#6f7387",
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              Home
            </Button>
            <Button
              sx={{
                color: "#6f7387",
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              Configurator
            </Button>
            <Button
              sx={{
                color: "#6f7387",
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              History
            </Button>
          </Box>
          <Box>
            <Button sx={{ color: "#6f7387" }}>
              <SearchIcon sx={{ width: "30px", height: "30px" }} />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
