import React from "react";
import { Box, Typography, Stack, Paper, Button } from "@mui/material";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const CheckAbilibility = () => {
  // date input
  const [formData, setFormData] = React.useState<{
    noOfGuest: string;
    dates: any[]; // Change 'any' to the appropriate type for the array items
  }>({
    noOfGuest: "",
    dates: [],
  });
  const handleInputChange = (event: any) => {
    console.log(event);
    let firstDate = event[0];
    let secondDate = event[1];
    console.log(firstDate?.$d, secondDate?.$d);
    setFormData((prevFormData) => ({
      ...prevFormData,
      dates: [firstDate?.$d, secondDate?.$d],
    }));
  };
  // ste for dropdown

  const [open, setOpen] = React.useState(false);

  const handleChange = (event: any) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      noOfGuest: value,
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // You can access the collected data here

  const handleCheckAvailability = () => {
    console.log("Form Data:", formData);

    // console.log('Selected Age:', age);
  };

  return (
    <>
      <Paper sx={{ padding: "1%", marginBottom: "1%", background: "#ffffff" }}>
        <Box sx={{ margin: "2% 10px" }}>
          <Typography variant="h6">Book Your Room</Typography>
          <Typography variant="subtitle1">Check In/ Out</Typography>
          <div style={{ padding: "3%" }}>
            <Stack direction="row" textAlign="center" gap={6}>
              <Typography flex={1}>Check-in</Typography>
              <Typography flex={1}>Check-out</Typography>
            </Stack>
            <Box>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                  localeText={{ start: "", end: "" }}
                  sx={{
                    ".MuiInputBase-input": {
                      padding: "5%",
                    },
                  }}
                  onChange={handleInputChange}
                />
              </LocalizationProvider> */}
            </Box>
          </div>
          <Typography variant="subtitle1">Guests</Typography>
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Guest
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={formData.noOfGuest}
                label="noOfGuest"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
                <MenuItem value={"4"}>4</MenuItem>
                <MenuItem value={"5"}>5</MenuItem>
                <MenuItem value={"6"}>6</MenuItem>
                <MenuItem value={"7"}>7</MenuItem>
                <MenuItem value={"8"}>8</MenuItem>
                <MenuItem value={"9"}>9</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            <Button onClick={handleCheckAvailability} variant="contained">
              Check Abilibity
            </Button>
          </Stack>
        </Box>
      </Paper>
    </>
  );
};

export default CheckAbilibility;
