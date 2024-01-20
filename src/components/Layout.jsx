import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Suspense } from "react";
// import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { theme } from "../styles/styles";

export const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Container component="main">
          <Suspense>
            <Outlet />
          </Suspense>
          {/* <Toaster position="top-center" /> */}
        </Container>
      </ThemeProvider>
    </>
  );
};
