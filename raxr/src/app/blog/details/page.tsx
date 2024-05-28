import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blog Details"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg-2.jpg"
      />

      <BlogDetailsContent />

      <Footer />
    </>
  );
}
