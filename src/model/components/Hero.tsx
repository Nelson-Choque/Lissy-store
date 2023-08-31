// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./../../App.css";
import { useRef } from "react";

function Hero() {
  const progressCircle = useRef<SVGSVGElement | null>(null); // Asigna un tipo a useRef
  const progressContent = useRef<HTMLSpanElement | null>(null); // Asigna un tipo a useRef
  const onAutoplayTimeLeft = (_s: any, time: any, progress: number) => {
    progressCircle.current!!.style.setProperty(
      "--progress",
      (1 - progress).toString()
    );
    progressContent.current!!.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://d13xymm0hzzbsd.cloudfront.net/1/20230828/16932307528047.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://d13xymm0hzzbsd.cloudfront.net/1/20230828/16932017342750.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://d13xymm0hzzbsd.cloudfront.net/1/20230824/16929195803774.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://d13xymm0hzzbsd.cloudfront.net/1/20230818/16923684066112.webp"
          alt=""
        />
      </SwiperSlide>

      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
}

export default Hero;
