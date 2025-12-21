"use client";
import StudentsList from "@/app/components/StudentsList";
import { Box, Fab, Stack } from "@mui/material";
import Sidebar from "@/app/components/Sidebar";
import { useContext, useState } from "react";
import { myTheme } from "@/app/db/Db";
import Header from "@/app/components/Header";
import { Close } from "@mui/icons-material";

function page() {
  const { theme, setTheme, lang, setLang } = useContext(myTheme);
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
    <Stack
      // className={lang ? urbanist.className : alexandria.className}
      direction={"row"}
      sx={{
        bgcolor: theme ? "#F5F4F9" : "black",
        px: "17px",
        py: 4,
        height: "100vh",
        justifyContent: "space-between",
        direction: lang ? "ltr" : "rtl",
        transition: "all 0.4s",
        position: "relative",
        overflowX: "hidden",
        width: { xs: "100%", xl: 1536 },
        mx: { xl: "auto" },
      }}
    >
      {/*---------------------------------- sidebar ------------------------*/}
      {menuMobile ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            position: "fixed",
            display: { xs: { dispaly }, md: "none" },
            top: 0,
            left: 0,
            p: 1,
            zIndex: 50,
          }}
        >
          <Sidebar
            students="./students"
            analysis="/analysis"
            dashboard="#"
            logout="./"
            bgStu={"white"}
            bgDash={""}
            bgAna={""}
            bgLog={"white"}
            colorAna={"white"}
            colorDash={"white"}
            colorLog={"black"}
            colorStu={"black"}
          />
          {/* close menu */}
          <Box
            sx={{
              position: "absolute",
              zIndex: 51,
              right: lang ? "5%" : "85%",
              top: "5%",
            }}
          >
            <Fab
              onClick={menuMobileBtn}
              sx={{
                bgcolor: theme ? "#EBEAEF" : "#323233",
                color: "#8E8D93",
                width: 40,
                height: 40,
                fontSize: "18px",
                boxShadow: "1px 1px 5px #1b1b1b67",
                display: { xs: { dispaly }, md: "none" },
                transition: "all 0.4s",
                "&:hover": {
                  bgcolor: theme ? "#ebeaefb6" : "#323233c9",
                },
              }}
            >
              <Close />
            </Fab>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "22%",
            height: "100%",
            display: { xs: "none", md: "block" },
          }}
        >
          <Sidebar
            students="./students"
            analysis="/analysis"
            dashboard="./dashboard"
            logout="./"
            bgStu={"white"}
            bgDash={""}
            bgAna={""}
            bgLog={"white"}
            colorAna={"white"}
            colorDash={"white"}
            colorLog={"black"}
            colorStu={"black"}
          />
        </Box>
      )}
      {/*----------------------------------- main -----------------------------*/}
      <Box sx={{ width: { xs: "100%", md: "77%" }, height: "100%" }}>
        <Header
          themeChange={themeChange}
          changelangeEn={changelangeEn}
          changelangeFa={changelangeFa}
          menuMobileBtn={menuMobileBtn}
          dispaly={dispaly}
        />
        <Box sx={{mt: "40px" }}>
          <StudentsList />
        </Box>
      </Box>
    </Stack>
  );
}

export default page;
