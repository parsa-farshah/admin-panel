"use client";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";
import myTheme from "../db/db";
import { useContext, useEffect, useState } from "react";

const margin = { right: 24 };
const uData = [50, 25, 75, 50, 40];
const xLabels = ["Apr10", "Apr11", "Apr12", "Apr13", "Apr14"];

export default function TestScore() {
  const { theme, lang } = useContext(myTheme);

  const [labelText, setLabelText] = useState("Monthly");

  useEffect(() => {
    if (lang) {
      setLabelText("Monthly");
    } else {
      setLabelText("ماهانه");
    }
  });

  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <LineChart
        series={[
          {
            data: uData,
            label: labelText,
            area: true,
            showMark: false,
            color: "#ffae41",
          },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            display: "none",
          },
        }}
        margin={margin}
      />
    </Box>
  );
}
