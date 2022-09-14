import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { deepOrange, deepPurple } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FirstImg from "../img/1.jpg";
import SecondImg from "../img/2.jpg";
import ThirdImg from "../img/3.jpg";

export default function RigthColumnOnline({ avatar }) {
  const OnlineBadge = styled(Badge)(({ theme }) => ({
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
      // '&::before': {
      //   position: 'absolute',
      //   color: "black",
      //   width: '100%',
      //   height: '100%',
      //   borderRadius: '50%',
      //   animation: 'ripple 1.2s infinite ease-in-out',
      //   border: '1px solid currentColor',
      //   content: '"3"',
      // },
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
          justifyContent: "center",
          alignItems: "center",
          my: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "2rem",
            width: "100%",
          }}
        >
          <OnlineBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar sx={{ bgcolor: deepPurple[500] }} src={FirstImg}>
              <SearchIcon></SearchIcon>
            </Avatar>
          </OnlineBadge>
          <Box sx={{ mx: 1 }}>
            <Typography
              sx={{
                lineHeight: "15px",
                color: "#55e272",
              }}
            >
              Name
            </Typography>
            <Stack sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  lineHeight: "15px",
                  fontSize: ".7rem",
                  color: "#26edea",
                  mr: 1,
                }}
              >
                Playing
              </Typography>
              <Typography
                sx={{
                  lineHeight: "15px",
                  fontSize: ".7rem",
                  color: "black",
                }}
              >
                World of Tanks 1
              </Typography>
            </Stack>
          </Box>
        </Box>

        <OnlineBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar sx={{ bgcolor: deepPurple[500] }} src={SecondImg}>
            <SearchIcon></SearchIcon>
          </Avatar>
        </OnlineBadge>
        <OnlineBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar sx={{ bgcolor: deepPurple[500] }} src={ThirdImg}>
            <SearchIcon></SearchIcon>
          </Avatar>
        </OnlineBadge>
      </Stack>
    </>
  );
}
