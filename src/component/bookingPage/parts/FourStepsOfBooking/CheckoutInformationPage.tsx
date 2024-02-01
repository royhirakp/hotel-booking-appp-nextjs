"use client";
import React, { useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import {
  addAditionalService,
  setPaymentInfo,
} from "@/redux/slices/BookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
const CheckoutInformationPage = ({ handelNext }: { handelNext: any }) => {
  return (
    <div>
      <Box>
        <UserandRoomDetails />
      </Box>
      <Box>
        <PaymentDetails handelNext={handelNext} />
      </Box>
    </div>
  );
};

export default CheckoutInformationPage;
const UserandRoomDetails = () => {
  const data = useAppSelector((s) => s.Booking.userInfo);
  const aditionalService = useAppSelector((s) => s.Booking.additionalservices);
  const total = useAppSelector((s) => s.Booking.totalPrice);
  console.log("datataaa form checkinfototaltotaltotal ", total);
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={700} pb={1}>
        Booking Details
      </Typography>
      <Typography variant="body1" pb={1} color="primary">
        <span style={{ fontWeight: 700 }}>Aditional Services:</span>{" "}
        <span>{aditionalService?.message ? "Massage & Spa     " : ""}</span>
        <span>
          {aditionalService?.airportPickUp ? "AirPort Pickup   " : ""}
        </span>
        <span>{aditionalService?.tour ? "SigtheeingTour" : ""}</span>
        {/* <span>{`${addAditionalService.message ? "true" : "false"}`}</span> */}
      </Typography>
      <Stack direction="row" flexWrap="wrap" sx={{ paddingLeft: "10%" }}>
        {[
          { lable: "Name", data: data?.Name },
          { lable: "Surname", data: data?.Surname },
          { lable: "Email", data: data?.Email },
          { lable: "Phone", data: data?.Phone },
          { lable: "Address", data: `${data?.City} - ${data?.Country}` },
          { lable: "City", data: data?.City },
          { lable: "Country", data: data?.Country },
          { lable: "Pin", data: data?.Pin },
          { lable: "Room", data: data?.Room },
          { lable: "CheckIn", data: "09/555" },
          { lable: "Check Out", data: "16/521/2" },
          { lable: "Guest", data: "3 Adults" },
          // { lable: "Aditional Services ", data: "Airport Pickup" },
          { lable: "Total", data: `$${total}` },
        ].map((item, i) => {
          return (
            <Typography
              variant="body1"
              key={i}
              sx={{ width: { xs: "50%", sm: "33.33%" } }}
              pb={1}
            >
              <span style={{ fontWeight: 700 }}>{item.lable}:</span> {item.data}{" "}
            </Typography>
          );
        })}
      </Stack>
    </Box>
  );
};

