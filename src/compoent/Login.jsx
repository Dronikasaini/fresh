// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Login() {
//     const navigate = useNavigate();
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">

//       {/* Card */}
//       <div className="w-full max-w-[401px] bg-white rounded-[20px] p-6 flex flex-col items-center">

//         {/* Title */}
//         <h1 className="text-[28px] font-bold text-[#5BAE2E]">
//           Nova Fresh
//         </h1>

//         <p className="mt-2 mb-4 text-gray-700 font-medium">
//           Log in
//         </p>

//         {/* Inputs */}
//         <div className="flex flex-col gap-[10px] w-full items-center">

//           <input
//             type="email"
//             placeholder="E-mail"
//             className="w-full max-w-[321px] h-[48px] border border-[#9DAB98] rounded-[8px] px-[10px] bg-[#EAF2E3]"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full max-w-[321px] h-[48px] border border-[#9DAB98] rounded-[8px] px-[10px] bg-[#EAF2E3]"
//           />

//         </div>

//         {/* Checkbox */}
//         <div className="w-full max-w-[321px] flex items-center mt-2 text-sm text-gray-600">
//           <input type="checkbox" className="mr-2" />
//           Keep me logged in
//         </div>

//         {/* Login Button */}
//         <button className="w-full max-w-[321px] h-[48px] bg-[#6CC51D] text-white rounded-[8px] mt-3 font-medium"   onClick={() => navigate("/")}
// >
//           Log in
//         </button>

//         {/* Divider */}
//         <p className="text-sm text-gray-500 mt-4">
//           Or log in with
//         </p>

//         {/* Social Buttons */}
//         <div className="flex flex-col gap-2 w-full items-center mt-2">

//           <button className="w-full max-w-[321px] h-[42px] border border-[#6CC51D] rounded-[8px] flex items-center justify-center gap-2">
//             G Continue with Google
//           </button>

//           <button className="w-full max-w-[321px] h-[42px] border border-[#6CC51D] rounded-[8px] flex items-center justify-center gap-2">
//             f Continue with Facebook
//           </button>

//           <button className="w-full max-w-[321px] h-[42px] border border-[#6CC51D] rounded-[8px] flex items-center justify-center gap-2">
//             X Continue with X
//           </button>

//         </div>

//         {/* Register */}
//         <p className="text-sm text-gray-600 mt-4">
//           Not a member yet?{" "}
//           <span className="text-[#6CC51D] cursor-pointer" onClick={() => navigate("/Signup")}>
//             Register now
//           </span>
//         </p>

//       </div>
//     </div>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  // ✅ State add
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // ✅ Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Handle Login (API call)
   const handleLogin = async () => {
     try {
      const res = await fetch("http://localhost:5000/login", {
         method: "POST",
         headers: {
          "Content-Type": "application/json"
        },
         body: JSON.stringify(formData)
       });

       const data = await res.json();
      console.log(data);

       if (res.ok) {
         alert("Login successful");
         navigate("/");
       } else {
        alert(data.message || "Login failed");
      }

     } catch (err) {
       console.log(err);
     alert("Server error");
     }
  };
//     const res = await fetch("http://localhost:5000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     });

//     const data = await res.json();

//     // 🔥 YAHI PE TOKEN DIKHEGA
//     console.log("TOKEN 👉", data.token);

//   } catch (err) {
//     console.log("Error 👉", err);
//   }
// };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">

      <div className="w-full max-w-[401px] bg-white rounded-[20px] p-6 flex flex-col items-center">

        <h1 className="text-[28px] font-bold text-[#5BAE2E]">
          Nova Fresh
        </h1>

        <p className="mt-2 mb-4 text-gray-700 font-medium">
          Log in
        </p>

        <div className="flex flex-col gap-[10px] w-full items-center">

          {/* ✅ Email */}
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            className="w-full max-w-[321px] h-[48px] border border-[#9DAB98] rounded-[8px] px-[10px] bg-[#EAF2E3]"
          />

          {/* ✅ Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full max-w-[321px] h-[48px] border border-[#9DAB98] rounded-[8px] px-[10px] bg-[#EAF2E3]"
          />

        </div>

        <div className="w-full max-w-[321px] flex items-center mt-2 text-sm text-gray-600">
          <input type="checkbox" className="mr-2" />
          Keep me logged in
        </div>

        {/* ✅ Button fix */}
        <button
          className="w-full max-w-[321px] h-[48px] bg-[#6CC51D] text-white rounded-[8px] mt-3 font-medium"
          onClick={handleLogin}
        >
          Log in
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Or log in with
        </p>

        <div className="flex flex-col gap-2 w-full items-center mt-2">

          <button className="w-full max-w-[321px] h-[42px] border border-[#6CC51D] rounded-[8px] flex items-center justify-center gap-2">
            G Continue with Google
          </button>

          <button className="w-full max-w-[321px] h-[42px] border border-[#6CC51D] rounded-[8px] flex items-center justify-center gap-2">
            f Continue with Facebook
          </button>

          <button className="w-full max-w-[321px] h-[42px] border border-[#6CC51D] rounded-[8px] flex items-center justify-center gap-2">
            X Continue with X
          </button>

        </div>

        <p className="text-sm text-gray-600 mt-4">
          Not a member yet?{" "}
          <span
            className="text-[#6CC51D] cursor-pointer"
            onClick={() => navigate("/Signup")}
          >
            Register now
          </span>
        </p>

      </div>
    </div>
  );
}