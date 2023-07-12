import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
const ara = [
  {
    id: 1,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/92319.jpeg",
  },
  {
    id: 2,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/96646.jpeg",
  },
  {
    id: 3,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/45133.jpg",
  },
  {
    id: 4,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/39658.jpeg",
  },
  {
    id: 1,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/92319.jpeg",
  },
  {
    id: 2,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/96646.jpeg",
  },
  {
    id: 3,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/45133.jpg",
  },
  {
    id: 4,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/39658.jpeg",
  },
  {
    id: 1,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/92319.jpeg",
  },
  {
    id: 2,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/96646.jpeg",
  },
  {
    id: 3,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/45133.jpg",
  },
  {
    id: 4,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/39658.jpeg",
  },
  {
    id: 1,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/92319.jpeg",
  },
  {
    id: 2,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/96646.jpeg",
  },
  {
    id: 3,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/45133.jpg",
  },
  {
    id: 4,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/39658.jpeg",
  },
];

export default function Exhibitors () {
  
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3500,
      autoplaySpeed: 0,
      cssEase: "linear",
    };
    return (
      <div className="w-full h-auto my-20" name="Exhibitors">
        <div className=" max-w-screen-lg m-auto px-2">
          <h2 className="text-center text-4xl py-5 font-bold text-white gap-4">
            Our Exhibitors
          </h2>
          <Slider {...settings}>
            {ara.map((item) => (
              <div>
                <div className="space-y-4 mb-5 mt-5 px-2 border-[17px] hover:border-green-500 bg-white">
                  <img
                    src={item.img}
                    alt="im"
                    className=" w-full bg-white aspect-[3/2] object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }

