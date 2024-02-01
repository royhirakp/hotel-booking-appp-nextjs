import React from "react";

import { Box } from "@mui/material";
import Image from "next/image";

const AddPhoto = () => {
  return (
    <>
      <Box>
        <Image
          src="/addddImage.png"
          style={{ width: "100%", height: "100%" }}
          alt="addiamge"
          width={200}
          height={200}
        />
      </Box>
    </>
  );
};

export default AddPhoto;
