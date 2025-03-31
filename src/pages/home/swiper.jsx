import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Sw1 from "../../assets/sw1.png";
import Sw2 from "../../assets/sw2.png";
import Sw3 from "../../assets/sw3.png";
import Sw4 from "../../assets/sw4.png";

const items = [
  {
    id: 1,
    name: "Пылесосы",
    version: "VCB4300-RG",
    img: Sw1,
  },
  {
    id: 2,
    name: "Пылесосы",
    version: "VCB4300-RG",
    img: Sw2,
  },
  {
    id: 3,
    name: "Пылесосы",
    version: "VCB4300-RG",
    img: Sw3,
  },
  {
    id: 4,
    name: "Пылесосы",
    version: "VCB4300-RG",
    img: Sw4,
  },
];

export default function SwiperPage() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="mx-20 mt-20">
      <div className="flex items-center justify-between pb-10">
        <p className="text-5xl font-semibold uppercase animation">
          <span>Флагманы</span>{" "}
          <span className="text-sm -translate-y-6 inline-block">(4)</span>
        </p>
        <div className="flex gap-5">
          <button
            ref={prevRef}
            className="swiper-btn"
          >
            <ChevronLeft />
          </button>
          <button
            ref={nextRef}
            className="swiper-btn"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        loop={true}
        slidesPerView={3}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mb-10"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="border-[#dedede] border rounded-[20px] cursor-pointer hover:bg-red-400"
            style={{
              height: "500px",
              width: "100%",
            }}
          >
            <div className="h-[calc(100%-100px)] p-6 flex items-center justify-center">
              <img
                src={item.img}
                className="w-full h-full object-contain rounded-lg swiper-img"
                alt=""
              />
            </div>

            <div className="h-[80px] px-8">
              <p className="text-base text-[#86868b]">{item.name}</p>
              <p className="text-2xl font-medium">{item.version}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
