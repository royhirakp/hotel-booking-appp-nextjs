import React from "react";

import { Box, Typography, Stack, Paper, IconButton } from "@mui/material";

import LocalBarIcon from "@mui/icons-material/LocalBar";
import HeatPumpIcon from "@mui/icons-material/HeatPump";
import TvIcon from "@mui/icons-material/Tv";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import BrushIcon from "@mui/icons-material/Brush";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import ShowerIcon from "@mui/icons-material/Shower";
import BalconyIcon from "@mui/icons-material/Balcony";
import WifiIcon from "@mui/icons-material/Wifi";
const RoomService = () => {
  return (
    <Box>
      <Typography variant="subtitle1">Room Service</Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        gap={2}
        m={1}
        justifyContent="space-around"
        maxWidth="600px"
        sx={{ margin: "auto" }}
      >
        {[
          { icon: <WifiIcon />, titel: "Wi-Fi" },
          { icon: <BalconyIcon />, titel: "Balcony" },
          { icon: <ShowerIcon />, titel: "Sauna" },
          { icon: <FreeBreakfastIcon />, titel: "Breakfast" },
          { icon: <BrushIcon />, titel: "Dryer" },
          { icon: <CoffeeMakerIcon />, titel: "Coffee Maker" },

          { icon: <TvIcon />, titel: "TV" },
          { icon: <HeatPumpIcon />, titel: "AC" },

          { icon: <LocalBarIcon />, titel: "Mini Bar" },
        ].map((item, i) => {
          return (
            <Stack
              key={i}
              direction="row"
              justifyContent="center"
              gap={1}
              p={0.5}
              sx={{
                boxSizing: "border-box",
                border: "1px solid #808080",
                borderRadius: "3px",
                // maxWidth: "250px",
                width: {
                  xs: "40%",
                  sm: "30%",
                },
              }}
            >
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                {item.icon}
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center" }}>
                {item.titel}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default RoomService;
