"use client";

import Modal from "@mui/material/Modal";
import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import RoomListControlsFormobile from "../parts/RoomListControlsFormobile";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const FilterDataDisplayForMobileMODAL = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          md: "none",
        },
        justifyContent: "space-between",
        paddingTop: "2%",
      }}
    >
      <Box>
        <Typography>price range : $500-$5522</Typography>

        <Typography>Range Date : 05-02 to 01-02</Typography>
      </Box>
      <Box>
        <Typography>sevice Added{"5+"}</Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          alignSelf: "flex-end",
        }}
        onClick={handleOpen}
      >
        Filter your search
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          border: "none",
          padding: 0,
          ".MuiBox-root": {
            border: "none",
            borderRadius: "5px",
            padding: "1% 1%",
            width: "90%",
            // margin: "1%",
            // marginRight: "2%",
          },
        }}
      >
        <Box sx={style}>
          <RoomListControlsFormobile open={open} handleClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default FilterDataDisplayForMobileMODAL;
