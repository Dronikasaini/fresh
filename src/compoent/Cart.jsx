import React, { useState } from "react";
import onetaka from "../compoent/onetaka.png";

export default function Checkout() {
  const [openLocation, setOpenLocation] = useState(false);

  const cartItems = [
    { id: 1, name: "Tedhe Medhe", price: 90 },
    { id: 2, name: "Tedhe Medhe", price: 90 },
    { id: 3, name: "Tedhe Medhe", price: 90 },
  ];

  return (
    <div className="w-full min-h-screen bg-[#d9e8d1] p-10">

      <h2 className="text-xl font-semibold mb-6 abc ">Shopping Cart</h2>

      <div className="flex ">

        {/* LEFT SIDE CART */}
        <div className="w-[40%] flex flex-col  ml-[90px] gap-6">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex bg-white p-6 rounded-lg gap-6 items-center"
            >
              <img src={onetaka} className="w-[80px]" />

              <div className="flex flex-col flex-1">

                <h3 className="font-semibold abc ">{item.name}</h3>
                <p className="text-sm abc ">Rs. {item.price}</p>

                <div className="flex items-center  gap-3 mt-2">
                  <button className="border abc w-[20px] h-[18px] flex items-center justify-center rounded-lg">-</button>
                  <span className="abc">1</span>
                  <button className="border  abc w-[20px] h-[18px] flex items-center justify-center rounded-lg">+</button>
                </div>

                <p className="text-xs text-gray-400 abc mt-1">
                  Product details...
                </p>

              </div>

              <div className="flex  mb-[85px] gap-3">
                <button> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z" stroke="#E49D9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
                <button>🗑</button>
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="w-[40%] flex flex-col gap-12 ml-[190px] mr-[30px]">

          {/* DELIVERY BOX */}

          <div className="bg-white p-6 rounded-xl">

            <h3 className="font-semibold  abc mb-2">
              Delivering to Santosh Kumar
            </h3>

            <p className="text-sm abc  text-gray-600">
              4517 Washington Ave. Manchester
            </p>

            <p className="text-sm text-gray-600">
              Kentucky 39495
            </p>

            <button
              onClick={() => setOpenLocation(true)}
              className="text-green-600 abc  mt-3 text-sm"
            >
              Change Location
            </button>

          </div>

          {/* SUMMARY */}

          <div className="bg-white p-6 rounded-xl">

            <h3 className="font-semibold  abc mb-4">Summary</h3>

            <div className="flex justify-between text-sm">
              <span className="abc">Subtotal</span>
              <span className="abc">Rs. 191</span>
            </div>

            <div className="flex justify-between text-sm mt-2">
              <span className="abc">Delivery</span>
              <span className="abc">Free</span>
            </div>

            <div className="flex justify-between text-sm mt-2">
              <span className="abc">Taxes</span>
              <span className="abc">Rs. 21</span>
            </div>

            <div className="flex justify-between font-semibold mt-4">
              <span className="abc">Total</span>
              <span className="abc">Rs. 212</span>
            </div>

            <button className="w-full abc bg-green-500 text-white py-3 rounded-full mt-6">
              Proceed to pay
            </button>

          </div>

        </div>

      </div>

      {/* LOCATION MODAL */}

      {openLocation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">

          <div className="bg-white w-[500px] p-6 rounded-xl">

            <h2 className="text-lg  abc font-semibold mb-4">
              Change Location
            </h2>

            <div className="flex   flex-col gap-3">

              <input
                placeholder="Country"
                className="border abc  w-[435px]  h-[40px] pl-1 rounded-md"
              />

              <input
                placeholder="State"
                className="border abc  w-[435px]  h-[40px] pl-1 rounded-md"
              />

              <input
                placeholder="City"
                className="border abc  w-[435px]  h-[40px]  pl-1 rounded-md"
              />

              <input
                placeholder="Zip Code"
                className="border abc  w-[435px]  h-[40px]  pl-1  rounded-md"
              />

              <input
                placeholder="Address"
                className="border abc  w-[435px]  h-[40px] pl-1 rounded-md"
              />

              <input
                placeholder="Landmark"
                className="border abc  w-[435px]  h-[40px] pl-1 rounded-md"
              />

            </div>

            <div className="flex justify-between mt-6">

              <button
                onClick={() => setOpenLocation(false)}
                className="border border-green-500 px-18 py-2 rounded-md"
              >
                Discard
              </button>

              <button
                onClick={() => setOpenLocation(false)}
                className="bg-green-600 abc  text-white px-20 py-2 rounded-md"
              >
                Save
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}