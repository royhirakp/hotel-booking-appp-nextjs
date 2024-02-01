"use client";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
type Anchor = "top" | "left" | "bottom" | "right";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GradingIcon from "@mui/icons-material/Grading";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import BookIcon from "@mui/icons-material/Book";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";

const Draweerr = ({
  toggleDrawer,
  state,
}: {
  toggleDrawer: any;
  state: any;
}) => {
  const router = useRouter();
  const [activeList, setActiveState] = useState(0);
  const list = (anchor: Anchor) => (
    <Box
      sx={{
        // width: anchor === "to  p" || anchor === "bottom" ? "auto" : 250,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
        height: "98%",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <Stack direction="row" justifyContent="space-between" pt={2} pb={2}>
          <div
            onClick={() => {
              // router.push("/webapp");
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <Box
              pl={2}
              // pb={2}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image src="/pngegg.png" alt="logo" width={40} height={40} />
              <Typography
                variant="h5"
                pl={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Buff
              </Typography>
            </Box>
          </div>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Stack>

        <LoginPartForMobileDrawer />

        <Divider />
        <List>
          {[
            { name: "Home", icon: <HomeIcon /> },
            { name: "About", icon: <InfoIcon /> },
            { name: "Properties", icon: <GradingIcon /> },
            { name: "Cabs", icon: <LocalTaxiIcon /> },
            { name: "Holidays", icon: <HolidayVillageIcon /> },
            { name: "Blog", icon: <BookIcon /> },
            // "contact",
          ].map((text, index) => (
            <Link
              href={`/webapp/${text?.name}`}
              key={index}
              style={{ textDecoration: "none", backgroundColor: "red" }}
              onClick={() => {
                setActiveState(index);
              }}
            >
              <ListItem
                disablePadding
                sx={{
                  background: `${activeList == index ? "#ffff" : "#faffa"}`,
                }}
              >
                <ListItemButton>
                  <ListItemIcon>{text?.icon}</ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      color: `${activeList == index ? "#3a3434" : "#3a3434"}`,
                      fontWeight: 800,
                    }}
                  >
                    {text?.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />
        <Link
          href={`/webapp/Settings`}
          style={{ textDecoration: "none", backgroundColor: "red" }}
          onClick={() => {
            // setActiveState(index);
          }}
        >
          <ListItem
            disablePadding
            sx={
              {
                // background: `${activeList == index ? "#ffff" : "#faffa"}`,
              }
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <Typography
                variant="subtitle2"
                sx={{
                  // color: `${activeList == index ? "#3a3434" : "#3a3434"}`,
                  fontWeight: 800,
                }}
              >
                Settings
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <Divider />

        <List>
          {[
            { name: "help", icon: <HelpCenterIcon /> },
            { name: "Feedback", icon: <MessageIcon /> },

            // "contact",
          ].map((text, index) => (
            <Link
              href={`/webapp/${text?.name}`}
              key={index}
              style={{ textDecoration: "none", backgroundColor: "red" }}
              onClick={() => {
                setActiveState(index);
              }}
            >
              <ListItem
                disablePadding
                sx={
                  {
                    // background: `${activeList == index ? "#ffff" : "#faffa"}`,
                  }
                }
              >
                <ListItemButton>
                  <ListItemIcon>{text?.icon}</ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      color: `${activeList == index ? "#3a3434" : "#3a3434"}`,
                      fontWeight: 800,
                    }}
                  >
                    {text?.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          // localStorage.getItem("loginStatus") ? "flex" : "none",
        }}
      >
        <Link
          href={`/login`}
          // style={i == activeButton ? activeStyle : inActiveStyle}
          onClick={() => {
            // setSActiveButton(i);
            localStorage.removeItem("loginStatus");
          }}
        >
          <Button
            sx={{
              disableRipple: "true",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <LogoutIcon />
            <Typography variant="body1" sx={{ paddingLeft: "5px" }}>
              Logout
            </Typography>
          </Button>
        </Link>
      </Stack>
    </Box>
  );
  return (
    <>
      <div>
        {(["left"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Draweerr;

const LoginPartForMobileDrawer = () => {
  const router = useRouter();
  return (
    <Stack>
      <Box
        sx={{
          display: localStorage.getItem("loginStatus") ? "none" : "block",
        }}
      >
        <Link
          href={`/login`}
          style={{ textDecoration: "none" }}
          onClick={() => {
            // setActiveState(index);
          }}
        >
          <ListItem
            disablePadding
            sx={
              {
                // background: `${activeList == index ? "#ffff" : "#faffa"}`,
              }
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon fontSize="large" />
              </ListItemIcon>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 800,
                  color: "#493e3e",
                }}
              >
                Sing In
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
      </Box>
      {/* xmx */}

      <Box
        sx={{
          display: localStorage.getItem("loginStatus") ? "block" : "none",
        }}
      >
        <ListItem
          disablePadding
          sx={
            {
              // background: `${activeList == index ? "#ffff" : "#faffa"}`,
            }
          }
        >
          <ListItemButton>
            <Link
              href={`/webapp/profile`}
              style={{ textDecoration: "none" }}
              onClick={() => {
                // setActiveState(index);
              }}
            >
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
            </Link>

            <Stack direction="row">
              <Stack direction="column" sx={{}}>
                <Typography variant="subtitle2" color="primary">
                  Hirak Roy
                </Typography>
                <Typography variant="body2" color="secondary">
                  royhirakp@gamil.com
                </Typography>
                <Link href="/webapp/profile">Manage your profile</Link>
              </Stack>
              <Stack>
                <Button
                  variant="contained"
                  onClick={() => {
                    router.push("/webapp/bookingPage");
                  }}
                  sx={{
                    margin: "0 20px",
                    borderRadius: "20px",

                    fontSize: {
                      xs: "18px",
                    },
                    "&:hover": {
                      background: "##9ae594",
                      color: "#ffff",
                      border: "none",
                    },
                  }}
                >
                  Book Rooms
                </Button>
              </Stack>
            </Stack>
          </ListItemButton>
        </ListItem>
      </Box>
      {/* sjsjjsjs */}
    </Stack>
  );
};
