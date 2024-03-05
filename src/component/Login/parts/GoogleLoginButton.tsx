"use client";
import React from "react";
import { useRouter } from "next/router";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { IconButton, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

function GoogleLoginButton() {
  const router = useRouter();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse?.access_token}`,
          },
        }
      );
      console.log(res);
      // const { sub, name, email, picture } = res?.data;
      // console.log({ sub, name, email, picture });
      localStorage.setItem("userImageUrlNextShoppingApp", res?.data?.picture);
      //   router.push("/webapp/Home");
      //make a api calll for sing up or login  the user then saved the user data in the redux store
      // or coockie storage {email, name , user id, user image url}
      // request body for the user
    },
  });
  // Ensure useRouter is only used on the client side
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <Stack direction="row" spacing={1} pb={3}>
      {[
        {
          icon: <GoogleIcon sx={{ color: "#ffff" }} />,
          backgroundColor: "#a03030",
        },
      ].map((item, i) => {
        return (
          <IconButton
            color="primary"
            key={i * 0.215}
            aria-label="goolgle"
            onClick={() => login()}
            sx={{
              color: "#ffff",
              padding: "8px",
              background: item.backgroundColor,
              "&:hover": {
                background: item.backgroundColor,
              },
            }}
          >
            {item.icon}
          </IconButton>
        );
      })}
    </Stack>
  );
}

export default GoogleLoginButton;
