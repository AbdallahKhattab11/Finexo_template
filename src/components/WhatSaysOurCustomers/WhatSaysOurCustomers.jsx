import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Customer from "../Customer/Customer";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const WhatSaysOurCustomers = () => {
  const Customer1 = {
    img: "/src/assets/images/client1.jpg",
    name: "LusDen",
    job: "CEO, Finexo",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore provident ea incidunt, dolore eligendi nemo debitis facilis repudiandae numquam quis quas blanditiis veniam, placeat quam!",
    icon: <RiDoubleQuotesL />,
  };
  const Customer2 = {
    img: "/src/assets/images/client2.jpg",
    name: "Zen court",
    job: "CEO, Finexo",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore provident ea incidunt, dolore eligendi nemo debitis facilis repudiandae numquam quis quas blanditiis veniam, placeat quam!",
    icon: <RiDoubleQuotesL />,
  };
  return (
    <div className="whatSaysOurCustomers py-[90px] ">
      <div className="container ">
        <div className="title mb-[50px] flex justify-center">
          <h2 className="text-[30px] font-bold text-black text-center">
            What Says Our <span className="text-primary">Customers</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
        <Swiper
          className="my-swiper min-h-[350px] relative w-full"
          modules={[Navigation, Autoplay]}
          navigation={
            {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }
          }
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          grabCursor={true}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={2}
          speed={800}
        >
          <SwiperSlide>
            <Customer {...Customer1} />
          </SwiperSlide>
          <SwiperSlide>
            <Customer {...Customer2} />
          </SwiperSlide>
          <SwiperSlide>
            <Customer {...Customer1} />
          </SwiperSlide>
          <SwiperSlide>
            <Customer {...Customer2} />
          </SwiperSlide>
          <div className="controls w-[150px] ">
            <div className="swiper-button-prev">
              <FaArrowLeft />
            </div>
            <div className="swiper-button-next">
              <FaArrowRight />
            </div>
          </div>
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WhatSaysOurCustomers;
