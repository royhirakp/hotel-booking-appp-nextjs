"use client";
import NewHeader from "@/component/NewHeader/NewHeader";
import ThemeProvidor from "@/component/ThemeProvidor/ThemeProvidor";
import Footer from "@/component/root/parts/Footer";
import Header from "@/component/root/parts/Header";
import NavBar from "@/component/root/parts/NavBar";
import { Box, Divider, Paper, Stack } from "@mui/material";
const colorBagroundEffectStyle: any = {
  position: "absolute",
  width: "20rem",
  height: "20rem",
  background: "rgba(25,205,255,0.522)",
  filter: "blur(100px)",
  borderRadius: "15px",
  top: "160px",
  border: "1px solid",
};
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ThemeProvidor>
        {/* <div
          style={{
            position: "relative",
            overflowX: "clip",
            height: "100vh",
          }}
        > */}
        {/* <div style={{ background: "var(--blue)", position: "relative" }}> */}
        {/* baground effect / color effect  */}
        {/* <div style={{}} /> */}
        {/* <div
            className="container"
            style={
              {
                // height: "auto",
                // display: "flex",
                // flexDirection: "column",
                // minHeight: "100vh",
                // justifyContent: "space-between",
              }
            }
          > */}
        {/* header */}
        {/* <div style={{}}>
              <NewHeader />
            </div> */}

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
        {/* <Box sx={{}}>
              <Footer />
            </Box> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
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
    </>
  );
};
