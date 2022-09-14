import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LeftAvatars from "./LeftAvatars";
import RigthColumnOnline from "./RigthColumnOnline";
import RigthColumnMember from "./RigthColumnMember";
import RigthColumnOffline from "./RigthColumnOffline";
import SimpleAccordion from "./SimpleAccordion";
import ButtonAppBar from "./ButtonAppBar";

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
          <ButtonAppBar></ButtonAppBar>
          <Grid xs={12} container>
            <Grid xs={7} sx={{ backgroundColor: "orange" }}>
              item
            </Grid>
            <Grid xs={5} sx={{ backgroundColor: "green" }} item>
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
