"use client";

import React from "react";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/images/about.png"
                  alt="image"
                  width={490}
                  height={526}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>About Us</span>
                <h2>Our Story</h2>
                <p>
                  We noticed that as Organizations were transitioning to
                  cloud-based systems, there was a dearth of DevOps talent. We
                  started specializing in DevOps when working with many product
                  companies in Bangalore itself. Thus, when couple of our
                  colleagues moved to Australia, they saw a nice gap in the
                  skill sets required in Australian companies, which we, as a
                  team, could fill. Technium Labs was created not only with an
                  eye on providing the skills needed in the CI/CD space but also
                  to work on cutting-edge innovation products that use AI and
                  ML.
                </p>

                {/* <ul className="about-list">
                  <li>
                    <i className="flaticon-tick"></i>
                    Professional Consultancy Service
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    24/7 Support Center
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Custom Service & Operation
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Advanced Advisory Team
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
