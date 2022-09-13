import React from "react";
import  Box from "@mui/material/Box";
import  TextField  from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function ProfileSideBar() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={4}></Grid>
      <Grid item xs={8} md={8} sx={{backgroundColor:'red'}}>
        <Box component="form" noValidate color="default">
          <Typography>Hello mom text</Typography>
          <TextField label="test" color="primary"></TextField>
        </Box>
      </Grid>
    </Grid>
  );
}
