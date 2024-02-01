"use client";
import MainContainer from "@/component/container/MainContainer";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Box,
  Typography,
  Paper,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import PoolIcon from "@mui/icons-material/Pool";
import PetsIcon from "@mui/icons-material/Pets";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import WifiIcon from "@mui/icons-material/Wifi";
import DeckIcon from "@mui/icons-material/Deck";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Image from "next/image";
const HotelsList = () => {
  return (
    <div>
      <MainContainer style={{}}>
        <Box sx={{ maxWidth: "1500px", margin: "auto" }}>
          {/* headding */}
          <Box sx={{ margin: "15x 0 0 0", marginTop: "30px" }}>
            <Headding />
          </Box>
          {/* slider */}
          <Box sx={{ padding: "10px 0 0 0" }}>
            <SwiperComponent />
          </Box>
        </Box>
      </MainContainer>
    </div>
  );
};

export default HotelsList;

const Headding = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "orange", fontWeight: "600" }}>
        Best Choices
      </Typography>
    </>
  );
};
const SwiperComponent = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      breakpoints={{
        480: { slidesPerView: 1 },
        700: { slidesPerView: 2 },
        1180: { slidesPerView: 3 },
        1200: { slidesPerView: 2 },
        1400: { slidesPerView: 3 },
        1740: { slidesPerView: 4 },
        // 2100: { slidesPerView: 5 },
        // 2540: { slidesPerView: 6 },
      }}
      style={{ padding: "15px 10px 20px 10px", boxSizing: "border-box" }}
    >
      <Box sx={{ paddingTop: "50px" }}>
        <SwiperControlButton />
      </Box>
      {[
        { img: "/RoomBookingpage/room1.jpg", id: "1" },
        { img: "/hotelsphoto/Screenshot 2023-10-03 220127.jpg", id: "2" },
        { img: "/hotelsphoto/Screenshot 2023-10-03 220127.jpg", id: "3" },
        { img: "/hotelsphoto/Screenshot 2023-10-03 220328.png", id: "4" },
        { img: "/hotelsphoto/Screenshot 2023-10-03 220355.png", id: "5" },
        { img: "/hotelsphoto/Screenshot 2023-10-03 220127.jpg", id: "6" },
      ].map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <HotelProductCard item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
const HotelProductCard: React.FC<{ item: { img: string; id: string } }> = ({
  item,
}) => {
  return (
    <Paper
      elevation={12}
      sx={{
        display: "flex",

        width: {
          xs: "215px",
          sm: "260px",
        },
        flexDirection: "column",
        gap: "0.4rem",
        padding: "1rem",
        borderRadius: "10px",
        margin: "auto",
        transition: "all 300ms ease-in",
        "&:hover": {
          scale: "1.015",
          boxShadow: "0px 72px 49px -51px, rgba(136,160,255,0.21)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(136,160,255,0.46) 217.91%)",
        },
      }}
    >
      {/* IAMGE */}
      <Box sx={{ width: "100%", borderRadius: "10px" }}>
        <Image
          src={item.img}
          width={1000}
          height={1000}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
          alt=""
        />
      </Box>
      {/* TEXT */}
      <Typography
        variant="h6"
        sx={{ fontWeight: "600", color: "gray", paddingTop: "5px" }}
      >
        <span style={{ color: "orange" }}>$</span>
        <span>450</span>
      </Typography>
      <Box>
        <Typography
          variant="subtitle2"
          sx={{ color: "#1f3e72", fontWeight: "bold" }}
        >
          Name of the hotel
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", fontWeight: "600" }}>
          Lorem ipsum, dolor sit amet
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="body2"
          color="primary"
          sx={{ fontWeight: "500" }}
          pb={1}
        >
          Services
        </Typography>
        <CardActions id={item.id} />
      </Box>
    </Paper>
  );
};
import { useRouter } from "next/navigation";
const CardActions = ({ id }: { id: string }) => {
  const router = useRouter();
  return (
    <>
      <Stack
        direction="row"
        spacing={0}
        justifyContent="space-between"
        color="primary"
      >
        <WifiIcon color="primary" />
        <FireExtinguisherIcon color="primary" />
        <PoolIcon color="primary" />
        <PetsIcon color="primary" />
        <FreeBreakfastIcon color="primary" />
        <DeckIcon color="primary" />
      </Stack>
      <Stack mt={3} sx={{}}>
        <Button
          onClick={() => {
            router.push(`/room/${id}`);
          }}
          variant="contained"
        >
          Book Now
        </Button>
      </Stack>
    </>
  );
};

const SwiperControlButton = () => {
  const swiper = useSwiper();

  return (
    <>
      <Stack direction="row" spacing={1}>
        <IconButton onClick={() => swiper.slidePrev()}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => swiper.slideNext()}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </>
  );
};
