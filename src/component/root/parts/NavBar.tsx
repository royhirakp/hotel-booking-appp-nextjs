"use client";
import React from "react";
import MainContainer from "@/component/container/MainContainer";
import { Button, CssBaseline, Stack, Box } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
const NavBar = () => {
  return (
    <div>
      <MainContainer style={{}}>
        {/* <CssBaseline /> */}

        <Box
          sx={{
            display: "flex",

            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "2px",
            padding: "1%",
          }}
        >
          <Box flex={5}>
            <Stack direction="row" spacing={0}>
              <Button color="primary">Home</Button>
              <Button color="primary">RoomDetails</Button>{" "}
              <Stack
                direction="row"
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                }}
              >
                <Button color="primary">Blog</Button>
                <Button color="primary">Contact us</Button>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack flex={1} direction="row" alignItems="center" spacing={1}>
              <Button variant="outlined">
                <>Get app</>
                <GetAppIcon
                  sx={{
                    fontSize: {
                      xs: "small",
                      sm: "large",
                    },
                    marginLeft: "3px",
                  }}
                />
              </Button>
            </Stack>
          </Box>
        </Box>
      </MainContainer>
    </div>
  );
};

export default NavBar;
