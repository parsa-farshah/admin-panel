import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box } from "@mui/material";
import { useContext } from "react";
import { myTheme } from "@/app/db/Db";

export default function Calendar() {
  const { theme, lang } = useContext(myTheme);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          transform: { xs: "scale(1)", md: "scale(0.4)", lg: "scale(0.7)" },
          transformOrigin: { xs: "center center", md: "top left" },
          width: { xs: "100%", md: 300 },
          overflow: "hidden",
          mx: "auto",
          "& .MuiPickersDay-root": {
            color: theme ? "#797979" : "#d3d0d0ab",
            fontSize: 12,
            width: "100%",
          },

          "& .MuiPickersDay-root:hover": {
            bgcolor: theme ? "#f04d23" : "white",
            color: theme ? "white" : "black",
          },

          "& .MuiPickersDay-root.Mui-selected": {
            bgcolor: theme ? "#f04d23" : "white",
            color: theme ? "white" : "black",
          },
          "& .MuiPickersDay-root.Mui-selected:hover": {
            bgcolor: "#5a52e0",
          },

          "& .MuiPickersCalendarHeader-root": {
            color: theme ? "#797979" : "#d3d0d0ab",
          },

          "& .MuiPickersArrowSwitcher-button": {
            color: theme ? "#797979" : "#d3d0d0ab",
          },
          "& .MuiPickersActionBar-root": {
            bgcolor: theme ? "#f5f5f5" : "#2a2a2a",
            px: 2,
          },

          "& .MuiPickersActionBar-root .MuiButton-root": {
            fontSize: 12,
            textTransform: "none",
            color: theme ? "#f04d23" : "white",
          },
        }}
      >
        <StaticDatePicker
          localeText={{
            calendarHeaderLabel: "تاریخ رو انتخاب کن",
          }}
          slots={{ actionBar: () => null }}
          sx={{
            bgcolor: theme ? " white" : "#323233",
            color: theme ? "black" : "white",
          }}
          defaultValue={dayjs("2025-04-17")}
        />
      </Box>
    </LocalizationProvider>
  );
}
