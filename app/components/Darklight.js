import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { use, useContext, useState } from "react";
import { myTheme } from "@/app/db/Db";

export default function Darklight({ IconName, themeChange }) {
  const { theme } = use(myTheme);
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        onClick={themeChange}
        sx={{
          bgcolor: theme ? "#EBEAEF" : "#323233",
          color: "#8E8D93",
          boxShadow: "1px 1px 5px #1b1b1b67",
          "&:hover": {
            bgcolor: theme ? "#ebeaefb6" : "#323233c9",
          },
        }}
      >
        <IconName />
      </IconButton>
    </Stack>
  );
}
