"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const LoginButtonAndUserProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
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
            display: "block",
            // localStorage.getItem("loginStatus") ? "none" : "block",
          }}
        >
          <Link href="/login">
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                "&:hover": {
                  // background: "#0d6efd",
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
            display: "flex",
            // localStorage.getItem("loginStatus") ? "flex" : "none",
          }}
        >
          <IconButton onClick={handleClick} sx={{ padding: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/2.jpg"
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
                setAnchorEl(null);
                router.push("/login");
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
