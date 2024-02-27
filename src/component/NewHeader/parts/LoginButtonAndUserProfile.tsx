"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";

const LoginButtonAndUserProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [userImageUrl, setUserImageUrl] = React.useState<null | string>(null);
  const open = Boolean(anchorEl);
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  useEffect(() => {
    if (isLocalStorageAvailable) {
      setUserImageUrl(localStorage.getItem("userImageUrlNextShoppingApp"));
    }
  }, [isLocalStorageAvailable]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();

  return (
    <>
      <Box>
        <Box
          sx={{
            display: `${userImageUrl ? "none" : "block"}`,
          }}
        >
          <Link href="/login">
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                "&:hover": {
                  color: "#ffff",
                },
              }}
            >
              <AccountBoxIcon sx={{ color: "#ffff", marginRight: "2px" }} />
              Sing In
            </Button>
          </Link>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display:
              // "flex",
              `${userImageUrl ? "flex" : "none"}`,
          }}
        >
          <IconButton onClick={handleClick} sx={{ padding: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src={`${
                userImageUrl
                  ? userImageUrl
                  : "https://mui.com/static/images/avatar/2.jpg"
              }`}
            />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                router.push("/webapp/profile");
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                router.push("/webapp/account");
              }}
            >
              My account
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.removeItem("loginStatus");
                localStorage.removeItem("userIdForSappingApp");
                localStorage.removeItem("userImageUrlNextShoppingApp");
                setAnchorEl(null);
                router.push("/");
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Stack>
      </Box>
    </>
  );
};

export default LoginButtonAndUserProfile;
