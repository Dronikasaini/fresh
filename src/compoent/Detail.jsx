import React from "react";

function Detail() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center px-4">

      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-6 mt-10">

        {/* 🔹 First Div */}
        <div className="w-full lg:w-[664px] h-[665px] bg-blue-300 flex gap-6">
          First Div
        </div>

        {/* 🔹 Second Div */}
        <div className="w-full lg:w-[664px] h-[647px] bg-green-300 px-4 flex gap-6">
          Second Div
        </div>

      </div>
    </div>
  );
}

export default Detail;