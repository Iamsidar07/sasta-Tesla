import React from "react";
import "./Header.css";
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";
import { Slide } from "react-reveal";
import styled from "styled-components";
function Header(props) {
  const logo = props.logosrc;
  return (
    <HeaderContainer className="header">
      <img src={logo} alt="logo" className="logo" />

      <RightNav />

      <LeftNav />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: transparent;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left:0;
  z-index:1;
  align-items: center;
  justify-content: space-between;
  p {
    text-transform: capitalize;
    font-weight: 600;
  }
`;
