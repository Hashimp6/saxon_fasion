import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/logo1.png"; //

const TopAppBar = () => {
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
          {/* Logo Image */}
          <Box>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "70px", width: "auto", borderRadius: "15px" }}
            />
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {["Home", "Products", "Contact Us"].map((text, index) => (
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
                {index < 2 && (
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

          {/* Search Input */}
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

          {/* User Section with Favorite and Cart Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="inherit">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <Avatar sx={{ bgcolor: "grey.500" }}>U</Avatar>
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                boxShadow: 2,
                borderRadius: "50px",
                padding: "0.5rem 1.5rem",
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

      {/* Banner Image */}
      {/* <Box
        sx={{
          width: "100%", // Adjust as per your layout preference
          height: "500px", // Adjust this value to your preferred banner height
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTop: "2vh",
          display: "flex", // Enable flexbox
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Adds space between the navbar and banner, and centers horizontally
        }}
      /> */}
    </>
  );
};

export default TopAppBar;
