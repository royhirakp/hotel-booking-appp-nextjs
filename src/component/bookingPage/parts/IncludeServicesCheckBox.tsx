"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch } from "@/redux/hooks";
import { addFilterQuery } from "@/redux/slices/FilterSlice";

const IncludeServicesCheckBox = () => {
  const dispatch = useAppDispatch();
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
    dispatch(addFilterQuery({ type: "services", value: services }));
  };

  return (
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
            <Checkbox onChange={(e) => handleCheckboxChange(e, "smartPhone")} />
          }
          label="Free-to use SmartPhone"
        />

        <FormControlLabel
          control={
            <Checkbox onChange={(e) => handleCheckboxChange(e, "miniBar")} />
          }
          label="Mini Bar"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={(e) => handleCheckboxChange(e, "Sauna")} />
          }
          label="Sauna"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={(e) => handleCheckboxChange(e, "Breakfast")} />
          }
          label="Breakfast"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={(e) => handleCheckboxChange(e, "Hairdryer")} />
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
  );
};

export default IncludeServicesCheckBox;
