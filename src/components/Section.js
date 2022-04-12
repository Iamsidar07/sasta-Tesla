import React from "react";
import "./Section.css";
import { produceWithPatches } from "immer";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Section(props) {
  const src=props.src;
  const customImage={
    backgroundImage:`url(${src})`
  }


  return (
    <Wrap style={customImage}>
   <Fade bottom>
      <ItemText>
        <h1>{props.title}</h1>
        <p style={{cursor:"pointer"}}>{props.desc}</p>
      </ItemText>
      </Fade>


      <ButtonGroup>
      <Fade bottom>
    
      {props.leftbtntxt&&<button className="btn1">{props.leftbtntxt}</button>} 
      <button className="btn2">{props.rightbtntxt}</button>
      </Fade>
      </ButtonGroup>
      
      <Arrow  >
        <img src="images/down-arrow.svg" alt="Down-arrow" />
       </Arrow> 



    
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const ItemText = styled.div`
  padding-top: 10%;
  text-align: center;
  text-transform:capitalize;
  @media only screen and (max-width:769px){
padding:15%;
 
}
`;

const ButtonGroup = styled.div`
text-align:center;
display: flex;
align-items: center;
justify-content: center;
position:relative;
bottom:-260px;

@media only screen and (max-width:769px){
  flex-direction:column;
 
}
`;

const Arrow = styled.div`
width:60px;
cursor:pointer;
position:relative;
top:230px;
margin:30px auto;
animation:arrowdown infinite 1.56s;
@media only screen and (max-width:769px){
margin:2px auto;
 
}
`

