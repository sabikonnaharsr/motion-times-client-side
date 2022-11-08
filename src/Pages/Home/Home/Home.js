import React from "react";
import UseTitle from "../../Hooks/UseTitle";
import OurContents from "../../OurSuccess/OurContents/OurContents";
import About from "../../Services/About/About";
import ServiceDetails from "../../Services/ServiceDetails/ServiceDetails";
import OrganizationDetails from "../../Services/ServiceDetails/ServiceDetails";
import Services from "../../Services/Services/Services";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      {/* // 0C0C0C black color code. */}
      <h1>home</h1>
      <Carousel></Carousel>
      <About></About>
      <OurContents></OurContents>
      <OrganizationDetails></OrganizationDetails>
     <ServiceDetails></ServiceDetails>
      <Services></Services>
    </div>
  );
};

export default Home;
