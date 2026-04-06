import React from "react";
import onetaka from "./onetaka.png";
import { useNavigate } from "react-router-dom";
export default function Status() {
    const Navigate= useNavigate()
  return (
    <div className="w-full flex justify-center bg-gray-100 py-10">

      {/* Main Container */}
      <div className="max-w-[1512px] h-[500px] w-full bg-white p-10">

<h1 className="flex items-center text-2xl  pb-[5px] font-bold cursor-pointer"onClick={()=>Navigate("/Home")}>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.94011 10.9401C7.65921 11.2213 7.50143 11.6026 7.50143 12.0001C7.50143 12.3976 7.65921 12.7788 7.94011 13.0601L13.5961 18.7181C13.8775 18.9994 14.2591 19.1573 14.657 19.1572C15.0548 19.1571 15.4363 18.999 15.7176 18.7176C15.9989 18.4362 16.1568 18.0546 16.1567 17.6567C16.1566 17.2589 15.9985 16.8774 15.7171 16.5961L11.1211 12.0001L15.7171 7.4041C15.9905 7.12132 16.1419 6.74249 16.1386 6.34919C16.1354 5.9559 15.9778 5.5796 15.6998 5.30136C15.4219 5.02311 15.0457 4.86518 14.6524 4.86158C14.2591 4.85798 13.8801 5.00899 13.5971 5.2821L7.93911 10.9391L7.94011 10.9401Z" fill="#343639"/>
</svg>

            Order Status
          </h1>
        <div className="flex gap-12 w-full">

          {/* LEFT SECTION */}
          <div className="w-[319px] h-[177px] flex flex-col  ml-[10px] mt-[40px] gap-2 shrink-0">

            {/* Order info */}
            <div>
              <p className="text-sm">Order Id: #123456789</p>
              <p className="text-sm text-gray-500">Delivered 1 March</p>
            </div>

            {/* Product */}
            <div className="flex gap-2">

              <img
                src={onetaka}
                className="w-[80px] h-[120px] object-contain"
                alt="product"
              />

              <div>
                <p className="text-sm">Bingo Tedhe Medhe</p>
                <p className="font-semibold">Rs. 564</p>
              </div>

            </div>

          </div>


          {/* RIGHT SECTION */}
          <div className="flex-1 flex flex-col gap-12">

            {/* Progress Bar */}
            <div className="relative w-full">

              <div className="absolute top-2 left-0 w-full h-[2px] bg-green-500"></div>

              <div className="flex justify-between relative">

                {["Order Placed", "Shipped", "Out for Delivery", "Delivered"].map(
                  (step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-white px-2"
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          index === 0
                            ? "bg-green-500 border-green-500"
                            : "bg-white border-green-500"
                        }`}
                      ></div>

                      <p className="text-sm font-medium mt-2">{step}</p>
                      <p className="text-xs text-gray-500">On 1 March</p>
                    </div>
                  )
                )}

              </div>

            </div>


            {/* Bottom Details */}
            <div className="flex justify-between flex-wrap gap-10">

              {/* Shipping Address */}
              <div>
                <h3 className="font-semibold mb-2">Shipping Address</h3>

                <p className="text-sm text-gray-600">
                  Santosh <br />
                  Street: 2749 Thomas Street <br />
                  Shimla bypass dehradun <br />
                  Dehradun, Uttarakhand <br />
                  Zip code: 606061 <br />
                  State: Dehradun
                </p>
              </div>


              {/* Payment */}
              <div>
                <h3 className="font-semibold mb-2">Payment method</h3>
                <p className="text-sm text-gray-600">Cash on delivery</p>
              </div>


              {/* Order Summary */}
              <div>
                <h3 className="font-semibold mb-2">Order Summary</h3>

                <div className="text-sm space-y-1 w-[200px]">

                  <div className="flex justify-between">
                    <span>SUBTOTAL</span>
                    <span>₹783.35</span>
                  </div>

                  <div className="flex justify-between">
                    <span>TAX & FEES</span>
                    <span>₹2.35</span>
                  </div>

                  <div className="flex justify-between">
                    <span>SHIPPING CHARGES</span>
                    <span>₹20.00</span>
                  </div>

                  <div className="flex justify-between font-semibold pt-1">
                    <span>TOTAL</span>
                    <span>₹783.35</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}