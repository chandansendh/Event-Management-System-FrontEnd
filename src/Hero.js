import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="main-text">
          <div className="header-text">
            <h1 className="header-h">
              Event Management System
            </h1>
            <p className="header-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit deserunt ipsum mollitia veniam, eum molestiae fugiat assumenda minima voluptatibus nemo eaque minus odio in corporis? Architecto, omnis fuga. Obcaecati.
            </p>
          </div>
          <div className="header-logo">
            <img
              src="/images/eventlogo.png"
              alt="header logo"
              className="header-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
