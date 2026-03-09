import React from "react";
import picture from"./picture.png";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[900px] bg-white p-8 ">

        {/* Header */}
        <div className="flex justify-between items-center mb-6" onClick={() => navigate("/Home")}>
          <h2 className=" flex text-lg items-center gap-2  font-semibold">
             <svg width="8" height="11" viewBox="0 0 8 14"  className="  text-lg font-semibold"fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.292779 5.93771C0.105309 6.12524 -7.15256e-06 6.37954 -7.15256e-06 6.64471C-7.15256e-06 6.90987 0.105309 7.16418 0.292779 7.35171L5.94978 13.0087C6.04203 13.1042 6.15237 13.1804 6.27437 13.2328C6.39638 13.2852 6.5276 13.3128 6.66038 13.314C6.79316 13.3151 6.92484 13.2898 7.04773 13.2395C7.17063 13.1892 7.28228 13.115 7.37617 13.0211C7.47007 12.9272 7.54432 12.8156 7.5946 12.6927C7.64488 12.5698 7.67018 12.4381 7.66903 12.3053C7.66788 12.1725 7.64029 12.0413 7.58788 11.9193C7.53547 11.7973 7.45929 11.687 7.36378 11.5947L2.41378 6.64471L7.36378 1.69471C7.54594 1.5061 7.64673 1.2535 7.64445 0.991306C7.64218 0.72911 7.53701 0.478296 7.3516 0.292889Z"
                fill="#2F3031"
              />
            </svg>Your Account</h2>

          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={()=>{navigate("/User")}}>
            Edit
          </button>
        </div>

        {/* Profile Image */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={picture}
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-7">

          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded w-full"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            placeholder="Phone No"
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            placeholder="Country"
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            placeholder="State"
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            placeholder="City"
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            placeholder="Zip Code"
            className="border p-2 rounded w-full"
          />

        </div>

        {/* Address */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Address"
            className="border p-2 rounded w-full"
          />
        </div>

      </div>
    </div>
  );
}