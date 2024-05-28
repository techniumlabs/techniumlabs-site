import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import BlogCardTwo from "../../../components/Blog/BlogCardTwo";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Right Sidebar"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blog Right Sidebar"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg-4.jpg"
      />

      <BlogCardTwo />

      <Footer />
    </>
  );
}
