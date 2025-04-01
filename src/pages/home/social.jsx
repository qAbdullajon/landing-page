import { ArrowRight, ChevronRight, MoveRight } from "lucide-react";
import React from "react";

export default function Social() {
  return (
    <div className="my-16 px-20 flex justify-between">
      <p className="w-1/2 uppercase text-[#86868b] font-medium text-xl">
        #bestonuzbekistan
      </p>
      <div className="w-[42%] py-6">
        <p className="text-5xl font-medium uppercase">
          Мы за технологии и эстетику. Вдохновляйтесь в нашем Instagram.
        </p>
        <div className="relative flex items-center mt-32 group w-fit overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-black w-0 group-hover:w-full rounded-full transition-all duration-400"></div>
          <div className="relative bg-black w-12 h-12 flex items-center justify-center rounded-full transition-all duration-1000">
            <span className="absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0">
              <ChevronRight color="white" />
            </span>
            <span className="absolute transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:pl-5">
              <MoveRight color="white" />
            </span>
          </div>
          <span className="relative font-medium text-xl text-black group-hover:text-white transition-all duration-300 px-4 pr-8 py-2">
            Подписаться
          </span>
        </div>
      </div>
    </div>
  );
}
