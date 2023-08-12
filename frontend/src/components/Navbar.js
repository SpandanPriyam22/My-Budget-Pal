import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import Header from "./Header";

import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { loggedIn, handleLogout } = useContext(AuthContext);
  return (
    <Stack flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'}>
      <Header />
      {loggedIn ? (
        <Stack direction="row" gap="30px" height="40px">
          <Button
            className="log-sign-btn"
            sx={{
              color: "black",
              bgcolor: "white",
              textTransform: "none",
              width: "100px",
              borderRadius: "15px",
            }}
            onClick={handleLogout}
          >
            LOG OUT
          </Button>
          <Button
            className="log-sign-btn"
            sx={{
              color: "black",
              bgcolor: "white",
              textTransform: "none",
              width: "80px",
              borderRadius: "10px",
            }}
            onClick={() => navigate("/")}
          >
            Welcome
          </Button>
        </Stack>
      ) : (
        <Stack direction="row" gap="30px" height="40px">
          <Button
            className="log-sign-btn"
            sx={{
              color: "black",
              bgcolor: "white",
              textTransform: "none",
              width: "80px",
              borderRadius: "15px",
            }}
            onClick={() => navigate("/login")}
          >
            LOG IN
          </Button>
          <Button
            className="log-sign-btn"
            sx={{
              color: "black",
              bgcolor: "white",
              textTransform: "none",
              width: "80px",
              borderRadius: "15px",
            }}
            onClick={() => navigate("/signup")}
          >
            SIGN UP
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default Navbar;
