"use client";
import React, { useRef } from "react";
import { Box, Button, Stack, Typography, Paper, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { refreshPageOrMakeStageZero } from "@/redux/slices/BookingSlice";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ConfermationPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const data = useAppSelector((s) => s.Booking.userInfo);
  const total = useAppSelector((s) => s.Booking.totalPrice);
  const aditionalService = useAppSelector((s) => s.Booking.additionalservices);
  const paymentMode = useAppSelector((s) => s.Booking.paymentMethod);
  const pdfRef = useRef<any>();
  function downlodePdf() {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgx = (pdfWidth - imgWidth * ratio) / 2;
      const imgy = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgx,
        imgy,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  }

  return (
    <Box ref={pdfRef}>
      <Paper>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            padding: "20px",
          }}
        >
          Your Booking is confirm{" "}
          <CheckCircleIcon
            color="primary"
            fontSize="large"
            sx={{ paddingLeft: "5px" }}
          />
        </Typography>
      </Paper>

      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Typography pt={2} variant="subtitle1" color="secondary">
            Booking Details
          </Typography>

          <Typography variant="subtitle2">Booking ID: 55522522</Typography>
        </Box>
        <Stack
          direction="column"
          sx={{
            justifyContent: "center",
            marginLeft: "5%",
          }}
        >
          <Button onClick={downlodePdf}>
            Download receipt
            <Box
              component="span"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 1,
              }}
            >
              <DownloadIcon />
            </Box>
          </Button>
        </Stack>
      </Stack>
      <Divider />
      <Typography variant="body1" pb={1} color="primary">
        <span style={{ fontWeight: 700 }}>Aditional Services:</span>{" "}
        <span>{aditionalService?.message ? "Massage & Spa     " : ""}</span>
        <span>
          {aditionalService?.airportPickUp ? "AirPort Pickup   " : ""}
        </span>
        <span>{aditionalService?.tour ? "SigtheeingTour" : ""}</span>
        {/* <span>{`${addAditionalService.message ? "true" : "false"}`}</span> */}
      </Typography>
      <Stack direction="row" flexWrap="wrap" pt={2}>
        {[
          { lable: "Name", data: data?.Name },
          { lable: "Surname", data: data?.Surname },
          { lable: "Email", data: data?.Email },
          { lable: "Phone", data: data?.Phone },
          { lable: "Room", data: data?.Room },
          { lable: "CheckIn", data: "09/555" },
          { lable: "Check Out", data: "16/521/2" },
          { lable: "Guest", data: "3 Adults" },
          { lable: "Total", data: `$${total}` },
          { lable: "Paymant Mode", data: paymentMode },
        ].map((item, i) => {
          return (
            <Typography
              variant="body1"
              key={i}
              sx={{ width: { xs: "50%", sm: "33.33%" }, padding: "0.5% 0" }}
            >
              <span style={{ fontWeight: 700 }}>{item.lable}:</span> {item.data}{" "}
            </Typography>
          );
        })}
      </Stack>
      <Stack pt={2} pb={2} direction="row">
        <Button
          variant="outlined"
          sx={{ borderRadius: 0 }}
          onClick={() => {
            router.push("/webapp");
            setTimeout(() => {
              dispatch(refreshPageOrMakeStageZero());
            }, 1000);
          }}
        >
          Return to Home
        </Button>
      </Stack>
    </Box>
  );
};

export default ConfermationPage;
