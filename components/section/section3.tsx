import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div
      id="section3"
      style={{ background: "#18131e", color: "#ffffff", textAlign: "justify" }}
    >
      <div className="container">
        <div className="row">
          <h2 className="justify-content-center">CAREER GUIDANCE?</h2>
          <p className="justify-content-center" style={{ fontSize: "15pt" }}>
            Career guidance is a type of advice-giving and support provided by
            career counsellors to their clients, to help the clients manage
            their journey through life, learning and work changes. Several types
            of counselling deal with different domains of an individual's life,
            such as Career Counselling and Career Guidance, Mental Health
            Counselling, Marriage and Family Counselling, Rehabilitation
            Counselling, and Substance Abuse Counselling.
          </p>
          <div className="col-md-6">
            <p className="justify-content-center" style={{ fontSize: "15pt" }}>
              <b>Career Guidance</b> is a domain of counselling that focuses on
              helping individuals find the right career pathway. In Career
              Guidance, individuals receive Guidance from Professional
              Counselors who provide expert advice on Potential, Aptitude,
              Motivations, skills and shortcomings with the use of carefully
              designed assessment tools called DMIT. These DMIT assessment tools
              are both subjective and objective. After carefully studying the
              individual's Interests and Aptitude, Career Counselors guide
              individuals in setting their career goals. Career Guidance is the
              guidance given to individuals to aid them in understanding their
              skills, abilities and potential that is important for choosing the
              right career path.
            </p>
          </div>
          <div className="col-md-6 p-2 overflow-hidden">
            <Image
              src="/images/slider-bg.jpg"
              width={700}
              alt=""
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
