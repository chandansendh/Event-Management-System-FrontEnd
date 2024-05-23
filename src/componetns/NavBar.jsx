import React from "react";
import { CiLogin } from "react-icons/ci";
import { IoLogIn } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const NavBar=()=>{
  const { isLogIn } = useAuth();
    return (
      <>
        <div className="nav">
          <div className="nav-container">
            <div className="logo">
              <a href="/">
                <img
                  src="/images/eventlogo.png"
                  alt="Logo"
                  className="logoImg"
                />
              </a>
            </div>
            <div className="nav-manu">
              <ul>
                <li>
                  <NavLink to="/" className="nav-links">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/events" className="nav-links">
                    All Events
                  </NavLink>
                </li>
                {!isLogIn?<></>:
                <li>
                  <NavLink to="./yourevents" className="nav-links">
                    Your Events
                  </NavLink>
                </li>}
                <li>
                  <NavLink to="/about" className="nav-links">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="nav-links">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-btn">
              {!isLogIn ? (
                <>
                  <NavLink to="/login" className="nav-menu-btn">
                    <CiLogin className="sales_icon" />
                    Log In
                  </NavLink>
                  <NavLink to="/register" className="nav-menu-btn">
                    <IoLogIn className="contact_icon" />
                    Register
                  </NavLink>
                </>
              ) : (
                <NavLink to="/logout" className="nav-menu-btn">
                  <CiLogout className="contact_icon" />
                  Log Out
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </>
    );
};

export default NavBar;