import React from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import big from "../compoent/big.png";
import small from "../compoent/small.png";
import Products from "./Products";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
import Product5 from "./Product5";
import Product6 from "./product6";


function Detail() {
  const Navigate = useNavigate();

  const { addToCart, setOpenCart } = useOutletContext();



  const images = [small, small, small, small, small];

  return (
    <>
    <div className="w-full min-h-screen   flex justify-center px-4">

      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-6 mt-1">

        {/* First Div */}
        <div className="w-full lg:w-[664px] h-[665px] flex flex-col gap-6">

          <h1 className="flex items-center mt-2 gap-1 ml-4 cursor-pointer"onClick={()=>Navigate("/Home")}>

            <svg width="8" height="11" viewBox="0 0 8 14" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.292779 5.93771C0.105309 6.12524 -7.15256e-06 6.37954 -7.15256e-06 6.64471C-7.15256e-06 6.90987 0.105309 7.16418 0.292779 7.35171L5.94978 13.0087C6.04203 13.1042 6.15237 13.1804 6.27437 13.2328C6.39638 13.2852 6.5276 13.3128 6.66038 13.314C6.79316 13.3151 6.92484 13.2898 7.04773 13.2395C7.17063 13.1892 7.28228 13.115 7.37617 13.0211C7.47007 12.9272 7.54432 12.8156 7.5946 12.6927C7.64488 12.5698 7.67018 12.4381 7.66903 12.3053C7.66788 12.1725 7.64029 12.0413 7.58788 11.9193C7.53547 11.7973 7.45929 11.687 7.36378 11.5947L2.41378 6.64471L7.36378 1.69471C7.54594 1.5061 7.64673 1.2535 7.64445 0.991306C7.64218 0.72911 7.53701 0.478296 7.3516 0.292889Z"
                fill="#2F3031"
              />
            </svg>
            Back
          </h1>

          <div className="flex justify-center w-full max-w-[400px] h-[400px] mx-auto mt-8">
            <img src={big} alt="big" className="w-full h-full object-cover" />
          </div>

          <div className="flex gap-4 justify-center mt-4">

            {images.map((img, index) => (
              <div key={index} className="w-[91px] h-[100px]">
                <img src={img} alt="small" className="w-full h-full object-cover" />
              </div>
            ))}

          </div>

        </div>

        {/* Second Div */}
        <div className="w-full lg:w-[664px] h-[647px] px-4 flex  flex-col gap-6">

          <div className="flex flex-row justify-between  mt-2">

          <p className="font-regular text-[14px] text-[#5D5656]">Home / Snacks / Bingo Tedhe Medhe</p>
          <h1 className="pr-[50px]">❤️</h1>

          

          </div>
          <div className="flex flex-col gap-[8px]">
            <p className='font-semibold  text-[28px] abc leading-[33.6px]'>Bingo Tedhe Medhe</p>
            <p className="font-regular text-[#5D5656] leading-[19.36px]">250g</p>
            <p className="font-semibold abc leading-[26.5px] ">Rs 10</p>
           
            <button
  className="w-[284px] h-[40px] px-[8px] py-[4px] gap-[10px] border border-[#323232] rounded-[4px] text-[13px] hover:bg-gray-100"
  onClick={() => {
    addToCart({
      name: "Bingo Tedhe Medhe",
      price: 10,
      weight: "250g",
      image: big,
    });

   
    setOpenCart(true);
    console.log("added");
  }}
>
  Add to Cart
</button>

</div>
<div className=" flex flex-col gap-5">
  <h1 className="text-[20px] font-semibold abc leading-[28px]">Product Details</h1>
    <h1 className="text-[16px] font-semibold abc leading-[20px]">key features</h1>
    <p className="text-[16px] font-regular abc leading-[22.4px] text-[#3D3838]">Bingo! Tedhe Medhe Nut Crackers: In The Mood For Something Tasty And Spicy?Spicy Peanuts: Savour Your All-Time Favourite NamkeenMasaledaar Namkeen: This Spicy, Masaledaar Namkeen Will Give You A Delectable Taste In Every BiteHealthy Snack: Bingo! Tedhe Medhe Nut Crackers Is Hig</p>
    <h1 className="text-[16px] font-semibold abc leading-[20px]">Type</h1>
    <p className="text-[16px] font-regular abc leading-[20px] text-[#3D3838]">Coated Peanuts </p>
            <h1 className="text-[16px] font-semibold abc leading-[20px]">FSSAI License</h1>
    <p className="text-[16px] font-regular abc leading-[20px] text-[#3D3838]">10012031000312</p>
                <h1 className="text-[16px] font-semibold abc leading-[20px]">Descripation</h1>



</div>

<div>

</div>
        </div>

      </div>

    </div>
    <Products />
    <Product2 />
    <Product3 />
    <Product4 />
    <Product5 />
    <Product6 />
    </>
  );
}

export default Detail;