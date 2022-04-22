import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./style.css";

export default function Carousel() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={true}
      className="mySwiper"
    >
      <SwiperSlide className="swiper-slide">
        <figure>
          <img src="1.jpg" alt="slide 1" />
          <figcaption>Slide 1</figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src="2.jpg" alt="slide 2" />
          <figcaption>Slide 2</figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img src="3.jpg" alt="slide 3" />
          <figcaption>Slide 3</figcaption>
        </figure>
      </SwiperSlide>
    </Swiper>
  );
}
