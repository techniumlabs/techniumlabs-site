"use client";

import React from "react";
import Link from "next/link";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Explore Our Services</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-big-data"></i>
                </div>

                <h3>Data Analytics and AI</h3>
                <p>
                  Our expertise extends to training custom LLM models using your
                  domain specific data and building user-friendly chat
                  interfaces.
                </p>

                {/* <Link href="/services/details" className="service-btn">
                  Read More
                  <i className="flaticon-right"></i>
                </Link> */}
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-data-analytics"></i>
                </div>

                <h3>Platform modernisation</h3>
                <p>
                  We deliver secure cloud migration solutions, big data
                  processing frameworks, and API/batch data publishing to
                  modernize your legacy data platforms.
                </p>

                {/* <Link href="/services/details" className="service-btn">
                  Read More
                  <i className="flaticon-right"></i>
                </Link> */}
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-document"></i>
                </div>
                <h3>DevSecOps</h3>
                <p>
                  We aim to deliver secure, reliable, and high-performing
                  infrastructures for applications by integrating security
                  features throughout the CI/CD process.
                </p>

                {/* <Link href="/services/details" className="service-btn">
                  Read More
                  <i className="flaticon-right"></i>
                </Link> */}
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-chart"></i>
                </div>
                <h3>Full Stack Development</h3>
                <p>
                  We're full-stack experts - crafting user interfaces, building
                  scalable APIs, and managing data with expertise across the
                  tech stack.
                  <div>&nbsp;</div>
                </p>

                {/* <Link href="/services/details" className="service-btn">
                  Read More
                  <i className="flaticon-right"></i>
                </Link> */}
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-science"></i>
                </div>
                <h3>Serverless Solutions</h3>
                <p>
                  We leverage the power of no-code/low-code platforms to
                  significantly accelerate the development and launch of new
                  applications, saving you valuable time and resources.
                </p>

                {/* <Link href="/services/details" className="service-btn">
                  Read More
                  <i className="flaticon-right"></i>
                </Link> */}
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-data-management"></i>
                </div>
                <h3>PaaS Management</h3>
                <p>
                  We offer solutions to develop, deploy, and manage applications
                  in the cloud without the complexity of managing the underlying
                  infrastructure using solutions like Kubernetes
                </p>

                {/* <Link href="/services/details" className="service-btn">
                  Read More
                  <i className="flaticon-right"></i>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
