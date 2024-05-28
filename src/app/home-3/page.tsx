import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/HomeThree/MainBanner";
import AboutUs from "../../components/HomeThree/AboutUs";
import OurServices from "../../components/HomeThree/OurServices";
import FunFacts from "../../components/Common/FunFacts";
import SolutionsTab from "../../components/Common/SolutionsTab";
import Projects from "../../components/HomeThree/Projects";
import Testimonial from "../../components/Common/Testimonial";
import BlogPost from "../../components/Common/BlogPost";
import SubscribeStyleTwo from "../../components/Common/SubscribeStyleTwo";
import Customers from "../../components/Common/Customers";
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

      <Projects />

      <Testimonial />

      <BlogPost />

      <SubscribeStyleTwo />

      <Customers />

      <Footer />
    </>
  );
}
