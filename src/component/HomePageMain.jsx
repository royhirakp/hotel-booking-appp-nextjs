"use client";
import React from "react";
import CompanyList from "@/component/root/parts/CompanyList";
import ContactPage from "@/component/root/parts/ContactPage";
import CoreValueComponent from "@/component/root/parts/CoreValueComponent";
import Hero from "@/component/root/parts/Hero";
import HotelsList from "@/component/root/parts/HotelsList";
import StartyourJourneycomponent from "@/component/root/parts/StartyourJourneycomponent";
import { Box, Divider } from "@mui/material";
import { useGetRoomsForHomeQuery } from "@/redux/apiRequest/LoginRegister";

const HomePageMain = () => {
  const { data } = useGetRoomsForHomeQuery({});
  console.log(data?.roomsData, "===== home oahe 17.35");

  return (
    <div>
      <Box
        sx={{
          paddingTop: {
            xs: "5px",
          },
        }}
      >
        {data?.roomsData.map((item, i) => {
          console.log(item, i);

          return <div key={i}>hirak</div>;
        })}
        <Hero />
      </Box>
      <CompanyList />
      <HotelsList />
      <Divider />
      <CoreValueComponent />
      <Divider />
      <ContactPage />
      <StartyourJourneycomponent />
    </div>
  );
};

export default HomePageMain;
