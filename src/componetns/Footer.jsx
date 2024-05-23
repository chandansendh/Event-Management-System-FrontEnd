import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const Footer=()=>{
    return (
      <>
        <footer>
          <div className="footer">
            <img src="/images/eventlogo.png" alt="Logo" />
            <h2>Event Management System</h2>
            <FaLinkedin className="in" />
            <p>We work across 24 x 7 to help you.</p>
            <p>&copy; 2024 Event Management System</p>
          </div>
        </footer>
      </>
    );
};

export default Footer;