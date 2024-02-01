"use client";
import React from "react";
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
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="filled-adornment-password">{label}</InputLabel>
        <FilledInput
          error={passwordError}
          {...register(`${fromItemName}`)}
          onChange={(e) => {
            setValue(e.target.value);
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
