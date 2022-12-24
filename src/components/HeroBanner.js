import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Banner from "../assets/images/banner.png";
import "./HeroBanner.css";
const HeroBanner = () => {
  return (
    <div>
      <Box
        position="relative"
        p="20px"
        sx={{
          mt: { lg: "212px", xs: "70px" },
          ml: { sm: "5px" },
        }}
      >
        <Typography fontWeight="600" fontSize="26px" color="#d97706">
          Fitness Club
        </Typography>
        <Typography
          fontWeight="700"
          mb="20px"
          mt="30px"
          sx={{
            fontSize: { lg: "44px", xs: "38px" },
            mb: { lg: "20px", xs: "10px" },
            mt: { lg: "30px", xs: "10px" },
          }}
        >
          Sore today <br />
          Strong tomorrow
        </Typography>
        <Typography
          fontSize="22px"
          lineHeight="35px"
          mb={4}
          sx={{
            fontSize: { lg: "22px", xs: "18px" },
            lineHeight: { lg: "35px", xs: "20px" },
          }}
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
