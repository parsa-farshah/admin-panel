"use client";
import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";

import myTheme from "./db/db";
import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function Home() {
  const [theme, setTheme] = useState(true);
  const [lang, setLang] = useState(true);
  const themeChange = () => {
    setTheme(!theme);
  };
  const changelangeEn = () => {
    setLang(true);
  };
  const changelangeFa = () => {
    setLang(false);
  };
  return (
    <myTheme.Provider value={{ theme, lang }}>
      <Stack
        direction={"row"}
        sx={{
          bgcolor: theme ? "white" : "#1f1f1f",
          px: "17px",
          py: 4,
          height: "100vh",
          justifyContent: "space-between",
          direction: lang ? "ltr" : "rtl",
          transition: "all 0.4s",
        }}
      >
        {/* sidebar */}
        <Box sx={{ width: "22%", height: "100%" }}>
          <Sidebar />
        </Box>
        {/* main */}
        <Box sx={{ width: "77%", height: "100%" }}>
          <Header
            themeChange={themeChange}
            changelangeEn={changelangeEn}
            changelangeFa={changelangeFa}
          />
        </Box>
      </Stack>
    </myTheme.Provider>
  );
}
