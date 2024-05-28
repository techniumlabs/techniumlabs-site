"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const GetStartedProject: React.FC = () => {
  return (
    <>
      <div className="productive-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="productive-content">
                <span>Let’s Get Started</span>
                <h3>Are you ready for a better, more productive business </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices Lorem Ipsum is simply dummy
                  text.
                </p>

                <div className="productive-btn">
                  <Link href="/projects" className="productive-btn">
                    Get Started Project
                    <span></span>
                  </Link>

                  <Link href="/contact-us" className="productive-btn-one">
                    Contact With Us
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="productive-image">
                <Image
                  src="/images/productive.png"
                  alt="image"
                  width={625}
                  height={485}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedProject;
