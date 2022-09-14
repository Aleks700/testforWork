import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import FirstImg from "../img/1.jpg";
import SecondImg from "../img/2.jpg";
import ThirdImg from "../img/3.jpg";

export default function LeftAvatars({ avatar }) {
  const MessageBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#cd162c",
      color: "#cd162c",
      minWidth: "15px",
      height: "15px",
      borderRadius: "50%",
      boxShadow: `0 0 0 3px #263238`,
      "&::after": {
        position: "absolute",
        left: "0",
        top: "10%",
        width: "100%",
        height: "100%",
        color: "white",
        fontSize: ".8rem",
        content: '"2"',
      },
      "@keyframes ripple": {
        "0%": {
          transform: "scale(.8)",
          opacity: 1,
        },
        "100%": {
          transform: "scale(1.2)",
          opacity: 0,
        },
      },
    },
  }));
  const MessageAccount = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 1.5px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 2s infinite ease-in-out",
        border: "3px solid currentColor",
        content: '""',
      },
      "@keyframes ripple": {
        "0%": {
          transform: "scale(.8)",
          opacity: 1,
        },
        "100%": {
          transform: "scale(1.2)",
          opacity: 0,
        },
      },
    },
  }));
  const OfflineBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "red",
      color: "red",
      boxShadow: `0 0 0 1.5px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",

        // border: '3px solid currentColor',
        content: '""',
      },
      "@keyframes ripple": {
        "0%": {
          transform: "scale(.8)",
          opacity: 1,
        },
        "100%": {
          transform: "scale(1.2)",
          opacity: 0,
        },
      },
    },
  }));

  return (
    <>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          my: 1,
          height: "100vh",
        }}
      >
        <IconButton>
          <MessageBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar sx={{ bgcolor: deepPurple[500] }} src={FirstImg}>
              <SearchIcon></SearchIcon>
            </Avatar>
          </MessageBadge>
        </IconButton>
        <IconButton>
          <Avatar sx={{ bgcolor: "#39e6e9" }}>H</Avatar>
        </IconButton>
        <IconButton>
          <Avatar sx={{ bgcolor: "#757575" }}>
            <SearchIcon></SearchIcon>
          </Avatar>
        </IconButton>
        <IconButton>
          <Avatar sx={{ bgcolor: "#757575" }}>
            <AddIcon></AddIcon>
          </Avatar>
        </IconButton>
      </Stack>
    </>
  );
}
