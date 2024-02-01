import React from "react";
import { Box, Typography, Stack, Paper, Button } from "@mui/material";
import MainContainer from "@/component/container/MainContainer";

const RoomComtaintHearderAndPrice = ({
  title,
  pricePerNight,
}: {
  title: any;
  pricePerNight: any;
}) => {
  const [open, setOpen] = React.useState(false);
  function handelModal() {
    setOpen(true);
  }
  return (
    <Paper
      sx={{
        borderRadius: "0",
        margin: "1px 0 5px 0 ",
        padding: "6px 0 6px 0",
      }}
    >
      <MainContainer style={{}}>
        <Stack direction="row" maxWidth="1500px" margin="auto">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: {
                xs: "80px",
                sm: "100px",
              },
              flex: {
                xs: 1,
                // sm: 1,
              },
            }}
          >
            <Stack direction="column" justifyContent="center">
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: "18px", sm: "20px" } }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "9px", sm: "12px" } }}
              >
                Home / Rooms / Single Room
              </Typography>
            </Stack>
          </Box>
          <Box
            flex={1}
            sx={{
              display: "felx",
              height: {
                xs: "80px",
                sm: "100px",
              },
            }}
          >
            <Stack
              direction="column"
              sx={{ height: "100%" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h6" fontWeight={700}>
                ${pricePerNight}
              </Typography>
              <Typography variant="body1">per night</Typography>

              <Stack
                direction="column"
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <Button onClick={handelModal} variant="contained">
                  Check Abilibity
                </Button>

                <BasicModal open={open} setOpen={setOpen} />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </MainContainer>
    </Paper>
  );
};
export default RoomComtaintHearderAndPrice;

import Modal from "@mui/material/Modal";
import CheckAbilibility from "./CheckAbilibility";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "background.paper",
  boxShadow: 24,
};

function BasicModal({ open, setOpen }: { open: boolean; setOpen: any }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CheckAbilibility />
        </Box>
      </Modal>
    </div>
  );
}
