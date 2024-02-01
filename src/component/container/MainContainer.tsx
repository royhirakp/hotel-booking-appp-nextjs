import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  style: any;
}

const MainContainer: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <Box
      sx={{
        padding: {
          xs: "0 5px",
          sm: "0 30px",
          md: "0 90px",
          lg: "0 200px",
        },
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
