"use client";
import MainContainer from "@/component/container/MainContainer";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";
import CallIcon from "@mui/icons-material/Call";
import Image from "next/image";
// main component
const ContactPage = () => {
  return (
    <div>
      <MainContainer style={{}}>
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            maxWidth: "1500px",
            margin: "auto",
            // height: { xs: "400px", sm: "200px" },
          }}
        >
          <Box sx={{}} flex={1}>
            <LeftsideButtonContainer />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "end" },
              alignItems: { xs: "center", sm: "end" },
              marginTop: { xs: "20px", sm: "0" },
            }}
            flex={1}
          >
            <RightSideImageContainer />
          </Box>
        </Stack>
      </MainContainer>
    </div>
  );
};

export default ContactPage;
// component parts
const LeftsideButtonContainer = () => {
  return (
    <>
      <Stack direction="column" sx={{ mt: { xs: 1, sm: 4 } }}>
        {/* text */}
        <Box sx={{ marginLeft: "20px", marginBottom: "20px" }}>
          <Typography variant="h5" color="primary.light">
            Our Contact Us
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Easy to contact us
          </Typography>
          <Typography variant="body1">
            we alwes ready to help you by providing <br />
            the best service ypou. we bwlivw a good{" "}
          </Typography>
        </Box>
        {/* contact cards */}
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{ mr: { xs: 0, sm: "5px", md: "0" } }}
        >
          <ContacControlsCardList />
        </Stack>
      </Stack>
    </>
  );
};

const RightSideImageContainer = () => {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: "260px",
            sm: "280px",
            md: "300px",
          },
          height: {
            xs: "290px",
            sm: "310px",
            md: "330px",
          },
          boxSizing: "border-box",
          border: "8px solid #d7d7d7",
          borderRadius: "7px",
        }}
      >
        <Image
          src="/hotelsphoto/Screenshot 2023-10-03 220127.jpg"
          alt=""
          width={1000}
          height={1000}
          style={{
            width: "100%",
            height: "100%",
            // borderTopLeftRadius: "50%",
            // borderTopRightRadius: "50%",
            scale: "1.01",
            borderRadius: "7px",
          }}
        />
      </Box>
    </>
  );
};

const ContacControlsCardList = () => {
  return (
    <>
      {[
        [
          {
            title: "Call",
            no: "0123456789",
            icon: <CallIcon sx={{ color: "#df5d5d" }} />,
          },
          {
            title: "Chat",
            no: "0123456789",
            icon: <ChatIcon sx={{ color: "#643d8c" }} />,
          },
        ],

        [
          {
            title: "whatsdj",
            no: "0123456789",
            icon: <WhatsAppIcon sx={{ color: "#3b7d0a" }} />,
          },
          {
            title: "Message",
            no: "0123456789",
            icon: <EmailIcon sx={{ color: "#d21818" }} />,
          },
        ],
      ].map((arr, i) => {
        return (
          <Stack direction="row" justifyContent="space-around" key={i * 0.0121}>
            {arr.map((item, j) => {
              return (
                <Paper
                  sx={{
                    flexGrow: 1,
                    // height: "100px",
                    marginTop: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    // width: "16rem",
                    maxWidth: {
                      xs: "48%",
                    },
                    padding: "1rem",
                    transition: "all 300ms ease-in",
                    margin: {
                      xs: "2px",
                      // sm: 1,
                    },
                    "&:hover": {
                      scale: "1.02",
                      boxShadow: "1px 2px 5px",
                    },
                  }}
                  key={j * 0.255}
                >
                  <ContactCardContains
                    icon={item.icon}
                    no={item.no}
                    title={item.title}
                  />
                </Paper>
              );
            })}
          </Stack>
        );
      })}
    </>
  );
};

const ContactCardContains: React.FC<{
  icon: React.ReactNode;
  title: string;
  no: string;
}> = ({ icon, title, no }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Box flex={1} sx={{ paddingRight: { xs: "3%", md: 2 } }}>
          <Box
            sx={{
              width: {
                xs: "30px",
                md: "40px",
              },

              height: {
                xs: "30px",
                md: "40px",
              },
              borderRadius: "50%",
              padding: "5px",
              marginBottom: "9px",
              background: "#e2dfdf",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </Box>
        </Box>
        <Box flex={2}>
          <Typography variant="subtitle2">{title}</Typography>

          <Typography variant="body1">{no}</Typography>
        </Box>
      </Stack>
      <Stack>
        <Button
          sx={{
            // color: "red",
            margin: "9px 0px 0 0",

            transition: "all 300ms ease-in",
            "&:hover": {
              scale: "0.9",
            },
          }}
          variant="contained"
        >
          {title} now
        </Button>
      </Stack>
    </>
  );
};
