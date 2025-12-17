import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import myTheme from "../db/db";
import notificationpurple from "../../public/icons/notification.svg";
import notificationorange from "../../public/icons/notificationOrange.svg";
import Image from "next/image";
import { Alexandria, Poppins } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["arabic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function NoticeBoard() {
  const { theme, lang } = useContext(myTheme);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "24px",
        bgcolor: theme ? " white" : "#323233",
      }}
    >
      {/* txt */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "8px",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            color: theme ? "black" : "white",
            fontFamily: lang
              ? poppins.style.fontFamily
              : alexandria.style.fontFamily,
          }}
        >
          {lang ? "Notice Board" : "تابلو اعلانات"}
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",
            color: theme ? "#797979" : "#d3d0d0ab",
            fontFamily: lang
              ? poppins.style.fontFamily
              : alexandria.style.fontFamily,
          }}
        >
          {lang ? "view all" : "مشاهده همه"}
        </Typography>
      </Box>
      {/* sport */}

      <Box
        component={"div"}
        sx={{
          width: "100%",
          height: "65px",
          border: "1px solid #C9C9C9",
          borderRadius: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "16px",
          px: "6px",
          py: "6px",
        }}
      >
        <Box
          component={"div"}
          sx={{
            width: "20%",
            height: "40px",
            bgcolor: "#FFED9F",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image width={20} height={20} src={notificationorange} alt="icon" />
        </Box>
        <Box sx={{ width: "75%" }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "9px",
              textAlign: "start",
              color: theme ? "black" : "white",
              fontFamily: lang
                ? poppins.style.fontFamily
                : alexandria.style.fontFamily,
            }}
          >
            {lang ? "Sports Day Announcement" : "اعلامیه روز ورزش"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme ? "#797979" : "#d3d0d0ab",
              fontSize: "7px",
              textAlign: "start",
              fontFamily: lang
                ? poppins.style.fontFamily
                : alexandria.style.fontFamily,
              mt: "4px",
            }}
          >
            {lang
              ? "   Summer break begins on May 25, 2024. Have a wonderful holiday!"
              : "تعطیلات تابستانی از ۲۵ مهٔ ۲۰۲۴ آغاز می‌شود. تعطیلات بسیار خوبی داشته باشید!"}
          </Typography>
        </Box>
      </Box>
      {/* summer */}
      <Box
        component={"div"}
        sx={{
          width: "100%",
          height: "65px",
          border: "1px solid #C9C9C9",
          borderRadius: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "13px",
          px: "6px",
          py: "6px",
        }}
      >
        <Box
          component={"div"}
          sx={{
            width: "20%",
            height: "40px",
            bgcolor: "#D6DAFF",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image width={20} height={20} src={notificationpurple} alt="icon" />
        </Box>
        <Box sx={{ width: "75%" }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "9px",
              textAlign: "start",
              color: theme ? "black" : "white",
              fontFamily: lang
                ? poppins.style.fontFamily
                : alexandria.style.fontFamily,
            }}
          >
            {lang ? "Summer Break Start Date" : "تاریخ شروع تعطیلات تابستانی"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme ? "#797979" : "#d3d0d0ab",
              fontSize: "7px",
              textAlign: "start",
              fontFamily: lang
                ? poppins.style.fontFamily
                : alexandria.style.fontFamily,
              mt: "4px",
            }}
          >
            {lang
              ? "   Summer break begins on May 25, 2024. Have a wonderful holiday!"
              : "تعطیلات تابستانی از ۲۵ مهٔ ۲۰۲۴ آغاز می‌شود. تعطیلات بسیار خوبی داشته باشید!"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default NoticeBoard;
