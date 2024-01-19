import { Container, CssBaseline } from "@mui/material";
import { Suspense } from "react";
// import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <CssBaseline />

      <Container component="main">
        <Suspense>
          <Outlet />
        </Suspense>
        {/* <Toaster position="top-center" /> */}
      </Container>
    </>
  );
};
