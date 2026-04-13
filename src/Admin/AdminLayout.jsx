import React from "react";
import Sidebar from "../Admin/Slidebar";
import { Outlet } from "react-router-dom";

 export default function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
}