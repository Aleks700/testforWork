import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LeftAvatars from "./LeftAvatars";
import RigthColumnOnline from "./RigthColumnOnline";
import RigthColumnMember from "./RigthColumnMember";
import RigthColumnOffline from "./RigthColumnOffline";
import SimpleAccordion from "./SimpleAccordion";
// import ButtonAppBar from "./ButtonAppBar";
import PushPinIcon from "@mui/icons-material/PushPin";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";

// import TestingBlock from './TestingBlock';
export default function Main() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#202225",
          }}
        >
          <LeftAvatars></LeftAvatars>
        </Box>
      </Grid>
      <Grid container xs={11} sx={{ backgroundColor: "#202225" }}>
        <Grid
          xs={3}
          sx={{
            backgroundColor: "#36393f",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <SimpleAccordion></SimpleAccordion>
        </Grid>
        <Grid xs={9} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#36393f",
              borderBottom: "2px solid #313439",
              borderRight: "2px solid #313439",
            }}
          >
            <Grid container>
              <Grid xs={8}>
                <Box
                  sx={{
                    backgroundColor: "#36393f",
                    // backgroundColor: "yellow",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    borderRight: "3px ",
                    // justifyContent: "end",
                    // marginLeft: "auto",
                  }}
                >
                  <Typography sx={{ color: "white" }}>#Welcome</Typography>
                  <Box sx={{ marginLeft: "auto" }}>
                    <IconButton>
                      <NotificationsIcon></NotificationsIcon>
                    </IconButton>
                    <IconButton>
                      <PushPinIcon></PushPinIcon>
                    </IconButton>
                    <IconButton>
                      <PeopleAltIcon></PeopleAltIcon>
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={4} sx={{ backgroundColor: "#36393f" }}>
                <TextField
                  defaultValue="search"
                  size="small"
                  sx={{ width: "60%", mx: 1 }}
                >
                  Search
                </TextField>
                <IconButton>
                  <AlternateEmailOutlinedIcon></AlternateEmailOutlinedIcon>
                </IconButton>
                <IconButton>
                  <HelpOutlinedIcon></HelpOutlinedIcon>
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <Grid xs={12} container>
            <Grid xs={8} sx={{ backgroundColor: "#36393f" }}>
              item
            </Grid>
            <Grid
              xs={4}
              sx={{
                backgroundColor: "#2f3136",
                maxHeight: "calc(100vh - 20px)",
                overflow: "scroll",
                overflowX: "hidden",
              }}
              item
            >
              <RigthColumnOnline></RigthColumnOnline>
              <RigthColumnMember></RigthColumnMember>
              <RigthColumnOffline></RigthColumnOffline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
