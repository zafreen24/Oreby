import React from "react";


import Banner from "../components/Banner"
import Ads from "../components/Ads"
import Newarrivals from "../components/Newarrivals"
import Clock from "../components/Clock"
import Offer from "../components/Offer"



const Home = () => {
  return(
    <>
   
      <Banner/>
      <Ads/>
      <Newarrivals/>
      <Clock/>
      <Offer/>
  
    </>
  ) 
 
};

export default Home;
