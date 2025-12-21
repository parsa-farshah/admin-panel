"use client";
import {
  Autocomplete,
  Box,
  Button,
  Fab,
  IconButton,
  InputAdornment,
  Menu,
  Stack,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import {
  DarkMode,
  DragHandle,
  East,
  KeyboardArrowLeft,
  KeyboardBackspace,
  MenuBook,
} from "@mui/icons-material";
import Darklight from "./Darklight";
import SearchIcon from "@mui/icons-material/Search";
import { myTheme } from "@/app/db/Db";
import { Alexandria, Urbanist } from "next/font/google";
import parsa from "../../public/icons/parsa.svg";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const alexandria = Alexandria({
  subsets: ["arabic"],
});
function Header({
  themeChange,
  changelangeEn,
  changelangeFa,
  menuMobileBtn,
  dispaly,
}) {
  const { theme, lang } = useContext(myTheme);

  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%",
        height: "70px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/***********************************  left ***************************/}
      <Stack
        direction={"row"}
        sx={{ gap: "10px", alignItems: "center", flexGrow: 0 }}
      >
        {/* huburger menu */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
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
            <DragHandle />
          </Fab>
        </Box>
        {/* arrow left */}
        <Button
          sx={{
            minWidth: 0,
            width: { xs: 0, md: 50 },
            height: "50px",
            bgcolor: theme ? "#FFFFFF" : "#323233",
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            p: 0,
          }}
          variant="contained"
        >
          {lang ? (
            <KeyboardBackspace
              sx={{
                width: { xs: "15px", md: "26px" },
                height: { xs: "15px", md: "26px" },
                color: theme ? "black" : "#8E8D93",
              }}
            />
          ) : (
            <East
              sx={{
                width: "26px",
                height: "24px",
                color: theme ? "black" : "#8E8D93",
              }}
            />
          )}
        </Button>
        {/* search */}
        <Box
          sx={{
            width: { xs: 0, sm: 160, md: 280 },
            flexShrink: 0,
            display: { xs: "none", sm: "block" },
          }}
        >
          <TextField
            dir={lang ? "ltr" : "rtl"}
            label={lang ? "Search" : "جستجو"}
            variant="outlined"
            InputLabelProps={{
              sx: {
                width: { xs: "160px", md: "280px" },
                minWidth: 0,
                flexShrink: 0,

                right: lang ? "auto" : 50,
                left: lang ? 22 : "auto",
                transformOrigin: lang ? "left" : "right",
                textAlign: lang ? "left" : "right",
                fontSize: lang ? 18 : 20,
                fontFamily: lang
                  ? urbanist.style.fontFamily
                  : alexandria.style.fontFamily,
                top: lang ? "-2px" : "-4px",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "50px",
                borderRadius: "34px",
                bgcolor: theme ? "#EBEAEF" : "#323233",
                transition: "all 0.4s",
                color: theme ? "black" : "white",
              },

              "& fieldset": {
                border: "none",
              },

              "& .MuiOutlinedInput-input": {
                padding: "0 14px",
                caretColor: "#000",
              },

              "& .MuiInputLabel-root": {
                color: "#8E8D93",
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#8E8D93",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#8E8D93" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Stack>
      {/************************************       right    ********/}
      <Stack direction={"row"} sx={{ gap: 2 }}>
        <IconButton
          onClick={changelangeEn}
          sx={{
            bgcolor: theme ? "#EBEAEF" : "#323233",
            color: "#8E8D93",
            width: 40,
            height: 40,
            fontSize: "18px",
            boxShadow: "1px 1px 5px #1b1b1b67",
            transition: "all 0.4s",
            "&:hover": {
              bgcolor: theme ? "#ebeaefb6" : "#323233c9",
            },
          }}
        >
          EN
        </IconButton>
        <IconButton
          onClick={changelangeFa}
          sx={{
            bgcolor: theme ? "#EBEAEF" : "#323233",
            color: "#8E8D93",
            width: 40,
            height: 40,
            fontSize: "18px",
            boxShadow: "1px 1px 5px #1b1b1b67",
            transition: "all 0.4s",
            "&:hover": {
              bgcolor: theme ? "#ebeaefb6" : "#323233c9",
            },
          }}
        >
          {lang ? "FA" : "فا"}
        </IconButton>
        {/* dark light btn */}
        <Darklight IconName={DarkMode} themeChange={themeChange} />
        <Box
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* <Image
            fill
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={parsa}
            alt="profile"
          /> */}
          {/* <img src="../" alt="" /> */}
          <img src={parsa.src} alt="parsa" width={40} height={40} />
        </Box>
      </Stack>
    </Stack>
  );
}

export default Header;
