import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import developer from "../../public/parsa.svg";
import { GitHub, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import Link from "next/link";
import { myTheme } from "../db/Db";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Developer() {
  const { theme, lang } = useContext(myTheme);
  return (
    <Stack
      component={"div"}
      sx={{
        width: "100%",
        mx: "auto",
        p: "10px",
        bgcolor: theme ? "white" : "#323233",
        borderRadius: "24px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        border: theme ? "1px solid #cfcfcf98" : "1px solid #686868c7",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "20%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component={"figure"}
          sx={{
            width: { xs: "20%", md: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={developer} alt="developer" />
        </Box>
      </Box>
      {/* right side */}
      <Box
        sx={{
          width: { xs: "100%", md: "75%" },
          height: "100%",
          mt: { xs: "30px", md: "0px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "20px",
            textAlign: "center",
            width: "100%",
            color: theme ? "black" : "white",
            fontFamily: urbanist.style.fontFamily,
            fontWeight: 800,
          }}
        >
          Parsa Dehghan Pour
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            textAlign: "center",
            width: "100%",
            mt: "10px",
            color: theme ? "black" : "white",

            fontFamily: urbanist.style.fontFamily,
            fontWeight: 800,
          }}
        >
          Front-End Developer
        </Typography>

        <Box
          sx={{
            width: "100%",
            px: "15%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "30px",
          }}
        >
          <Link href={"http://github.com/parsa-farshah"}>
            <Box>
              <GitHub
                sx={{
                  width: "40px",
                  height: "40px",
                  color: theme ? "black" : "white",
                }}
              />
            </Box>
          </Link>
          <Link
            href={
              "http://linkedin.com/in/parsa-dehghan-pour-farashah-85ab04250"
            }
          >
            <Box>
              <LinkedIn
                sx={{
                  width: "40px",
                  height: "40px",
                  color: theme ? "black" : "white",
                }}
              />
            </Box>
          </Link>{" "}
          <Link
            href={
              "https://www.instagram.com/parsa_dehghanpour_dv?igsh=eHkwNWhsa3I4ZWVp"
            }
          >
            <Box>
              <Instagram
                sx={{
                  width: "40px",
                  height: "40px",
                  color: theme ? "black" : "white",
                }}
              />
            </Box>
          </Link>{" "}
          <Link href={"https://youtube.com/@frontendfresh?si=-2WsIYe-KBTUfwyu"}>
            <Box>
              <YouTube
                sx={{
                  width: "40px",
                  height: "40px",
                  color: theme ? "black" : "white",
                }}
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
}

export default Developer;
