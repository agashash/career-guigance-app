import Image from "next/image";
import React from "react";

const Section2 = () => (
  <section className="section2">
    <div className="row d-flex align-items-center">
      <div className="col-md-12">
        <br />
        <h2 className="section-title" style={{ color: "rgb(83, 82, 82)" }}>
          Expectations from
        </h2>
        <h3 className="section-title" style={{ marginTop: "-1%" }}>
          Career Guidance
        </h3>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <Image
                src="/images/service 1.png"
                width={125}
                height={125}
                alt=""
              />
            </div>
            <div className="detail-box">
              <h5>Career Building</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              <a href="">
                <span>Read More</span>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <Image
                src="/images/service 4.png"
                width={125}
                height={125}
                alt=""
              />
            </div>
            <div className="detail-box">
              <h5>Guiding the correct path</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              <a href="">
                <span>Read More</span>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <Image
                src="/images/service 5.png"
                width={125}
                height={125}
                alt=""
              />
            </div>
            <div className="detail-box">
              <h5>To reach the destination</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              <a href="">
                <span>Read More</span>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <Image
                src="/images/service 2.png"
                width={125}
                height={125}
                alt=""
              />
            </div>
            <div className="detail-box">
              <h5>Success</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              <a href="">
                <span>Read More</span>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box" style={{ paddingBottom: "10px" }}>
        <a href="">View More</a>
      </div>
    </div>
  </section>
);

export default Section2;
