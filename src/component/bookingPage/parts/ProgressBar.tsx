"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import MuiLinearProgreson from "@/component/muiCoustomComponent/MuiLinearProgreson";
import { useAppSelector } from "@/redux/hooks";
const ProgressBar = ({ state }: { state: number }) => {
  const formStage = useAppSelector((s) => s.Booking.bookingStage);
  return (
    <div>
      <Box>
        <Stack
          // justifyContent="space-between  "
          direction="row"
          textAlign="center"
        >
          {[
            // { item: "" },
            { item: "Search" },
            { item: "Booking" },
            { item: "Checkout" },
            // { item: "" },
          ].map((item, i) => {
            return (
              <Box key={i} flex={1}>
                <Typography variant="body1">{item.item}</Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
      <Box sx={{ width: "100%" }}>
        <MuiLinearProgreson value={33.33 * formStage} />
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Stack
          justifyContent="space-between"
          direction="row"
          textAlign="center"
        >
          {[
            // { item: "" },
            { item: "Chouse your fabaret room" },
            { item: "Enter Your booking details" },
            { item: "Chouse your fabaret room" },
            // { item: "" },
          ].map((item, i) => {
            return (
              <Box flex={1} key={i}>
                <Typography variant="body2">{item.item}</Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
};

export default ProgressBar;
