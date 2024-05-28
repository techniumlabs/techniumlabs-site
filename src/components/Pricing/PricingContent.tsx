"use client";

import React from "react";
import Link from "next/link";

const PricingContent: React.FC = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Basic</h3>
                  <p>
                    That is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>

                <div className="price">
                  $29<span>/month</span>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check"></i>
                    Managed Analytics
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Business Intelligence
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    International payments
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Data Management
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Social Integration
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Relevant App Content
                  </li>
                </ul>

                <div className="price-btn">
                  <Link href="/contact-us" className="price-btn-one">
                    Choose This Plan
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Advanced</h3>
                  <p>
                    That is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>

                <div className="price">
                  $59<span>/month</span>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check"></i>
                    Managed Analytics
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Business Intelligence
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    International payments
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Data Management
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Social Integration
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Relevant App Content
                  </li>
                </ul>

                <div className="price-btn">
                  <Link href="/contact-us" className="price-btn-one">
                    Choose This Plan
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Premium</h3>
                  <p>
                    That is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>

                <div className="price">
                  $99<span>/month</span>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check"></i>
                    Managed Analytics
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Business Intelligence
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    International payments
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Data Management
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Social Integration
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Relevant App Content
                  </li>
                </ul>

                <div className="price-btn">
                  <Link href="/contact-us" className="price-btn-one">
                    Choose This Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingContent;
