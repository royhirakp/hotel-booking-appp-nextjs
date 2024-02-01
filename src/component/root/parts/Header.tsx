"use client";
import React, { useState } from "react";
import MainContainer from "@/component/container/MainContainer";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuDrawer from "./MenuDrawer";
import LoginIcon from "@mui/icons-material/Login";
const LogoAndMenu = () => {
  const [MobileMenuDrwer, setMobileMenuDrwer] = React.useState({
    left: false,
  });

  return (
    <>
      <Stack sx={{ display: { xs: "flex", md: "none", alignItems: "center" } }}>
        <IconButton onClick={() => setMobileMenuDrwer({ left: true })}>
          <MenuIcon />
        </IconButton>
      </Stack>
      <Box
        minWidth={50}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <Image src="/pngegg.png" alt="logo" width={40} height={40} />
        </Box>
        <Typography
          variant="h5"
          sx={{
            display: {
              xs: "none",
              md: "flex",
              fontWeight: 800,
              paddingLeft: "5%",
              marginLeft: "9px",
            },
          }}
        >
          Buff
        </Typography>
        <MenuDrawer state={MobileMenuDrwer} setState={setMobileMenuDrwer} />
      </Box>
    </>
  );
};

const ProfileAndLogout = () => {
  let [loginState, setLoginstate] = useState(false);
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="/jd-chow-gutlccGLXKI-unsplash.jpg" />
      </Stack>
      <Stack>
        <IconButton>
          <LoginIcon />
        </IconButton>
      </Stack>
    </>
  );
};
//header parts annd components are in the array
const headerArrr = [
  {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    flexGrow: 1,
    component: <LogoAndMenu />,
  },

  {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    flexGrow: 2,
    component: <ProfileAndLogout />,
  },
];
const Header = () => {
  return (
    <MainContainer style={{}}>
      <Stack direction="row" spacing={0.1}>
        {headerArrr.map((item: any, i) => {
          return (
            <Box flexGrow={item.flexGrow} sx={{ ...item.style }} key={i}>
              {item.component}
            </Box>
          );
        })}
      </Stack>
    </MainContainer>
  );
};

export default Header;
