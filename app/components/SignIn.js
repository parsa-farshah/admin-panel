"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function SignIn() {
  const [userName, setUserName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [flag, setFlag] = React.useState(0);
  const router = useRouter();

  const logInAlert = React.useRef();
  const error = React.useRef();
  const logIn = React.useRef();

  const logInHandle = () => {
    fetch("https://6912e51452a60f10c8232605.mockapi.io/adminpanel", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((tasks) => {
        // Do something with the list of tasks
        const userLogIN = tasks.some((val) => {
          return val.username === userName && val.pass === pass;
        });

        if (userLogIN) {
          logInAlert.current.style.left = "0%";
          setTimeout(() => {
            logInAlert.current.style.left = "-100%";
          }, 1000);
          setTimeout(() => {
            router.push("dashboard");
          }, 1500);
        } else {
          error.current.style.left = "0%";
          setTimeout(() => {
            error.current.style.left = "-100%";
          }, 1500);
          setUserName("");
          setPass("");
        }
      })
      .catch((error) => {
        // handle error
      });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "#F5F4F9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* error alert */}
      <Alert
        ref={error}
        variant="filled"
        severity="error"
        sx={{
          width: { xs: "90%", md: "30%" },
          position: "absolute",
          top: "5%",
          left: "-100%",
          zIndex: 50,
          transition: "all 0.4s",
          fontFamily: urbanist.style.fontFamily,
        }}
      >
        Email or Password Wrong
      </Alert>
      {/* log in success alert */}

      <Alert
        variant="filled"
        severity="success"
        ref={logInAlert}
        sx={{
          width: { xs: "90%", md: "30%" },
          position: "absolute",
          top: "5%",
          left: "-100%",
          zIndex: 50,
          transition: "all 0.4s",
          fontFamily: urbanist.style.fontFamily,
        }}
      >
        This is a filled success Alert.
      </Alert>
      <Box
        sx={{
          width: { xs: "95%", md: "30%", borderRadius: "24px" },
          height: { xs: "450px", md: "400px" },
          bgcolor: "black",
          p: { xs: "7%", md: "2%" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontFamily: urbanist.style.fontFamily,
            fontWeight: 800,
          }}
        >
          Login
        </Typography>
        <Box sx={{ mt: "50px" }}>
          {/*----------------------------------- userName input ------------*/}
          <TextField
            value={userName}
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            sx={{
              width: "100%",
              color: "black",
              fontFamily: urbanist.style.fontFamily,
              "& label": {
                color: "white",
              },
              "& label.Mui-focused": {
                color: "white",
              },

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              },
            }}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/*------------------------- password input -----------------------*/}
          <TextField
            value={pass}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{
              width: "100%",
              color: "black",
              mt: { xs: "30px", md: "20px" },
              fontFamily: urbanist.style.fontFamily,

              "& label": {
                color: "white",
              },
              "& label.Mui-focused": {
                color: "white",
              },

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              },
            }}
            onChange={(e) => setPass(e.target.value)}
          />
          <Button
            ref={logIn}
            variant="outlined"
            sx={{
              width: "100%",
              mt: { xs: "30px", md: "20px" },
              py: "10px",
              color: "white",
              borderColor: "white",
              fontFamily: urbanist.style.fontFamily,
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255,255,255,0.08)",
              },
            }}
            onClick={logInHandle}
          >
            LogIn
          </Button>
          {/* auto complete */}
          <FormControlLabel
            onClick={() => {
              setUserName("adminpanel");
              setPass("adminpanel123");
            }}
            control={
              <Checkbox
                sx={{
                  borderColor: "white",
                  color: "white",
                  fontFamily: urbanist.style.fontFamily,

                  "&.Mui-checked": {
                    color: "white",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },
                }}
              />
            }
            label="Auto Fill"
            sx={{
              color: "white",
              borderColor: "white",
              mt: { xs: "30px", md: "20px" },
              fontFamily: urbanist.style.fontFamily,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;
