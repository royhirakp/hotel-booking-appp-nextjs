import React from "react";

import {
  Box,
  Typography,
  Stack,
  Paper,
  IconButton,
  Grid,
  Button,
} from "@mui/material";
import Image from "next/image";

const SimelarRoomsList = () => {
  return (
    <Box sx={{ height: "100%" }} m={2}>
      <Typography variant="subtitle1" fontWeight={700} mb={1}>
        Simelar Rooms
      </Typography>

      <Stack
        direction="row"
        sx={{ height: { xs: "70%", sm: "90%" } }}
        gap={2}
        justifyContent="space-evenly"
      >
        {[
          {
            name: "Single Room",
            price: "450",
            img: "/RoomSuggstion/ROOMl3.jpg",
          },

          {
            name: "Single Room",
            price: "550",
            img: "/RoomSuggstion/ROOMl2.jpg",
          },
          {
            name: "Single Room",
            price: "450",
            img: "/RoomSuggstion/ROOMl3.jpg",
          },
          {
            name: "Single Room + 2",
            price: "350",
            img: "/RoomSuggstion/ROOMl1.jpg",
          },
        ].map((item, i) => {
          return (
            <Box
              key={i}
              sx={{
                position: "relative",
                cursor: "pointer",
                width: {
                  xs: "30%",
                  // xl: "190px",
                },
                height: {
                  xs: "85%",
                },
              }}
            >
              <Image
                src={item.img}
                alt="gat"
                width={100}
                height={100}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "15px",
                  left: "4px",
                  color: "#e6f0fa",
                }}
              >
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="body1">${item.price} per Night</Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default SimelarRoomsList;
