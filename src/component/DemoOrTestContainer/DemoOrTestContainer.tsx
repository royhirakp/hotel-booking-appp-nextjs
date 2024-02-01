"use client";

import React from "react";

import MainContainer from "@/component/container/MainContainer";
import { Box, Paper, Typography } from "@mui/material";
const DemoOrTestContainer = ({ text }: { text: string }) => {
  return (
    <div>
      <MainContainer style={{}}>
        <Paper sx={{ height: "50%", padding: "10%", marginTop: "5%" }}>
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {text}
          </Typography>
        </Paper>
      </MainContainer>
    </div>
  );
};

export default DemoOrTestContainer;
