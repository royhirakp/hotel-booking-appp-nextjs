import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/lab";
const DatePickerFromYoutube = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  return (
    <Box width="500px">
      <DateRangePicker
        startText="checkin"
        endText="checkout"
        value={value}
        // onChange
        renderInput={(startProps: any, endProps: any) => (
          <>
            <TextField {...startProps} />
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  );
};

export default DatePickerFromYoutube;
