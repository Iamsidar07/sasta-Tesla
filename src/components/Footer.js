import React from 'react'
import styled from 'styled-components'
function Footer() {
  const date=new Date();
  const currentYear=date.getFullYear();
  return (
    <FooterContainer>
         <h3>Created By ❤️ Manoj Kumar</h3>
         <p>Copyright {currentYear}</p>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer=styled.div`
position:fixed;
bottom:0;
left:0;
right:0;
height:50px;
display:flex;
align-items:center;
justify-content:center;
background:white;
p{
  padding:0 10px;
}
`