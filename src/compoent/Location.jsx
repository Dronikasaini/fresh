import React, { useState } from "react";

export default function LocationSelector() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  // Example location options
  const locations = [
    "mumbai",
    "rajkot",
    "uttrakhnad",
    "uttrapradesh",
    "haryana",
    "delhi",
    "dehradun",
  ];

  const filtered = locations.filter((loc) =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {/* Button to open div */}
      <button
        className="text-[14px] font-normal text-[#4F4848] flex justify-center items-center gap-1 abc"
        onClick={() => setOpen(true)}
      >
        Select Your Location
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_985_2037)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.47124 10.4713C8.34622 10.5963 8.17668 10.6665 7.9999 10.6665C7.82313 10.6665 7.65359 10.5963 7.52857 10.4713L3.75724 6.69999C3.69356 6.6385 3.64277 6.56493 3.60784 6.4836C3.5729 6.40226 3.55451 6.31478 3.55374 6.22626C3.55297 6.13774 3.56983 6.04996 3.60336 5.96803C3.63688 5.88609 3.68638 5.81166 3.74897 5.74906C3.81157 5.68647 3.886 5.63697 3.96793 5.60345C4.04986 5.56993 4.13765 5.55306 4.22617 5.55383C4.31469 5.5546 4.40217 5.57299 4.48351 5.60793C4.56484 5.64287 4.63841 5.69365 4.6999 5.75733L7.9999 9.05733L11.2999 5.75733C11.4256 5.63589 11.594 5.56869 11.7688 5.57021C11.9436 5.57173 12.1108 5.64184 12.2344 5.76545C12.3581 5.88905 12.4282 6.05626 12.4297 6.23106C12.4312 6.40586 12.364 6.57426 12.2426 6.69999L8.47124 10.4713Z"
              fill="#302929"
            />
          </g>
          <defs>
            <clipPath id="clip0_985_2037">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      {/* Big Div */}
      {open && (
        <div className="w-[712px] h-[284px] absolute top-[152px] left-[400px] bg-[#EDEBEB] rounded-[24px] p-6 z-50">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Type location..."
            className="w-[664px] h-[48px] px-4 py-2 flex gap-4 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="flex flex-row mt-4 gap-[120px] justify-center items-center">
            <h2 className="text-16px">
              Give us your exact location for seamless delivery
            </h2>

            {/* Close Button */}
            <button
              className="w-[181px] h-[40px] bg-[#76BA1F] gap-1 flex justify-center items-center rounded-md text-[#070707] text-[14px] font-normal abc line-height-[20px] tracking-[0%]"
              onClick={() => setOpen(false)}
            >
              <svg
                width="18.33"
                height="18.33"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_985_2069)">
                  <path
                    d="M10.833 0.833332L10.8338 3.38501C13.849 3.76137 16.2388 6.15136 16.6148 9.16667H19.1663V10.8333L16.6147 10.8342C16.2383 13.8491 13.8488 16.2387 10.8338 16.615L10.833 19.1667H9.16634V16.6151C6.15103 16.2391 3.76105 13.8493 3.38468 10.8342L0.833008 10.8333V9.16667H3.38458C3.76061 6.15107 6.15075 3.76093 9.16634 3.38491V0.833332H10.833ZM9.99967 5C7.23825 5 4.99967 7.23857 4.99967 10C4.99967 12.7614 7.23825 15 9.99967 15C12.7611 15 14.9997 12.7614 14.9997 10C14.9997 7.23857 12.7611 5 9.99967 5ZM9.99967 8.33333C10.9202 8.33333 11.6663 9.0795 11.6663 10C11.6663 10.9205 10.9202 11.6667 9.99967 11.6667C9.07917 11.6667 8.33301 10.9205 8.33301 10C8.33301 9.0795 9.07917 8.33333 9.99967 8.33333Z"
                    fill="#302F2F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_985_2069">
                    <rect width="18.33" height="18.33" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Detect your location
            </button>
          </div>

          {/* Dropdown Suggestions */}
          {filtered.length > 0 && query && (
            <div className="mt-1 max-h-35 overflow-y-auto bg-[#EDEBEB] ">
             {filtered.map((loc, index) => (
  <div key={loc}>
    <div
      className="flex items-center px-4 py-2 cursor-pointer gap-2"
      onClick={() => {
        setSelected(loc);
        setQuery(loc);
        setOpen(false);
      }}
    >
      <svg width="19" height="27" viewBox="0 0 19 27" fill="none">
        <path
          d="M9.5 19.7496L13.6248 15.6248C15.9028 13.3468 15.9028 9.65327 13.6248 7.37521C11.3468 5.09715 7.65327 5.09715 5.37521 7.37521C3.09715 9.65327 3.09715 13.3468 5.37521 15.6248L9.5 19.7496ZM9.5 22.1066L4.1967 16.8033C1.26777 13.8743 1.26777 9.12563 4.1967 6.1967C7.12563 3.26777 11.8743 3.26777 14.8033 6.1967C17.7323 9.12563 17.7323 13.8743 14.8033 16.8033L9.5 22.1066ZM9.5 13.1667C10.4205 13.1667 11.1667 12.4205 11.1667 11.5C11.1667 10.5795 10.4205 9.83333 9.5 9.83333C8.5795 9.83333 7.83333 10.5795 7.83333 11.5C7.83333 12.4205 8.5795 13.1667 9.5 13.1667ZM9.5 14.8333C7.65905 14.8333 6.16667 13.3409 6.16667 11.5C6.16667 9.65905 7.65905 8.16667 9.5 8.16667C11.3409 8.16667 12.8333 9.65905 12.8333 11.5C12.8333 13.3409 11.3409 14.8333 9.5 14.8333Z"
          fill="black"
        />
      </svg>
      <span>{loc}</span>
    </div>

    {/* Add line except for last item */}
    {index !== filtered.length - 1 && (
      <hr className="border-gray-300 my-1" />
    )}
  </div>
))}


            </div>
          )}

        </div>
      )}
    </div>
  );
}
