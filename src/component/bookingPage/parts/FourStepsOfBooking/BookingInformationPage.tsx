"use client";
import React from "react";
import ProsidToCheckout from "./bookiingIndormationPageParts/ProsidToCheckout";
import { Box, Stack, Typography, Paper } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  addAditionalService,
  setSpacialRequest,
  setIaGREEcHECKbOX,
} from "@/redux/slices/BookingSlice";

const BookingInformationPage = ({
  handelPrevious,
  handelNext,
}: {
  handelPrevious: any;
  handelNext: any;
}) => {
  return (
    <div>
      <Stack
        sx={{
          justifyContent: "center",
          display: {
            xs: "flex",
            sm: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            maxWidth: "40%",
            minWidth: "250px",
            margin: "auto",
          }}
        >
          {/* checkout component for mobiel*/}

          <ProsidToCheckout handelNext={handelNext} />
        </Box>
      </Stack>
      <Stack direction="row">
        <Box flex={3}>
          <AdditionServiceComponent />
          <BillingDetails />
          <SpicalRequest />
          <TramsAndCondition />
        </Box>
        <Box
          flex={1}
          sx={{
            minWidth: "220px",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          {/* checkout component for tab/ laptop*/}

          <ProsidToCheckout handelNext={handelNext} />
        </Box>
      </Stack>
    </div>
  );
};

export default BookingInformationPage;

const AdditionServiceComponent = () => {
  const dispatch = useAppDispatch();
  const aditionalService = useAppSelector((s) => s.Booking.additionalservices);
  // console.log("additional services : ", aditionalService);

  //   airportPickUp
  // :
  // true
  // message
  // :
  // true
  // tour
  // :
  // false
  return (
    <Stack gap={1} sx={{}}>
      <Typography variant="subtitle1">Aditional services</Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexDirection: "column",
          padding: "1% 4%",
        }}
      >
        {[
          {
            label: "Massage & Spa",
            PriceInfo: "    $65 per Person",
            totalPrice: "$65",
            value: aditionalService.message,
          },
          {
            label: "AirPort Pickup",
            PriceInfo: " $100 per car",
            totalPrice: "$100",
            value: aditionalService.airportPickUp,
          },
          {
            label: "SigtheeingTour",
            PriceInfo: "$165 per Person",
            totalPrice: "$165",
            value: aditionalService.tour,
          },
        ].map((item, i) => {
          return (
            <Paper
              key={i}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "0 2%",
                textAlign: "center",
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={item.value}
                      onChange={(e, i) => {
                        dispatch(
                          addAditionalService({ sevice: item.label, state: i })
                        );
                      }}
                      size="small"
                    />
                  }
                  label={item.label}
                />
              </FormGroup>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                {item.PriceInfo}
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <i> More Details</i>
              </Typography>

              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <b>{item.totalPrice}</b>
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

const BillingDetails = () => {
  const userInfoooo = useAppSelector((s) => s?.Booking?.userInfo);
  return (
    <Stack pt={3}>
      <Typography variant="subtitle1">Billing Details</Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        sx={{
          padding: "2% 4%",
        }}
      >
        {[
          { lable: "Name", data: userInfoooo?.Name },
          { lable: "Surname", data: userInfoooo?.Surname },
          { lable: "Email", data: userInfoooo?.Email },
          { lable: "Phone", data: userInfoooo?.Phone },
          {
            lable: "Address",
            data: `${userInfoooo?.City}- ${userInfoooo?.Country}`,
          },
        ].map((item, i) => {
          return (
            <Typography
              variant="body1"
              key={i}
              sx={{
                width: { xs: "50%", sm: "33.33%" },
              }}
            >
              <span style={{ fontWeight: 700 }}>{item.lable}:</span> {item.data}{" "}
            </Typography>
          );
        })}
      </Stack>
    </Stack>
  );
};

const SpicalRequest = () => {
  const dispatch = useAppDispatch();
  const spicalRequest = useAppSelector((s) => s.Booking.spicalRequest);

  return (
    <Stack pt={3}>
      <Typography variant="subtitle1">Spical Request</Typography>
      <Stack height="50%" sx={{ padding: "1% 4%" }}>
        <TextareaAutosize
          value={spicalRequest}
          maxRows={10}
          minRows={9}
          onChange={(e) => {
            dispatch(setSpacialRequest({ data: e.target.value }));
          }}
        />
      </Stack>
    </Stack>
  );
};

const TramsAndCondition = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((s) => s.Booking.IaGREEcHECKbOX);
  // console.log(spicalRequest, "spical requestttttt");
  return (
    <Stack direction="row">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={data}
              onChange={(e, i) => {
                dispatch(setIaGREEcHECKbOX({ stateofThecheckbox: i }));
              }}
              size="small"
              sx={{}}
            />
          }
          label=""
        />
      </FormGroup>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        I agree with all <a href="###">Trams & Condition</a>{" "}
      </Typography>
    </Stack>
  );
};
