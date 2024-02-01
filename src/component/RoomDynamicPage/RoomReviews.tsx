import React from "react";
import { Box, Typography, Stack, Paper, Grid, Button } from "@mui/material";
import { Rating } from "@smastrom/react-rating";
import Avatar from "@mui/material/Avatar";

const RoomReviews = ({ comments }: { comments: any }) => {
  return (
    <Box>
      <Box>
        <Typography variant="subtitle1">Room Reviews</Typography>
      </Box>
      <Stack direction="column" gap={3} sx={{ margin: "25px 15px 0px 15px" }}>
        {comments.map((item: any, i: number) => {
          return (
            <Box key={i}>
              <Paper style={{}}>
                <Grid container wrap="nowrap">
                  <Grid item sx={{ margin: "1% 0 0 1%" }}>
                    <Avatar alt="Remy Sharp" src={item?.userImage} />
                  </Grid>
                  <Grid
                    justifyContent="left"
                    item
                    xs
                    zeroMinWidth
                    sx={{ marginLeft: "3%" }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{ margin: 0, textAlign: "left" }}
                    >
                      {item.userName}- <i>{item?.userEmail}</i>
                    </Typography>
                    <ProductRate count="4" rate={item?.rating} />
                    <Typography variant="body1" style={{ textAlign: "left" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Aenean luctus ut est sed faucibus. Duis bibendum ac
                      ex {item.messege}
                    </Typography>
                    <Typography style={{ textAlign: "left", color: "gray" }}>
                      posted 1 minute ago
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          );
        })}

        <Box sx={{}}>
          <Button sx={{ float: "right" }}>Show More..</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default RoomReviews;
const ProductRate = ({ rate, count }: { rate: number; count: string }) => {
  return (
    <div
      className="flex"
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Rating style={{ maxWidth: 90 }} value={rate} readOnly />
    </div>
  );
};
