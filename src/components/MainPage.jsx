import React from "react";
import logo from "../../public/quokka1.jpeg";
import styled from "styled-components";

function MainPage() {
  return <Img src={logo} />;
}

const Img = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default MainPage;
