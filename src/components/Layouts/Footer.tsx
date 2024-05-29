"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Top Footer Section */}
      <footer className="footer-section ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>About Us</h3>
                </div>
                <p>
                  We are an IT services company specializing in DevOps, data
                  analytics, and customized LLM solutions. With a talented team
                  based in Australia and India, we deliver innovative,
                  high-quality technology solutions that drive business success.
                  Our expertise ensures harmonious integration between your
                  systems, robust analytics, and cutting-edge AI applications
                  tailored to your needs.
                </p>

                {/* <ul className="footer-social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Important Links</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  {/* <li>
                    <Link href="/projects">Projects</Link>
                  </li> */}
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  {/* <li>
                    <Link href="/team">Team</Link>
                  </li> */}
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Featured Service</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  {/* <li>
                    <Link href="/partner">Client</Link>
                  </li> */}
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Contact Info</h3>
                </div>

                {/* <div className="footer-info-contact">
                  <i className="flaticon-call-answer"></i>
                  <h3>Phone</h3>
                  <span>+</span>
                </div> */}

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>hello@techniumlabs.io</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-maps-and-flags"></i>
                  <h3>Address</h3>
                  <span>
                    9 dundrum grove, Kellyville Ridge, NSW, 2155 Australia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="partner-shape-img1">
          <Image
            src="/images/shape/partnar-shape-2.png"
            alt="image"
            width={277}
            height={492}
          />
        </div>
      </footer>
      {/* End Top Footer Section */}

      {/* Bottom Footer Section */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                &copy; {currentYear} Technium Labs. All Rights Reserved by
                Technium Labs
              </p>
            </div>

            {/* <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link href="/terms-condition">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      {/* End Bottom Footer Section */}
    </>
  );
};

export default Footer;
