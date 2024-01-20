import {
  Autocomplete,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { ShevronDown } from "../icons/ShevronDown";

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
};

const options = ["Option 1", "Option 2"];

export const MainInput = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
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
        options={options}
        sx={mainInputStyle}
        renderInput={(params) => {
          console.log(params);
          return <TextField {...params} />;
        }}
      />
    </div>
  );
};
