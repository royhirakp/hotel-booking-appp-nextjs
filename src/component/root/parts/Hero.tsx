"use client";
import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import MainContainer from "@/component/container/MainContainer";
import Button from "@mui/material/Button";
import RoomIcon from "@mui/icons-material/Room";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <div>
      {/* <MainContainer style={{ border: "5px solid" }}> */}
      <Paper
        sx={{
          margin: {
            xs: "0 5px",
            sm: "10px 10px",
            md: "10px 30px",
          },
          padding: {
            xs: "0px 2px",
            sm: "20px 0",
          },
          borderRadius: "20px",
        }}
      >
        <Stack
          sx={{
            padding: {
              // xs: "5px",
            },
            width: {
              xs: "250px",
              sm: "550px",
              md: "730px",
              lg: "730px",
              xl: "900px",
            },
            height: {
              xs: "750px",
              sm: "400px",
              md: "400px",
              xl: "500px",
            },
            margin: "0 auto",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Stack
            flex={1}
            padding={1}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TEXTDataCard />
          </Stack>
          <Box
            flex={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageCard />
          </Box>
        </Stack>
      </Paper>
      {/* </MainContainer> */}
    </div>
  );
};

export default Hero;

const TEXTDataCard = () => {
  const router = useRouter();
  return (
    <>
      <Box justifyContent="center" alignItems="center">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            maxWidth: {
              xs: "145px",
            },
            margin: {
              xs: "0 auto",
              sm: "0",
            },
          }}
        >
          Discover Most Sutable Property
        </Typography>
        <Typography
          variant="body2"
          sx={{
            maxWidth: {
              xs: "220px",
              sm: "320px",
              md: "350px",
              lg: "400px",
            },

            margin: {
              xs: "20px auto",
              sm: "20px 0",
            },
          }}
        >
          <span>Find a variety properties that suit you very</span>
          <br />
          <span>all dificult in finding a residence for you easilty</span>
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#ffff",
          display: "flex",
          borderRadius: "5px",
          border: "3px solid rgba(120 , 120 , 120 ,0.374)",
          padding: "0.4rem 1rem",
          justifyContent: "space-between",
          alignItems: "center",
          width: {
            xs: "200px",
            sm: "200px",
            md: "250px",
          },
          margin: {
            xs: "0 auto",
            sm: "0 0 0 3px",
          },
        }}
      >
        <RoomIcon color="error" />
        <input
          type="text"
          style={{ width: "80%", height: "90%", border: "none" }}
        />
        <Button
          onClick={() => {
            router.push("/bookingPage");
          }}
          variant="contained"
        >
          Search
        </Button>
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        pt={4}
        sx={{
          maxWidth: "400px",
          minWidth: "225px",
          margin: {
            xs: "0 auto",
            sm: "0",
          },
        }}
      >
        {[
          { value: 8800, end: 9000, Text: "primium Products" },
          { value: 1800, end: 2000, Text: "Haapy Coustomers" },
          { value: 1, end: 28, Text: "Award Winning" },
        ].map((item, i) => {
          return (
            <Box key={i}>
              <Typography variant="h6">
                {/* {item.value} */}
                <CountUp start={item.value} end={item.end} />
                <span style={{ color: "#e29e9e" }}>+</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "8px", sm: "10px" } }}
              >
                {item.Text}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

const ImageCard = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "260px",
          sm: "260px",
          md: "260px",
        },
        height: {
          xs: "290px",
          // md: "100%",
        },
        boxSizing: "border-box",
        border: "8px solid",
        borderTopLeftRadius: "50%",
        borderTopRightRadius: "50%",
      }}
    >
      <Image
        src="/Screenshot 2023-10-02 152439.png"
        width={1000}
        height={1000}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
        }}
      />
    </Box>
  );
};
