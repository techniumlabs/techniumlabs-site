"use client";

import React from "react";
import Image from "next/image";

const FeaturedService: React.FC = () => {
  return (
    <>
      <div className="software-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="software-content">
                <span>Our Featured Services</span>
                <h2>AI and DevOps Services</h2>
                <p>
                  Technium Labs' helps enterprises design and implement robust
                  systems capable of handling big data at lower infrastructure
                  costs. Thus, powering the Business to implement new features
                  with a shorter turnaround time. We provide the following
                  services for the same
                </p>

                <ul className="features-list">
                  <li>
                    <span>Big Data Analytics</span>
                  </li>
                  <li>
                    <span>Platform as a Service</span>
                  </li>
                  <li>
                    <span>Full Stack Development</span>
                  </li>
                  <li>
                    <span>Cloud Migration Services</span>
                  </li>
                  <li>
                    <span>DevSecOps</span>
                  </li>
                  <li>
                    <span>MLOps</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="software-image">
                <Image
                  src="/images/software.png"
                  alt="image"
                  width={555}
                  height={356}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedService;
