"use client";
import React, { useEffect } from "react";
import Header from "@/component/root/parts/Header";
import { Divider } from "@mui/material";
import NavBar from "@/component/root/parts/NavBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Hero from "@/component/root/parts/Hero";
import ThemeProvidor from "@/component/ThemeProvidor/ThemeProvidor";
import CompanyList from "@/component/root/parts/CompanyList";
import HotelsList from "@/component/root/parts/HotelsList";
import CoreValueComponent from "@/component/root/parts/CoreValueComponent";
const Main = () => {
  return (
    <ThemeProvidor>
      <div
        style={{
          position: "relative",
          overflowX: "clip",
          height: "1000px",
        }}
      >
        <div style={{ background: "var(--blue)", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              width: "20rem",
              height: "20rem",
              background: "rgba(25,205,255,0.522)",
              filter: "blur(100px)",
              borderRadius: "15px",
              top: "160px",
            }}
          />
          <div className="container" style={{ height: "auto" }}>
            {/* header */}
            <header
              style={{
                position: "sticky",
                zIndex: "99",
                top: "0",
              }}
            >
              <Paper elevation={0}>
                <Box
                  color="primary.main"
                  bgcolor="primary.light"
                  sx={{ padding: "15px 0 0 0" }}
                >
                  <Header />
                  <Divider />
                  <NavBar />
                </Box>
              </Paper>
            </header>

            <Box
              sx={{
                marginTop: {
                  xs: "0px",
                  sm: "0px",
                  md: "20px",
                },
              }}
            >
              <Hero />
              <Divider sx={{ margin: "20px 0" }} />
              <CompanyList />
              <Divider />
              <HotelsList />
              <Divider />
              <CoreValueComponent />
            </Box>
          </div>
        </div>
      </div>
    </ThemeProvidor>
  );
};

export default Main;
