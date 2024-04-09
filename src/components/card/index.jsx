import React from "react";

const Card = ({ title, content, indicatorColor }) => {
  const indicatorClass = `h-4 w-4 rounded-full ${indicatorColor}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-[300px]">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-base">{title}</h2>
        <span className={indicatorClass}></span>
      </div>
      {content.map((item, index) => (
        <div key={index} className="flex justify-between my-1">
          <span className="font-light text-normal">{item.label}</span>
          <span className="font-semibold text-base">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Card;
