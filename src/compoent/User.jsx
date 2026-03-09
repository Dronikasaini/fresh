import React from "react";
import picture from"./picture.png";

function User() {
  return (
    <div className="w-full flex justify-center bg-[#FCFCFB] py-10">

      <div className="w-[1100px] bg-white p-8 rounded-md shadow-sm">

        {/* Title */}
        <h2 className="text-[20px] font-semibold mb-6 abc">Your Account</h2>

        {/* Profile Image */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={picture}
            alt="profile"
            className="w-[60px] h-[60px] rounded-full"
          />

          <button className="bg-[#5B6FEF] text-white text-[12px] abc  px-4 py-2 rounded">
            Upload new photo
          </button>

          <button className="text-red-500 text-[12px] abc">Delete</button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4">

          <input className="border p-3 rounded abc" placeholder="First Name" />
          <input className="border p-3 rounded abc" placeholder="Last Name" />

          <input className="border p-3 rounded abc" placeholder="Email Id" />
          <input className="border p-3 rounded abc" placeholder="Phone No." />

          <input className="border p-3 rounded abc" placeholder="Country" />
          <input className="border p-3 rounded abc" placeholder="State" />

          <input className="border p-3 rounded" placeholder="City" />
          <input className="border p-3 rounded" placeholder="Zip Code" />

        </div>

        {/* Address */}
        <div className="mt-4">
          <input
            className="border p-3 rounded w-full"
            placeholder="Address"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="text-gray-600 abc">Discard</button>

          <button className="bg-[#5B6FEF] abc text-white px-5 py-2 rounded">
            Save Changes
          </button>
        </div>

      </div>

    </div>
  );
}

export default User;