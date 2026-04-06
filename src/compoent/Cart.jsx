
// import React, { useState } from "react";
// import onetaka from "../compoent/onetaka.png";
// import { useNavigate } from "react-router-dom";
// import { useOutletContext } from "react-router-dom";
// export default function Checkout() {
//   const [openLocation, setOpenLocation] = useState(false);
//   const navigate = useNavigate();
//  const { cartItems } = useOutletContext();
//   return (
//     <div className="w-full min-h-screen bg-[#d9e8d1] p-4 md:p-10">

//       <h2 className="text-xl font-semibold mb-6 abc " onClick={()=>{navigate("/home")}}>Shopping Cart</h2>

//       <div className="flex flex-col md:flex-row">

//         {/* LEFT SIDE CART */}
//         <div className="w-full md:w-[40%] flex flex-col md:ml-[90px] gap-6">

//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex bg-white p-4 md:p-6 rounded-lg gap-4 md:gap-6 items-center"
//             >
//               <img src={item.image} className="w-[60px] md:w-[80px]" />

//               <div className="flex flex-col flex-1">
//                 <h3 className="font-semibold abc">{item.name}</h3>
//                 <p className="text-sm abc">Rs. {item.price}</p>

//                 <div className="flex items-center gap-3 mt-2">
//                   <button className="border abc w-[20px] h-[18px] flex items-center justify-center rounded-lg">
//                     -
//                   </button>
//                   <span className="abc">1</span>
//                   <button className="border abc w-[20px] h-[18px] flex items-center justify-center rounded-lg">
//                     +
//                   </button>
//                 </div>

//                 <p className="text-xs text-gray-400 abc mt-1">
//                   Product details...
//                 </p>
//               </div>

//               <div className="flex gap-3 self-start md:mb-[85px]">
//                 <button>❤️</button>
//                 <button>🗑</button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="w-full md:w-[40%] flex flex-col gap-8 md:gap-12 md:ml-[190px] md:mr-[30px] mt-8 md:mt-0">

//           {/* DELIVERY BOX */}
//           <div className="bg-white p-4 md:p-6 rounded-xl">
//             <h3 className="font-semibold abc mb-2">
//               Delivering to Santosh Kumar
//             </h3>
//             <p className="text-sm abc text-gray-600">
//               4517 Washington Ave. Manchester
//             </p>
//             <p className="text-sm text-gray-600">
//               Kentucky 39495
//             </p>

//             <button
//               onClick={() => setOpenLocation(true)}
//               className="text-green-600 abc mt-3 text-sm"
//             >
//               Change Location
//             </button>
//           </div>

//           {/* SUMMARY */}
//           <div className="bg-white p-4 md:p-6 rounded-xl">
//             <h3 className="font-semibold abc mb-4">Summary</h3>

//             <div className="flex justify-between text-sm">
//               <span className="abc">Subtotal</span>
//               <span className="abc">Rs. 191</span>
//             </div>

//             <div className="flex justify-between text-sm mt-2">
//               <span className="abc">Delivery</span>
//               <span className="abc">Free</span>
//             </div>

//             <div className="flex justify-between text-sm mt-2">
//               <span className="abc">Taxes</span>
//               <span className="abc">Rs. 21</span>
//             </div>

//             <div className="flex justify-between font-semibold mt-4">
//               <span className="abc">Total</span>
//               <span className="abc">Rs. 212</span>
//             </div>

//             <button className="w-full abc bg-green-500 text-white py-3 rounded-full mt-6">
//               Proceed to pay
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* LOCATION MODAL */}
//       {openLocation && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 px-4">

//           <div className="bg-white w-full max-w-[500px] p-4 md:p-6 rounded-xl">

//             <h2 className="text-lg abc font-semibold mb-4">
//               Change Location
//             </h2>

//             <div className="flex flex-col gap-3">
//               <input placeholder="Country" className="border abc h-[40px] pl-2 rounded-md" />
//               <input placeholder="State" className="border abc h-[40px] pl-2 rounded-md" />
//               <input placeholder="City" className="border abc h-[40px] pl-2 rounded-md" />
//               <input placeholder="Zip Code" className="border abc h-[40px] pl-2 rounded-md" />
//               <input placeholder="Address" className="border abc h-[40px] pl-2 rounded-md" />
//               <input placeholder="Landmark" className="border abc h-[40px] pl-2 rounded-md" />
//             </div>

//             <div className="flex justify-between mt-6 gap-3">
//               <button
//                 onClick={() => setOpenLocation(false)}
//                 className="border border-green-500 w-full py-2 rounded-md"
//               >
//                 Discard
//               </button>

//               <button
//                 onClick={() => setOpenLocation(false)}
//                 className="bg-green-600 abc text-white w-full py-2 rounded-md"
//               >
//                 Save
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Checkout() {
  const [openLocation, setOpenLocation] = useState(false);
  const navigate = useNavigate();

  const { cartItems } = useOutletContext();

  return (
    <div className="w-full min-h-screen bg-[#d9e8d1] overflow-x-hidden">
      
      {/* ✅ CENTER CONTAINER */}
      <div className="max-w-[1200px] mx-auto w-full p-4 md:p-8">

        {/* TITLE */}
        <h2
          className="text-xl font-semibold mb-6 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          Shopping Cart
        </h2>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[55%] flex flex-col gap-4">

            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row bg-white p-4 rounded-lg gap-4 items-center w-full"
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[70px] h-[70px] object-contain max-w-full"
                  />

                  {/* DETAILS */}
                  <div className="flex flex-col flex-1 text-center sm:text-left w-full">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">Rs. {item.price}</p>

                    {/* QUANTITY */}
                    <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                      <button className="border w-[24px] h-[24px] rounded">-</button>
                      <span>{item.quantity || 1}</span>
                      <button className="border w-[24px] h-[24px] rounded">+</button>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      Product details...
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-3 self-end sm:self-start">
                    <button>❤️</button>
                    <button>🗑</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">

            {/* DELIVERY */}
            <div className="bg-white p-5 rounded-xl w-full">
              <h3 className="font-semibold mb-2">
                Delivering to Santosh Kumar
              </h3>
              <p className="text-sm text-gray-600">
                4517 Washington Ave. Manchester
              </p>
              <p className="text-sm text-gray-600">
                Kentucky 39495
              </p>

              <button
                onClick={() => setOpenLocation(true)}
                className="text-green-600 mt-3 text-sm"
              >
                Change Location
              </button>
            </div>

            {/* SUMMARY */}
            <div className="bg-white p-5 rounded-xl w-full">
              <h3 className="font-semibold mb-4">Summary</h3>

              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>
                  Rs.{" "}
                  {cartItems.reduce(
                    (total, item) =>
                      total + item.price * (item.quantity || 1),
                    0
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm mt-2">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between text-sm mt-2">
                <span>Taxes</span>
                <span>Rs. 20</span>
              </div>

              <div className="flex justify-between font-semibold mt-4">
                <span>Total</span>
                <span>
                  Rs.{" "}
                  {cartItems.reduce(
                    (total, item) =>
                      total + item.price * (item.quantity || 1),
                    0
                  ) + 20}
                </span>
              </div>

              <button className="w-full bg-green-500 text-white py-3 rounded-full mt-6">
                Proceed to pay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LOCATION MODAL */}
      {openLocation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 px-4">

          <div className="bg-white w-full max-w-[500px] p-6 rounded-xl">

            <h2 className="text-lg font-semibold mb-4">
              Change Location
            </h2>

            <div className="flex flex-col gap-3">
              <input placeholder="Country" className="border h-[40px] pl-2 rounded-md" />
              <input placeholder="State" className="border h-[40px] pl-2 rounded-md" />
              <input placeholder="City" className="border h-[40px] pl-2 rounded-md" />
              <input placeholder="Zip Code" className="border h-[40px] pl-2 rounded-md" />
              <input placeholder="Address" className="border h-[40px] pl-2 rounded-md" />
              <input placeholder="Landmark" className="border h-[40px] pl-2 rounded-md" />
            </div>

            <div className="flex justify-between mt-6 gap-3">
              <button
                onClick={() => setOpenLocation(false)}
                className="border border-green-500 w-full py-2 rounded-md"
              >
                Discard
              </button>

              <button
                onClick={() => setOpenLocation(false)}
                className="bg-green-600 text-white w-full py-2 rounded-md"
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