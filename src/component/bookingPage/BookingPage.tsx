"use client";
import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import ProgressBar from "./parts/ProgressBar";
import BookingPageSearch from "./parts/FourStepsOfBooking/BookingPageSearch";
import BookingInformationPage from "./parts/FourStepsOfBooking/BookingInformationPage";
import CheckoutInformationPage from "./parts/FourStepsOfBooking/CheckoutInformationPage";
import ConfermationPage from "./parts/FourStepsOfBooking/ConfermationPage";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  handelNextsFromState,
  handelPreviousFromState,
} from "@/redux/slices/BookingSlice";

import { useDispatch } from "react-redux";

import { useGetAllRoomsQuery } from "@/redux/apiRequest/LoginRegister";
const BookingPage = () => {
  const [state, setState] = useState(0);
  const dispatch = useDispatch();
  function handelPrevious() {
    dispatch(handelPreviousFromState({}));
  }
  function handelNext() {
    dispatch(handelNextsFromState({}));
  }

  const { data } = useGetAllRoomsQuery({});
  console.log("data====", data?.roomsData);

  return (
    <div>
      <Stack
        sx={{
          maxWidth: "1500px",
          margin: "auto",

          padding: {
            xs: "0",
            sm: "0 2% ",
          },
        }}
      >
        <Box p={1} sx={{ padding: "1% 0" }} mt={2}>
          <ProgressBar state={state} />
        </Box>
        <>
          <MultiStepForm
            state={state}
            setState={setState}
            handelNext={handelNext}
            handelPrevious={handelPrevious}
          />
        </>
      </Stack>
    </div>
  );
};

export default BookingPage;

const MultiStepForm = ({
  state,
  setState,
  handelNext,
  handelPrevious,
}: {
  state: number;
  setState: any;
  handelNext: any;
  handelPrevious: any;
}) => {
  let element;
  const formStage = useAppSelector((s) => s.Booking.bookingStage);

  switch (formStage) {
    case 0:
      element = (
        <>
          <BookingPageSearch setState={setState} />
        </>
      );
      break;
    case 1:
      element = (
        <>
          <BookingInformationPage
            handelNext={handelNext}
            handelPrevious={handelPrevious}
          />
        </>
      );
      break;
    case 2:
      element = (
        <>
          <CheckoutInformationPage handelNext={handelNext} />
        </>
      );
      break;

    case 3:
      element = (
        <>
          <ConfermationPage />
        </>
      );
      break;

    default:
      element = "Hello!";
  }
  return <>{element}</>;
};
