import React from "react";
import Navbar from "../navbar";
import { Chips, cards, whiteCard } from "../../Constant";
import Table from "../table";
import Card from "../card";

const Analytics = ({ openSidebar }) => {
  return (
    <div className="h-screen w-full px-5 py-3 ms-5 overflow-y-auto">
      <Navbar />
      <div className="flex md:gap-3 gap-2 w-full flex-wrap mt-3">
        {Chips.map((chip, index) => (
          <h1
            className={`flex items-center  border  gap-1 border-solid text-base font-normal ${chip.bg} ${chip.text} ${chip.border} px-5 py-1 rounded-full cursor-pointer `}
            key={index}
          >
            {chip.symbol}
            {chip.title}
          </h1>
        ))}
      </div>
      <div className="flex flex-wrap mt-5 w-full gap-6">
        {cards.map((item, index) => (
          <div
            className={`flex flex-col shadow-md w-[250px] overflow-hidden rounded-[10px] h-40 ${item.bgColor} bg-cover bg-center ${item.text} p-3`}
            style={{
              backgroundImage: `url(${item.bgImg})`,
              backgroundPosition: "bottom",
              backgroundSize: openSidebar ? "contain" : "cover",
              backgroundRepeat: "no-repeat",
            }}
            key={index}
          >
            <h2 className=" uppercase font-medium text-sm">{item.heading}</h2>
            <p className="text-xs">{item.subheading}</p>
            <div className="flex items-center gap-3 mt-3">
              <h1 className="text-3xl font-medium">{item.data}</h1>
              {item.symbol}
            </div>
            <div className="flex item-center font-normal text-xs">
              {item.price} ({item.percent})
            </div>
            <div className="mt-5 text-xs">{item.currency}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 py-2 mt-2 text-slate-800">
        {whiteCard.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <Table />
    </div>
  );
};

export default Analytics;
