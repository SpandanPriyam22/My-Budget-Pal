import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { AuthProvider } from "../src/context/AuthContext";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Navbar />
        {/* <Home/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
