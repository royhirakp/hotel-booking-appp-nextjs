"use client";
import React, { useEffect, useState } from "react";
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
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";
import { useLoginMutation } from "@/redux/apiRequest/LoginRegister";
import Modal from "@mui/material/Modal";

type Inputs = {
  email: string;
  password: string;
};

interface RequestError {
  status: number;
  data: {
    error: string;
    message: string;
    statusCode: string;
  };
}
interface susessResponse {
  status: number;
  data: {
    token: string;
  };
}
const LoginButton = styled(LoadingButton)(({ theme }) => ({
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
  const [Login, { isLoading, isSuccess, isError, error }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await Login(data);
      // console.log(res, isSuccess);
      if ((res as susessResponse)?.data) {
        // console.log((res as susessResponse).data.token);

        localStorage.setItem("loginStatus", (res as susessResponse).data.token);
        router.push("/webapp/Home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [emailValidationS, setEmailValidationS] = useState(true);
  // modal controls

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (isError) {
      handleOpen();
    }
  }, [isError]);

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
                error={!(errors.email == undefined) || !emailValidationS}
                sx={{ height: "75px" }}
                onChange={(e) => {
                  if (e.target.value.length < 6) return;

                  const pattern =
                    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;

                  if (pattern.test(e.target.value)) {
                    // console.log("String matches the pattern");
                    setEmailValidationS(pattern.test(e.target.value));
                  } else {
                    // console.log("String does not match the pattern");
                    setEmailValidationS(pattern.test(e.target.value));
                  }
                }}
              />

              {/* {errors.email && <span>email letters</span>} */}
              <TextField
                id="outlined-password-input"
                label="Password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/i,
                })}
                helperText={
                  !(errors.password == undefined)
                    ? "min: 1 upper, lowercase and special char & Password.length > 8 "
                    : ""
                }
                error={!(errors.password == undefined)}
                sx={{ height: "75px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute" as "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <button
                    onClick={handleClose}
                    style={{ float: "right", cursor: "pointer" }}
                  >
                    close modal
                  </button>

                  {/* {errors.password && <span></span>} */}
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="error"
                  >
                    {isError ? (error as RequestError)?.data?.message : ""}
                  </Typography>
                </Box>
              </Modal>
              <Typography variant="body1" textAlign="center" color="error">
                {isError ? (error as RequestError)?.data?.message : ""}
              </Typography>
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
                loading={isLoading}
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
