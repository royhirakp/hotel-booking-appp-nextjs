"use client";
import React from "react";
import { Box, Stack, Typography, Button, Paper, Divider } from "@mui/material";
import Image from "next/image";

const ComapnyLogo = () => {
  return (
    <Box
      minWidth={50}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: {
          //   xs: "150px",
          // md: "220px",
          // xl: "240px",
        },
        height: {
          //   xs: "55px",
          // md: "220px",
          // xl: "240px",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "50px", sm: "60px", md: "70px" },
          height: { xs: "50px", sm: "60px", md: "70px" },
        }}
      >
        <Image
          src="/pngegg.png"
          alt="logo"
          style={{ width: "100%", height: "100%" }}
          width={40}
          height={40}
        />
      </Box>
      <Typography
        variant="h5"
        sx={{
          //   display: {
          //     xs: "none",
          //     md: "flex",
          //     fontWeight: 800,
          //     paddingLeft: "5%",
          //     marginLeft: "9px",
          //   },

          paddingLeft: { xs: "5px", md: "13px" },
        }}
      >
        Buff
      </Typography>
    </Box>
  );
};

export default ComapnyLogo;
