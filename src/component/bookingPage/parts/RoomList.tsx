"use client";
import React from "react";
import RoomCard from "./RoomCard";
import { Stack } from "@mui/material";

const RoomList = ({
  setState,
  paginationSetData,
}: {
  setState: any;
  paginationSetData: any;
}) => {
  return (
    <div>
      <Stack gap={1}>
        {paginationSetData?.map((item: any, i: any) => {
          return <RoomCard setState={setState} key={i} item={item} />;
        })}
      </Stack>
    </div>
  );
};

export default RoomList;
