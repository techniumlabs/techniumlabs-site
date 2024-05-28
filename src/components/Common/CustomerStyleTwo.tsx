"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const CustomerStyleTwo: React.FC = () => {
  return (
    <>
      <div className="partner-area">
        <div className="container">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            className="partner-slider"
          >
            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner1.png"
                  alt="image"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner2.png"
                  alt="image"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner3.png"
                  alt="image"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner4.png"
                  alt="image"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner5.png"
                  alt="image"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner6.png"
                  alt="image"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CustomerStyleTwo;
