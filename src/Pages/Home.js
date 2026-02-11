import React from "react";
import HomeSlider from "../Components/HomeSlider";
import CaseStudy from "../Components/CaseStudy";
import ZackData from "../Components/ZackData";
import SwiperList from "../Components/SwiperList";
import OurNewslatter from "../Components/OurNewslatter";

function Home() {
  return (
    <div>
      <HomeSlider />
      <ZackData />
      <SwiperList />
      <OurNewslatter />
    </div>
  );
}

export default Home;
