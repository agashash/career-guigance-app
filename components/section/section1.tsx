import Image from "next/image";
import React from "react";

const Section1 = () => (
  <div className="header_area">
    <section className="section1">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <Image
                src="/images/contact-img.png"
                width={230}
                height={230}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h1>Discover Your Perfect Career</h1>
              <p>
                Make smart decisions with our revolutionary AI enabled career
                guidance tools and expert career counsellors
              </p>
              <div className="btn-box">
                <a href="/check_career" className="btn1">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Section1;
