"use client";
import MainContainer from "@/component/container/MainContainer";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const StartyourJourneycomponent = () => {
  return (
    <div>
      <MainContainer style={{ marginTop: "30px" }}>
        <Stack
          mt={5}
          sx={{
            backgroundColor: "#999696",
            borderRadius: "7px",

            padding: "20px 20px 10px 20px",
            maxWidth: "1500px",
            margin: "auto",
          }}
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Box maxWidth={400}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Get start with COMPANY
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae
              ex excepturi quaerat, natus ducimus animi doloremque magnam quis
              optio
            </Typography>
          </Box>
          <Box sx={{ width: "150px", textAlign: "center", marginTop: "15px" }}>
            <Button variant="contained" color="success">
              Get Started
            </Button>
          </Box>
        </Stack>
      </MainContainer>
    </div>
  );
};

export default StartyourJourneycomponent;
