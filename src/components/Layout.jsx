import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";
import { FaPencilAlt } from "react-icons/fa";
import { BiUserCheck } from "react-icons/bi";

import logo from "../../public/logo.jpg";
function Layout() {
  return (
    <>
      <NavBar>
        <Logo src={logo} />
        <StyledNavLink to="/">홈</StyledNavLink>
        <StyledNavLink
          to="/login"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          로그인
          <User />
        </StyledNavLink>
        <StyledNavLink
          to="/diary"
          style={({ isActive }) => ({
            background: isActive ? "orange" : "pink",
            color: isActive ? "red" : "blue",
          })}
        >
          다이어리
          <Pencil />
        </StyledNavLink>{" "}
      </NavBar>
      <Outlet></Outlet>
    </>
  );
}

const NavBar = styled.div`
  width: 600px;
  height: 50px;
  background: ${(props) => props.theme.palette.white};
`;
const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10%;
`;
const StyledNavLink = styled.li`
  text-decoration: none;
  list-style: none;
  display: flex;
`;
const Pencil = styled(FaPencilAlt)`
  font-size: 30px;
`;
const User = styled(BiUserCheck)`
  font-size: 30px;
`;
export default Layout;
