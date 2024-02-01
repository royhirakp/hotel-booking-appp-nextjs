import BackDrop from "@/component/muiCoustomComponent/BackDrop";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface componentProps {
  register: any;
  handleSubmit: any;
  errors: any;
  fromState: any;
  emalValidatinS: any;
  mobileValidation: any;
  setMobileValidation: any;
  setemalValidatinS: any;
  getValues: any;
}

export default function MultiStepFormSingup1(props: componentProps) {
  const {
    register,
    handleSubmit,
    errors,
    fromState,
    emalValidatinS,
    mobileValidation,
    setMobileValidation,
    setemalValidatinS,
    getValues,
  } = props;
  const [mobileinputDisabkleS, setMobileinputDisable] = useState(true);
  const [otoError, setOTPerror] = useState(false);
  const [otpInput, setOtpinput] = useState("");
  const [otpVarification, setotpVarification] = useState(true);
  //bacdrop state
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          // padding: "10px 20px 5px 0",
          padding: {
            xs: "0.5rem",
            sm: "1rem",
          },
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <>
          <FirstNameLastName
            emalValidatinS={emalValidatinS}
            setMobileValidation={setMobileValidation}
            mobileValidation={mobileValidation}
            setemalValidatinS={setemalValidatinS}
            fromState={fromState}
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            getValues={getValues}
          />
        </>
        <>
          <EmailVarification
            setotpVarification={setotpVarification}
            setOpen={setOpen}
            open={open}
            mobileValidation={mobileValidation}
            setMobileinputDisable={setMobileinputDisable}
            otpVarification={otpVarification}
            mobileinputDisabkleS={mobileinputDisabkleS}
            otoError={otoError}
            setOtpinput={setOtpinput}
            fromState={fromState}
            register={register}
            emalValidatinS={emalValidatinS}
            setemalValidatinS={setemalValidatinS}
            getValues={getValues}
            otpInput={otpInput}
            setOTPerror={setOTPerror}
          />
        </>

        {/* email */}
        {/* <Box
            flex={1}
            sx={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                width: { xs: "90%", sm: "90%" },
                // height: "75px",
                // fontSize: "50px",
              }}
              {...register("email", {})}
              error={!emalValidatinS}
              disabled={!mobileinputDisabkleS}
              helperText={
                !emalValidatinS
                  ? "Please enter a valid email address"
                  : "*required"
              }
              onChange={(e) => {
                if (e.target.value.length < 6) return;

                const pattern =
                  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;

                if (pattern.test(e.target.value)) {
                  console.log("String matches the pattern");
                  setemalValidatinS(pattern.test(e.target.value));
                } else {
                  console.log("String does not match the pattern");
                  setemalValidatinS(pattern.test(e.target.value));
                }
              }}
            />
          </Box> */}
        {/* mobile */}

        {/* backdrop */}

        {/* backdrop */}

        {/* {errors.email && <span>email letters</span>} */}
      </Stack>
    </>
  );
}

function FirstNameLastName(props: componentProps) {
  const { register } = props;
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="full name"
        variant="outlined"
        sx={{
          // width: { xs: "90%", md: "45%" },
          height: "60px",
          ".MuiOutlinedInput-input": {
            // fontSize: "15px",
            // padding: "0",
          },
        }}
        {...register("name", {
          required: true,
        })}
      />
      {/* {errors.email && <span>email letters</span>} */}
      {/* <TextField
        id="outlined-basic"
        label="LastName"
        sx={{
          width: { xs: "90%", md: "45%" },
          height: "75px",
        }}
        {...register("lastName", {
          required: true,
        })}
      /> */}
    </Box>
  );
}
import {
  useGenerateOtpMutation,
  useVerifyOtpMutation,
} from "@/redux/apiRequest/LoginRegister";

