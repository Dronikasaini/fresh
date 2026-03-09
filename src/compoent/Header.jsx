import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Location from "../compoent/Location";
import { useNavigate } from "react-router-dom";

export default function Header({ openCart, setOpenCart, cartItems }) {
    console.log("Header cartItems:", cartItems);
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();

  return (
    // <div className="w-full max-h-[1531px] h-[80px] overflow-hidden">
    <div className="w-full max-w-[1531px] h-[60px] relative">

      <div className="w-full max-w-[1351px] h-[56px] mt-[12px] mx-auto px-8 flex justify-between items-center">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-[45px] ">

          {/* Logo */}
          <h3 className="abc font-bold text-[40px] leading-[56px] tracking-[0%] text-[#76BA1F]">
            Nova Fresh
          </h3>

          {/* Search Bar */}
          <div className="w-[548px] h-[42px] flex items-center 
                          bg-white border border-[#BCC2BC] 
                          rounded-[8px] gap-[4px] p-[8px] mb-3">

            <FiSearch className="text-gray-500 text-[18px]" />

            <input
              type="text"
              placeholder="Search for 'ghee'"
              className="w-full h-full outline-none text-[14px] font-normal"
            />
          </div>

        </div>


        {/* RIGHT SECTION */}
        <div className="flex items-center gap-[40px]   ">

          {/* Location Dropdown */}
          <Location />
     
{/* Cart Icon */}
<svg
  width="26"
  height="26"
  viewBox="0 0 26 26"
  fill="none"
  className="cursor-pointer"
 onClick={() => {
  setOpenCart(!openCart);
  setOpenProfile(false);
}}
>
  <path fillRule="evenodd"
    clipRule="evenodd"
    d="M9.25033 18.8333C9.58185 18.8333 9.89979 18.965 10.1342 19.1994C10.3686 19.4339 10.5003 19.7518 10.5003 20.0833C10.5003 20.4148 10.3686 20.7328 10.1342 20.9672C9.89979 21.2016 9.58185 21.3333 9.25033 21.3333C8.91881 21.3333 8.60086 21.2016 8.36644 20.9672C8.13202 20.7328 8.00033 20.4148 8.00033 20.0833C8.00033 19.7518 8.13202 19.4339 8.36644 19.1994C8.60086 18.965 8.91881 18.8333 9.25033 18.8333ZM17.5837 18.8333C17.9152 18.8333 18.2331 18.965 18.4675 19.1994C18.702 19.4339 18.8337 19.7518 18.8337 20.0833C18.8337 20.4148 18.702 20.7328 18.4675 20.9672C18.2331 21.2016 17.9152 21.3333 17.5837 21.3333C17.2521 21.3333 16.9342 21.2016 16.6998 20.9672C16.4654 20.7328 16.3337 20.4148 16.3337 20.0833C16.3337 19.7518 16.4654 19.4339 16.6998 19.1994C16.9342 18.965 17.2521 18.8333 17.5837 18.8333ZM5.61533 4.66666C6.24744 4.66673 6.85607 4.90626 7.31869 5.33703C7.7813 5.76779 8.06357 6.35781 8.10866 6.98832L8.12116 7.16666H19.502C19.7462 7.16662 19.9873 7.22023 20.2085 7.32369C20.4296 7.42715 20.6254 7.57794 20.7818 7.76539C20.9383 7.95284 21.0516 8.17237 21.1138 8.40847C21.1761 8.64456 21.1857 8.89144 21.142 9.13166L19.7778 16.6317C19.708 17.0157 19.5055 17.363 19.2058 17.6131C18.9061 17.8631 18.5282 18 18.1378 18H8.77616C8.35461 18 7.94871 17.8403 7.64023 17.553C7.33175 17.2657 7.14359 16.8721 7.11366 16.4517L6.44699 7.10749C6.43201 6.89703 6.33776 6.70009 6.18325 6.55641C6.02874 6.41273 5.82548 6.333 5.61449 6.33332H5.50033C5.27931 6.33332 5.06735 6.24553 4.91107 6.08925C4.75479 5.93297 4.66699 5.721 4.66699 5.49999C4.66699 5.27898 4.75479 5.06701 4.91107 4.91073C5.06735 4.75445 5.27931 4.66666 5.50033 4.66666H5.61533ZM19.502 8.83332H8.24033L8.77616 16.3333H18.1378L19.502 8.83332Z"
    fill="#404440" />
</svg>

{/* Cart Box */}

   

 
{openCart && (
<div className="fixed right-0 top-[80px] w-[337px] h-[500px] bg-white shadow-xl border-l flex flex-col items-center z-50">

{/* Title */}
<div className="w-[257px] flex justify-between items-center mt-4">
<h2 className="font-semibold">Your Cart</h2>
<button onClick={() => setOpenCart(false)}>✕</button>
</div>

{/* Scrollable Items */}
<div className="w-[257px] flex-1 overflow-y-auto flex flex-col gap-[16px] mt-4 pr-1">

{cartItems.map((item, index) => (
<div
key={index}
className="flex gap-[12px] p-[12px] rounded-[8px] bg-[#F7F7F7]"
>

<img
src={item.image}
alt={item.name}
className="w-[60px] h-[60px]"
/>

<div className="flex flex-col">
<p className="font-semibold">{item.name}</p>
<p className="text-[12px] text-[#5D5656]">{item.weight}</p>
<p className="font-semibold">Rs {item.price}</p>
</div>

</div>
))}

</div>

{/* Fixed Button */}
<button className="w-[257px] h-[40px] bg-[#76BA1F] text-white rounded-[4px] mb-4" onClick={() => navigate("/Cart")}>
Buy Now
</button>

</div>
)}
         

      

          {/* Profile Image */}
       <svg
  width="42"
  height="26"
  style={{
    opacity: 1,
    transform: "rotate(0deg)",
    padding: "4px 8px", // top-bottom 4px, left-right 8px
    gap: "10px" // 
  }}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="cursor-pointer"
onClick={() => {
  setOpenProfile(!openProfile);
  setOpenCart(false);
}}    
  
>
  <path
    d="M15.7325 16.4747C15.0338 15.5496 14.1298 14.7993 13.0917 14.2831C12.0536 13.7668 10.9099 13.4987 9.7505 13.4997C8.59115 13.4987 7.44739 13.7668 6.40932 14.2831C5.37125 14.7993 4.46724 15.5496 3.7685 16.4747M15.7325 16.4747C17.096 15.2619 18.0576 13.6633 18.4917 11.8908C18.9258 10.1183 18.8108 8.25579 18.162 6.55018C17.5132 4.84457 16.3612 3.37648 14.8589 2.3406C13.3566 1.30472 11.5748 0.75 9.75 0.75C7.92516 0.75 6.14343 1.30472 4.64111 2.3406C3.13878 3.37648 1.98683 4.84457 1.33804 6.55018C0.689242 8.25579 0.574253 10.1183 1.00832 11.8908C1.44239 13.6633 2.405 15.2619 3.7685 16.4747M15.7325 16.4747C14.0865 17.9429 11.9561 18.7528 9.7505 18.7497C7.54453 18.7531 5.41474 17.9431 3.7685 16.4747M12.7505 7.49971C12.7505 8.29535 12.4344 9.05842 11.8718 9.62103C11.3092 10.1836 10.5462 10.4997 9.7505 10.4997C8.95485 10.4997 8.19179 10.1836 7.62918 9.62103C7.06657 9.05842 6.7505 8.29535 6.7505 7.49971C6.7505 6.70406 7.06657 5.94099 7.62918 5.37838C8.19179 4.81578 8.95485 4.49971 9.7505 4.49971C10.5462 4.49971 11.3092 4.81578 11.8718 5.37838C12.4344 5.94099 12.7505 6.70406 12.7505 7.49971Z"
    stroke="black"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>



        </div>

      </div>

    

      {/* Profile Dropdown */}
      {openProfile && (
        <div className="absolute right-4 top-[90px] w-[220px] bg-white border rounded-lg shadow-lg">
          <ul className="text-[14px]">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"onClick={() => navigate("/Account")}>Your Account</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/Cart")}>Your Orders</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"onClick={() => navigate("/Account")}>Your Wish List</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/Recommdation")}>Your Recommendation</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Switch Account</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Log Out</li>
          </ul>
        </div>
      )}

    </div>
  );
}
