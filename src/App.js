import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import ProfileSideBar from "./component/ProfileSideBar";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <h1>Hello</h1>
        <ProfileSideBar></ProfileSideBar>
      </ThemeProvider>
    </>
  );
}

export default App;
