import React from 'react'
import  Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import LeftAvatars from './LeftAvatars';
import TestingBlock from './TestingBlock';
export default function Main() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Box sx={{display:'flex',flexDirection:'column',backgroundColor:'orange'}}> 
        <LeftAvatars></LeftAvatars>
        </Box>
      </Grid>
      <Grid item xs={11} sx={{backgroundColor:'Blue'}}>Last block</Grid>
    </Grid>
  )
}
