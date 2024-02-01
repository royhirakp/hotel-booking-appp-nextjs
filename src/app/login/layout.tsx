"use client";
import ThemeProvidor from "@/component/ThemeProvidor/ThemeProvidor";

import { Box } from "@mui/material";
const colorBagroundEffectStyle: any = {
  position: "absolute",
  width: "20rem",
  height: "20rem",
  background: "rgba(25,205,255,0.522)",
  filter: "blur(100px)",
  borderRadius: "15px",
  top: "160px",
};
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvidor>
      <div
        style={{
          position: "relative",
          overflowX: "clip",
        }}
      >
        <div style={{ background: "var(--blue)", position: "relative" }}>
          <div style={colorBagroundEffectStyle} />
          <div
            className="container"
            style={{
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                marginTop: {
                  xs: "0px",
                  sm: "0px",
                  md: "20px",
                },
              }}
            >
              {children}
            </Box>
          </div>
        </div>
      </div>
    </ThemeProvidor>
  );
}
