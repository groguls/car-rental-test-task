import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const LinkButton = (props) => {
  return (
    <Button
      variant="text"
      component={NavLink}
      sx={{
        color: "#FFF",
        borderRadius: "0px",
        border: "none",
        [`&.active`]: {
          borderBottom: "2px solid black",
        },
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
