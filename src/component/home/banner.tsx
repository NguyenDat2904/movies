"use client";
import { Oswald } from "next/font/google";
import React, { Fragment, useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Icons } from "../icons";
import Link from "next/link";

const font = Oswald({ subsets: ["latin"] });

function Banner() {
  const swiperRef = useRef<any>(null);

  const [isToggle, setIsToggle] = React.useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsToggle(true);
    }, 3000); // change slide every 3 seconds

    return () => {
      clearInterval(interval); // cleanup on unmount
    };
  }, []);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <Fragment>
      <section className="pt-[50px]">
        <div className="container">
          <div className="relative">
            <button onClick={goPrev} className="swiper-button-prev">
              <Icons.chevronLeft className="text-white -rotate-45" />
            </button>
            <Swiper
              className="overflow-hidden"
              loop={true}
              effect={"creative"}
              grabCursor={true}
              modules={[EffectCreative, Autoplay]}
              autoplay={{ delay: 3000 }}
              ref={swiperRef}
              speed={1000}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
            >
              <SwiperSlide>
                <div
                  className="pt-[250px] pb-[42px] pl-[50px] rounded-[5px] repeat-[no-repeat] bg-[top_center] bg-[cover] "
                  style={{
                    backgroundImage: `url(/hero-1.jpg)`,
                  }}
                >
                  <div className="row">
                    <div className="w-1/2 px-[1rem]">
                      <div className="hero__text">
                        <div
                          className={`text-[13px] bg-white text-[#e53637] px-[14px] pt-[5px] pb-[3px] relative transition-all duration-200 inline-block  animate_banner`}
                        >
                          Adventure
                        </div>
                        <h2
                          className={`text-[42px] text-white leading-[52px] mt-[35px] mb-[8px] relative transition-all duration-300 animate_banner_title font-bold ${font.className}`}
                        >
                          Fate / Stay Night: Unlimited Blade Works
                        </h2>
                        <p className="text-[16px] mb-[40px] transition-all duration-700 font-normal relative leading-[25px] text-white animate_banner_desc">
                          After 30 days of travel across the world...
                        </p>
                        <Link
                          href="#"
                          className="animate_banner_button relative"
                        >
                          <span className="text-[13px] text-white inline-block font-bold px-[20px] py-[14px] uppercase mr-[1px] rounded-s-[4px] bg-[#e53637] tracking-[2px]">
                            Watch Now
                          </span>{" "}
                          <Icons.chevronRight className="text-white inline-block bg-[#e53637] rounded-e-[4px] h-full py-[12px] " />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="pt-[250px] pb-[42px] pl-[50px] rounded-[5px] repeat-[no-repeat] bg-[top_center] bg-[cover] "
                  style={{
                    backgroundImage: `url(/hero-1.jpg)`,
                  }}
                >
                  <div className="row">
                    <div className="w-1/2 px-[1rem]">
                      <div className="hero__text">
                        <div className="text-[13px] bg-white text-[#e53637] px-[14px] pt-[5px] pb-[3px] relative transition-all duration-200 inline-block animate_banner">
                          Adventure
                        </div>
                        <h2
                          className={`text-[42px] text-white leading-[52px] mt-[35px] mb-[8px] relative transition-all duration-300 animate_banner_title font-bold ${font.className}`}
                        >
                          Fate / Stay Night: Unlimited Blade Works
                        </h2>
                        <p className="text-[16px] mb-[40px] transition-all relative duration-700 font-normal leading-[25px] text-white animate_banner_desc">
                          After 30 days of travel across the world...
                        </p>
                        <Link
                          href="#"
                          className="animate_banner_button relative"
                        >
                          <span className="text-[13px] text-white inline-block font-bold px-[20px] py-[14px] uppercase mr-[1px] rounded-s-[4px] bg-[#e53637] tracking-[2px]">
                            Watch Now
                          </span>{" "}
                          <Icons.chevronRight className="text-white inline-block bg-[#e53637] rounded-e-[4px] h-full py-[12px] " />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="pt-[250px] pb-[42px] pl-[50px] rounded-[5px] repeat-[no-repeat] bg-[top_center] bg-[cover] "
                  style={{
                    backgroundImage: `url(/hero-1.jpg)`,
                  }}
                >
                  <div className="row">
                    <div className="w-1/2 px-[1rem]">
                      <div className="hero__text">
                        <div className="text-[13px] bg-white text-[#e53637] px-[14px] pt-[5px] pb-[3px] relative transition-all duration-200 inline-block animate_banner">
                          Adventure
                        </div>
                        <h2
                          className={`text-[42px] text-white leading-[52px] mt-[35px] mb-[8px] relative transition-all duration-300 animate_banner_title font-bold ${font.className}`}
                        >
                          Fate / Stay Night: Unlimited Blade Works
                        </h2>
                        <p className="text-[16px] mb-[40px] transition-all relative duration-700 font-normal leading-[25px] text-white animate_banner_desc">
                          After 30 days of travel across the world...
                        </p>
                        <Link
                          href="#"
                          className="animate_banner_button relative"
                        >
                          <span className="text-[13px] text-white inline-block font-bold px-[20px] py-[14px] uppercase mr-[1px] rounded-s-[4px] bg-[#e53637] tracking-[2px]">
                            Watch Now
                          </span>{" "}
                          <Icons.chevronRight className="text-white inline-block bg-[#e53637] rounded-e-[4px] h-full py-[12px] " />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <button onClick={goNext} className="swiper-button-next">
              <Icons.chevronRight className="text-white -rotate-45" />
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Banner;
