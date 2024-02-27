"use client";
import React from "react";
// import ThemeProvidor from "@/compnent/ThemeProvidor/ThemeProvidor";
import InputAdornment from "@mui/material/InputAdornment";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm, SubmitHandler } from "react-hook-form";
import ThemeProvidor from "../ThemeProvidor/ThemeProvidor";
type Inputs = {
  password: string;
  confirmPassword: string;
};
const ForgetPassword = ({ token }: { token: string }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };
  return (
    <ThemeProvidor>
      <Paper sx={{ maxWidth: 300, margin: "40px auto", padding: 3 }}>
        <Typography variant="h5" textAlign="center" mb={3}>
          Forget Password Form
        </Typography>
        <Typography variant="body2" textAlign="center">
          <strong>Your email:</strong> royhirakp@gmail.com{" "}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" m="auto" mt={1} spacing={4}>
            <TextField
              placeholder="Password"
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
            <TextField
              placeholder="Confirm Password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              {...register("confirmPassword", {
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

            <Button variant="contained" type="submit">
              submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </ThemeProvidor>
  );
};

export default ForgetPassword;
