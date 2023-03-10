import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import MiniLogo from "../assets/images/miniLogo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
        px: "20px",
      }}
    >
      <Link to="/">
        <img
          src={MiniLogo}
          alt="Logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0px 20px",
          }}
        />
      </Link>

      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        sx={{
          gap: { lg: "40px", sm: "30px", xs: "20px" },
          fontSize: { lg: "24px", sm: "22px", xs: "20px" },
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #A17A37",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
