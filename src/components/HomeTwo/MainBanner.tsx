"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <div
                      data-aos="zoom-in-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <h1>Data Science And Analytics</h1>
                    </div>

                    <div
                      data-aos="zoom-in-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </div>

                    <div
                      data-aos="zoom-in-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <div className="banner-btn">
                        <Link href="/about-us" className="default-btn-one">
                          About Us
                          <span></span>
                        </Link>

                        <Link href="/contact-us" className="default-btn">
                          Contact Us
                          <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    {/* Shape images */}
                    <Image
                      src="/images/home-one/home-one-shape1.png"
                      alt="image"
                      width={418}
                      height={446}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-one/home-one-shape2.png"
                      alt="image"
                      width={327}
                      height={371}
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-one/home-one-shape3.png"
                      alt="image"
                      width={248}
                      height={358}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-one/home-one-shape4.png"
                      alt="image"
                      width={203}
                      height={134}
                      data-aos="zoom-in-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    {/* Main image */}
                    <Image
                      src="/images/home-one/main-image1.png"
                      alt="image"
                      width={980}
                      height={762}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="creative-shape">
          <Image
            src="/images/main-banner-shape/main-banner-shape1.png"
            alt="main-image"
            width={1920}
            height={698}
          />
        </div>
        <div className="shape-img1">
          <Image
            src="/images/main-banner-shape/main-banner-shape2.png"
            alt="main-image"
            width={126}
            height={164}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/main-banner-shape/main-banner-shape3.png"
            alt="main-image"
            width={82}
            height={108}
          />
        </div>

        {/* Animation lines */}
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
