import MeterialUiSelect from "@/component/muiCoustomComponent/MeterialUiSelect";
import { Box, Stack, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";
import PasswordInput from "../muiCoustomComponent/PasswordInput";

interface MeterialUiSelectProps {
  register: any;
  handleSubmit: any;
  passwordError: any;
  setPasswordError: any;
}

export default function MultiStepFormSingup2(props: MeterialUiSelectProps) {
  const { handleSubmit, register, passwordError, setPasswordError } = props;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (password === confirmPassword) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }, [confirmPassword]);
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "90%",
          // border: "1px solid",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            height: "50%",
          }}
        >
          <MeterialUiSelect
            selectedValue="Age Range"
            options={["18-24", "25-35", "36-46", "47 and more"]}
            formKey="age"
            handleSubmit={handleSubmit}
            register={register}
          />

          <MeterialUiSelect
            selectedValue="Country"
            options={["India", "others"]}
            formKey="country"
            handleSubmit={handleSubmit}
            register={register}
          />
          <MeterialUiSelect
            selectedValue="Gender"
            options={["Male", "Female", "Others"]}
            formKey="gender"
            handleSubmit={handleSubmit}
            register={register}
          />
          {/* {errors.email && <span>email letters</span>} */}
        </Box>
        {/* <Box
          sx={{
            width: "100%",
            alignItems: "center",
            height: "50%",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            border: "1px solid",
          }}
        > */}
        {/* {errors.email && <span>email letters</span>} */}
        <Stack
          sx={{
            justifyContent: "space-around",
            width: "100%",

            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: 1,
          }}
        >
          <PasswordInput
            fromItemName="password"
            lable="password"
            register={register}
            setValue={setPassword}
            passwordError={passwordError}
          />
          <PasswordInput
            fromItemName="confirmPassword"
            lable="Confirm Password"
            register={register}
            setValue={setConfirmPassword}
            passwordError={passwordError}
          />
        </Stack>
        {/* </Box> */}
      </Stack>
    </>
  );
}
