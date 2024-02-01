import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import "@/app/globals.css";

// import Select, { SelectChangeEvent } from "@mui/material/Select";
interface MeterialUiSelectProps {
  selectedValue: string;
  options: string[];
  register: any;
  handleSubmit: any;
  formKey: string;
}
export default function MeterialUiSelect(props: MeterialUiSelectProps) {
  const { selectedValue, options, handleSubmit, register, formKey } = props;
  const [state, setState] = React.useState(options[0]);

  // const handleChange = (event: SelectChangeEvent) => {
  //   setState(event.target.value as string);
  // };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 150 }}>
      {/* <FormControl fullWidth> */}
      {/* <InputLabel id="demo-simple-select-label">{selectedValue}</InputLabel> */}
      {/* <select {...register(formKey)} className="w-full px-4 py-2">
          {options.map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}
              </option>
            );
          })}
        </select> */}
      {/* </FormControl> */}
      <label
        htmlFor={`${formKey}`}
        style={{ fontSize: "15px", paddingBottom: "5px", paddingLeft: "4px" }}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {formKey}
      </label>
      <select
        className="coustomSelect"
        {...register(formKey)}
        placeholder="select"
      >
        <option>select your {formKey}</option>
        {options.map((item, i) => {
          return (
            <option value={item} key={i}>
              {item}
            </option>
          );
        })}
      </select>
    </Box>
  );
}
