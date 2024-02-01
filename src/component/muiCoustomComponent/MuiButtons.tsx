import { Button, styled } from "@mui/material";

export const LoginButton = styled(Button)(({ theme }) => ({
  // Custom CSS
  [theme.breakpoints.up("xs")]: {
    fontSize: "17px", // Change font size for screens equal to or larger than 'sm' breakpoint
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "19px", // Change font size for screens equal to or larger than 'sm' breakpoint
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "19px", // Change font size for screens equal to or larger than 'md' breakpoint
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px", // Change font size for screens equal to or larger than 'lg' breakpoint
  },
}));
