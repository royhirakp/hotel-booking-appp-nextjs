"use client";
import NewHeader from "@/component/NewHeader/NewHeader";
import ThemeProvidor from "@/component/ThemeProvidor/ThemeProvidor";
// import NewHeader from "@/component/newHeader/NewHeader";
import Footer from "@/component/root/parts/Footer";
import Hero from "@/component/root/parts/Hero";
import { Box, Divider, Paper, Stack } from "@mui/material";
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
    <section>
      <ThemeProvidor>
        <div
          style={{
            position: "relative",
            overflowX: "clip",
            height: "100vh",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* baground effect / color effect  */}
            <div style={colorBagroundEffectStyle} />
            <div
              className="container"
              style={{
                height: "auto",
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                justifyContent: "space-between",
              }}
            >
              {/* header */}
              <div
                style={{
                  position: "sticky",
                  zIndex: "99",
                  top: "0",
                }}
              >
                <HeaderComponent />
              </div>

              {/* main part / medile part */}
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

              {/* foterrr container  */}
              <Box sx={{}}>
                <Footer />
              </Box>
            </div>
          </div>
        </div>
      </ThemeProvidor>
    </section>
  );
}

const HeaderComponent = () => {
  return (
    <>
      <header
        style={{
          position: "sticky",
          zIndex: "99",
          top: "0",
        }}
      >
        <Box>
          <NewHeader />
        </Box>
      </header>
      <Box
        sx={{
          marginTop: {
            xs: "0",
            lg: "5px",
          },
        }}
      >
        {/* <Hero /> */}
      </Box>
    </>
  );
};
