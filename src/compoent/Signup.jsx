// 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ setShowSignup }) {

  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    password: "",
    repeatPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  // 🔥 ONLY THIS PART CHANGED
  const handleSignup = async () => {

    if (formData.password !== formData.repeatPassword) {
      alert("Password not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // name: formData.firstName + " " + formData.lastName,
          firstName: formData.firstName,
          lastName: formData.lastName,
          contact: formData.contact,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      alert("Signup Successful ✅");
      setShowSignup(false);

    } catch (error) {
      console.log(error);
      alert("Signup Failed ❌");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">

      <div className="w-full max-w-[401px] bg-white rounded-[20px] flex flex-col items-center pt-6 pb-8">

        <h1 className="text-3xl font-bold text-green-600">Nova Fresh</h1>

        <p className="text-gray-600 mt-1 mb-6">
          Create your account
        </p>

        <div className="flex flex-col gap-[10px] w-full items-center">

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full max-w-[321px] h-[48px] border border-[#9DAB98] rounded-[8px] px-[10px]"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full max-w-[321px] h-[48px] border border-[#9DAB98] rounded-[8px] px-[10px]"
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full max-w-[321px] h-[48px] border border-[#9DAB98] rounded-[8px] px-[10px]"
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full max-w-[321px] h-[48px] border border-[#9DAB98] rounded-[8px] px-[10px]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full max-w-[321px] h-[48px] border border-[#9DAB98] rounded-[8px] px-[10px]"
          />

          <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat Password"
            value={formData.repeatPassword}
            onChange={handleChange}
            className="w-full max-w-[321px] h-[48px] border border-[#9DAB98] rounded-[8px] px-[10px]"
          />

        </div>

        <div className="flex flex-col items-center gap-[8px] mt-6 w-full">

          <button
            onClick={handleSignup}
            className="w-full max-w-[321px] h-[48px] bg-green-600 text-white rounded-[8px]"
          >
            Sign up
          </button>

          <p className="text-sm text-center">
            Have an account?{" "}
            <span
              className="text-green-600 cursor-pointer"
              onClick={() => {
                  setShowSignup(false);

                 Navigate("/Login") } }

            >
              Log in
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}