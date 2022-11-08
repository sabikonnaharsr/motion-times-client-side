import React from "react";
import Blogs from "../../Blogs/Blogs";
import UseTitle from "../../Hooks/UseTitle";
import OurContents from "../../OurSuccess/OurContents/OurContents";
import WinningYear from "../../OurSuccess/WinnigYear/WinningYear";
import About from "../../Services/About/About";
import ClientReview from "../../Services/ClientReview/ClientReview";
import ServiceDetails from "../../Services/ServiceDetails/ServiceDetails";
import OrganizationDetails from "../../Services/ServiceDetails/ServiceDetails";
import Services from "../../Services/Services/Services";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <Carousel></Carousel>
      <About></About>
      <WinningYear></WinningYear>
      <OurContents></OurContents>
      <ServiceDetails></ServiceDetails>
      <Services></Services>
      <ClientReview></ClientReview>
    </div>
  );
};

export default Home;
