import React, { useState } from "react";
import onetaka from "../compoent/onetaka.png";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
export default function Products() {
 const { handleLike, likeItems } = useOutletContext();
  const Navigate = useNavigate();
  const products = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: "₹10.00",
    image: onetaka,
  }));

  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {/* Heading */}
      <div className="w-full max-w-[1352px] mx-auto flex justify-between px-4 sm:px-16">
        <h1 className="text-2xl mt-[40px] font-bold">
          Fruits & Vegetables
        </h1>

        <h1
  onClick={() => setShowAll(!showAll)}  className="text-[14px] mt-[50px] underline flex whitespace-nowrap items-center gap-2 cursor-pointer"
>
{showAll ? "see less" : "see more"}
<svg width="7" height="10" className="mt-1" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.14691 4.94809C6.30313 5.10437 6.3909 5.31629 6.3909 5.53726C6.3909 5.75823 6.30313 5.97015 6.14691 6.12643L1.43274 10.8406C1.35587 10.9202 1.26391 10.9837 1.16224 11.0273C1.06057 11.071 0.951224 11.094 0.840575 11.095C0.729925 11.0959 0.620192 11.0748 0.517779 11.0329C0.415365 10.991 0.322321 10.9292 0.244078 10.8509C0.165834 10.7727 0.103956 10.6796 0.0620553 10.5772C0.0201545 10.4748 -0.000930049 10.3651 3.14642e-05 10.2544C0.000992978 10.1438 0.0239815 10.0344 0.0676557 9.93276C0.11133 9.83109 0.174815 9.73913 0.254407 9.66226L4.37941 5.53726L0.254407 1.41226C0.102608 1.25509 0.0186129 1.04459 0.0205116 0.826092C0.0224103 0.607595 0.110051 0.398584 0.264558 0.244078C0.419064 0.0895708 0.628075 0.00193019 0.846572 3.15022e-05C1.06507 -0.00186718 1.27557 0.0821281 1.43274 0.233926L6.14691 4.94809Z" fill="#737373"/>
</svg>
</h1>
      </div>

      {/* Cards */}
      <div className="w-full max-w-[1352px] mx-auto mt-[30px]">
        <div
  className={`
    grid grid-cols-2 gap-4 px-4
    sm:flex
    ${
      showAll
        ? "sm:flex-wrap sm:px-16 sm:gap-7 sm:ml-5"
        : "sm:flex-nowrap sm:px-16 sm:gap-6 sm:justify-between"
    }
  `}
>
         {products.slice(0, showAll ? 24 : 6).map((item) => {

  const liked = likeItems.find((p) => p.id === item.id);

  return (
    <div
      key={item.id}
      className="w-[175px] h-[228px] rounded-[8px] p-[12px] bg-[#F7F7F6]"
    >

      <div className="flex gap-4 pl-8">
        <img
          src={item.image}
          alt="product"
          className="w-[90px] h-[113px] object-cover"
        />

        <svg
          onClick={() => handleLike(item)}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="cursor-pointer"
        >
          <path
            d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z"
            stroke="#E49D9C"
            strokeWidth="1.5"
            fill={liked ? "#E49D9C" : "none"}
          />
        </svg>
      </div>



              <div className="mt-2 flex flex-col gap-[4px]">
                <h3 className="text-[16px] font-semibold">
                  {item.name}
                </h3>

                <p className="text-[13px] text-gray-600">
                  {item.price}
                </p>

                <button className="w-full h-[32px] mt-1 border border-gray-400 rounded-[4px] text-[13px] hover:bg-gray-100"
                onClick={()=>Navigate("/detail")}>
                  Add
                </button>
              </div>
            </div>       
          );
        })}
        </div>
      </div>
    </>
  );
}