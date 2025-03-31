import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-screen heroimg flex items-end justify-center">
      <div className="text-white pb-32 perspective-normal">
        <h2 className="font-semibold text-5xl text-center uppercase hero-h">
          <span>
            Надежная и
            <br />
            современная
          </span>
          <br />
          <span>бытовая техника!</span>
        </h2>
        <p className="text-lg pt-10 hero-p">
          Современные технологии, высокое качество и надежность
        </p>
      </div>
    </div>
  );
}
