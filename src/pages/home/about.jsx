import React from "react";
import AboutImg from "../../assets/about.png";

export default function About() {
  return (
    <div className="flex gap-12 mx-20 pb-10">
      <div className="w-[40%]">
        {/* <img src={AboutImg} alt="" /> */}
      </div>
      <div className="w-[60%]">
        <h3 className="text-2xl font-medium mb-12">Философия</h3>
        <p className="text-4xl text-[#86868b]">
          Мы стремимся воплощать в жизнь исключительные идеи, вдохновляя
          инновационные решения и утонченный дизайн в области бытовой техники.
        </p>
        <br />
        <br />
        <p className="text-4xl text-[#86868b] font-light">
          Наша миссия - предлагать высококачественные продукты, которые не
          только улучшают повседневную жизнь, но и становятся неотъемлемой
          частью домашней обстановки.
        </p>
        <a className="w-[142px] h-[142px] mt-16 !box-content p-10 flex items-center justify-center font-medium rounded-full text-lg text-center border border-[#dedede]" href="#">Больше <br /> о компании</a>
      </div>
      <div></div>
    </div>
  );
}
