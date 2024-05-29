import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import OurServices from "../components/HomeOne/OurServices";
import AboutUs from "../components/AboutUs/AboutUsContent";
import FunFacts from "../components/Common/FunFacts";
import WorkingProcess from "../components/HomeOne/WorkingProcess";
import FeaturedService from "../components/Services/FeaturedService";
import Testimonial from "../components/Common/Testimonial";
import GetStartedProject from "../components/Common/GetStartedProject";
import BlogPost from "../components/Common/BlogPost";
import Customers from "../components/Common/Customers";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <OurServices />

      <AboutUs />

      {/* <FunFacts /> */}

      {/* <WorkingProcess /> */}

      <div className="pb-100">
        <FeaturedService />
      </div>

      {/* <Testimonial /> */}

      {/* <GetStartedProject /> */}

      {/* <BlogPost /> */}

      {/* <Customers /> */}

      {/* <Subscribe /> */}

      <Footer />
    </>
  );
}
