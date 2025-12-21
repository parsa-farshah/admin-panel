import { LineChart } from "@mui/x-charts/LineChart";
import { chartsTooltipClasses } from "@mui/x-charts/ChartsTooltip";

const params = {
  xAxis: [
    {
      data: [1, 2, 3, 5, 8, 10],
      disableLine: true,
      disableTicks: true,
    },
  ],
  series: [{ data: [2, 5.5, 2, 8.5, 1.5, 5], showMark: false }],
  height: 300,
  axisHighlight: { x: "line" },
  yAxis: [
    {
      disableLine: true,
      disableTicks: true,
      tickLabelStyle: { display: "none" },
    },
  ],
};

export default function TooltipStyle() {
  return (
    <LineChart
      {...params}
      sx={{
        "& .MuiLineElement-root": {
          strokeWidth: 5, // ✅ کلفت شدن خط
        },
      }}
      slotProps={{
        tooltip: {
          sx: {
            [`&.${chartsTooltipClasses.root} .${chartsTooltipClasses.valueCell}`]:
              {
                color: "red",
              },
          },
        },
      }}
    />
  );
}
