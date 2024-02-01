"use client";
import { Box, Button, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import PaginationRounded from "@/component/muiCoustomComponent/Pagination";
import FilterDataDisplayForMobileMODAL from "../FilterDataDisplayForMobileMODAL";
import RoomListControls from "../RoomListControls";
import RoomList from "../RoomList";
import data from "@/data/Data";
const BookingPageSearch = ({ setState }: { setState: any }) => {
  let [fetchData, setFetchedData] = useState<any[]>([]);
  let [paginationSetData, setpaginationSetData] = useState<any[]>([]);
  let [pageNo, setpageNo] = useState(1);
  const ItemPerPage = 7;

  useEffect(() => {
    setFetchedData(data);
  }, []);
  useEffect(() => {
    const startIndex = (pageNo - 1) * ItemPerPage;
    const endIndex = startIndex + ItemPerPage;
    let paginateArray = fetchData.slice(startIndex, endIndex);
    // console.log("paginationArray", paginateArray);
    setpaginationSetData(paginateArray);
  }, [pageNo, fetchData]);
  // const data = useAppSelector((s) => s);
  // console.log("data==", data);
  // functiion fpor pagingation page no of totallll
  function calculateTotalNoOfPages(noOfItem: number) {
    let devide: number = noOfItem / ItemPerPage;
    let roundOff: number = Math.round(devide);
    if (devide > roundOff) {
      return roundOff + 1;
    } else {
      return roundOff;
    }
  }
  const noOfpage = calculateTotalNoOfPages(fetchData.length);

  return (
    <div>
      <Box>
        <FilterDataDisplayForMobileMODAL />
      </Box>

      <Stack direction="row" position="relative">
        <Box
          flex={1.5}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            // top: "50px",
            maxWidth: "500px",
            minWidth: "240px",
          }}
        >
          <RoomListControls setFetchedData={setFetchedData} />
        </Box>
        <Box flex={5} mt={2}>
          <RoomList setState={setState} paginationSetData={paginationSetData} />
        </Box>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "1% 0",
        }}
      >
        <PaginationRounded noOfpage={noOfpage} setpageNo={setpageNo} />
      </Box>
    </div>
  );
};

export default BookingPageSearch;
