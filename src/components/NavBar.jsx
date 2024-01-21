import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { LinkButton } from "./buttons/LinkButton";
import { useState } from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "Catalog", "Favorites"];

export const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#3470FF", height: "100%" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        CurrentCarRent
      </Typography>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {navItems.map((item) => {
          const link = item === "Home" ? "/" : item;
          return (
            <LinkButton sx={{ color: "white" }} key={item} to={link}>
              {item}
            </LinkButton>
          );
        })}
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="header" sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#3470FF" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { tablet: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: "block" }}>
            <Typography
              variant="h6"
              component={Link}
              to={"/"}
              sx={{ textDecoration: "none", color: "white" }}
            >
              CurrentCarRent
            </Typography>
          </Box>
          <Box sx={{ display: { mobile: "none", tablet: "block" } }}>
            {navItems.map((item) => {
              const link = item === "Home" ? "/" : item;
              return (
                <LinkButton key={item} to={link}>
                  {item}
                </LinkButton>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { mobile: "block", tablet: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
