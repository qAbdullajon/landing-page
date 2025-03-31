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
    name: "Какой срок гарантии предоставляется на технику?",
    desc: "Мы предоставляем гарантию на нашу бытовую технику в течение 2 лет с момента покупки. Это позволяет вам быть уверенным в качестве и надежности наших продуктов.",
  },
];

export default function Details() {
  const [itemId, setItemId] = useState(null);

  const toggleId = (id) => {
    setItemId(id);
  };
  return (
    <div className="py-10 border-t border-[#dedede] px-20 flex items-start justify-between">
      <p className="text-5xl font-semibold uppercase animation w-1/3">
        Часто задаваемые вопросы
      </p>
      <div className="w-1/2">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col border-b">
            <div
              className="flex items-center cursor-pointer py-10"
              onClick={() =>
                item.id === itemId ? setItemId(null) : setItemId(item.id)
              }
            >
              <p className="text-4xl font-light">{item.name}</p>
              <button className="cursor-pointer">
                <Plus size={32} strokeWidth={1} />
              </button>
            </div>
            <AnimatePresence>
              {itemId === item.id && (
                <motion.p
                  key={item.id} // Har bir element uchun unikal key
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="pb-6 text-2xl text-[#86868b]"
                >
                  {item.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
