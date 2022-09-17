import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../components/Navbar";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme);
  const handleUsername = (e) => {
    e.preventDefault();
    if (userName.length >= 3) {
      localStorage.setItem("Username", userName);

      navigate("/todos");
    } else {
      setError(true);
      console.log("error");
    }
  };
  return (
    <>
      <Navbar />
      <Box
        component="form"
        sx={{
          height: 200,
          mt: 20,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          sx={{
            fontSize: 30,
            fontFamily: "Yellowtail",
          }}
        >
          Login
        </Grid>
        <Grid>
          <TextField
            onChange={(e) => setUserName(e.target.value)}
            required
            id="outlined-required"
            label="Kullanıcı Adı"
            error={error}
          ></TextField>
        </Grid>
        <Grid>
          <Button
            onClick={handleUsername}
            sx={{
              backgroundColor: theme.darkTheme ? "#E0E1DD" : "#0D1B2A",
              color: theme.darkTheme ? "#0D1B2A" : "#E0E1DD",
              width: 220,
              height: 50,
              "&:hover": {
                backgroundColor: theme.darkTheme ? "#FCFCFC" : "#0F243B",
              },
            }}
          >
            Login
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
