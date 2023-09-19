import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import About from "../About/About";
import FAQs from "../FAQs/FAQs";
import Pass from "../Pass/Pass";
import PassForm from "../PassForm/PassForm";
import Volunteer from "../Volunteer/Volunteer";
import Map from "../Map/Map";
import Admin from "../Admin/Admin";

const Main = (props) => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <Signup
              handleSignup={props.handleSignup}
              error={props.error}
              isLoading={props.isLoading}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              handleLogin={props.handleLogin}
              error={props.error}
              isLoading={props.isLoading}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route
          path="/pass"
          element={
            props.currentPass ? (
              <Pass />
            ) : (
              <PassForm handleRegisterPass={props.handleRegisterPass} />
            )
          }
        />

        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/map" element={<Map />} />
        <Route
          path="/admin"
          element={
            <Admin
              handleCreateEvent={props.handleCreateEvent}
              events={props.events}
              handleCreateReward={props.handleCreateReward}
              handleUpdateReward={props.handleUpdateReward}
              rewards={props.rewards}
            />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Main;
