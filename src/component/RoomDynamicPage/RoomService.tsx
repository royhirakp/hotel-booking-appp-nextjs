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
const RoomService = ({ service }: { service: any }) => {
  // console.log("serviceeee====", service);
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
          { icon: <WifiIcon />, titel: "Wi-Fi", status: service?.smartPhone },
          { icon: <BalconyIcon />, titel: "Balcony", status: service?.Sauna },
          { icon: <ShowerIcon />, titel: "Sauna", status: service?.Sauna },
          {
            icon: <FreeBreakfastIcon />,
            titel: "Breakfast",
            status: service?.Breakfast,
          },
          { icon: <BrushIcon />, titel: "Dryer", status: service?.Hairdryer },
          {
            icon: <CoffeeMakerIcon />,
            titel: "Coffee Maker",
            status: service?.Coffeemaker,
          },
          { icon: <TvIcon />, titel: "TV", status: service?.WidesreenTv },
          { icon: <HeatPumpIcon />, titel: "AC", status: service?.WidesreenTv },
          {
            icon: <LocalBarIcon />,
            titel: "Mini Bar",
            status: service?.miniBar,
          },
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
                display: `${item.status ? "flex" : "none"}`,
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
