"use client";
import React from "react";
import { Box, Stack, Typography, Button, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, InputLabel, FormHelperText, Input } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useGetRoomsForHomeQuery } from "@/redux/apiRequest/LoginRegister";

type Inputs = {
  email: string;
  password: string;
};

import { styled } from "@mui/material/styles";
const LoginButton = styled(Button)(({ theme }) => ({
  // Custom CSS
  [theme.breakpoints.up("xs")]: {
    fontSize: "17px", // Change font size for screens equal to or larger than 'sm' breakpoint
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "19px", // Change font size for screens equal to or larger than 'sm' breakpoint
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "19px", // Change font size for screens equal to or larger than 'md' breakpoint
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px", // Change font size for screens equal to or larger than 'lg' breakpoint
  },
}));
// Define custom styles for the button

const LoginForm = () => {
  const router = useRouter();

  const formSubmit = (event: any) => {
    router.push("/webapp");
    event.preventDefault();
    console.log("formData", event); // Replace this with your actual form submission logic
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push("/webapp/Home");
    localStorage.setItem("loginStatus", "nsnssnsns");
  };
  // const { data } = useGetRoomsForHomeQuery({});

  // console.log(data?.roomsData, "===== home oahe 17.35");

  return (
    <>
      <Box
        sx={{
          minWidth: "248px",
          width: {
            xs: "94%",
            sm: "94%",
            md: "98%",
            xl: "520px",
          },
          height: {
            xs: "450px",
            md: "450px",
            xl: "550px",
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
          <Stack
            sx={{
              width: "100%",
              height: "100%",
              margin: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ paddingBottom: "15px" }}>
              {/* <ComapnyLogo /> */}
              <Box textAlign="center" pb={1}>
                <Typography variant="h5">LogIn </Typography>
              </Box>
            </Box>

            <FormControl
              sx={{
                width: "80%",
                display: "flex",
                gap: 3,
                paddingBottom: "8px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                })}
                helperText={
                  !(errors.email == undefined)
                    ? "Please enter a valid email address"
                    : ""
                }
                error={!(errors.email == undefined)}
                sx={{ height: "75px" }}
              />

              {/* {errors.email && <span>email letters</span>} */}
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/i,
                })}
                helperText={
                  !(errors.password == undefined)
                    ? "at least one uppercase and special character."
                    : ""
                }
                error={!(errors.password == undefined)}
                sx={{ height: "75px" }}
              />

              {/* {errors.password && <span>Password wilbe 8 letters</span>} */}
            </FormControl>

            <Box sx={{ width: "80%" }}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="remember me?" />
              </FormGroup>
              <LoginButton
                variant="contained"
                fullWidth
                onClick={handleSubmit(onSubmit)}
                sx={{ marginBottom: "5px" }}
              >
                Login
              </LoginButton>
              {/* rember me */}
              <Link href="#ggg">forget password?</Link>
              <input type="submit" style={{ display: "none" }} />
            </Box>
            <Box pt={2} pb={1}>
              <Typography>or, login with</Typography>
            </Box>
            <Box>
              <IconButtons />
            </Box>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default LoginForm;

function IconButtons() {
  return (
    <Stack direction="row" spacing={1} pb={3}>
      {[
        {
          icon: <GoogleIcon sx={{ color: "#ffff" }} />,
          backgroundColor: "#a03030",
        },
        {
          icon: <InstagramIcon sx={{ color: "#ffff" }} />,
          backgroundColor: "#e5536c",
        },
        {
          icon: <FacebookIcon sx={{ color: "#ffff" }} />,
          backgroundColor: "hsl(206deg 71.86% 33.26%)",
        },
        {
          icon: <TwitterIcon sx={{ color: "#ffff" }} />,
          backgroundColor: "#6ba3ba",
        },
      ].map((item, i) => {
        return (
          <IconButton
            color="primary"
            key={i * 0.215}
            aria-label="goolgle"
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
