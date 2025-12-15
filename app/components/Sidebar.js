"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import Stack from "@mui/material/Stack";
import Btn from "./Btn";
import { Box, Typography } from "@mui/material";
import { Urbanist } from "next/font/google";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CalendarMonth,
  Home,
  Message,
  PeopleAltOutlined,
  PriceChange,
  School,
  Settings,
  Today,
} from "@mui/icons-material";
import myTheme from "../db/db";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Sidebar() {
  const [btnData, setBtnData] = useState([]);
  const { lang } = useContext(myTheme);

  const sideBtnFa = {
    1: "معلم ها",
    2: "دانش آموزها",
    3: "دستمزد",
    4: "تقویم",
    5: "جدول زمان",
    6: "پیام ها",
    7: "تنظیمات",
  };

  useEffect(() => {
    setBtnData([
      { icon: School, btnText: "Teachers" },
      { icon: PeopleAltOutlined, btnText: "Students" },
      { icon: PriceChange, btnText: "Fees" },
      { icon: CalendarMonth, btnText: "Calendar" },
      { icon: Today, btnText: "Time Table" },
      { icon: Message, btnText: "Message" },
      { icon: Settings, btnText: "Settings" },
    ]);
  }, []);
  return (
    <Stack
      sx={{
        px: "17px",
        py: 4,
        width: "100%",
        height: "110%",
        bgcolor: "black",
        borderRadius: 6,
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
            sx={{ fontWeight: 600, fontSize: "32px", color: "white" }}
            variant="h4"
            className={urbanist.className}
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
          <Btn
            Icon={Home}
            label={lang ? "Dashboard" : "داشبورد"}
            backColor={"white"}
            iconColor={"#2F3032"}
            textColor={"#000000"}
          />
          {btnData.length > 0 &&
            btnData.map((val, i) => {
              return (
                <Btn
                  key={i}
                  Icon={val.icon}
                  label={lang ? val.btnText : sideBtnFa[i + 1]}
                  backColor={""}
                  iconColor={"white"}
                  textColor={"white"}
                />
              );
            })}
        </Stack>
      </Box>
      {/* logout */}
      <Box sx={{ height: "10%" }}>
        <Btn
          Icon={DeleteIcon}
          label={lang ? "logOut" : "خارج شدن"}
          backColor={"white"}
          iconColor={"#2F3032"}
          textColor={"#000000"}
        />
      </Box>
    </Stack>
  );
}

export default Sidebar;
