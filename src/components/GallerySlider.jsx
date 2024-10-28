import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import img1 from "../assets/sliderimg1.jpg";
import img2 from "../assets/sliderimg2.jpg";
import img3 from "../assets/sliderimg3.jpg";
import img4 from "../assets/sliderimg4.jpg";
import img5 from "../assets/sliderimg5.jpg";
import img6 from "../assets/sliderimg6.jpg";
import img7 from "../assets/sliderimg7.jpg";
import img8 from "../assets/sliderimg8.jpg";
import img9 from "../assets/sliderimg9.jpg";
import "../styles/gallerySlider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function GallerySlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
