import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { BiUserCheck } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import logo from "/logo.jpg";
function Layout() {
  return (
    <>
      <NavBar>
        <Logo src={logo} />
        <StyledNavLink to="/">
          홈<Home />
        </StyledNavLink>
        <StyledNavLink to="/login">
          로그인
          <User />
        </StyledNavLink>
        <StyledNavLink to="/diary">
          다이어리
          <Pencil />
        </StyledNavLink>{" "}
      </NavBar>
      <Outlet></Outlet>
    </>
  );
}

const NavBar = styled.div`
  height: 50px;
  background: ${(props) => props.theme.palette.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 5px 5px;
`;
const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10%;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  min-width: 5rem;
  display: flex;
  align-items: center;
  margin: 3rem;
  color: ${(props) => props.theme.palette.accent};
  &:hover {
    color: ${(props) => props.theme.palette.primary};
  }
`;
const Pencil = styled(FaPencilAlt)`
  font-size: 1rem;
`;
const User = styled(BiUserCheck)`
  font-size: 1rem;
`;
const Home = styled(BiHome)`
  font-size: 1rem;
`;
export default Layout;
