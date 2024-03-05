"use client";
import React, { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  useForgetPasswordEmailGenerationMutation,
  useOtp_Generation_forResetPasswordMutation,
  useResetPasswordMutation,
} from "@/redux/apiRequest/LoginRegister";

import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  email: string;
  password: string;
  otp: string;
};
import Modal from "@mui/material/Modal";
import { LoadingButton } from "@mui/lab";
const ForgetPasswordModal = ({
  handleClose,
  open,
}: {
  handleClose: any;
  open: any;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  // reset password
  const [
    setOtpForResetPassword,
    { isLoading: isLodin_OTP_g, isError: isError_fro_Otp_g },
  ] = useOtp_Generation_forResetPasswordMutation();
  const [
    resetPassword,
    {
      isLoading: isLoading_resetPassword,
      isError: isError_resetPassword,
      isSuccess: isSuccess_resetPassword,
      error,
    },
  ] = useResetPasswordMutation();
  //forget password
  const [
    forgetPassword_emailSen,
    { isLoading: isLoading_forgetPassword, isError: isError_forgetPassword },
  ] = useForgetPasswordEmailGenerationMutation();

  const [showPassword, setShowPassword] = React.useState(false);
  const [forgetPasswordOption, setForgetPasswordOption] =
    useState<Boolean | null>(null);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    console.log(data, e?.target.textContent, error);

    if (e?.target?.textContent === "Reset by OTP") {
      if (forgetPasswordOption === null) {
        setForgetPasswordOption(true);
        console.log("api callll happningg");
        const res = await setOtpForResetPassword(data);
        console.log(res);
      }
    } else if (e?.target?.textContent === "Forget password") {
      if (forgetPasswordOption === null) {
        setForgetPasswordOption(false);
        const res = await forgetPassword_emailSen(data);
        console.log(res);
        console.log("api call from Forget password");
      }
    } else if (e?.target?.textContent === "Reset Password") {
      console.log("Reset Password ");
      const res = await resetPassword(data);
      console.log(res);
    }
  };

  return (
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
        }}
      >
        <Typography variant="subtitle1" textAlign="center" mb={2}>
          RESET / FORGET PASSWORD FORM
        </Typography>
        <FromComponent
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          isLodin_OTP_g={isLodin_OTP_g}
          isLoading_forgetPassword={isLoading_forgetPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          handleClickShowPassword={handleClickShowPassword}
          showPassword={showPassword}
          forgetPasswordOption={forgetPasswordOption}
          isError_fro_Otp_g={isError_fro_Otp_g}
          isSuccess_resetPassword={isSuccess_resetPassword}
          isError_resetPassword={isError_resetPassword}
          error={error}
          isLoading_resetPassword={isLoading_resetPassword}
          isError_forgetPassword={isError_forgetPassword}
        />
      </Box>
    </Modal>
  );
};

export default ForgetPasswordModal;
interface RequestError {
  status: number;
  data: {
    error: string;
    message: string;
    statusCode: string;
  };
}

const FromComponent = ({
  register,
  handleSubmit,

  errors,
  onSubmit,
  isLodin_OTP_g,
  isLoading_forgetPassword,
  handleMouseDownPassword,
  handleClickShowPassword,
  showPassword,
  forgetPasswordOption,
  isError_fro_Otp_g,
  isSuccess_resetPassword,
  isError_resetPassword,
  error,
  isLoading_resetPassword,
  isError_forgetPassword,
}: {
  register: any;
  handleSubmit: any;

  errors: any;
  onSubmit: any;
  isLodin_OTP_g: any;
  isLoading_forgetPassword: any;
  handleMouseDownPassword: any;
  handleClickShowPassword: any;
  showPassword: any;
  forgetPasswordOption: any;
  isError_resetPassword: any;
  isSuccess_resetPassword: any;
  isError_fro_Otp_g: any;
  error: any;
  isLoading_resetPassword: any;
  isError_forgetPassword: any;
}) => {
  return (
    <>
      <form action="">
        <TextField
          fullWidth
          placeholder="your email"
          type="email"
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
        />
        <small
          style={{
            marginTop: "10px",
            display: "inline-block",
          }}
        >
          *nd: you can do this in two methods:
          <br />
          1. one is by get the OTP in the mail
          <br />
          2. and another is get the link in the email
        </small>
        <Stack direction="row" spacing={2} mt={2}>
          <LoadingButton
            onClick={handleSubmit(onSubmit)}
            type="submit"
            loading={isLodin_OTP_g}
            variant="contained"
            color="primary"
            fullWidth
          >
            Reset by OTP
          </LoadingButton>
          <LoadingButton
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            loading={isLoading_forgetPassword}
          >
            Forget password
          </LoadingButton>
        </Stack>
        {forgetPasswordOption === null ? (
          <></>
        ) : (
          <>
            <OptioncameBuyForgetpasswors_or_reset_Password_ButtonClick
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              onSubmit={onSubmit}
              isLodin_OTP_g={isLodin_OTP_g}
              isLoading_forgetPassword={isLoading_forgetPassword}
              handleMouseDownPassword={handleMouseDownPassword}
              handleClickShowPassword={handleClickShowPassword}
              showPassword={showPassword}
              forgetPasswordOption={forgetPasswordOption}
              isError_fro_Otp_g={isError_fro_Otp_g}
              isSuccess_resetPassword={isSuccess_resetPassword}
              isError_resetPassword={isError_resetPassword}
              error={error}
              isLoading_resetPassword={isLoading_resetPassword}
              isError_forgetPassword={isError_forgetPassword}
            />
          </>
        )}
      </form>
    </>
  );
};

