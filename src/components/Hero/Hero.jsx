import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";

import HeroContent from "../HeroContent/HeroContent";
const Hero = () => {
  return (
    <div className="hero relative overflow-hidden	text-white md:h-[530px] lg:h-[calc(100vh-80px)]">
      <div className="container h-full">
        <Swiper
          className="mySwiper xxs:h-[calc(100%-60px)] md:h-[calc(100%-80px)] lg:h-[calc(100%-200px)]"
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true,  }}
          grabCursor={true}
          // autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          speed={1000}
        >
          <SwiperSlide><HeroContent /></SwiperSlide>
          <SwiperSlide><HeroContent /></SwiperSlide>
          <SwiperSlide><HeroContent /></SwiperSlide>
        </Swiper>
      </div>

      <div className="svg w-full absolute bottom-[-1px] left-0 xxs:hidden lg:block">
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 210"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
              <stop stopColor="rgba(255, 255, 255, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,105L60,115.5C120,126,240,147,360,136.5C480,126,600,84,720,63C840,42,960,42,1080,66.5C1200,91,1320,140,1440,161C1560,182,1680,175,1800,168C1920,161,2040,154,2160,136.5C2280,119,2400,91,2520,94.5C2640,98,2760,133,2880,136.5C3000,140,3120,112,3240,101.5C3360,91,3480,98,3600,84C3720,70,3840,35,3960,31.5C4080,28,4200,56,4320,70C4440,84,4560,84,4680,94.5C4800,105,4920,126,5040,143.5C5160,161,5280,175,5400,175C5520,175,5640,161,5760,136.5C5880,112,6000,77,6120,63C6240,49,6360,56,6480,77C6600,98,6720,133,6840,154C6960,175,7080,182,7200,161C7320,140,7440,91,7560,80.5C7680,70,7800,98,7920,101.5C8040,105,8160,84,8280,66.5C8400,49,8520,35,8580,28L8640,21L8640,210L8580,210C8520,210,8400,210,8280,210C8160,210,8040,210,7920,210C7800,210,7680,210,7560,210C7440,210,7320,210,7200,210C7080,210,6960,210,6840,210C6720,210,6600,210,6480,210C6360,210,6240,210,6120,210C6000,210,5880,210,5760,210C5640,210,5520,210,5400,210C5280,210,5160,210,5040,210C4920,210,4800,210,4680,210C4560,210,4440,210,4320,210C4200,210,4080,210,3960,210C3840,210,3720,210,3600,210C3480,210,3360,210,3240,210C3120,210,3000,210,2880,210C2760,210,2640,210,2520,210C2400,210,2280,210,2160,210C2040,210,1920,210,1800,210C1680,210,1560,210,1440,210C1320,210,1200,210,1080,210C960,210,840,210,720,210C600,210,480,210,360,210C240,210,120,210,60,210L0,210Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
