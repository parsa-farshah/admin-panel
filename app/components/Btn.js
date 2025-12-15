import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { color, flex, gap, height, width } from "@mui/system";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function IconLabelButtons({
  Icon,
  label,
  backColor,
  textColor,
  iconColor,
}) {
  return (
    <Stack direction="row" sx={{ gap: "14px", transition: "all 0.4s" }}>
      <Button
        variant="text"
        startIcon={
          <Icon
            sx={{
              color: iconColor,
              transition: "color 0.4s",
              width: "22px",
              height: "22px",
              transition: "all 0.4s",
            }}
            className={`icon ${inter.className}`}
          />
        }
        sx={{
          "&:hover .icon": {
            color: "#292D32",
          },
          bgcolor: backColor,
          width: "100%",
          height: "44px",
          borderRadius: "7px",
          color: textColor,
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          fontWeight: 400,
          gap: 2,
          fontSize: "18px",
          transition: "all 0.4s",
          "&:hover": {
            bgcolor: "#a5a5a5b0",
            color: "black",
          },
        }}
      >
        {label}
      </Button>
    </Stack>
  );
}
