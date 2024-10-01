import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import women from "../assets/w1.jpg";
import women1 from "../assets/w2.jpg";
import women2 from "../assets/w3.jpg";
import women3 from "../assets/w4.jpg";
import men from "../assets/mens1.jpg";
import men1 from "../assets/mens2.jpg";
import men2 from "../assets/mens3.jpg";
import men3 from "../assets/mens4.jpg";

// Sample array of items
const items = [
  {
    id: 1,
    name: "White Blouse",
    price: 150,
    type: "women",
    image: women,
  },
  {
    id: 2,
    name: "Men's Shirt",
    price: 120,
    type: "men",
    image: men,
  },
  {
    id: 3,
    name: "Floral Dress",
    price: 180,
    type: "women",
    image: women1,
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: 90,
    type: "men",
    image: men1,
  },
  {
    id: 5,
    name: "Leather Jacket",
    price: 250,
    type: "women",
    image: women2,
  },
  {
    id: 6,
    name: "Polo Shirt",
    price: 75,
    type: "men",
    image: men2,
  },
  {
    id: 7,
    name: "Summer Dress",
    price: 110,
    type: "women",
    image: women3,
  },
  {
    id: 8,
    name: "Chino Pants",
    price: 85,
    type: "men",
    image: men3,
  },
  // Add more items as needed
];

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  borderRadius: "20px",
  padding: "10px 24px", // Increased padding for better touch targets
  margin: "0 10px", // Added margin to create space between buttons
  backgroundColor: "black",
  color: "white",
  "&.Mui-selected": {
    backgroundColor: "#ccc", // Color when selected
    color: "black",
  },
  "&:hover": {
    backgroundColor: "#333", // Darker shade on hover
  },
}));

const ProductCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: "auto",
  transition: "0.3s",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  "&:hover": {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
  },
}));

const ProductGallery = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  const filteredItems = items.filter(
    (item) => filter === "all" || item.type === filter
  );

  return (
    <Box sx={{ flexGrow: 1, p: 15 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={handleFilterChange}
          aria-label="category filter"
        >
          <StyledToggleButton value="all">All</StyledToggleButton>
          {/* <StyledToggleButton value="men">Unisex</StyledToggleButton> */}
          <StyledToggleButton value="men">Men</StyledToggleButton>
          <StyledToggleButton value="women">Women</StyledToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Grid container spacing={4}>
        {filteredItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard>
              <CardMedia
                component="img"
                height="350"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price.toFixed(2)}
                </Typography>
              </CardContent>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGallery;
