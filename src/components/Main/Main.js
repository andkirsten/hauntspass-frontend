import React from "react";
import "./Main.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import About from "../About/About";
import FAQs from "../FAQs/FAQs";
import Pass from "../Pass/Pass";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/pass" element={<Pass />} />
      </Routes>
    </div>
  );
};

export default Main;
