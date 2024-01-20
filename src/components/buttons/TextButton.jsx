import { Link } from "@mui/material";

const textButtonStyle = {
  textTransform: "none",
  color: "#0B44CD",
  fontFamily: ["Manrope", "sans-serif"].join(","),
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",

  "&:hover": {
    color: "#3470FF",
  },
  "&:active": {
    color: "#3470FF",
  },
  "&:focus": {
    color: "#3470FF",
  },
};

export const TextButton = (props) => {
  return (
    <Link component={"button"} sx={textButtonStyle} {...props}>
      {props.children}
    </Link>
  );
};
