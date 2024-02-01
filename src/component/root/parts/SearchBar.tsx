"use client";
import React from "react";
import { Box } from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    fontSize: "18px",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      fontSize: "17px", // Change the font size for medium (md) breakpoint
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      fontSize: "18px", // Change the font size for medium (md) breakpoint
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      fontSize: "20px", // Change the font size for medium (md) breakpoint
    },
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const SearchBar = () => {
  return (
    <>
      <Box
        sx={{
          padding: "5px",
          maxWidth: "400px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Search sx={{ border: "1px solid" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{ width: "100%" }}
          />
        </Search>
      </Box>
    </>
  );
};

export default SearchBar;
