import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

export const mainInputStyle = {
  display: "flex",
  alignItems: "center",
  width: "224px",
  height: "48px",
  color: "#121417",
  fontFamily: ["Manrope", "sans-serif"].join(","),
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "20px",
  borderRadius: "14px",
  border: "none",
  backgroundColor: "#F7F7FB",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  "&.MuiInput-input": {
    fontFamily: ["Manrope", "sans-serif"].join(","),
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
  },
  "& .MuiOutlinedInput-root": {
    padding: "0 18px",
    fontFamily: ["Manrope", "sans-serif"].join(","),
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
  },
};

export const MainInput = ({ opts }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="cars"
        options={opts}
        sx={mainInputStyle}
        renderInput={(params) => {
          // console.log(params);
          return <TextField placeholder="Enter the text" {...params} />;
        }}
      />
    </>
  );
};
