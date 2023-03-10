import React from "react";
import Blogs from "../../Blogs/Blogs";
import UseTitle from "../../Hooks/UseTitle";
import OurContents from "../../OurSuccess/OurContents/OurContents";
import SuccessfulClient from "../../OurSuccess/SuccessfulClient/SuccessfulClient";
import WinningYear from "../../OurSuccess/WinningYear/WinningYear";
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
      <SuccessfulClient></SuccessfulClient>
      <ClientReview></ClientReview>
      <WinningYear></WinningYear>
      <OurContents></OurContents>
      <Services></Services>

      {/* <PhotoProvider>
        <PhotoView src={image}>
          <img
            src={image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 cursor: zoom-in"
          />
        </PhotoView>
      </PhotoProvider> */}



    </div>
  );
};

export default Home;
