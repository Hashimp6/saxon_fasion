import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import men from "../assets/men.jpg"; // Replace with actual image path
import women from "../assets/women.jpg"; // Replace with actual image path

const AnimatedCollectionBanner = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 4,
          p: 10,
        }}
      >
        <Box sx={{ width: "80%", height: 2, mb: 2 }} />
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "black",
            p: 2,
          }}
        >
          Latest Collections
        </Typography>
        <Box sx={{ width: "70%", bgcolor: "black", mt: 2 }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          height: "500px",
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          sx={{
            width: "25%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Men
          </Typography>
          <Box
            component="img"
            src={men}
            alt="Men's Collection"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          sx={{
            width: "40%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, p: 2 }}>
            Women
          </Typography>
          <Box
            component="img"
            src={women}
            alt="Women's Collection"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AnimatedCollectionBanner;
