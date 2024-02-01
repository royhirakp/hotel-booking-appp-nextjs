import React from "react";
import MainContainer from "@/component/container/MainContainer";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
const CompanyList = () => {
  return (
    <MainContainer style={{}}>
      <Box
        sx={{
          paddingBottom: "30px",
          paddingTop: "30px",
          // border: "1px solid",
          maxWidth: "1500px",
          margin: "auto",
        }}
      >
        <Box sx={{ paddingBottom: "20px" }}>
          <Typography variant="h5" fontWeight={800}>
            Our Hotels
          </Typography>
        </Box>
        <Stack direction="row">
          {[
            { id: 1, url: "/company2.png" },
            { id: 2, url: "/company3.png" },
            { id: 3, url: "/company6.webp" },
            { id: 4, url: "/company7.jpg" },
          ].map((item, i) => {
            return (
              <Box
                key={i * 0.01212}
                flex="1 0 10px"
                sx={{
                  padding: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    // width: "50%",
                    // height: "100%",
                    // display: "flex",
                    maxWidth: {
                      xs: "50px",
                      sm: "70px",
                      md: "120px",
                    },
                    maxHeight: {
                      xs: "30px",
                      sm: "50px",
                      md: "70px",
                    },
                  }}
                >
                  <Image
                    src={item.url}
                    width={1000}
                    height={1000}
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "auto 0 auto 0",
                      display: "block",
                    }}
                    alt=""
                  />
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </MainContainer>
  );
};

export default CompanyList;
