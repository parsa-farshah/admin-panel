"use client";
import { Box, Fab, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { Alexandria, Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const alexandria = Alexandria({
  subsets: ["arabic"],
});

import myTheme from "./db/db";
import { use, useEffect, useState } from "react";
import Header from "./components/Header";
import { Close, DragHandle } from "@mui/icons-material";
import Main from "./components/Main";
import SignIn from "./components/SignIn";

export default function Home() {
  const [theme, setTheme] = useState(true);
  const [lang, setLang] = useState(true);
  const [menuMobile, setMenuMobile] = useState(false);
  const [dispaly, setDisplay] = useState("block");
  const themeChange = () => {
    setTheme(!theme);
  };
  const changelangeEn = () => {
    setLang(true);
  };
  const changelangeFa = () => {
    setLang(false);
  };
  const menuMobileBtn = () => {
    setMenuMobile(!menuMobile);
    if (menuMobile) {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  };
  return (
    <myTheme.Provider value={{ theme, lang }}>
      <SignIn />
    </myTheme.Provider>
  );
}
