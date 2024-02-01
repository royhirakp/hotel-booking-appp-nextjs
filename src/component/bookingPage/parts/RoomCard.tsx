"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, Stack, Button, Paper, Divider } from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";
import PoolIcon from "@mui/icons-material/Pool";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { handelNextsFromState, addRoomData } from "@/redux/slices/BookingSlice";
const responsiveIconSize = {
  fontSize: {
    xs: "small",
    sm: "medium",
    md: "large",
  },
};
const RoomCard = ({ setState, item }: { setState: any; item: any }) => {
  const router = useRouter();
  const { title, abalableServices, describtion, pricePerNight, imageurl } =
    item;

  return (
    <Paper>
      <Stack direction="row">
        <div
          onClick={() => {
            router.push(`/room/${item.id}`);
          }}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              flex: 4,
              justifyContent: "center",
              alignItems: "center",
              display: { xs: "none", sm: "flex" },
            }}
            minWidth={19}
            maxWidth={320}
          >
            <ImageContainer imageurl={imageurl} />
          </Box>

          <Box
            sx={{
              flex: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <RoomdetailsContainer
              title={title}
              abalableServices={abalableServices}
              describtion={describtion}
            />
          </Box>
        </div>
        <Box
          sx={{
            flex: 2.5,
            minWidth: {
              xs: "100px",
              sm: "110px",
              md: "150px",
            },
          }}
        >
          <BookingAction
            setState={setState}
            pricePerNight={pricePerNight}
            item={item}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default RoomCard;

const ImageContainer = ({ imageurl }: { imageurl: string }) => {
  return (
    <Box display="flex">
      <Image
        alt="xsgjhsa"
        src={imageurl}
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
        }}
      />
    </Box>
  );
};

const RoomdetailsContainer = ({
  title,
  abalableServices,
  describtion,
}: {
  title: string;
  abalableServices: string;
  describtion: string;
}) => {
  return (
    <Box
      sx={{
        paddingLeft: "4%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <Typography variant="subtitle1" color="primary">
          {title}
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quibusdam ipsa voluptatibus? Ver
          {describtion}
        </Typography>
      </Stack>
      <Box sx={{ paddingTop: "3%" }}>
        <Typography
          variant="subtitle2"
          color="secondary"
          sx={{ paddingBottom: "2%" }}
        >
          Services
        </Typography>
        <Stack direction="row" gap={1}>
          {[
            {
              id: 1,
              icon: <TvIcon sx={{ ...responsiveIconSize, color: "#e425d5" }} />,
            },
            {
              id: 1,
              icon: (
                <PoolIcon sx={{ ...responsiveIconSize, color: "#1b6eb6" }} />
              ),
            },
            {
              id: 1,
              icon: (
                <LocalBarIcon
                  sx={{ ...responsiveIconSize, color: "#3545d5" }}
                />
              ),
            },
            {
              id: 1,
              icon: (
                <RestaurantIcon
                  sx={{ ...responsiveIconSize, color: "#195e34" }}
                />
              ),
            },
            // { id: 1, icon: <BathtubIcon sx={responsiveIconSize} /> },
            // { id: 1, icon: <WifiIcon sx={responsiveIconSize} /> },
          ].map((item, i) => {
            return <Box key={i * 0.25}>{item.icon}</Box>;
          })}
        </Stack>
      </Box>
    </Box>
  );
};

const BookingAction = ({
  setState,
  pricePerNight,
  item,
}: {
  setState: any;
  pricePerNight: any;
  item: any;
}) => {
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ paddingBottom: "2%" }}
        color="error"
      >
        ${pricePerNight}
      </Typography>
      <Typography variant="body2">Per night</Typography>
      <Stack sx={{ paddingTop: "8%" }}>
        <Button
          variant="contained"
          sx={{
            "&.MuiButtonBase-root": {
              // padding: "11%",
              fontSize: { xs: "7px", sm: "9px", md: "9px" },
            },
          }}
          onClick={() => {
            const userInfo = {
              Name: "Jhon",
              Surname: "Doe",
              Email: "Jhon@mail.com",
              Phone: "+91000000000",
              Address: "Jhon",
              City: "KOLKATA",
              Country: "India",
              Pin: "733154",
              Room: "Single",
              CheckIn: "09/555",
              CheckOut: "16/521/2",
              Guest: "3 Adults",
            };
            dispatch(handelNextsFromState({}));
            dispatch(addRoomData({ item, userInfo }));
          }}
        >
          Select Booking
        </Button>
      </Stack>
    </Box>
  );
};
