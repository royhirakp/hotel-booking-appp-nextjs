import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import SingleBedIcon from "@mui/icons-material/SingleBed";

const RoomInfoB = () => {
  return (
    <div>
      <Stack
        direction="row"
        flexWrap="wrap"
        gap={1}
        justifyContent="space-around"
      >
        {[
          {
            icon: <PeopleOutlineIcon sx={{ color: "#ffff" }} />,
            head: "Max. Guest",
            info: "3 Adults / 1 Children",
          },
          {
            icon: <NightShelterIcon sx={{ color: "#ffff" }} />,
            head: "Booking Night",
            info: "1 min",
          },
          {
            icon: <SingleBedIcon sx={{ color: "#ffff" }} />,
            head: "Bed Type",
            info: "Single Bed",
          },
          {
            icon: <CropLandscapeIcon sx={{ color: "#ffff" }} />,
            head: "Area",
            info: "45 m2",
          },
        ].map((item, i) => {
          return (
            <Box key={i} sx={{ width: "120px" }}>
              <Stack direction="row">
                <Box sx={{ bgcolor: "primary.main", marginRight: "1%" }}>
                  <IconButton>{item.icon}</IconButton>
                </Box>
                <Stack direction="column">
                  <Typography>{item.head}</Typography>
                  <Typography fontWeight={800}>{item.info}</Typography>
                </Stack>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </div>
  );
};

export default RoomInfoB;
