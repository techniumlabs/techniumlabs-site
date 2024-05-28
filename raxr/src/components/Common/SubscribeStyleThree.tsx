"use client";

import React from "react";
import Image from "next/image";

const SubscribeStyleThree: React.FC = () => {
  return (
    <>
      <div className="subscribe-section p-0">
        <div className="container">
          <div className="subscribe-content-area mb-0">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="subscribe-image">
                  <Image
                    src="/images/subscribe.png"
                    alt="image"
                    width={415}
                    height={418}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="subscribe-content">
                  <h2>Don't Miss Our News And Updates</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>

                <form
                  className="newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="email"
                  />
                  <button type="submit">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeStyleThree;
