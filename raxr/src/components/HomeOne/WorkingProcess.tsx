"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WorkingProcess: React.FC = () => {
  return (
    <>
      <div className="process-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Working Process</span>
            <h2>Software Testing Process</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="process-item">
                <Image
                  src="/images/process/process1.png"
                  alt="image"
                  width={170}
                  height={242}
                />

                <h3>Planning</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>

                <Link href="/projects/details" className="process-btn">
                  Read More
                  <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="process-item">
                <Image
                  src="/images/process/process2.png"
                  alt="image"
                  width={149}
                  height={249}
                />

                <h3>Design & Execution</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>

                <Link href="/projects/details" className="process-btn">
                  Read More
                  <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="process-item">
                <Image
                  src="/images/process/process3.png"
                  alt="image"
                  width={213}
                  height={239}
                />

                <h3>Analytics Projects</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>

                <Link href="/projects/details" className="process-btn">
                  Read More
                  <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingProcess;
