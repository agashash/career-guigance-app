import React from "react";
import Section1 from "../section/section1";

const Header = () => {
  return (
    <div className="header_area">
      <header className="section1 p-0 sticky-top">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="#">
              <span>Career Guidance Portal</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="home.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Eligibility Checker
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="sign_btn-container">
                <a href="registration.html" className="regis_btn">
                  Get Started
                </a>
                <a href="login.html" className="login_btn ">
                  Login
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <Section1 /> */}
    </div>
  );
};

export default Header;
