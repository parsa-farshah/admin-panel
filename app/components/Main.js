import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Alexandria, Poppins } from "next/font/google";
import Image from "next/image";
import ashwin from "../../public/ashwin.svg";
import myTheme from "../db/db";
import { MoreHoriz } from "@mui/icons-material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import GradePicker from "./GradePicker";
import Calendar from "../components/Calendar";

const settings = {
  width: "100",
  height: "100",
  value: 85,
};
const alexandria = Alexandria({
  subsets: ["arabic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function Main() {
  const { lang, theme } = useContext(myTheme);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ mt: "27px" }}>
      <Grid container spacing={2}>
        {/*-------------------------------- ashwin grid -----------------------*/}
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            height: { xs: 250, sm: 180, md: 350 },
          }}
        >
          <Item
            sx={{
              borderRadius: 3,
              height: "100%",
              width: "100%",
              bgcolor: theme ? " white" : "#323233",
            }}
          >
            <Stack
              sx={{ px: "25px", py: "18px", gap: 2, position: "relative" }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "18px",
                  fontFamily: lang
                    ? poppins.style.fontFamily
                    : alexandria.style.fontFamily,
                  fontWeight: 500,
                  textAlign: "start",
                  color: theme ? "black" : "white",
                }}
              >
                {lang ? "Hey Ashwin." : "سلام اشوین."}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  fontFamily: lang
                    ? poppins.style.fontFamily
                    : alexandria.style.fontFamily,
                  fontWeight: 300,
                  textAlign: "start",
                  width: "60%",
                  color: theme ? "#797979" : "#d3d0d0ab",
                }}
              >
                {lang
                  ? "Welcome back! We're here to support you on your learning journey. Dive into your classes and keep progressing towards your goals"
                  : "خوش اومدی! ما اینجاییم تا در مسیر یادگیری همراهت باشیم. وارد دوره‌هات شو و با قدرت به سمت اهدافت پیش برو"}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: {xs: 0,sm: -40},
                  transform: lang ? "" : "scaleX(-1)",
                  right: lang ? 0 : "auto",
                  left: lang ? "auto" : 0,
                }}
              >
                <Image height={200} src={ashwin} alt="ashvin" />
              </Box>
            </Stack>
          </Item>
        </Grid>
        {/*--------------------------------------- grid 2 -------------------------*/}
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            height: { xs: "100%", md: 350 },
          }}
        >
          <Item
            sx={{
              borderRadius: 3,
              height: "100%",
              width: "100%",
              bgcolor: theme ? " white" : "#323233",
            }}
          >
            <Box sx={{ px: "12px" }}>
              {/* first row */}
              <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
                <Typography
                  sx={{ fontSize: 14, color: theme ? "black" : "white" }}
                >
                  Attendance
                </Typography>
                <MoreHoriz sx={{ fill: theme ? "black" : "white" }} />
              </Stack>
              {/* chart text top */}
              <Stack
                direction={"row"}
                sx={{ px: "5%", mt: "21px", justifyContent: "space-between" }}
              >
                {/* left */}
                <Stack direction={"row"} sx={{ alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      bgcolor: "#CFCEFF",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: theme ? "#797979" : "#d3d0d0ab",
                    }}
                  >
                    Absent
                  </Typography>
                </Stack>
                {/* right */}
                <Stack direction={"row"} sx={{ alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      bgcolor: "#FAE27C",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: theme ? "#797979" : "#d3d0d0ab",
                    }}
                  >
                    Present
                  </Typography>
                </Stack>
              </Stack>
              {/* chart */}
              <Box
                sx={{ width: { xs: "80%", sm: "60%", md: "100%" }, mx: "auto" }}
              >
                <Gauge
                  {...settings}
                  cornerRadius="50%"
                  sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 16,
                      fill: theme ? "black" : "white",
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: "#CFCEFF",
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                      fill: "#FAE27C",
                    },
                  }}
                />
              </Box>
              {/* selec chart bottom */}
              <Stack
                direction={"row"}
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GradePicker />
              </Stack>
            </Box>
          </Item>
        </Grid>
        {/*---------------------------------------- grid 3 -----------------------*/}
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            height: { xs: "100%", md: 350, direction: "ltr" },
          }}
        >
          <Item
            sx={{
              borderRadius: 3,
              width: "100%",
              height: "100%",
              bgcolor: theme ? " white" : "#323233",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <Calendar />
            </Box>
          </Item>
        </Grid>
      </Grid>
      {/* end grid */}
      <Stack></Stack>
    </Box>
  );
}

export default Main;
