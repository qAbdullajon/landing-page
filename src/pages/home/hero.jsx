import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-screen heroimg flex items-center md:items-end justify-center">
      <div className="text-white pb-32 perspective-normal px-3">
        <p className="font-semibold text-xl text-center uppercase hero-h sm:text-2xl mx-auto max-w-[330px] sm:max-w-[400px] md:text-4xl">
          Надежная и современная
          бытовая техника!
        </p>
        <p className="text-lg pt-10 hero-p text-center">
          Современные технологии, высокое качество и надежность
        </p>
      </div>
    </div>
  );
}
