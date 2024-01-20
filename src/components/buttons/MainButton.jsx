import { Button } from "@mui/material";
import { mainButtonStyle } from "../../styles/styles";

export const MainButton = (props) => {
  return (
    <Button variant="contained" sx={mainButtonStyle} {...props}>
      {props.children}
    </Button>
  );
};
