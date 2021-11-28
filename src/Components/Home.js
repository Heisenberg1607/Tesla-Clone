import React from "react";
import Section from "./Section";
import img1 from "../images/model-s.jpg"
import img2 from "../images/model-y.jpg"
import img3 from "../images/model-3.jpg"
import img4 from "../images/model-x.jpg"
import solar_panel from "../images/solar-panel.jpg"
import solar_roof from "../images/solar-roof.jpg"
import access from "../images/accessories.jpg"
function Home() {
  return (
    <div className="Container">
      <Section
        title="Model S"
        description="Order online for Touchless Delivery"
        backgroundImage={img1}
        leftButton="CustomGroup"
        rightButton="Existing inventory"
      ></Section>
      <Section
        title="Model Y"
        description="Order online for Touchless Delivery"
        backgroundImage={img2}
        leftButton="Custom Order"
        rightButton="Existing inventory"
      ></Section>
      <Section
        title="Model 3"
        description="Order online for Touchless Delivery"
        backgroundImage={img3}
        leftButton="Custom Order"
        rightButton="Existing inventory"
      ></Section>
      <Section
        title="Model X"
        description="Order online for Touchless Delivery"
        backgroundImage={img4}
        leftButton="Custom Order"
        rightButton="Existing inventory"
      ></Section>
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guaranteed"
        backgroundImage={solar_panel}
        leftButton="Custom Order"
        rightButton="Existing inventory"
      ></Section>
      <Section
        title="Solar for New Roofs"
        description="Solar Roof costs less than a New Roof"
        backgroundImage={solar_roof}
        leftButton="Custom Order"
        rightButton="Existing inventory"
      ></Section>
      <Section
        title="Accessories"
        description=""
        backgroundImage={access}
        leftButton="Shop Now"
        rightButton=""
      ></Section>
    </div>
  );
}

export default Home;
