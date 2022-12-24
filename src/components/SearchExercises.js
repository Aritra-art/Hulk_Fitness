import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";

const SearchExercises = () => {
  return (
    <div>
      <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
        <Typography
          textAlign="center"
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="50px"
        >
          Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: {
                fontWeight: "700",
                border: "none",
                outline: "none",
                borderRadius: "4px",
              },
              width: { lg: "800px", sm: "300px", xs: "250px" },
              borderRadius: "40px",
            }}
            height="76px"
            // value=""
            onChange={(e) => {
              console.log(e.target.value);
            }}
            label="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "#d97706",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: "0",
            }}
          >
            Search
          </Button>
        </Box>
      </Stack>
    </div>
  );
};

export default SearchExercises;
