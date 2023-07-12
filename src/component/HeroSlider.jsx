import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/Slider1.jpg";
import slide2 from "../assets/Slider4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroSlider = () => {
  const slides = [
    {
      url: slide1,
    },
    {
      url: slide2,
    },
  ];
  return (
    <div
      name="home"
      className="max-h-[780px] w-full m-auto  py-16  relative group z-10">
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="max-h-screen ">
              <img src={slide?.url} className="w-full h-full" alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
