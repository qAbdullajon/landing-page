import { Drawer, Dropdown, Space } from "antd";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import React, { useState } from "react";
import styled from "styled-components";

const DrawerStyled = styled(Drawer)`
  background-color: #1e1e1e !important;
  color: white;
  height: calc(100vh - 72px) !important;
  top: 72px !important;
  position: relative;
  .ant-drawer-body {
    padding: 0;
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
    <>
      <div className="sticky top-0 px-10 md:px-20 flex items-center justify-between h-[72px] w-full bg-[#1e1e1e] md:bg-white z-[50]">
        <nav className="h-full hidden md:flex items-center gap-5">
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
            className="uppercase font-bold text-2xl text-white md:text-black"
            style={{ fontFamily: "cursive" }}
          >
            Beston
          </button>
        </div>
        <div className="hidden md:flex items-center gap-5">
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

        <button className="cursor-pointer text-white p-2 rounded-lg shadow-lg block md:hidden">
          {!open ? (
            <Menu onClick={() => setOpen(true)} size={24} />
          ) : (
            <X size={24} onClick={() => setOpen(false)} />
          )}
        </button>
      </div>

      {/* Drawer */}
      <DrawerStyled
        placement="top"
        closable={false}
        onClose={onClose}
        open={open}
        className="!z-[10]"
        mask={false}
      >
        <div className="">
          <div className="border-b-1 pb-3">
            <div className="bg-black mx-2 flex items-center rounded-[12px] gap-2 py-2 px-3">
              <Search size={17} color="#86868b" />
              <input
                className="text-lg py-1 outline-none w-full"
                type="text"
                placeholder="Поиск по сайту"
              />
            </div>
          </div>
          <ul className="flex flex-col px-5">
            <li className="py-4 border-b border-[#545252]">
              <a className="text-base !text-white" href="#">
                Холодильники
              </a>
            </li>
            <li className="py-4 border-b border-[#545252]">
              <a className="text-base !text-white" href="#">
                Микроволноки
              </a>
            </li>
            <li className="py-4 border-b border-[#545252]">
              <a className="text-base !text-white" href="#">
                Пылесосы
              </a>
            </li>
            <li className="py-4 border-b border-[#545252]">
              <a className="text-base !text-white" href="#">
                Мелкая техника
              </a>
            </li>
            <li className="py-4 border-b border-[#545252]">
              <a className="text-base !text-white" href="#">
                О компании
              </a>
            </li>
            <li className="py-4 border-b border-[#545252]">
              <a className="text-base !text-white" href="#">
                Сервис
              </a>
            </li>
            <li className="py-4 border-b border-[#545252]">
              <a className="text-base !text-white" href="#">
                Вакансии
              </a>
            </li>
            <li className="py-4 border-b border-[#545252]">
              <a className="text-base !text-white" href="#">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </DrawerStyled>
    </>
  );
}