const PaymentDetails = ({ handelNext }: { handelNext: any }) => {
  const [paymentState, setPaymentState] = useState(1);

  let PaymentComponet;
  switch (paymentState) {
    case 0:
      PaymentComponet = (
        <div style={{ height: "100%" }}>
          <PaypalComponetPayment handelNext={handelNext} />
        </div>
      );
      break;
    case 1:
      PaymentComponet = (
        <div style={{ height: "100%" }}>
          <CraditCardComponent handelNext={handelNext} />
        </div>
      );
      break;
    case 2:
      PaymentComponet = (
        <div style={{ height: "100%" }}>
          <BankTransferComponant handelNext={handelNext} />
        </div>
      );
      break;
    case 3:
      PaymentComponet = (
        <Box width="100%" sx={{ height: "100%" }}>
          <PayOnArivalComponent handelNext={handelNext} />
        </Box>
      );
      break;

    default:
      PaymentComponet = <div>defoult</div>;
  }

  function handelpaymentOption(key: number) {
    switch (key) {
      case 0:
        setPaymentState(0);
        break;
      case 1:
        setPaymentState(1);
        break;
      case 2:
        setPaymentState(2);
        break;
      case 3:
        setPaymentState(3);
        break;
      default:
        setPaymentState(0);
    }
  }
  return (
    <Box mt={2}>
      <Typography variant="subtitle1" fontWeight={700}>
        Payment Option
      </Typography>
      <Box
        sx={{
          // margin: "20px 10% 0px 10%",
          textAlign: "center",
          background: "#ffff",
          maxWidth: "550px",
          borderRadius: "5px",
          margin: "auto",
        }}
      >
        <Stack
          direction="row"
          sx={{
            borderRadius: "5px",
            gap: {
              xs: 0,
              sm: 0.1,
            },
          }}
        >
          {[
            {
              lable: "Paypal",
              icon: <CurrencyExchangeIcon fontSize="small" />,
              key: 0,
            },
            {
              lable: "Card",
              icon: <CreditCardIcon fontSize="small" />,
              key: 1,
            },
            {
              lable: "Bank Transfer",
              icon: <AccountBalanceIcon fontSize="small" />,
              key: 2,
            },
            {
              lable: "Pay On Arival",
              icon: <AttachMoneyIcon fontSize="small" />,
              key: 3,
            },
          ].map((item, i) => {
            return (
              <Box
                key={i}
                flex={1}
                sx={{
                  borderRadius: "5px",
                  bgcolor: `${paymentState == item.key ? "#FFFF" : "#c7c2c2"}`,
                  width: {
                    xs: "50px",
                    sm: "550px",
                  },
                }}
              >
                <Button
                  onClick={() => {
                    handelpaymentOption(item.key);
                  }}
                  sx={{
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  {item.icon}
                  <Box
                    component="span"
                    sx={{
                      display: { xs: "none", sm: "inline" },
                      fontSize: {
                        sm: "8px",
                      },
                    }}
                  >
                    {item.lable}
                  </Box>
                </Button>
              </Box>
            );
          })}
        </Stack>
        <Box sx={{ width: "100%", height: "250px" }}>{PaymentComponet}</Box>
      </Box>
    </Box>
  );
};

const PaypalComponetPayment = ({ handelNext }: { handelNext: any }) => {
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        Paypal id
      </Typography>
      <TextField label="paypal id" sx={{ width: "40%" }} />
      <Stack>
        <Button
          variant="contained"
          sx={{
            width: "100px",
            padding: "8px",
            borderRadius: 0,
            ".MuiButton-root": {},
          }}
          onClick={() => {
            handelNext();
            dispatch(setPaymentInfo({ data: "papal" }));
          }}
        >
          pay
        </Button>
      </Stack>
    </Box>
  );
};

const CraditCardComponent = ({ handelNext }: { handelNext: any }) => {
  const dispatch = useAppDispatch();
  return (
    <Stack
      sx={{ padding: "1%", height: "100%" }}
      direction="column"
      justifyContent="center"
      // alignContent=''
      gap={2}
    >
      <Stack direction="row" justifyContent="space-between" gap={1}>
        <Box
          display="flex"
          sx={{
            gap: 1,
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              // width: "80px",
              minWidth: "65px",
            }}
            variant="body1"
          >
            Card Number
          </Typography>
          <TextField type="number" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              // width: "80px",
            }}
          >
            Name
          </Typography>
          <TextField />
        </Box>
      </Stack>

      <Stack
        direction="row"
        gap={1}
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            display="flex"
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
            gap={1}
          >
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                // width: "80px",
                minWidth: "65px",
              }}
            >
              Exp Date
            </Typography>
            <TextField type="date" />
          </Box>
          <Box
            display="flex"
            gap={1}
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              CVV
            </Typography>
            <TextField sx={{ maxWidth: "80px" }} />
          </Box>
        </Box>

        <Stack sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              width: "100px",
              padding: "8px",
              borderRadius: 0,
              ".MuiButton-root": {},
            }}
            onClick={() => {
              handelNext();
              dispatch(setPaymentInfo({ data: "CraditCard" }));
            }}
          >
            pay
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

const BankTransferComponant = ({ handelNext }: { handelNext: any }) => {
  const dispatch = useAppDispatch();

  return (
    <Stack
      sx={{ padding: "10%", height: "100%" }}
      direction="column"
      justifyContent="center"
      // alignContent=''
      gap={2}
    >
      <Box display="flex" sx={{ gap: 1 }}>
        <Typography
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            // width: "80px",
          }}
          variant="body1"
        >
          Banifisary Name
        </Typography>
        <TextField sx={{ width: "50%" }} />
      </Box>
      <Box display="flex" sx={{ gap: 1 }}>
        <Typography
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            width: "80px",
          }}
          variant="body1"
        >
          Account No
        </Typography>
        <TextField sx={{ width: "50%" }} type="number" />
      </Box>

      <Stack direction="row" gap={1}>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            width: "80px",
          }}
        >
          IFSC CODE
        </Typography>
        <TextField />
        <Stack sx={{ justifyContent: "center" }} pl={2}>
          <Button
            variant="contained"
            sx={{
              width: "100px",
              padding: "8px",
              borderRadius: 0,
              ".MuiButton-root": {},
            }}
            onClick={() => {
              dispatch(setPaymentInfo({ data: "Bank Transfer" }));
              handelNext();
            }}
          >
            pay
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

const PayOnArivalComponent = ({ handelNext }: { handelNext: any }) => {
  const dispatch = useAppDispatch();

  return (
    <Stack
      direction="column"
      justifyContent="center"
      // alignItems="center"
      sx={{ height: "100%" }}
    >
      <Typography variant="subtitle1" textAlign="start" pl={5}>
        Spicial request
      </Typography>
      <Stack height="50%" sx={{ padding: "10px 20%" }}>
        <TextareaAutosize maxRows={10} minRows={9} />
      </Stack>
      <Stack direction="row" justifyContent="center">
        <Button
          variant="contained"
          sx={{
            width: "100px",
            padding: "8px",
            borderRadius: 0,
            ".MuiButton-root": {},
          }}
          onClick={() => {
            dispatch(setPaymentInfo({ data: "PayOn Arival" }));
            handelNext();
          }}
        >
          Book
        </Button>
      </Stack>
    </Stack>
  );
};
