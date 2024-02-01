"use client";
import React from "react";

import { Box, Paper, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import data from "@/data/Data";
const RoomListControls = ({ setFetchedData }: { setFetchedData: any }) => {
  // const dispatch = useAppDispatch();
  const [checkedItems, setCheckedItems] = React.useState<{
    [key: string]: boolean;
  }>({
    smartPhone: false,
    miniBar: false,
    Sauna: false,
    Breakfast: false,
    Hairdryer: false,
    Coffeemaker: false,
    WidesreenTv: false,
  });
  let minValue = 40;
  let maxVaule = 1000;

  const [formData, setFormData] = React.useState<{
    dates: any[];
    priceRange: any[];
    services: {
      [key: string]: boolean;
    };
  }>({
    dates: ["", ""],
    priceRange: [minValue, maxVaule],
    services: {},
  });
  const handleInputChange = (event: any) => {
    // console.log(event);
    let firstDate = event[0];
    let secondDate = event[1];
    // console.log(firstDate?.$D + "", firstDate?.$M + 1 + "");
    // console.log(secondDate?.$D + "", secondDate?.$M + 1 + "");

    setFormData((prevFormData) => ({
      ...prevFormData,
      dates: [
        firstDate?.$D + "-" + (firstDate?.$M + 1) + "",
        secondDate?.$D + "-" + (secondDate?.$M + 1) + "",
      ],
    }));
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    // setValue(newValue as number[]);
    // console.log(value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      priceRange: newValue as number[],
    }));
  };
  function valuetext(value: number) {
    return `$${value}`;
  }

  // checkbox items functions

  const handleCheckboxChange = (event: any, label: string) => {
    const { name, checked } = event.target;
    // console.log(checkedItems);
    // console.log("name, checked====", name, checked, event.target);
    setCheckedItems({
      ...checkedItems,
      [label]: checked,
    });
    let services: {
      [key: string]: boolean;
    } = {};
    for (let i in checkedItems) {
      if (checkedItems.hasOwnProperty(i)) {
        const value = checkedItems[i];
        // console.log(i, value);
        services[i] = value;
      }
    }
    // console.log(services);
    // dispatch(addFilterQuery({ type: "services", value: services }));
  };
  function filteropration() {
    let startDate = formData?.dates[0]?.split("-");
    let endDate = formData?.dates[1]?.split("-");
    let startMonthIndex: any = "0";
    let endMonthIndex: any = "0";

    // find the items which have the same months ;
    let filterA = data.filter((item) => {
      for (let i in item.abilibiity) {
        if (item.abilibiity[i].monthNmae === startDate[1]) {
          startMonthIndex = i + "";
          return true;
        }
      }
    });

    let filterB = filterA.filter((item) => {
      for (let i in item.abilibiity) {
        if (item.abilibiity[i].monthNmae === endDate[1]) {
          endMonthIndex = i + "";
          return true;
        }
      }
    });

    //filter date
    // startmonthindex
    let filterC = filterB.filter((item) => {
      let array: any = item.abilibiity[startMonthIndex].bookDates;
      if (!array.includes(startDate[0] * 1)) {
        return true;
      }
    });
    // end month index
    let filterD = filterC.filter((item) => {
      let array: any = item.abilibiity[endMonthIndex].bookDates;
      if (!array.includes(endDate[0] * 1)) {
        return true;
      }
    });
    let filterE = filterD.filter((item) => {
      // console.log(item.abalableServices, checkedItems);
      let temp = false;
      for (let i in checkedItems) {
        const key = i as
          | "smartPhone"
          | "miniBar"
          | "Sauna"
          | "Breakfast"
          | "Hairdryer"
          | "Coffeemaker"
          | "WidesreenTv";
        // console.log(key, checkedItems[key], item.abalableServices[key]);

        if (checkedItems[key]) {
          if (item.abalableServices[key]) {
            temp = true;
          } else {
            temp = false;
            break;
          }
        }
      }
      return temp;
    });
    // filter data by the price range
    let filterF = filterE.filter((item) => {
      const pricePerNight = parseFloat(item.pricePerNight);
      return (
        !isNaN(pricePerNight) && // Check if the conversion was successful
        pricePerNight > formData.priceRange[0] &&
        pricePerNight < formData.priceRange[1]
      );
    });
    console.log("filterF=======", filterF);
    setFetchedData(filterF);
  }
  return (
    <Box
      sx={{
        position: "sticky",
        top: "15px",
        display: "flex",
        flexDirection: "column",
        maxHeight: "930px",
        height: "100%",
        justifyContent: "space-around",
        margin: 1,
      }}
    >
      <Paper
        sx={{
          padding: "0 6%",
          height: "70%",
          marginBottom: "1%",
        }}
      >
        <Stack
          direction="column"
          justifyContent="space-evenly"
          sx={{ height: "100%" }}
        >
          <Typography color="primary" variant="subtitle1">
            Booking Details
          </Typography>
          {/* form dtart */}
          <Box pt={0}>
            <label htmlFor="dates">
              <Typography variant="body1" fontWeight={700}>
                Date
              </Typography>
            </label>
            {/* date pickerrr */}
            <div style={{ padding: "3%" }}>
              <Stack direction="row" textAlign="center" gap={6}>
                <Typography flex={1}>Check-in</Typography>
                <Typography flex={1}>Check-out</Typography>
              </Stack>
              <Box>
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateRangePicker"]}>
                    <DateRangePicker
                      localeText={{ start: "", end: "" }}
                      sx={{
                        ".MuiInputBase-input": {
                          padding: "5%",
                        },
                      }}
                      onChange={handleInputChange}
                    />
                  </DemoContainer>
                </LocalizationProvider> */}
              </Box>
            </div>
          </Box>
          <Box pt={2}>
            <>
              <Typography fontWeight={700} pl={2}>
                Price Range
              </Typography>

              <Stack direction="row" padding="0 10%">
                <Box flex={1} textAlign="center" m="auto">
                  <Typography textAlign="center">${minValue}</Typography>
                </Box>
                <Box sx={{ padding: "0 5%", display: "flex" }} flex={10}>
                  <Slider
                    getAriaLabel={() => "Price range"}
                    value={formData.priceRange}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={minValue}
                    max={maxVaule}
                    sx={{
                      height: "1px",

                      ".MuiSlider-thumbSizeMedium": {
                        width: "10px",
                        height: "10px",
                      },
                    }}
                  />
                </Box>
                <Box flex={1} m="auto">
                  <Typography>${maxVaule}</Typography>
                </Box>
              </Stack>
              <Stack direction="row" gap={1} textAlign="center" mt={1}>
                <Typography flex={1} variant="subtitle2" color="secondary">
                  <b>
                    Price Range : ${formData.priceRange[0]}-$
                    {formData.priceRange[1]}
                  </b>
                </Typography>
              </Stack>
            </>
          </Box>
          <Box>
            {/* checkboxxx */}

            <div>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => handleCheckboxChange(e, "smartPhone")}
                    />
                  }
                  label="Free-to use SmartPhone"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => handleCheckboxChange(e, "miniBar")}
                    />
                  }
                  label="Mini Bar"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => handleCheckboxChange(e, "Sauna")}
                    />
                  }
                  label="Sauna"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => handleCheckboxChange(e, "Breakfast")}
                    />
                  }
                  label="Breakfast"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => handleCheckboxChange(e, "Hairdryer")}
                    />
                  }
                  label="Hair Dryer"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => handleCheckboxChange(e, "Coffeemaker")}
                    />
                  }
                  label="Coffee Maker"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => handleCheckboxChange(e, "WidesreenTv")}
                    />
                  }
                  label="Widesreen tv"
                />
              </FormGroup>
            </div>
          </Box>{" "}
          {/* from enddddd */}
          <Stack direction="column" p={2}>
            <Button
              variant="contained"
              onClick={() => {
                // console.log(formData);
                filteropration();
                // console.log(checkedItems);
                // dispatch(filterSearch({ formData, checkedItems }));
                // dispatch(pagination({ pageNo: 1 }));
              }}
            >
              Apply
            </Button>
          </Stack>
        </Stack>
      </Paper>
      <Box>
        <Image
          src="/addImage2.png"
          alt=""
          width={700}
          height={700}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );

  // do the filter opration, function for fetching the data
};

export default RoomListControls;
