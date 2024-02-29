import React from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Modal from "@mui/material/Modal";
// import List from "@mui/joy/List";
// import ListItem from "@mui/joy/ListItem";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // minWidth: 270,
  bgcolor: "background.paper",
  border: "2px solid gray",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  boxSizing: "border-box",
  height: "80vh",
  width: "90vw",
  overflow: "auto",
};
import CloseIcon from "@mui/icons-material/Close";
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
          <ModalContaint handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default ComponentForPageInformation;

const ModalContaint = ({ handleClose }: { handleClose: any }) => {
  return (
    <>
      <Box>
        <Typography
          textAlign="center"
          variant="h4"
          component="h2"
          sx={{
            textDecoration: "underline",
          }}
        >
          App Documentation
        </Typography>
        <IconButton
          onClick={handleClose}
          sx={{
            float: "right",
            position: "relative",
            bottom: 40,
          }}
        >
          <CloseIcon
            color="error"
            sx={{
              border: "1px solid",
              borderRadius: "50%",
              position: "relative",
              marginLeft: "auto",
              float: "left",
            }}
          />
        </IconButton>
      </Box>
      <Typography variant="h5" pl={5} mt={3}>
        <strong>App Features</strong>
      </Typography>
      <Box>
        <ul>
          {[
            {
              title: "Login register: ",
              dec: "Users can register and log in using bcrypt for password hashing and JWT token for secure authentication.",
            },
            {
              title: "Forgot Password:",
              dec: " Users can initiate a password reset by providing their email address, and they will receive an email with a reset link.",
            },
            {
              title: "Reset Password:",
              dec: " Users can click the reset link sent to their email to set a new password securely.",
            },
            {
              title: "OTP Verification:",
              dec: " Users receive a one-time password (OTP) via email for additional account verification.",
            },
            {
              title: "Google Login:",
              dec: " Users can log in using their Google accounts for quick and easy access.",
            },
            {
              title: "Remember Me:",
              dec: " The app provides a 'Remember Me' feature using cookie storage, allowing users to stay logged in across sessions.",
            },
            {
              title: "Room Search",
              dec: "Users can search for room data by entering the place name.",
            },
            {
              title: "Filtering:",
              dec: " Users can filter room data based on three categories: price, date, and room service.",
            },
            {
              title: "Multi-step Form:",
              dec: " Users can book a room using a multi-step form to provide necessary details.",
            },
            {
              title: "PDF Confirmation:",
              dec: " After booking, users receive a booking confirmation in PDF format.",
            },
            {
              title: "Email Confirmation:",
              dec: " Users also receive a confirmation email with details of their booking.",
            },
            {
              title: "Redux Toolkit & RTK Query:",
              dec: "Redux Toolkit: The app employs Redux Toolkit for efficient state management, making it easier to handle and update application state.",
            },
          ].map((item, i) => {
            return (
              <li key={i}>
                <Typography variant="body2" pt={1}>
                  <strong>{item.title}</strong> {item.dec}
                </Typography>
              </li>
            );
          })}
        </ul>
      </Box>
      <Typography variant="h5" pl={5} mt={3}>
        Technologies Used:
        <strong>Backend</strong>
      </Typography>

      <Box>
        <ul>
          {[
            {
              title: "Nest.js: ",
              dec: " A progressive Node.js framework for building server-side applications with a modular architecture.",
            },
            {
              title: "Nodemailer",
              dec: " Used for sending emails, facilitating features like OTP verification and email confirmations.",
            },
            {
              title: "Bcrypt.js: ",
              dec: " A library for hashing passwords, enhancing security in user authentication.",
            },
            {
              title: "JWT (JSON Web Token): ",
              dec: " Used for secure user authentication and authorization.",
            },
          ].map((item: { title: string; dec: string }, i: any) => {
            return (
              <li key={i}>
                <Typography variant="body2" pt={1}>
                  <strong>{item.title}</strong> {item.dec}
                </Typography>
              </li>
            );
          })}
        </ul>
      </Box>
      <Typography variant="h5" pl={5} mt={3}>
        Technologies Used:
        <strong>Frontend</strong>
      </Typography>

      <Box>
        <ul>
          {[
            {
              title: "Next.js:",
              dec: " A React framework for building efficient and scalable web applications.",
            },
            {
              title: "Material UI:",
              dec: " A popular React UI framework for designing consistent and visually appealing user interfaces.",
            },
            {
              title: "React Hook Form:",
              dec: " A library for managing form state and validation in React applications. ",
            },
            {
              title: "React Redux:",
              dec: "Used for state management and integrating Redux with React components. ",
            },
            {
              title: "TypeScript:",
              dec: "A statically typed superset of JavaScript that enhances code maintainability and scalability. ",
            },
          ].map((item: { title: string; dec: string }, i: any) => {
            return (
              <li key={i}>
                <Typography variant="body2" pt={1}>
                  <strong>{item.title}</strong> {item.dec}
                </Typography>
              </li>
            );
          })}
        </ul>
      </Box>
    </>
  );
};
