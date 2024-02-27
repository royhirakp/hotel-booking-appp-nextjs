"use client";

import {
  Box,
  Button,
  CssBaseline,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import ComponentForPageInformation from "./ComponentForPageInformation";
interface ContainerProps {
  children: ReactNode;
}

const ThemeProvidor: React.FC<ContainerProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#6c826f" : "#088d45",
        // main: "#e79e9e",
        light: !darkMode ? "#e69b9b24" : "#0a1b18f5",
        dark: "#2c365f",
        // contrastText: "#ffff", //text color
      },
      secondary: {
        main: darkMode ? "#eaf4e4" : "#13492c",
        light: darkMode ? "#676464" : "#dcd5d5",
        dark: darkMode ? "#c8e0f5" : "#f0f8ff",
        contrastText: "#ffff",
      },
      text: {
        // primary: darkMode ? "#ffff" : "#424452",
        // for check box
        secondary: !darkMode ? "#5eabb2d1" : "#FFFF",
        // disabled: "#ffff",
      },

      background: {
        default: darkMode ? "#0b293a" : "#e6f0fa",
        // #e6f0fa

        paper: darkMode ? "#2a2828" : "#d9d4d4 ",
      },
    },
    typography: {
      fontFamily: "inherit",

      h2: {
        fontSize: "30px", // Adjust the font size as needed
        "@media (min-width:600px)": {
          fontSize: "33px", // Adjust font size for screens with a minimum width of 600px (sm)
        },
        "@media (min-width:960px)": {
          fontSize: "35px", // Adjust font size for screens with a minimum width of 960px (md)
        },
        "@media (min-width:1280px)": {
          fontSize: "40px", // Adjust font size for screens with a minimum width of 1280px (lg)
        },
      },
      body2: {
        fontSize: "10px", // Adjust the font size as needed
        "@media (min-width:600px)": {
          fontSize: "9px", // Adjust font size for screens with a minimum width of 600px (sm)
        },
        "@media (min-width:960px)": {
          fontSize: "13px", // Adjust font size for screens with a minimum width of 960px (md)
        },
        "@media (min-width:1280px)": {
          fontSize: "14px", // Adjust font size for screens with a minimum width of 1280px (lg)
        },
      },
      body1: {
        fontSize: "10px", // Adjust the font size as needed
        "@media (min-width:600px)": {
          fontSize: "10px", // Adjust font size for screens with a minimum width of 600px (sm)
        },
        "@media (min-width:960px)": {
          fontSize: "11px", // Adjust font size for screens with a minimum width of 960px (md)
        },
        "@media (min-width:1280px)": {
          fontSize: "12px", // Adjust font size for screens with a minimum width of 1280px (lg)
        },
      },
    },

    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: darkMode ? "#6c826f" : "#088d45",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: "7px",
            ".MuiInputBase-root": {},
            fieldset: {
              // border: "none",
              border: "1px solid #437C17",
            },
            // ".MuiOutlinedInput-notchedOutline": {
            //   border: "1px solid ",
            // },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              // border: "11px solid",
              bagroundColor: "#2c365f",
            },
            textTransform: "none",
            fontSize: "10px",
            "@media (min-width:279px)": {
              fontSize: "10px", // Adjust font size for screens with a minimum width of 600px (sm)
            },
            "@media (min-width:600px)": {
              fontSize: "12px", // Adjust font size for screens with a minimum width of 600px (sm)
            },
            "@media (min-width:960px)": {
              fontSize: "13px", // Adjust font size for screens with a minimum width of 960px (md)
            },
            "@media (min-width:1280px)": {
              fontSize: "14px", // Adjust font size for screens with a minimum width of 1280px (lg)
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: darkMode ? "#ebecf3" : "#2a2a2b",
          },
        },
      },
    },
  });
  return (
    <Box>
      <Stack direction="row" spacing={2} ml={2} mt={1} mb={2}>
        <ComponentForPageInformation />
        <Typography sx={{ height: 40, lineHeight: 2.5 }} textAlign="center">
          Dark Mode
        </Typography>

        <Switch checked={darkMode} onChange={toggleDarkMode} color="primary" />
      </Stack>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Box>
  );
};

export default ThemeProvidor;