interface EmailVarificationProps {
  setOpen: any;
  open: any;
  mobileValidation: any;
  setMobileinputDisable: any;
  otpVarification: any;
  mobileinputDisabkleS: any;
  setOtpinput: any;
  otoError: any;
  fromState: any;
  register: any;
  emalValidatinS: any;
  setemalValidatinS: any;
  getValues: any;
  otpInput: any;
  setOTPerror: any;
  setotpVarification: any;
}
interface RequestError {
  status: number;
  data: {
    error: string;
    message: string;
    statusCode: string;
  };
}
const EmailVarification = (props: EmailVarificationProps) => {
  const {
    setOpen,
    open,
    setMobileinputDisable,
    otpVarification,
    mobileinputDisabkleS,
    otoError,
    setOtpinput,
    register,
    emalValidatinS,
    setemalValidatinS,
    getValues,
    otpInput,
    setOTPerror,
    setotpVarification,
  } = props;
  const [generateOtp, { isLoading: loadingForGenerateOtp, error }] =
    useGenerateOtpMutation();
  const [verifyOtp, { isLoading, isError, isSuccess }] = useVerifyOtpMutation();
  async function handelOtpSubmit() {
    const res = await verifyOtp({
      email: getValues("email"),
      otp: otpInput,
    });
    console.log(res);
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "15px",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "space-around",
          alignItems: "flex-start",
          // border: "3px solid #b1abab",
          padding: "1rem 0",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* mobile text fild */}
          <Stack direction="column" sx={{ width: "60%" }}>
            <BackDrop open={isLoading} setOpen={setOpen} />
            <BackDrop open={loadingForGenerateOtp} setOpen={setOpen} />

            <TextField
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
              {...register("email")}
              error={!emalValidatinS}
              disabled={!mobileinputDisabkleS}
              helperText={!emalValidatinS ? "invalid email" : "*required"}
              onChange={(e) => {
                if (e.target.value.length < 6) return;

                const pattern =
                  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;

                if (pattern.test(e.target.value)) {
                  console.log("String matches the pattern");
                  setemalValidatinS(pattern.test(e.target.value));
                } else {
                  console.log("String does not match the pattern");
                  setemalValidatinS(pattern.test(e.target.value));
                }
              }}
            />
            {/* varify button */}
            <Stack sx={{ width: "50%" }}>
              <Button
                onClick={async () => {
                  // function for otp
                  // console.log(getValues("email"));
                  if (!emalValidatinS || getValues("email") === "") return;

                  const generatedOtp = await generateOtp({
                    email: getValues("email"),
                  });
                  // console.log(error?.status, "==============");
                  console.log(error as RequestError, "errorr");
                  // console.log(RequestError);
                  // if('data' in errorForGenerateOtp){

                  // }
                  // console.log(generatedOtp?.error);
                  setMobileinputDisable(false);
                }}
                sx={{
                  "&.MuiButton-root": {
                    padding: 0,
                  },
                }}
              >
                {(error as RequestError) ? "Verify" : "otp send"}
              </Button>
              <p
                style={{
                  border: "1px solid",
                  position: "relative",
                  width: "203%",
                  height: "50px",
                  borderRadius: "6px",
                  padding: "2px",
                }}
              >
                error status:
                {(error as RequestError)
                  ? (error as RequestError).data.message + "try again"
                  : ""}
              </p>
            </Stack>
          </Stack>
          {/* varified icon */}
          <Box
            sx={{
              display: `${!isSuccess ? "none" : "block"}`,
              minWidth: "25px",
              paddingTop: "10px",
              paddingLeft: "3px",
            }}
          >
            <CheckCircleIcon sx={{ color: "blue" }} />
          </Box>
        </Stack>

        <Stack
          flexDirection="row"
          sx={{ width: "100%" }}
          justifyContent="space-evenly"
        >
          <Box>
            <Typography style={{}}>Enter OTP</Typography>
            <TextField
              id="outlined-basic"
              type="number"
              variant="outlined"
              error={isError}
              disabled={isSuccess}
              onChange={(e) => {
                setOtpinput(e.target.value);
              }}
              helperText={isError ? "invalid otp" : ""}
              sx={{
                height: "45px",
                maxWidth: "90px",
                minWidth: "50px",
                ".MuiOutlinedInput-input": {
                  padding: "2px",
                  fontSize: {
                    xs: "12px",
                    sm: "12px",
                    md: "13px",
                  },
                },
              }}
            />
          </Box>
          <Stack>
            <Button
              sx={{
                width: "50px",
                marginTop: "18px",
                "&.MuiButton-root": {
                  padding: 0,
                },
              }}
              onClick={handelOtpSubmit}
            >
              submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
