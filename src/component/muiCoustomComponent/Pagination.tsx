"use client";

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({
  noOfpage,
  setpageNo,
}: {
  noOfpage: any;
  setpageNo: any;
}) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={noOfpage}
        variant="outlined"
        shape="rounded"
        onChange={(e, pageNo) => {
          setpageNo(pageNo);
        }}
      />
    </Stack>
  );
}
