import { Dropdown, Space } from "antd";
import { ArrowDown, ChevronDown, Phone, Search } from "lucide-react";
import React from "react";

export default function Header() {
  const items = [
    {
      label: <a href="#">Русский</a>,
      key: "0",
    },
    {
      label: <a href="#">Uzbekcha</a>,
      key: "1",
    },
  ];

  return (
    <div className="">
      <div className="px-20 bg-[#1E1E1E] h-10 flex items-center justify-between">
        <div className="hover:bg-[#2A2A2A]">
          <a
            href="tel:998906307705"
            className="text-white flex items-center gap-2 text-[12px] transition-all duration-300 ease-linear cursor-pointer h-10 hover:px-4"
          >
            <Phone color="white" size={16} />
            <span>998 90 123 45 67</span>
          </a>
        </div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a className="hover:bg-[#2A2A2A]" onClick={(e) => e.preventDefault()}>
            <Space className="text-white text-[12px] transition-all duration-300 ease-linear cursor-pointer h-10 hover:px-4 uppercase">
              O'zbekcha
              <ChevronDown />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="sticky top-0 px-20 flex items-center justify-between h-[72px] w-full">
        <nav className="h-full flex items-center gap-5 hover:text-gray-400">
          <a href="#" className="nav_link">
            Каталог
          </a>
          <a className="nav_link" href="#">
            О компании
          </a>
          <a className="nav_link" href="#">
            Сервис
          </a>
        </nav>
        <div>
          <button
            className="uppercase font-bold text-2xl"
            style={{ fontFamily: "cursive" }}
          >
            Beston
          </button>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="nav_link">
            Дилеры
          </a>
          <a href="#" className="nav_link">
            Контакты
          </a>
          <button className="cursor-pointer">
            <Search size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}