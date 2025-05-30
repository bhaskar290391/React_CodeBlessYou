import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

const Admin = () => {
  const user = {
    role: "admin",
  };
  if (user.role !== "admin") {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div>
      <h2>Admin Panel</h2>

      <ul>
        <li>
          <Link to="/admin/sales">Sales</Link>
        </li>
        <li>
          <Link to="/admin/sellers">Sellers</Link>
        </li>
      </ul>

      <Outlet></Outlet>
    </div>
  );
};

export default Admin;
