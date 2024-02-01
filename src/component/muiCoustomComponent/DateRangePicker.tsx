import * as React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Box, Stack, Typography } from "@mui/material";
import { useAppDispatch } from "@/redux/hooks";
import { addFilterQuery } from "@/redux/slices/FilterSlice";

const DateRangePickercpmponent = ({
  handleInputChange,
}: {
  formData: any;
  handleInputChange: any;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div style={{ padding: "3%" }}>
      <Stack direction="row" textAlign="center" gap={6}>
        <Typography flex={1}>Check-in</Typography>
        <Typography flex={1}>Check-out</Typography>
      </Stack>
      <Box>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            localeText={{ start: "", end: "" }}
            onChange={(e, i) => {
              handleInputChange(e);
              const [startDate, endDate]: [startDate: any, endDate: any] = e;
              let dateRange = startDate?.$d + "Dividerr" + endDate?.$d;
              dispatch(
                addFilterQuery({
                  type: "date",
                  value: dateRange,
                })
              );
            }}
            sx={{
              ".MuiInputBase-input": {
                padding: "5%",
              },
            }}
          />
        </LocalizationProvider> */}
      </Box>
    </div>
  );
};

export default DateRangePickercpmponent;
