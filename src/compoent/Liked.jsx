import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Liked() {

  const { likeItems } = useOutletContext();

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">Liked Products</h1>

      {likeItems.length === 0 ? (
        <p>No liked products</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {likeItems.map((item) => (
            <div
              key={item.id}
              className="w-[175px] h-[228px] rounded-[8px] p-[12px] bg-[#F7F7F6]"
            >
              <img
                src={item.image}
                className="w-[90px] h-[113px]"
              />

              <h3 className="text-[16px] font-semibold mt-2">
                {item.name}
              </h3>

              <p className="text-[13px] text-gray-600">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}