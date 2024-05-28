import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogCard from "../../components/Blog/BlogCard";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Grid"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blog Grid"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg-2.jpg"
      />

      <BlogCard />

      <Footer />
    </>
  );
}
