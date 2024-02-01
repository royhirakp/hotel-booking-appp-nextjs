import { Box } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const ImageConatiner = ({ images }: { images: any }) => {
  const imagesArray = [
    {
      original: "/RoomBookingpage/room1.jpg",
      thumbnail: "/RoomBookingpage/room1.jpg",
    },
    {
      original: "/RoomBookingpage/room2.jpg",
      thumbnail: "/RoomBookingpage/room2.jpg",
    },
    {
      original: "/RoomBookingpage/room3.jpg",
      thumbnail: "/RoomBookingpage/room3.jpg",
    },
    // {
    //   original: "/RoomBookingpage/room4.jpg",
    //   thumbnail: "/RoomBookingpage/room4.jpg",
    // },
    {
      original: "/RoomBookingpage/room5.jpg",
      thumbnail: "/RoomBookingpage/room5.jpg",
    },
    {
      original: "/RoomBookingpage/room6.jpg",
      thumbnail: "/RoomBookingpage/room6.jpg",
    },
    {
      original: "/RoomBookingpage/room7.jpg",
      thumbnail: "/RoomBookingpage/room7.jpg",
    },
  ];
  return (
    <Box
      sx={{
        width: {
          xs: "250px",
          sm: "400px",
          md: "500px",
          lg: "100%",
        },
        maxWidth: "1000px",
        // width: {
        //   xs: "250px",
        //   sm: "400px",
        //   md: "600px",
        // },
      }}
    >
      <ImageGallery
        items={imagesArray}
        autoPlay={false}
        showPlayButton={false}
        // showNav={false}
      />
    </Box>
  );
};

export default ImageConatiner;
