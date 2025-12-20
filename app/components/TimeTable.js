import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { myTheme } from "@/app/db/Db";
import { Alexandria, Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const alexandria = Alexandria({
  subsets: ["arabic"],
});

function TimeTable() {
  const { lang, theme } = useContext(myTheme);
  return (
    <Stack sx={{ width: "100%", height: "100%", px: "17px", py: "20px" }}>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "black" : "white",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Monday" : "دوشنبه"}
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
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Tamil" : "تامیلی"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "English" : "انگلیسی"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#6479FF",
          my: "3px",
          width: "100%",
          bgcolor: "#D6DAFF",
          fontSize: { xs: "18px", lg: "8px" },
          borderRadius: "24px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Break" : "زنگ تفریح"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Math" : "ریاضی"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Science" : "علوم"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#B97624",
          my: "3px",
          width: "100%",
          bgcolor: "#FFE7CA",
          fontSize: { xs: "18px", lg: "8px" },
          borderRadius: "24px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Lunch" : "ناهار"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Social" : "مطالعات اجتماعی"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "CS" : "علوم کامپیوتر"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#6479FF",
          my: "3px",
          width: "100%",
          bgcolor: "#D6DAFF",
          fontSize: { xs: "18px", lg: "8px" },
          borderRadius: "24px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Break" : "زنگ تفریح"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Tamil" : "تامیلی"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "English" : "انگلیسی"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#6479FF",
          my: "3px",
          width: "100%",
          bgcolor: "#D6DAFF",
          fontSize: { xs: "18px", lg: "8px" },
          borderRadius: "24px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Break" : "زنگ تفریح"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Social" : "مطالعات اجتماعی"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "CS" : "علوم کامپیوتر"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "Social" : "مطالعات اجتماعی"}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: theme ? "#797979" : "#d3d0d0ab",
          my: "7px",
          fontFamily: lang
            ? urbanist.style.fontFamily
            : alexandria.style.fontFamily,
        }}
      >
        {lang ? "CS" : "علوم کامپیوتر"}
      </Typography>
    </Stack>
  );
}

export default TimeTable;
