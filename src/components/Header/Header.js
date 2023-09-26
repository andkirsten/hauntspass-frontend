import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/daybreakhauntslogoWhiteborder.png";
import "./Header.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentPassContext } from "../../contexts/CurrentPassContext";

const Header = (props) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { currentPass } = useContext(CurrentPassContext);

  return (
    <header>
      <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">How it works</NavLink>
              </li>
              {!currentPass && (
                <li>
                  <NavLink to="/current-rewards">Current Reward Offers</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/map">Map</NavLink>
              </li>
              <li>
                <NavLink to="/volunteer">Become a Haunts Home</NavLink>
              </li>
              <li>
                <NavLink to="/faqs">FAQs</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="header__btn btn btn-ghost normal-case text-xl"
          >
            <img
              className="header__logo"
              src={Logo}
              alt="daybreak haunts logo"
            ></img>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white">
              <NavLink className="hover:bg-accent hover:text-black" to="/">
                How it Works
              </NavLink>
            </li>
            {!currentPass && (
              <li className="text-white">
                <NavLink
                  className="hover:bg-accent hover:text-black"
                  to="/current-rewards"
                >
                  Current Reward Offers
                </NavLink>
              </li>
            )}
            <li className="text-white">
              <NavLink className="hover:bg-accent hover:text-black" to="/map">
                Map
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink
                className="hover:bg-accent hover:text-black"
                to="/volunteer"
              >
                Become a Haunts Home
              </NavLink>
            </li>

            <li className="text-white">
              <NavLink className="hover:bg-accent hover:text-black" to="/faqs">
                FAQs
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink className="hover:bg-accent hover:text-black" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        {currentUser ? (
          <div className="navbar-end">
            <button className="header__btn btn btn-ghost text-white">
              <NavLink to="/pass">My Pass</NavLink>
            </button>
            <button
              className="btn btn-ghost text-white"
              onClick={props.handleLogout}
            >
              <div className="indicator">Log Out</div>
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            <button className="header__btn btn btn-ghost text-white">
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className="btn btn-ghost text-white">
              <div className="indicator">
                <NavLink to="/signup">Sign Up</NavLink>
              </div>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
