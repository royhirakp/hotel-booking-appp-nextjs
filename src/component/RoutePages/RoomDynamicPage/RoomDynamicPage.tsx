"use client";
import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import MainContainer from "@/component/container/MainContainer";
import RoomComtaintHearderAndPrice from "@/component/RoomDynamicPage/RoomComtaintHearderAndPrice";
import ImageConatiner from "@/component/RoomDynamicPage/ImageConatiner";
import RoomInfoB from "@/component/RoomDynamicPage/RoomInfoB";
import TextInformationAboutRoom from "@/component/RoomDynamicPage/TextInformationAboutRoom";
import RoomService from "@/component/RoomDynamicPage/RoomService";
import AditionalRoomService from "@/component/RoomDynamicPage/AditionalRoomService";
import "@smastrom/react-rating/style.css";
import RoomReviews from "@/component/RoomDynamicPage/RoomReviews";
import RoomLocationInGoogleMap from "@/component/RoomDynamicPage/RoomLocationInGoogleMap";
import SimelarRoomsList from "@/component/RoomDynamicPage/SimelarRoomsList";
import CheckAbilibility from "@/component/RoomDynamicPage/CheckAbilibility";
import AddPhoto from "@/component/RoomDynamicPage/AddPhoto";
import data from "@/data/Data";
import { useGetUnitRoomQuery } from "@/redux/apiRequest/LoginRegister";
const RoomDynamicPage = ({ id }: { id: any }) => {
  // console.log(id, "=====id");
  const { data: fetchSingleRoomDta } = useGetUnitRoomQuery({
    id: "65b7fe2e1020b1f2470b8c3e",
  });

  let [roomData, setRoomData] = useState<any>({
    title: "titele loading....",
    pricePerNight: "pricePerNight loading....",
    images: [],
    comments: [],
  });
  console.log("fetchSingleRoomDta===", fetchSingleRoomDta);
  useEffect(() => {
    let item: any = data.find((item) => item.id * 1 === id * 1);
    setRoomData(item);
    // console.log("item===", item);
  }, [id]);

  return (
    <Box>
      <RoomComtaintHearderAndPrice
        title={fetchSingleRoomDta?.title}
        pricePerNight={fetchSingleRoomDta?.pricePerNight}
      />
      <MainContainer style={{}}>
        <Stack direction="row" gap={1} maxWidth="1500px" margin="auto">
          <Stack direction="column" flex={5} width="70%">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ImageConatiner images={fetchSingleRoomDta?.images} />
            </Box>
            <Box sx={{ margin: "1.3%" }}>
              <RoomInfoB />
            </Box>
            <Box>
              <TextInformationAboutRoom
                info={fetchSingleRoomDta?.describtion}
              />
            </Box>
            <Box sx={{ margin: "1% 0" }}>
              <RoomService service={fetchSingleRoomDta?.abalableServices} />
            </Box>
            <Box mt={1}>
              <AditionalRoomService />
            </Box>
            <Box>
              <RoomReviews comments={fetchSingleRoomDta?.comments} />
            </Box>
            <Box>
              <RoomLocationInGoogleMap />
            </Box>
            <Box>
              <SimelarRoomsList />
            </Box>
          </Stack>
          <Box
            flex={2}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <Box
              sx={{
                position: "sticky",
                top: 100,
              }}
            >
              <CheckAbilibility />
              <AddPhoto />
            </Box>
          </Box>
        </Stack>
      </MainContainer>
    </Box>
  );
};

export default RoomDynamicPage;
