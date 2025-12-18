import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

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
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 50 }]}
      />
    </Box>
  );
}
