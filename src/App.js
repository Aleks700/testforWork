import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import Box from "@mui/material/Box";
import Header from "./component/Header";
import CssBaseline from "@mui/material/CssBaseline";
import ProfileSideBar from "./component/ProfileSideBar";
import Main from "./component/Main";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header></Header>
        <Main></Main>
        <ProfileSideBar></ProfileSideBar>
      </ThemeProvider>
    </>
  );
}

export default App;
