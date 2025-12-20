"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import Stack from "@mui/material/Stack";
import Btn from "./Btn";
import { Box, Typography } from "@mui/material";
import { Alexandria, Urbanist } from "next/font/google";
import {
  BarChart,
  CalendarMonth,
  Home,
  Logout,
  Message,
  PeopleAltOutlined,
  PriceChange,
  School,
  Settings,
  Today,
} from "@mui/icons-material";
import { myTheme } from "@/app/db/Db";
import Link from "next/link";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const alexandria = Alexandria({
  subsets: ["arabic"],
});

function Sidebar({
  students = "/dashboard/students",
  analysis = "/dashboard/analysis",
  dashboard = "/dashboard",
  logout = "/",
}) {
  const { lang } = useContext(myTheme);

  return (
    <Stack
      sx={{
        px: "17px",
        pt: 4,
        width: "100%",
        height: "110%",
        bgcolor: "black",
        display: "block",
        borderRadius: 6,
        position: "relative",
        zIndex: 50,
        pb: { xs: 7, md: 3 },
      }}
    >
      {/* up side */}
      <Box sx={{ height: "90%" }}>
        {/* logo and text */}
        <Stack direction={"row"} sx={{ alignItems: "center", gap: 3 }}>
          {/* logo */}
          <Stack
            component={"figure"}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "white",
              width: "52px",
              height: "52px",
              borderRadius: 3,
            }}
          >
            <Image width={40} height={37} src={logo} alt="logo" />
          </Stack>
          {/* text */}
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "32px",
              color: "white",
              fontFamily: lang
                ? urbanist.style.fontFamily
                : alexandria.style.fontFamily,
            }}
            variant="h4"
          >
            {lang ? "Smansys" : "سمانیس"}
          </Typography>
        </Stack>
        {/* links */}
        <Stack
          sx={{
            width: "100%",
            height: "800px",
            mt: "35px",
            gap: "2px",
          }}
        >
          <Link href={dashboard}>
            <Btn
              Icon={Home}
              label={lang ? "Dashboard" : "داشبورد"}
              backColor={"white"}
              iconColor={"#2F3032"}
              textColor={"#000000"}
            />
          </Link>
          <Link href={students}>
            <Btn
              Icon={PeopleAltOutlined}
              label={lang ? "students" : "دانش آموز ها"}
              backColor={""}
              iconColor={"white"}
              textColor={"white"}
            />
          </Link>
          <Link href={analysis}>
            <Btn
              Icon={BarChart}
              label={lang ? "analysis " : "آنالیز ها"}
              backColor={""}
              iconColor={"white"}
              textColor={"white"}
            />
          </Link>
        </Stack>
      </Box>
      {/* logout */}
      <Box sx={{ height: "10%" }}>
        <Link href={logout}>
          <Btn
            Icon={Logout}
            label={lang ? "logOut" : "خارج شدن"}
            backColor={"white"}
            iconColor={"#2F3032"}
            textColor={"#000000"}
          />
        </Link>
      </Box>
    </Stack>
  );
}

export default Sidebar;
