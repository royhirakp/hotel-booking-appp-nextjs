"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import MainContainer from "../container/MainContainer";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import Link from "next/link";
type Anchor = "top" | "left" | "bottom" | "right";

import Draweerr from "./parts/Draweerr";
import LoginButtonAndUserProfile from "./parts/LoginButtonAndUserProfile";
import { useSignUpMutation } from "@/redux/apiRequest/LoginRegister";

const inActiveStyle = {
  transition: "0.3s",
  "&:hover": {
    color: "#ff8f9c",
    backgroundColor: "transparent",
  },
};
const activeStyle = {
  disableRipple: "true",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&::after": {
    position: "absolute",
    content: '""',
    backgroundColor: "#ff8f9c",
    height: "3px",
    width: "100%",
    bottom: "-3px",
    left: 0,
    transition: "0.3s",
  },
};
const NewHeader = () => {
  const [scroolState, setScroolSet] = useState(true);
  const [activeButton, setSActiveButton] = useState<null | number>(0);
  const router = useRouter();
  const [Singup, { isLoading }] = useSignUpMutation();

  // const search = searchParams.get('search')
  // This will not be logged on the server when using static rendering
  // state and function for mobile drawer
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 3) {
        setScroolSet(true);
      } else {
        setScroolSet(false);
      }
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    });
  }, []);

  return (
    <MainContainer style={{ background: scroolState ? "none" : "#ffff" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          padding: {
            xs: "12px 10%",
            sm: "12px 50px",
            md: "12px 20px",
          },
          maxWidth: "1500px",
          margin: "auto",
        }}
      >
        <div
          onClick={() => {
            router.push("/webapp/Home");
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image src="/pngegg.png" alt="logo" width={40} height={40} />
            <Typography
              variant="h5"
              pl={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Buff
            </Typography>
          </Box>
        </div>

        {/* </Link> */}

        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          {["Home", "About", "Properties", "Cabs", "Holidays", "Blog"].map(
            (item, i) => {
              // console.log(item, routepath, i);
              return (
                <Link
                  href={`/webapp/${item}`}
                  key={i * 0.252}
                  // style={i == activeButton ? activeStyle : inActiveStyle}
                  onClick={() => {
                    setSActiveButton(i);
                  }}
                >
                  <Button
                    key={i}
                    sx={i == activeButton ? activeStyle : inActiveStyle}
                    // onClick={() => {
                    //   setSActiveButton(i);
                    //   // router.push(`/webapp/${item}`);
                    // }}
                  >
                    {item}
                  </Button>
                </Link>
              );
            }
          )}
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Box>
            <Link
              href="/webapp/bookingPage"
              onClick={() => {
                setSActiveButton(7);
              }}
            >
              <Button
                variant="outlined"
                // onClick={() => {
                //   router.push("/bookingPage");
                // }}
                sx={{
                  fontSize: {
                    xs: "13px",
                  },
                  "&:hover": {
                    background: "#0d6efd",
                    color: "#ffff",
                  },
                }}
              >
                BOOK
              </Button>
            </Link>
          </Box>
          <LoginButtonAndUserProfile />
        </Stack>
        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <IconButton onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </IconButton>
          <Draweerr toggleDrawer={toggleDrawer} state={state} />
        </Box>
      </Stack>
    </MainContainer>
  );
};

export default NewHeader;

// import Link from "next/link";
// import  from '@mui/icons-material/AccountBox';
