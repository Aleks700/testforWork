import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import RedeemIcon from "@mui/icons-material/Redeem";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import GifBoxIcon from "@mui/icons-material/GifBox";
import TextField from "@mui/material/TextField";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          minHeight: "40px",
          backgroundColor: "#474a52",
          borderRadius: "10px",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <ControlPointOutlinedIcon></ControlPointOutlinedIcon>
          </IconButton>
          <TextField fullWidth></TextField>
          <IconButton>
            <RedeemIcon></RedeemIcon>
          </IconButton>
          <IconButton>
            <GifBoxIcon></GifBoxIcon>
          </IconButton>
          <IconButton>
            <TagFacesIcon></TagFacesIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
