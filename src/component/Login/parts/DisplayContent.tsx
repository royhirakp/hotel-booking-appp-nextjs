"use client";
import React from "react";
import { Box, Stack, Typography, Button, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DisplayComponent = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "150px",
          md: "400px",
          xl: "420px",
        },
        height: {
          xs: "160px",
          md: "350px",
          xl: "450px",
        },
        margin: "5px",
      }}
    >
      <Stack
        justifyContent="space-around"
        alignItems="center"
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100px",
              sm: "220px",
              md: "220px",
              xl: "240px",
            },
            height: {
              xs: "100px",
              sm: "220px",
              md: "220px",
              xl: "240px",
            },
          }}
        >
          <Image
            src="/loginSingup/11526440.png"
            alt="logo"
            width={4000}
            height={4000}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box>
          <Box sx={{ paddingTop: { xs: "10px" } }}>
            {/* <a href="####"> SING UOOO</a> */}
            <Typography
              variant="h6"
              sx={{
                display: "inline-block",
                paddingRight: "10px",
                minWidth: "240px",
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.25rem",
                },
              }}
            >
              Sing up?
              <Link style={{ paddingLeft: "5px" }} href="/singup">
                create a account
              </Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
    // </Paper>
  );
};

export default DisplayComponent;
