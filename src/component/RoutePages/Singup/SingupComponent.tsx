"use client";
import React, { useState } from "react";
import MainContainer from "@/component/container/MainContainer";
import { Box, Stack, Typography, Button, Paper } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl } from "@mui/material";
import MultiStepFormSingup2 from "@/component/singupcomponents/MultiStepFormSingup2";
import MultiStepFormSingup1 from "@/component/singupcomponents/MultistepSingUpForm1";

import { useSignUpMutation } from "@/redux/apiRequest/LoginRegister";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
type Inputs = {
  name: string;
  lastName: string;
  email: string;
  mobile: string;
  age: string;
  country: string;
  gender: string;
  password: string;
  confirmPassword: string;
};
interface RequestError {
  status: number;
  data: {
    error: string;
    message: string;
    statusCode: string;
  };
}
interface FormFirstPartProps {
  register: any;
  getValues: any;
  passwordError: any;
  setPasswordError: any;

  errors: any;
  handleSubmit: (
    onSubmit: SubmitHandler<Inputs>
  ) => (e: React.FormEvent) => void;
  // Add more props as needed
  fromState: number;
  emalValidatinS: boolean;
  setemalValidatinS: React.Dispatch<React.SetStateAction<boolean>>;
  mobileValidation: boolean;
  setMobileValidation: React.Dispatch<React.SetStateAction<boolean>>;
  setOtpVerification: any;
  otpVerification: any;
}

const SingupComponent = () => {
  // register / singup api
  const [Singup, { isLoading, isError, isSuccess, error }] =
    useSignUpMutation();
  const [fromState, setFromStae] = useState(1);
  const [emalValidatinS, setemalValidatinS] = useState(true);
  const [mobileValidation, setMobileValidation] = useState(true);
  const [password_ConfirmError, setpassword_ConfirmError] = useState(false);
  const [otpVerification, setOtpVerification] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (password_ConfirmError) {
        alert("Password - confirm password not matched ");
        return;
      }
      if (!data.name || !data.email) {
        alert("please pull name and email");
        return;
      }
      let res = await Singup(data);
      // alert("From Submited; data=>" + JSON.stringify(data));
    } catch (error) {
      console.log("cant singup error form next app catch block");
      alert("cant singup error form next app catch block");
    }
  };

  const sIngupOtpVerification = useAppSelector(
    (s) => s.Booking.singUpotpVerification
  );

  function handelMultiStepForm(state: any) {
    if (!emalValidatinS || !mobileValidation) {
      alert("fix the error");
      return;
    }
    if (state == "next") {
      if (fromState == 2) return;
      if (!sIngupOtpVerification) {
        // console.log("otpVerification==", otpVerification);
        alert("verify the otp first");
        return;
      }

      setFromStae(fromState + 1);
    } else {
      if (fromState == 1) return;

      setFromStae(fromState - 1);
    }
  }

  return (
    <div style={{ height: "100%" }}>
      <MainContainer
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: { xs: "100%", sm: "80%", md: "75%" },
            maxWidth: "600px",
            marginTop: "25px",
            borderRadius: "10px",
            paddingTop: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
            className="fromcomtainer"
          >
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <Stack>
                <Box
                  sx={{
                    textAlign: "center",
                    margin: "15px 0",
                  }}
                >
                  <Typography variant="h5">Sing Up Form</Typography>
                </Box>

                <MultiStepForm
                  setMobileValidation={setMobileValidation}
                  mobileValidation={mobileValidation}
                  setemalValidatinS={setemalValidatinS}
                  emalValidatinS={emalValidatinS}
                  handleSubmit={handleSubmit}
                  register={register}
                  errors={errors}
                  fromState={fromState}
                  getValues={getValues}
                  passwordError={password_ConfirmError}
                  setPasswordError={setpassword_ConfirmError}
                  setOtpVerification={setOtpVerification}
                  otpVerification={otpVerification}
                />

                {/* {errors.password && <span>Password wilbe 8 letters</span>} */}
                <Box height={20}>
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="error"
                  >
                    {isError ? (error as RequestError)?.data?.message : ""}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="error"
                  >
                    {isSuccess ? "user created.   " : ""}
                    {isSuccess ? <Link href="/"> go to Login page</Link> : ""}
                  </Typography>
                </Box>
                <Stack direction="row" justifyContent="space-between" p={1}>
                  <Button
                    variant="outlined"
                    disabled={fromState == 1}
                    onClick={() => handelMultiStepForm("prev")}
                  >
                    prev
                  </Button>
                  <input type="submit" style={{ display: "none" }} />
                  <LoadingButton
                    loading={isLoading}
                    sx={{
                      display: `${fromState == 2 ? "block" : "none"}`,
                      padding: "5px 30px",
                    }}
                    variant="contained"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Register
                  </LoadingButton>
                  <Button
                    variant="outlined"
                    disabled={fromState == 2}
                    onClick={() => handelMultiStepForm("next")}
                  >
                    next
                  </Button>
                </Stack>

                <Box sx={{ width: "80%" }}>
                  <input type="submit" style={{ display: "none" }} />
                </Box>
              </Stack>
            </form>
          </Box>
        </Paper>
      </MainContainer>
    </div>
  );
};

export default SingupComponent;

const MultiStepForm: React.FC<FormFirstPartProps> = ({
  register,
  handleSubmit,
  errors,
  fromState,
  emalValidatinS,
  mobileValidation,
  setMobileValidation,
  setemalValidatinS,
  getValues,
  passwordError,
  setPasswordError,
  // MultiStepForm,
  setOtpVerification,
  otpVerification,
}) => {
  let message;

  switch (fromState) {
    case 1:
      message = (
        <>
          <MultiStepFormSingup1
            emalValidatinS={emalValidatinS}
            setMobileValidation={setMobileValidation}
            mobileValidation={mobileValidation}
            setemalValidatinS={setemalValidatinS}
            fromState={fromState}
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            getValues={getValues}
            setOtpVerification={setOtpVerification}
            otpVerification={otpVerification}
          />
        </>
      );
      break;
    case 2:
      message = (
        <>
          <MultiStepFormSingup2
            register={register}
            handleSubmit={handleSubmit}
            passwordError={passwordError}
            setPasswordError={setPasswordError}
          />
        </>
      );
      break;

    default:
      message = "Hello!";
  }
  return (
    <>
      <FormControl
        sx={{
          width: "100%",
          height: {
            xs: "350px",
            md: "250px",
          },
          display: "flex",
          gap: 3,
          alignItems: "center",
        }}
      >
        {message}
      </FormControl>
    </>
  );
};
