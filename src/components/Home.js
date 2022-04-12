import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
   <Section src="images/model-3.jpg" title="Model 3" desc ="Order Online for Touchless Delivery" leftbtntxt="custom order" rightbtntxt="existing inventory"/>
   <Section src="images/model-x.jpg" title="Model X" desc ="Order Online for Touchless Delivery" leftbtntxt="custom order" rightbtntxt="existing inventory"/>
   <Section src="images/model-s.jpg" title="Model S" desc ="Order Online for Touchless Delivery" leftbtntxt="custom order" rightbtntxt="existing inventory"/>
   <Section src="images/model-y.jpg" title="Model Y" desc ="Order Online for Touchless Delivery" leftbtntxt="custom order" rightbtntxt="existing inventory"/>
   <Section src="images/solar-panel.jpg" title="Solar Panels" desc ="Lowest Cost Solar Panels in America" leftbtntxt="order now" rightbtntxt="learn more"/>
   <Section src="images/solar-roof.jpg" title="Solar Roofs" desc ="Produce Clean Energy From Your Roof" leftbtntxt="order now" rightbtntxt="learn more"/>
   <Section src="images/accessories.jpg" title="accessories" desc ="" leftbtntxt="" rightbtntxt="order now"/>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  padding-top:40px;
`;
