import * as React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import myTheme from "../db/db";

export default function GradePicker() {
  const { theme, lang } = React.useContext(myTheme);
  const [grade, setGrade] = React.useState("");

  const handleChange = (event) => {
    setGrade(event.target.value);
  };

  return (
    <FormControl
      sx={{
        width: 120,
        bgcolor: theme ? "#EBEAEF" : "black",
        borderRadius: 2,
      }}
    >
      <Select
        value={grade}
        onChange={handleChange}
        displayEmpty
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: theme ? "#EBEAEF" : "black",
              color: theme ? "black" : "white",
              borderRadius: 2,
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            },
          },
        }}
        sx={{
          color: theme ? "black" : "white",
          fontSize: 12,
          "& .MuiSelect-icon": {
            color: theme ? "black" : "white",
          },
          "& .MuiSelect-select": {
            padding: "4px 8px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
            border: "none",
          },
        }}
      >
        {/* placeholder */}
        <MenuItem value="" disabled>
          {lang ? "Class 10th" : "کلاس 10"}
        </MenuItem>
        <MenuItem value="Class 11th">
          {lang ? "Class 11th" : "کلاس 11"}
        </MenuItem>
        <MenuItem value="Class 12th">
          {lang ? "Class 12th" : "کلاس 12"}
        </MenuItem>
        <MenuItem value="Class 13th">
          {lang ? "Class 13th" : "کلاس 13"}
        </MenuItem>
      </Select>
    </FormControl>
  );
}
