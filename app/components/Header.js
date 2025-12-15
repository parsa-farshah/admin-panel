"use client";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect } from "react";

import {
  DarkMode,
  East,
  KeyboardArrowLeft,
  KeyboardBackspace,
} from "@mui/icons-material";
import Darklight from "./Darklight";
import Image from "next/image";
import profile from "../../public/parsa.png";
import SearchIcon from "@mui/icons-material/Search";
import myTheme from "../db/db";

function Header({ themeChange, changelangeEn, changelangeFa }) {
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
      <Stack direction={"row"} sx={{ gap: "10px" }}>
        {/* arrow left */}
        <Button
          sx={{
            width: "50px",
            height: "50px",
            bgcolor: theme ? "#FFFFFF" : "#323233",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="contained"
        >
          {lang ? (
            <KeyboardBackspace
              sx={{
                width: "26px",
                height: "24px",
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
        <TextField
          dir={lang ? "ltr" : "rtl"}
          label={lang ? "Search" : "جستجو"}
          variant="outlined"
          InputLabelProps={{
            sx: {
              right: lang ? "auto" : 50,
              left: lang ? 22 : "auto",
              transformOrigin: lang ? "left" : "right",
              textAlign: lang ? "left" : "right",
              fontSize: lang ? 18 : 20,
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
          <Image
            fill
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={profile}
            alt="profile"
          />
        </Box>
      </Stack>
    </Stack>
  );
}

export default Header;
