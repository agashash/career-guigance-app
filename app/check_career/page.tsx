import CheckCareerForm from "@/components/career/check_eligibility_form";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";
import React from "react";

const CheckCareer = () => {
  return (
    <>
      <Header />
      <div className="flex ...">
        <CheckCareerForm />
      </div>
      <Footer />
    </>
  );
};

export default CheckCareer;
