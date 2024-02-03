"use client";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordInput = ({
  register,
  lable: label,
  fromItemName,
  setValue,
  passwordError,
}: {
  register: any;
  lable: any;
  fromItemName: any;
  setValue: any;
  passwordError: any;
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [errorStatus, setErrorStatus] = useState(true);
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="filled-adornment-password">{label}</InputLabel>
        <FilledInput
          error={passwordError || !errorStatus}
          {...register(`${fromItemName}`, {
            required: true,
            pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/i,
          })}
          onChange={(e) => {
            setValue(e.target.value);
            if (e.target.value.length < 6) return;
            const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/i;
            if (pattern.test(e.target.value)) {
              setErrorStatus(pattern.test(e.target.value));
            } else {
              setErrorStatus(pattern.test(e.target.value));
            }
          }}
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default PasswordInput;
