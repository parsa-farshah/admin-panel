import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import { useContext } from "react";
import { myTheme } from "@/app/db/Db";

const uData = [100, 100, 100, 100, 100, 100, 100];
const pData = [90, 20, 50, 20, 70, 75, 80];
const xLabels = [
  "English",
  "Math",
  "Tamil",
  "Physics",
  "History",
  "Science",
  "Biology",
];

export default function GradeChart() {
  const { theme } = useContext(myTheme);
  return (
    <Box sx={{ width: "100%", height: 300 }}>
      <BarChart
        series={[
          {
            data: pData,
            label: "pv",
            id: "pvId",
            stack: "total",
            color: "#CFCEFF",
          },
          {
            data: uData,
            label: "uv",
            id: "uvId",
            stack: "total",
            color: "#F1F1F1",
          },
        ]}
        xAxis={[{ data: xLabels, disableLine: true, disableTicks: true }]}
        yAxis={[
          {
            width: 50,
            disableLine: true,
            disableTicks: true,
            tickLabelStyle: { display: "none" },
          },
        ]}
        sx={{
          "& .MuiChartsAxis-tickLabel": {
            fill: theme ? "black" : "white",
            fontSize: "12px",
            fontWeight: 500,
          },

          "& .MuiChartsAxis-tick": {
            stroke: theme ? "black" : "white",
          },
          "& .MuiChartsAxis-tickLabel": {
            fill: theme ? "black" : "white",
          },

          "& .MuiChartsLegend-label": {
            fill: theme ? "black" : "white",
            fontSize: "12px",
          },
        }}
      />
    </Box>
  );
}
