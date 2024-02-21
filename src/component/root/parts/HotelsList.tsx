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
  CardHeader,
  Card,
  Skeleton,
  Avatar,
  CardMedia,
  CardContent,
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
import { useGetRoomsForHomeQuery } from "@/redux/apiRequest/LoginRegister";
const SwiperComponent = () => {
  const { data, isLoading } = useGetRoomsForHomeQuery({});
  if (isLoading) {
    return (
      <>
        <Stack
          direction="row"
          sx={{ overflow: "hidden", justifyContent: "space-between" }}
        >
          {["", "", "", ""].map((item, i) => {
            return (
              <Card
                key={i}
                sx={{
                  // maxWidth: 345,
                  m: 2,
                  minWidth: 220,
                  width: "20%",
                }}
              >
                <CardHeader />
                <Skeleton
                  sx={{ height: 190, margin: "0 4%" }}
                  animation="wave"
                  variant="rectangular"
                />

                <CardContent>
                  <>
                    <Skeleton
                      animation="wave"
                      height={15}
                      width="20%"
                      style={{ marginBottom: 6 }}
                    />
                    <Skeleton animation="wave" height={15} width="25%" />
                    <Skeleton animation="wave" height={15} width="22%" />
                    <Skeleton animation="wave" height={15} width="100%" />
                    <Skeleton animation="wave" height={15} width="100%" />
                  </>
                </CardContent>
              </Card>
            );
          })}
        </Stack>

        {/* <Box
          height={450}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography p={5} variant="h3">
            Loading Best Rooms...
          </Typography>
        </Box> */}
      </>
    );
  }

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
      style={{ padding: "10px", boxSizing: "border-box" }}
    >
      <Box sx={{ paddingTop: "50px" }}>
        <SwiperControlButton />
      </Box>
      {
        // [
        //   { img: "/RoomBookingpage/room1.jpg", id: "1" },
        //   { img: "/hotelsphoto/Screenshot 2023-10-03 220127.jpg", id: "2" },
        //   { img: "/hotelsphoto/Screenshot 2023-10-03 220127.jpg", id: "3" },
        //   { img: "/hotelsphoto/Screenshot 2023-10-03 220328.png", id: "4" },
        //   { img: "/hotelsphoto/Screenshot 2023-10-03 220355.png", id: "5" },
        //   { img: "/hotelsphoto/Screenshot 2023-10-03 220127.jpg", id: "6" },
        // ]
        data?.roomsData?.map((item: any, i: any) => {
          return (
            <SwiperSlide key={i}>
              {/* <div
                style={{
                  height: 200,
                  width: 200,
                  border: "1px solid red",
                }}
              >
                hirak
              </div> */}
              <HotelProductCard item={item} />
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

const HotelProductCard: React.FC<{
  item: {
    imageurl: string;
    id: string;
    abalableServices: any;
    _id: string;
    title: string;
    pricePerNight: string;
    describtion: string;
  };
}> = ({ item }) => {
  // console.log("itemmm===", item);
  return (
    <Paper
      elevation={12}
      sx={{
        display: "flex",
        minHeight: 450,
        width: {
          xs: "215px",
          sm: "260px",
        },
        justifyContent: "space-around",
        flexDirection: "column",
        gap: "0.4rem",
        padding: "1rem",
        borderRadius: "10px",
        margin: "auto",
        transition: "all 300ms ease-in",
        "&:hover": {
          // scale: "1.015",
          boxShadow: "0px 72px 49px -51px, rgba(136,160,255,0.21)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(136,160,255,0.46) 217.91%)",
        },
      }}
    >
      {/* IAMGE */}
      <Box sx={{ width: "100%", borderRadius: "10px", height: 170 }}>
        <Image
          src={item?.imageurl}
          width={1000}
          height={1000}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
          alt="room image"
        />
      </Box>
      {/* TEXT */}
      <Typography
        variant="h6"
        sx={{ fontWeight: "600", color: "gray", paddingTop: "5px" }}
      >
        <span style={{ color: "orange" }}>$</span>
        <span>{item?.pricePerNight}</span>
      </Typography>
      <Box>
        <Typography
          variant="subtitle2"
          sx={{ color: "#1f3e72", fontWeight: "bold" }}
        >
          {item.title}, Name of the hotel
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", fontWeight: "600" }}>
          {item.describtion}
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
        <CardActions id={item._id} abalableServices={item?.abalableServices} />
      </Box>
    </Paper>
  );
};
import { useRouter } from "next/navigation";
import WcIcon from "@mui/icons-material/Wc";
const CardActions = ({
  id,
  abalableServices,
}: {
  id: string;
  abalableServices: any;
}) => {
  const router = useRouter();
  return (
    <>
      <Stack
        direction="row"
        spacing={0}
        justifyContent="space-between"
        color="primary"
      >
        {abalableServices.Breakfast && <WifiIcon color="primary" />}
        {abalableServices.Coffeemaker && (
          <FireExtinguisherIcon color="primary" />
        )}
        {abalableServices.Hairdryer && <PoolIcon color="primary" />}
        {abalableServices.Sauna && <PetsIcon color="primary" />}
        {abalableServices.WidesreenTv && <FreeBreakfastIcon color="primary" />}
        {abalableServices.miniBar && <DeckIcon color="primary" />}
        {abalableServices.smartPhone && <WcIcon color="primary" />}
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
