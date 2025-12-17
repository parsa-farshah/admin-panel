import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import myTheme from "../db/db";

function TimeTable() {
  const { lang, theme } = useContext(myTheme);
  return (
    <Stack sx={{ width: "100%", height: "100%", px: "17px", py: "20px" }}>
      <Typography
        sx={{ textAlign: "center", color: theme ? "black" : "white" }}
      >
        Monday
      </Typography>
      <Box
        component={"div"}
        sx={{
          width: "100%",
          height: "1px",
          bgcolor: theme ? "black" : "white",
          mt: "5px",
        }}
      ></Box>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
        }}
      >
        Tamil
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
        }}
      >
        English
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#6479FF",
          my: "3px",
          width: "100%",
          bgcolor: "#D6DAFF",
          fontSize: "8px",
          borderRadius: "24px",
        }}
      >
        Break
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
        }}
      >
        math
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
        }}
      >
        Science
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#B97624",
          my: "3px",
          width: "100%",
          bgcolor: "#FFE7CA",
          fontSize: "8px",
          borderRadius: "24px",
        }}
      >
        Lunch
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
        }}
      >
        Social
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
        }}
      >
        CS
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#6479FF",
          my: "3px",
          width: "100%",
          bgcolor: "#D6DAFF",
          fontSize: "8px",
          borderRadius: "24px",
        }}
      >
        Break
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
        }}
      >
        Tamil
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
        }}
      >
        English
      </Typography>
    </Stack>
  );
}

export default TimeTable;
