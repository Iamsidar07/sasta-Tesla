import React from "react";
import styled from "styled-components";
import cars from "./Data";
function RightNav() {
  return (
    <RightNavContainer className="links right-nav">
      {cars.map((car, index) => {
        return (
          <p key={index}>
            <a href="#">{car}</a>
          </p>
        );
      })}
      <p>
        <a href="#">Solar Panels</a>
      </p>
      <p>
        <a href="#">Solar Roofs</a>
      </p>
    </RightNavContainer>
  );
}

export default RightNav;
const RightNavContainer = styled.div`
  marging-right: 15px;
`;
