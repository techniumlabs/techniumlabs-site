import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/HomeTwo/MainBanner";
import AboutUs from "../../components/HomeOne/AboutUs";
import OurServices from "../../components/HomeTwo/OurServices";
import FunFacts from "../../components/Common/FunFacts";
import SolutionsTab from "../../components/Common/SolutionsTab";
import WorkingProcess from "../../components/HomeTwo/WorkingProcess";
import Testimonial from "../../components/Common/Testimonial";
import BlogPost from "../../components/Common/BlogPost";
import Customers from "../../components/Common/Customers";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <AboutUs />

      <OurServices />

      <FunFacts />

      <SolutionsTab />

      <WorkingProcess />

      <Testimonial />

      <BlogPost />

      <Customers />

      <Subscribe />

      <Footer />
    </>
  );
}
