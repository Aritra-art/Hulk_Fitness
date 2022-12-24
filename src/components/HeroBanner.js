import React from "react";
import { Box, Stack, Typography } from "@mui/material";

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
      </Box>
    </div>
  );
};

export default HeroBanner;
