import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Banner from "../assets/images/banner.png";
import "./HeroBanner.css";
const HeroBanner = () => {
  return (
    <div>
      <Box
        sx={{
          mt: { lg: "212px", xs: "70px" },
          ml: { sm: "50px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography fontWeight="600" fontSize="26px" color="#d97706">
          Fitness Club
        </Typography>
        <Typography
          fontWeight="700"
          sx={{ fontSize: { lg: "44px", xs: "38px" } }}
          mb="20px"
          mt="30px"
        >
          Sore today <br />
          Strong tomorrow
        </Typography>
        <Typography
          fontSize="22px"
          lineHeight="35px"
          mb={4}
          sx={{ fontSize: { lg: "22px", xs: "18px" } }}
        >
          Check out the most effective Exercises
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{ backgroundColor: "#ff2625", padding: "10px" }}
        >
          Explore Exercises
        </Button>

        <img src={Banner} alt="Banner" className="hero-img" />
      </Box>
    </div>
  );
};

export default HeroBanner;
