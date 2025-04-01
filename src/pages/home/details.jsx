import { Plus } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    id: 1,
    name: "Какой срок гарантии предоставляется на технику?",
    desc: "Мы предоставляем гарантию на нашу бытовую технику в течение 2 лет с момента покупки. Это позволяет вам быть уверенным в качестве и надежности наших продуктов.",
  },
  {
    id: 2,
    name: "Каковы условия возврата или обмена техники?",
    desc: 'Мы предоставляем возможность возврата или обмена продукции в течение определенного периода времени после покупки, при соблюдении условий возврата. Пожалуйста, обратитесь к разделу "Условия возврата" на нашем веб-сайте или свяжитесь с нашей службой поддержки для получения подробной информации.',
  },
  {
    id: 3,
    name: "Как можно получить сервисное обслуживание?",
    desc: "Для получения сервисного обслуживания, пожалуйста, свяжитесь с нашим отделом обслуживания клиентов по указанным на сайте контактным данным. Наши квалифицированные специалисты будут рады помочь вам с любыми вопросами или проблемами, связанными с нашей продукцией.",
  },
  {
    id: 4,
    name: "Каковы рекомендации по уходу за вашей бытовой техникой?",
    desc: "Для обеспечения долговечности и надежной работы нашей бытовой техники, рекомендуем следовать указаниям в руководстве по эксплуатации, регулярно производить техническое обслуживание и чистку. Дополнительные рекомендации можно найти на нашем веб-сайте или в прилагаемых к продукции материалах.",
  },
  {
    id: 5,
    name: "Предоставляете ли вы услугу доставки и установки?",
    desc: 'Да, мы предоставляем услуги доставки и установки наших продуктов. Дополнительные сведения о стоимости и условиях доставки можно уточнить на странице "Доставка и установка" на нашем веб-сайте или по телефону нашей службы поддержки клиентов.',
  },
];

export default function Details() {
  const [itemId, setItemId] = useState(null);

  const toggleId = (id) => {
    setItemId(id);
  };
  return (
    <div className="py-10 border-t border-[#dedede] px-20 flex items-start justify-between">
      <p className="sticky top-10 text-5xl font-semibold uppercase animation w-1/3">
        Часто задаваемые вопросы
      </p>
      <div className="w-1/2">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="flex flex-col gap-[10px] transition-all duration-500 relative group border-b border-[#dedede]">
              <div
                onClick={() => toggleId(itemId === item.id ? null : item.id)}
                className="flex items-center justify-between cursor-pointer py-7 pb-12 relative"
              >
                <p className="text-4xl font-light">{item.name}</p>
                <Plus
                  size={42}
                  strokeWidth={1}
                  className={`transition-transform duration-500 ${
                    item.id === itemId ? "rotate-45" : ""
                  }`}
                />
              </div>
              <div
                className={`text-2xl font-light text-[#86868b] transition-all duration-500 overflow-hidden  ${
                  item.id === itemId
                    ? "max-h-[500px] opacity-100 pb-10"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.desc}
              </div>
              <span className="absolute border-[#dedede] bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-1000 group-hover:w-full"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
