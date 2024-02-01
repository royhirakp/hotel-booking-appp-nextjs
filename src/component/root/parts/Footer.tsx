import MainContainer from "@/component/container/MainContainer";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#83839c",
        marginTop: "10px",
        padding: { xs: "10px", sm: "20px 0" },
      }}
    >
      <MainContainer style={{}}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h6">Comapny</Typography>
            <Typography variant="body1">
              Our visoion is to to live for them
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "3%" }}>
            <Typography variant="h6">Information</Typography>

            <Typography variant="subtitle2">
              145 New york, FL 4571, USA
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi
            </Typography>
          </Box>
        </Stack>
      </MainContainer>
    </Box>
  );
};

export default Footer;
