import React from "react";
import { Box, Typography, Stack, Paper, IconButton } from "@mui/material";

const TextInformationAboutRoom = ({ info }: { info: any }) => {
  return (
    <Box mt={5} mb={3}>
      <Typography variant="subtitle1">About Room:</Typography>
      <Typography variant="body1">{info}</Typography>
    </Box>
  );
};

export default TextInformationAboutRoom;
