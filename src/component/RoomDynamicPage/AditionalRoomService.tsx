import React from "react";
import { Box, Typography, Stack, Paper, IconButton } from "@mui/material";
import TourIcon from "@mui/icons-material/Tour";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import SpaIcon from "@mui/icons-material/Spa";
const AditionalRoomService = () => {
  return (
    <Box>
      <Typography variant="subtitle1">Additional Servics</Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        gap={2}
        m={1}
        justifyContent="space-around"
      >
        {[
          {
            icon: (
              <SpaIcon
                sx={{
                  color: "primary.main",
                }}
              />
            ),
            titel: "Massege $ Spa",
          },
          { icon: <LocalTaxiIcon />, titel: "Airport Pickup" },
          { icon: <TourIcon />, titel: "Sightseening Tour" },
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
                border: "1px solid #b8b4b4",
                borderRadius: "3px",
                minWidth: "110px",
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

export default AditionalRoomService;
