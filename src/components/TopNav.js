import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/logo1.png";

const TopAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navigationItems = ["Home", "Products", "Contact Us"];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navigationItems.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo Image */}
          <Box>
            <img
              src={logo}
              alt="Logo"
              style={{ 
                height: isMobile ? "50px" : "70px", 
                width: "auto", 
                borderRadius: "15px" 
              }}
            />
          </Box>

          {/* Navigation Buttons - Only show on desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navigationItems.map((text, index) => (
                <React.Fragment key={text}>
                  <Button
                    sx={{
                      color: "black",
                      backgroundColor: "transparent",
                      padding: "0.5rem 1rem",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "grey.100",
                      },
                    }}
                  >
                    {text}
                  </Button>
                  {index < navigationItems.length - 1 && (
                    <span
                      style={{
                        margin: "0 8px",
                        height: "24px",
                        borderLeft: "1px solid black",
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>
          )}

          {/* Search Input - Only show on desktop */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "grey.100",
                borderRadius: "20px",
                padding: "4px 8px",
              }}
            >
              <InputBase placeholder="Search..." sx={{ ml: 1, flex: 1 }} />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
          )}

          {/* User Section with Favorite and Cart Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: isMobile ? 1 : 2 }}>
            <IconButton color="inherit">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            {!isMobile && <Avatar sx={{ bgcolor: "grey.500" }}>U</Avatar>}
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                boxShadow: 2,
                borderRadius: "50px",
                padding: isMobile ? "0.3rem 1rem" : "0.5rem 1.5rem",
                fontSize: isMobile ? "0.8rem" : "1rem",
                "&:hover": {
                  bgcolor: "grey.900",
                  boxShadow: 3,
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default TopAppBar;