"use client";
import React from "react";
import CompanyList from "@/component/root/parts/CompanyList";
import ContactPage from "@/component/root/parts/ContactPage";
import CoreValueComponent from "@/component/root/parts/CoreValueComponent";
import Hero from "@/component/root/parts/Hero";
import HotelsList from "@/component/root/parts/HotelsList";
import StartyourJourneycomponent from "@/component/root/parts/StartyourJourneycomponent";
import { Box, Divider } from "@mui/material";

const HomePageMain = () => {
  return (
    <div>
      <Box
        sx={{
          paddingTop: {
            xs: "5px",
          },
        }}
      >
        <Hero />
      </Box>
      <HotelsList />
      <CompanyList />
      <Divider />
      <CoreValueComponent />
      <Divider />
      <ContactPage />
      <StartyourJourneycomponent />
    </div>
  );
};

export default HomePageMain;
