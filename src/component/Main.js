import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LeftAvatars from "./LeftAvatars";
import RigthColumnOnline from "./RigthColumnOnline";

// import TestingBlock from './TestingBlock';
export default function Main() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "orange",
          }}
        >
          <LeftAvatars></LeftAvatars>
        </Box>
      </Grid>
      <Grid container xs={11} sx={{ backgroundColor: "Blue" }}>
        <Grid xs={3} sx={{ backgroundColor: "red" }}>
          ttt
        </Grid>
        <Grid xs={6} sx={{ backgroundColor: "orange" }}>
          eee
        </Grid>
        <Grid xs={3} sx={{ backgroundColor: "green" }}>
          <RigthColumnOnline></RigthColumnOnline>
        </Grid>
      </Grid>
    </Grid>
  );
}
