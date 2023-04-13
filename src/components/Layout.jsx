import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <NavLink to="/">홈</NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        로그인
      </NavLink>
      <NavLink
        to="/diary"
        style={({ isActive }) => ({
          background: isActive ? "orange" : "pink",
          color: isActive ? "red" : "blue",
        })}
      >
        다이어리
      </NavLink>
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
