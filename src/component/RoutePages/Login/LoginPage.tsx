"use client";
import React from "react";
import { Box, Stack, Typography, Button, Paper, Divider } from "@mui/material";
import MainContainer from "@/component/container/MainContainer";
import Image from "next/image";
import LoginForm from "../../Login/parts/LoginForm";
import DisplayComponent from "../../Login/parts/DisplayContent";
import ComapnyLogo from "@/component/Login/parts/ComapnyLogo";

const LoginPage = () => {
  return (
    <MainContainer style={{}}>
      <Box sx={{ maxWidth: "1500px", margin: "auto" }}>
        <Box pb={1}>
          <ComapnyLogo />
        </Box>

        <Paper>
          <Stack
            sx={{
              flexDirection: { xs: "column-reverse", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              flex={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginRight: { xs: "0", sm: "10px" },
                width: {
                  xs: "100%",
                },
              }}
            >
              <DisplayComponent />
            </Box>
            <Divider
              orientation="vertical"
              sx={{
                height: "500px",
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            />
            <Divider
              orientation="horizontal"
              sx={{
                width: "100%",
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            />

            <Box
              flex={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginLeft: { xs: "0", sm: "10px" },
                marginTop: { xs: "5px", sm: 0 },
                width: {
                  xs: "100%",
                },
                padding: { xs: 0, sm: "20px" },
              }}
            >
              <LoginForm />
            </Box>
          </Stack>
        </Paper>
      </Box>
    </MainContainer>
  );
};

export default LoginPage;
