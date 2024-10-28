import React, { useState } from "react";

const EventCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#b01347] text-white shadow-lg rounded-lg transform transition-all duration-300 cursor-pointer 
      ${isHovered ? "h-40" : "h-20"} w-80`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {isHovered && (
        <div className="p-4 text-white transition-opacity duration-300">
          <p className="text-sm">{description}</p>
        </div>
      )}
    </div>
  );
};

export default EventCard;
