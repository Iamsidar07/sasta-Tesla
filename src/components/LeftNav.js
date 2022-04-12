import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import cars from "./Data";

import { Slide } from "react-reveal";

function LeftNav() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  function handleMenu() {
    setBurgerStatus(true);
  }
  function handleBurger() {
    setBurgerStatus(false);
  }
  return (
    <LeftNavContainer className="links">
      <p>
        <a href="#">Shop</a>
      </p>
      <p>
        <a href="#">Account</a>
      </p>
      <CustomIcon onClick={handleMenu} />

      <BurgerNav show={burgerStatus} onClick={handleBurger}>
        <MyCloseIcon />
        <Slide right>
          {cars.map((car, index) => {
            return (
         
                <li key={index}>
                  <a href="#">{car}</a>
                </li>
            
        
            );
          })}
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">test drive</a>
          </li>
          <li>
            <a href="#">cybertruck</a>
          </li>
          <li>
            <a href="#">roadster</a>
          </li>
          <li>
            <a href="#">semi</a>
          </li>
          <li>
            <a href="#">charging</a>
          </li>
          <li>
            <a href="#">powerwall</a>
          </li>
          <li>
            <a href="#">commercial energy</a>
          </li>
          <li>
            <a href="#">utilities</a>
          </li>
          <li>
            <a href="#">Find us</a>
          </li>
          <li>
            <a href="#">support</a>
          </li>
          <li>
            <a href="#">investor relations</a>
          </li>
          <li>
            <a href="#"> united state</a>
          </li>
        </Slide>
      </BurgerNav>
    </LeftNavContainer>
  );
}

export default LeftNav;
const LeftNavContainer = styled.div``;

const CustomIcon = styled(MenuIcon)`
  cursor: pointer;
  margin-right: 10px;
`;
const BurgerMenu = styled.div`
  position: fixed;
  padding-top: 6%;
  right: 0;
  top: 0;
  width: 30vw;
  height: 100vh;
  background: white;
  li {
    margin: 10px 0 0 30px;
    list-style: none;
  }
  a {
    padding: 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  a:hover {
    background-color: gray;
    border-radius: 100px;
    opacity: 0.9;
    background: gray;
    padding: 5px 40px;
  }
`;

const BurgerNav = styled.div`
  height: 100vh;
  text-align: start;
  width: 300px;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background: white;
  z-index: 2;
  padding-top: 5%;
  padding-bottom: 10%;
  overflow-y: scroll;
  text-transform: capitalize;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ease-in;
  li {
    width: 100%;
    padding-left: 20px;
    padding: 10px 9px;
  }
  li:hover {
    background: gray;
    border-radius: 50px;
    background-color: rgba(128, 128, 128, 0.137);
  }
  a {
    padding: 5px 10px;
    font-size: 18px;
  }
  a:hover {
    background: transparent;
    font-weight: 900;
  }

  @media only screen and (max-width: 769px) {
    padding: 15% 0;
  }
`;
const MyCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 15px;
`;