const OptioncameBuyForgetpasswors_or_reset_Password_ButtonClick = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  handleClickShowPassword,
  showPassword,
  forgetPasswordOption,
  isError_fro_Otp_g,
  isSuccess_resetPassword,
  isError_resetPassword,
  error,
  isLoading_resetPassword,
  isError_forgetPassword,
  handleMouseDownPassword,
  isLodin_OTP_g,
}: {
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
  isLodin_OTP_g: any;
  isLoading_forgetPassword: any;
  handleMouseDownPassword: any;
  handleClickShowPassword: any;
  showPassword: any;
  forgetPasswordOption: any;
  isError_resetPassword: any;
  isSuccess_resetPassword: any;
  isError_fro_Otp_g: any;
  error: any;
  isLoading_resetPassword: any;
  isError_forgetPassword: any;
}) => {
  return (
    <>
      <Box>
        {forgetPasswordOption ? (
          <ResetButtonOptions
            isLodin_OTP_g={isLodin_OTP_g}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            handleMouseDownPassword={handleMouseDownPassword}
            handleClickShowPassword={handleClickShowPassword}
            showPassword={showPassword}
            isError_fro_Otp_g={isError_fro_Otp_g}
            isSuccess_resetPassword={isSuccess_resetPassword}
            isError_resetPassword={isError_resetPassword}
            error={error}
            isLoading_resetPassword={isLoading_resetPassword}
            isError_forgetPassword={isError_forgetPassword}
          />
        ) : (
          <>
            <Typography variant="body1" textAlign="center" p={3} color="error">
              {isError_forgetPassword
                ? "some error! please try again later"
                : "link for reset the password has send to your mail. Please check your mail"}
            </Typography>
          </>
        )}
      </Box>
    </>
  );
};

const ResetButtonOptions = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  handleClickShowPassword,
  showPassword,
  isError_fro_Otp_g,
  isSuccess_resetPassword,
  isError_resetPassword,
  error,
  isLoading_resetPassword,
  handleMouseDownPassword,
}: {
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
  isLodin_OTP_g: any;
  handleMouseDownPassword: any;

  handleClickShowPassword: any;
  showPassword: any;
  isError_resetPassword: any;
  isSuccess_resetPassword: any;
  isError_fro_Otp_g: any;
  error: any;
  isLoading_resetPassword: any;
  isError_forgetPassword: any;
}) => {
  return (
    <>
      <Typography variant="body1" textAlign="center" color="success" mt={2}>
        {isError_fro_Otp_g
          ? "some error, please try aganin later"
          : "OTP for reset the password has send to your mail. Please check your mail"}
      </Typography>
      <Stack direction="row" spacing={2} mt={1}>
        <TextField
          placeholder="new password"
          sx={{
            width: "80%",
          }}
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
          type="text"
          placeholder="OTP"
          {...register("otp", {
            required: true,
          })}
          helperText={!(errors.password == undefined) ? "otp is required" : ""}
          error={!(errors.otp == undefined)}
        />
      </Stack>
      <Typography textAlign="center" mt={1} variant="body1" color="error">
        {/* {isError_resetPassword
                      ? `${error.data.message}`
                      : ""} */}
        {isSuccess_resetPassword ? "Password changed successful" : ""}
        {isError_resetPassword ? (error as RequestError)?.data?.message : ""}
      </Typography>
      <Stack>
        <LoadingButton
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          loading={isLoading_resetPassword}
        >
          Reset Password
        </LoadingButton>
      </Stack>
    </>
  );
};
