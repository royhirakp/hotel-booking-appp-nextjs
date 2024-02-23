"use client";
import { Box, Button, CircularProgress, Skeleton, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import PaginationRounded from "@/component/muiCoustomComponent/Pagination";
import FilterDataDisplayForMobileMODAL from "../FilterDataDisplayForMobileMODAL";
import RoomListControls from "../RoomListControls";
import RoomList from "../RoomList";
import data from "@/data/Data";
import LinearProgress from "@mui/material/LinearProgress";
// import { useGetAllRoomsQuery } from "@/redux/apiRequest/LoginRegister";
const BookingPageSearch = ({
  setState,
  reduxData,
  isLoading,
}: {
  setState: any;
  reduxData: any;
  isLoading: any;
}) => {
  let [fetchData, setFetchedData] = useState<any[]>([]);
  let [paginationSetData, setpaginationSetData] = useState<any[]>([]);
  let [pageNo, setpageNo] = useState(1);
  const ItemPerPage = 7;
  // let { data: reduxData } = useGetAllRoomsQuery({});
  // console.log(data, reduxData?.roomsData);
  useEffect(() => {
    setFetchedData(reduxData?.roomsData || []);
  }, [reduxData]);
  useEffect(() => {
    const startIndex = (pageNo - 1) * ItemPerPage;
    const endIndex = startIndex + ItemPerPage;
    let paginateArray = fetchData.slice(startIndex, endIndex);
    // console.log("paginationArray", paginateArray);
    setpaginationSetData(paginateArray);
  }, [pageNo, fetchData]);

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
            maxWidth: "500px",
            minWidth: "240px",
          }}
        >
          <RoomListControls
            setFetchedData={setFetchedData}
            reduxData={reduxData?.roomsData || []}
          />
        </Box>
        <Box flex={5} mt={2}>
          {isLoading && (
            <>
              <Stack
                direction="column"
                spacing={4}
                justifyContent="center"
                height="100%"
              >
                <LazyLoadingComponent />
                <LazyLoadingComponent />
                <LazyLoadingComponent />
                <LazyLoadingComponent />
                <LazyLoadingComponent />
              </Stack>
            </>
          )}
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

const LazyLoadingComponent = () => {
  return (
    <>
      <Stack
        spacing={1}
        direction="row"
        sx={{
          height: {
            xs: 100,
            md: 150,
          },
        }}
      >
        <Skeleton variant="rectangular" width="40%" height="100%" />
        <Stack
          direction="column"
          spacing={1}
          width="40%"
          alignItems="center"
          justifyContent="center"
        >
          <Skeleton variant="text" width="100%" height={12} />
          <Skeleton variant="text" width="100%" height={12} />
          <Skeleton variant="text" width="100%" height={12} />
          <Skeleton variant="text" width="100%" height={12} />
          <Skeleton variant="text" width="100%" height={12} />
          <Skeleton
            variant="text"
            width="100%"
            height={12}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height={12}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height={12}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />
        </Stack>
        <Skeleton variant="rounded" width="20%" height="100%" />
      </Stack>
    </>
  );
};
