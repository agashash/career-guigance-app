import React from "react";
import Image from "next/image";

const Section4 = () => {
  return (
    <div id="section4" style={{ background: "#ffffff", color: "#18131e" }}>
      <div className="container">
        <h2 className="text-center">Shaping the Career goals of Students</h2>
        <p className="text-center">
          Comprehensive career guidance solutions for students, parents,
          educators and schools
        </p>
        <div className="row">
          <div className="col-md-4 text-center guidance_list">
            <div className="sec4_img">
              <Image
                src="/images/005-creative.svg"
                alt=""
                width={80}
                height={80}
              />
            </div>
            <p className="text-center">
              Enable students to identify their best-fit career with our
              world-className career assessment and personalised guidance.
            </p>
          </div>
          <div className="col-md-4 text-center guidance_list">
            <div className="sec4_img">
              <Image
                src="/images/002-devices.svg"
                alt=""
                width={80}
                height={80}
              />
            </div>
            <p className="text-center">
              Empower students to learn all about the professional world with
              virtual career simulations, exhaustive career library, career
              blogs and vlogs.
            </p>
          </div>
          <div className="col-md-4 text-center guidance_list">
            <div className="sec4_img">
              <Image
                src="/images/003-certificate.svg"
                alt=""
                width={80}
                height={80}
              />
            </div>
            <p className="text-center">
              Pave student's way to their dream college with our end-to-end
              college application guidance, scholarship drive and corporate
              internship program.
            </p>
          </div>
          <div className="col-md-4 text-center guidance_list">
            <div className="sec4_img">
              <Image
                src="/images/004-career.svg"
                alt=""
                width={80}
                height={80}
              />
            </div>
            <p className="text-center">
              Enable schools in creating a career guidance ecosystem in sync
              with the vision of New Education Policy
            </p>
          </div>
          <div className="col-md-4 text-center guidance_list">
            <div className="sec4_img">
              <Image src="/images/010-team.svg" alt="" width={80} height={80} />
            </div>
            <p className="text-center">
              Empower educators to become International Certified Career Coaches
              and build a career in career guidance & counselling
            </p>
          </div>
          <div className="col-md-4 text-center guidance_list">
            <div className="sec4_img">
              <Image
                src="/images/007-startup.svg"
                alt=""
                width={80}
                height={80}
              />
            </div>
            <p className="text-center">
              Revolutionary assessment platform and technology driven career
              guidance solutions for educators to boost their career guidance &
              counselling practice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
