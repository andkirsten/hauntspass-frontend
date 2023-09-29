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
import CurrentOffers from "../CurrentOffers/CurrentOffers";
import Contact from "../Contact/Contact";
import Map from "../Map/Map";
// import Admin from "../Admin/Admin";

const Main = (props) => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <Signup setToken={props.setToken} setIsLogged={props.setIsLogged} />
          }
        />
        <Route
          path="/login"
          element={
            <Login setToken={props.setToken} setIsLogged={props.setIsLogged} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/current-rewards"
          element={<CurrentOffers rewards={props.rewards} />}
        />
        <Route path="/faqs" element={<FAQs />} />
        <Route
          path="/pass"
          element={
            props.currentPass ? (
              <Pass
                rewards={props.rewards}
                handleRedemption={props.handleRedemption}
                redemptions={props.redemptions}
                setRedemptions={props.setRedemptions}
                loading={props.loading}
                currentRedemption={props.currentRedemption}
                setCurrentRedemption={props.setCurrentRedemption}
              />
            ) : (
              <PassForm token={props.token} />
            )
          }
        />

        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route
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
        /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
};

export default Main;
