"use client";
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/navigation";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";
import {
  useGoogleLoginMutation,
  useLoginMutation,
} from "@/redux/apiRequest/LoginRegister";
import Modal from "@mui/material/Modal";
import Cookies from "js-cookie";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import ForgetPasswordModal from "./ForgetPasswordModal";
interface RequestError {
  status: number;
  data: {
    error: string;
    message: string;
    statusCode: string;
  };
}
type Inputs = {
  email: string;
  password: string;
};
interface susessResponse {
  status: number;
  data: {
    token: string;
    userId: string;
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
  const [Login, { isLoading, isError, error }] = useLoginMutation();
  const [rememberMe, setRememberMe] = useState<any>(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  // console.log(getValues("email"), watch("email"));
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (rememberMe) {
        Cookies.set("shoppingAppUserEmail", getValues("email"));
        Cookies.set("shoppingAppUserPassword", getValues("password"));
      }

      const res = await Login(data);
      console.log(res);
      if ((res as susessResponse)?.data) {
        // console.log((res as susessResponse).data.token);
        localStorage.setItem("loginStatus", (res as susessResponse).data.token);
        localStorage.setItem(
          "userIdForSappingApp",
          (res as susessResponse).data.userId
        );
        localStorage.setItem(
          "userImageUrlNextShoppingApp",
          "https://mui.com/static/images/avatar/2.jpg"
        );

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

  const [ForgetPasswordModalopen, setForgetPasswordModal] =
    React.useState(false);
  const forgetPasswordhandleOpen = () => setForgetPasswordModal(true);
  const forgetPasswordhandleClose = () => setForgetPasswordModal(false);

  useEffect(() => {
    let pas = Cookies.get("shoppingAppUserPassword");
    setValue("password", pas || "");
    setValue("email", Cookies.get("shoppingAppUserEmail") || "");
  }, [setValue]);
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
              <small
                style={{
                  color: "red",
                }}
              >
                *NB for test the app:
                <br />
                email: royhirakp@gmail.com and password: 123456Aa@
              </small>
              {/* {errors.email && <span>email letters</span>} */}
              <TextField
                label="password"
                placeholder="password..."
                // onChange={(e)=>setPassword(e.target.value)}
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

              <Modal open={open} onClose={handleClose}>
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
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  {/* {errors.password && <span></span>} */}
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="error"
                  >
                    {isError ? (error as RequestError)?.data?.message : ""}
                  </Typography>
                  <button
                    onClick={handleClose}
                    style={{ float: "right", cursor: "pointer" }}
                  >
                    close modal
                  </button>
                </Box>
              </Modal>
              {isError ? (
                <Typography
                  variant="subtitle2"
                  textAlign="center"
                  color="error"
                >
                  {isError ? (error as RequestError)?.data?.message : ""}
                </Typography>
              ) : (
                ""
              )}
            </FormControl>

            <Box sx={{ width: "80%" }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        const { name, checked } = e.target;
                        setRememberMe(checked);
                      }}
                    />
                  }
                  label="remember me?"
                />
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
              <Button
                variant="text"
                sx={{
                  padding: 0,
                  margin: 0,
                  background: "none",
                  textDecoration: "underline",
                }}
                onClick={forgetPasswordhandleOpen}
              >
                reset / forget password?
              </Button>
              <ForgetPasswordModal
                handleClose={forgetPasswordhandleClose}
                open={ForgetPasswordModalopen}
              />
              <input type="submit" style={{ display: "none" }} />
            </Box>
            <Box pt={2} pb={1}>
              <Typography>or, login with</Typography>
            </Box>
            <Box>
              <GoogleOAuthProvider
                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
              >
                <IconButtons />
              </GoogleOAuthProvider>
            </Box>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default LoginForm;

function IconButtons() {
  const router = useRouter();
  const [Login, { isLoading, isError, error }] = useGoogleLoginMutation();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res_google_api = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse?.access_token}`,
            },
          }
        );
        const res = await Login(res_google_api?.data);

        localStorage.setItem(
          "userImageUrlNextShoppingApp",
          res_google_api?.data?.picture
        );

        if ((res as susessResponse)?.data) {
          // console.log((res as susessResponse).data.token);
          localStorage.setItem(
            "loginStatus",
            (res as susessResponse).data.token
          );
          localStorage.setItem(
            "userIdForSappingApp",
            (res as susessResponse).data.userId
          );
        }

        router.push("/webapp/Home");
        // const { sub, name, email, picture } = res?.data;
        // console.log({ sub, name, email, picture });
        //make a api calll for sing up or login  the user then saved the user data in the redux store
        // or coockie storage {email, name , user id, user image url}
        // request body for the user
      } catch (error) {
        console.log("error: ", error);
      }
    },
  });

  return (
    <>
      {/* <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            const decoded = jwtDecode(credentialResponse?.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        /> */}

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
    </>
  );
}
