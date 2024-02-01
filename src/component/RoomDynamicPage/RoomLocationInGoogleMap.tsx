import React from "react";
import {
  Box,
  Typography,
  Stack,
  Paper,
  IconButton,
  Grid,
  Button,
} from "@mui/material";

const RoomLocationInGoogleMap = () => {
  return (
    <>
      <Stack>
        <Typography variant="subtitle1" fontWeight={700}>
          Room Location
        </Typography>
        <Box sx={{ margin: "0 20%", height: "300px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7367.6820611958965!2d88.34181493136677!3d22.58504822403004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277bfbb1eeb1b%3A0xc9840aaa8c411199!2sHowrah%20Bridge!5e0!3m2!1sen!2sin!4v1697457629455!5m2!1sen!2sin"
            allowFullScreen={true}
            loading="lazy"
            style={{ border: "0", width: "100%", height: "100%" }}
          ></iframe>
        </Box>
      </Stack>
    </>
  );
};

export default RoomLocationInGoogleMap;
