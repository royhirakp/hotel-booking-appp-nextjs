"use client";
import BookingPage from "@/component/bookingPage/BookingPage";
import React from "react";
import MainContainer from "@/component/container/MainContainer";
const page = () => {
  return (
    <div>
      <MainContainer style={{}}>
        <BookingPage />
      </MainContainer>
    </div>
  );
};

export default page;
