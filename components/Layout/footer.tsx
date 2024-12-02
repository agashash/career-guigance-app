import React from "react";

const Footer = () => (
  <div className="footer_container">
    <section className="info_section ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-2 mx-auto">
            <div className="info_link_box">
              <h4>Links</h4>
              <div className="info_links">
                <a className="" href="index.html">
                  Home
                </a>
                <a className="" href="eligibility.html">
                  Eligibility Checker
                </a>
                <a className="" href="profile.html">
                  Profile
                </a>
                <a className="" href="login.html">
                  Sign In
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 ">
            <div className="info_detail">
              <h4>Career Guidance Portal</h4>
              <p>
                Make smart decisions with our revolutionary AI enabled career
                guidance tools and expert career counsellors
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-0 ml-auto">
            <div className="info_contact">
              <h4>Address</h4>
              <div className="contact_link_box">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Pillars Gate, Nagercoil</span>
                </a>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +91 8870896727</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>swarnavelkumaresan@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="info_social">
              <a className="" href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear"></span> Career Guidance Portal
          <a href="home.html"></a>
        </p>
      </div>
    </footer>
  </div>
);

export default Footer;
