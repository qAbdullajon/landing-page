import React, { useRef } from "react";
import Texnika1 from "../../assets/textnika1.webp";
import Texnika2 from "../../assets/textnika2.webp";
import Texnika3 from "../../assets/textnika3.webp";
import Texnika4 from "../../assets/textnika4.webp";

export default function Techniques() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="pt-20 px-20">
      <p className="text-5xl font-semibold uppercase animation">
        <span>Бытовая техника</span>{" "}
        <span className="text-sm -translate-y-6 inline-block">(4)</span>
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-5 max-h-[665px] mt-10">
        <div className="w-full row-start-1 row-end-3 overflow-hidden group">
          <img
            src={Texnika1}
            alt=""
            className="w-full h-full object-cover img-animation"
          />
        </div>

        <div className="w-full row-start-1 row-end-2 overflow-hidden group">
          <img
            src={Texnika2}
            alt=""
            className="w-full h-full object-cover img-animation"
          />
        </div>

        <div className="w-full row-start-2 row-end-3 overflow-hidden group">
          <img
            src={Texnika3}
            alt=""
            className="w-full h-full object-cover img-animation"
          />
        </div>

        <div className="h-full row-start-1 row-end-3 overflow-hidden group">
          <img
            src={Texnika4}
            alt=""
            className="w-full h-full object-cover img-animation"
          />
        </div>
      </div>
      <div className="flex gap-5 xl:hidden">
        <button
          ref={prevRef}
          className="flex bg-[#C0D1FF] h-10 justify-center p-2 rounded-full text-black w-10 duration-300 hover:bg-[#BBBBBB] items-center"
        >
          <i className="text-xl fa-chevron-left fa-solid"></i>
        </button>
        <button
          ref={nextRef}
          className="flex bg-[#C0D1FF] h-10 justify-center p-2 rounded-full text-black w-10 duration-300 hover:bg-[#BBBBBB] items-center"
        >
          <i className="text-xl fa-chevron-right fa-solid"></i>
        </button>
      </div>
    </div>
  );
}
