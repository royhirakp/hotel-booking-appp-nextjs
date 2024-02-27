import React from "react";
import { Box, Button, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Modal from "@mui/material/Modal";
// import List from "@mui/joy/List";
// import ListItem from "@mui/joy/ListItem";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 270,
  bgcolor: "background.paper",
  border: "2px solid gray",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  boxSizing: "border-box",
};

const ComponentForPageInformation = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [type, setType] = React.useState<string | undefined>("disc");
  return (
    <>
      <Button
        sx={{ backgroundColor: "red" }}
        variant="contained"
        endIcon={<InfoIcon />}
        onClick={handleOpen}
      >
        Info
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography textAlign="center" variant="h4" component="h2">
            App Documentation
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Authetication authorization by bycript and jwt and otp
                varifaction before sing up
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Google sing in / forget password or reset password{" "}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                remenber me by coocki storage{" "}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                password and email validation in front end{" "}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                filert data in front end as paer the user neeed
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                {" "}
                multistep booking from for good user experience{" "}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                download booking details recept pdf in the front end
              </Typography>
            </li>
            <li>
              <Typography variant="body1"> </Typography>
            </li>
            <li>
              <Typography variant="body1"> </Typography>
            </li>
          </ul>
        </Box>
      </Modal>
    </>
  );
};

export default ComponentForPageInformation;
