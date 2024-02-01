import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";
import { useAppDispatch } from "@/redux/hooks";
import { addFilterQuery } from "@/redux/slices/FilterSlice";
function valuetext(value: number) {
  return `$${value}`;
}
interface componentProps {
  maxV: number;
  minV: number;
}
export default function RangeSlider({ minV, maxV }: componentProps) {
  const [value, setValue] = React.useState<number[]>([minV, maxV]);

  const dispatch = useAppDispatch();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    // console.log(value);
    dispatch(addFilterQuery({ type: "priceRange", value }));
  };

  return (
    <>
      <Typography fontWeight={700} pl={2}>
        Price Range
      </Typography>

      <Stack direction="row" padding="0 10%">
        <Box flex={1} textAlign="center" m="auto">
          <Typography textAlign="center">${minV}</Typography>
        </Box>
        <Box sx={{ padding: "0 5%", display: "flex" }} flex={10}>
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={maxV}
            min={minV}
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
          <Typography>${maxV}</Typography>
        </Box>
      </Stack>
      <Stack direction="row" gap={1} textAlign="center" mt={1}>
        <Typography flex={1} variant="subtitle2" color="secondary">
          <b>
            Price Range : ${value[0]}-${value[1]}
          </b>
        </Typography>
      </Stack>
    </>
  );
}
