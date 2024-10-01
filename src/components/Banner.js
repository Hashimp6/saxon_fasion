import React from "react";
import { Box, Typography, Button } from "@mui/material";
import slide1 from "../assets/slide1.jpg"; // Ensure your image paths are correct
import slide2 from "../assets/slide6.jpg"; // Ensure your image paths are correct

const WinterSaleBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "570px",
        backgroundColor: "gray.50",
        overflow: "hidden",
      }}
    >
      {/* Left image */}
      <Box
        component="img"
        src={slide2}
        alt="Model with red hair"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "75%", // Covers 75% width
          height: "100%", // Full height
          objectFit: "cover",
          objectPosition: "top", // Align the image to the top
        }}
      />

      {/* Right image */}
      <Box
        component="img"
        src={slide1}
        alt="Close-up of model"
        sx={{
          position: "absolute",
          right: 0,
          top: "25%", // Align image from top by 25%
          width: "33%", // Covers 33% width
          height: "66%", // 66% height to match design
          zIndex: 10, // Ensure it appears above the left image
          objectFit: "cover",
          objectPosition: "top",
        }}
      />

      {/* Text overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0, // Fills the entire container
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          zIndex: 20, // Ensures the text is above the images
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Slight dark overlay for better contrast
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#ffffff", // White color for clear visibility
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)", // Shadow to improve legibility
            marginBottom: "1rem",
          }}
        >
          WINTER COLLECTION
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.25rem",
            color: "#f0f0f0", // Off-white for clear visibility
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)", // Lighter shadow for subtler effect
            marginBottom: "1.5rem",
          }}
        >
          The Winter Sale is on the way!
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{
            fontWeight: "bold",
            padding: "0.75rem 1.5rem",
          }}
        >
          SHOP NOW
        </Button>
      </Box>
    </Box>
  );
};

export default WinterSaleBanner;
