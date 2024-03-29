import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Manrope", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1440,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          left: "50%",
          transform: "translateX(-50%)",
          [theme.breakpoints.down("tablet")]: {
            minWidth: "320px",
          },
          [theme.breakpoints.up("tablet")]: {
            width: "768px",
          },
          [theme.breakpoints.up("desktop")]: {
            width: "1440px",
          },
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingTop: "64px",
          [theme.breakpoints.down("tablet")]: {
            minWidth: "320px",
          },
          [theme.breakpoints.up("tablet")]: {
            width: "768px",
          },
          [theme.breakpoints.up("desktop")]: {
            width: "1440px",
          },
        }),
      },
    },
  },
});

export const mainButtonStyle = {
  textTransform: "none",
  color: "#FFF",
  padding: "12px 50px",
  fontFamily: ["Manrope", "sans-serif"].join(","),
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "20px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: "#0B44CD",
  borderColor: "#0B44CD",

  "&:hover": {
    backgroundColor: "#3470FF",
  },
  "&:active": {
    backgroundColor: "#3470FF",
  },
  "&:focus": {
    backgroundColor: "#3470FF",
  },
};
