import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-10">
      
      <div className="max-w-[1352px] mx-auto px-5 md:px-10 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[#76BA1F] text-2xl md:text-3xl font-bold">
              Nova Fresh
            </h2>

            <p className="text-sm text-gray-600">
              © Novafresh Private Limited
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-700 text-lg">
              <FaXTwitter className="cursor-pointer hover:text-black" />
              <FaInstagram className="cursor-pointer hover:text-black" />
              <FaFacebookF className="cursor-pointer hover:text-black" />
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="flex flex-col gap-2 text-gray-600">
                <li className="hover:text-black cursor-pointer">About</li>
                <li className="hover:text-black cursor-pointer">Careers</li>
                <li className="hover:text-black cursor-pointer">Blog</li>
                <li className="hover:text-black cursor-pointer">FAQs</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="flex flex-col gap-2 text-gray-600">
                <li className="hover:text-black cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:text-black cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-black cursor-pointer">
                  Cookie Policy
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-3">Contact us</h3>
              <ul className="flex flex-col gap-2 text-gray-600">
                <li className="hover:text-black cursor-pointer">
                  Help & Support
                </li>
                <li className="hover:text-black cursor-pointer">
                  Partner with us
                </li>
                <li className="hover:text-black cursor-pointer">
                  Ride with us
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-10"></div>

      </div>
    </footer>
  );
}

export default Footer;