import React from "react";
import home from "../compoent/home.png";
import taka from "../compoent/taka.png";
import Products from "./Products";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
import Product5 from "./Product5"; 
import Product6 from "./product6" ;
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

  return (
    <div className="w-full overflow-hidden">

      {/* 🔹 Banner Section */}
      <div className="flex justify-center mt-[24px] px-4">
        <div className="w-full max-w-[1352px] h-[489px] rounded-[32px] overflow-hidden">
          <img
            src={home}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 🔹 Cards Row */}
       <div className="flex justify-center mt-10 mx-6">
  <div className="w-full max-w-[1200px] flex justify-between">

    {[...Array(7)].map((_, index) => (
      <div
        key={index}
        className="w-[142px] h-[146px] flex flex-col gap-[8px] cursor-pointer hover:scale-105 transition"
      >
        {/* Image */}
        <img
          src={taka}
          alt={`card-${index}`}
          className="w-[142px] h-[121px] rounded-[8px] object-cover"
           onClick={() => navigate("/Detail")}

        />

        {/* Text */}
        <p className="text-sm flex justify-center font-medium">
          Dairy, Bread & Eggs
        </p>
      </div>
    ))}

  </div>
</div>



    <div className="flex justify-center mt-10 mx-6">
  <div className="w-full max-w-[1200px]  flex justify-between">

    {[...Array(7)].map((_, index) => (
      <div
        key={index}
        className="w-[142px] h-[146px] flex flex-col gap-[8px] cursor-pointer hover:scale-105 transition"
      >
        {/* Image */}
        <img
          src={taka}
          alt={`card-${index}`}
          className="w-[142px] h-[121px] rounded-[8px] object-cover"
                     onClick={() => navigate("/Detail")}

        />

        {/* Text */}
        <p className="text-sm flex justify-center font-medium">
          Dairy, Bread & Eggs
        </p>
      </div>
    ))}

  </div>
</div>
    <Products/>
    <Product2/>
    <Product3/>
    <Product4/>
    <Product5/>
    <Product6/>
    </div>
  


  );
}

export default Home;
