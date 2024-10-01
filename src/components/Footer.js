import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Checkbox,
  Button,
  Grid,
  Link,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Import a special font (you'll need to add this to your project)
import "@fontsource/playfair-display";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
  marginTop: "auto",
  fontFamily: "'Playfair Display', serif",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: theme.palette.grey[900],
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.grey[900],
    textDecoration: "none",
  },
}));

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    console.log("Subscribed with email:", email, "Newsletter:", isSubscribed);
  };

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontFamily: "inherit" }}
          >
            Never miss our updates about new arrivals and special offers
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubscribe}
            noValidate
            sx={{ mt: 3 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StyledTextField
                id="email"
                placeholder="Enter your email here *"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mr: 2, flexGrow: 1, maxWidth: "400px" }}
              />
              <StyledButton type="submit" variant="contained">
                Subscribe Now
              </StyledButton>
            </Box>
            <FormControlLabel
              control={<Checkbox value="allowNewsletter" color="primary" />}
              label="Yes, subscribe me to your newsletter."
              onChange={(e) => setIsSubscribed(e.target.checked)}
              sx={{ mt: 2 }}
            />
          </Box>
        </Box>
        <Box sx={{ backgroundColor: "black", width: "100%", py: 2, borderRadius: theme => theme.shape.borderRadius }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {[
              "SHOP",
              "ABOUT",
              "CONTACT",
              "FAQ",
              "SHIPPING & RETURN",
              "STORE POLICY",
            ].map((item) => (
              <Grid item key={item}>
                <StyledLink href="#" color="inherit">
                  {item}
                </StyledLink>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4, fontFamily: "inherit" }}
        >
          © 2024 by p6. Powered and secured by Saxon
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer;