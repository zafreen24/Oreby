import React from "react";
import { FaTruck } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import Slider from "react-slick";
import BanImg from "../assets/banner.png";
import Container from "./Container";
import Flex from "./Flex";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    appendDots: (dots) => (
      <div
        className="tumi"
        style={{
          position: "absolute",
          left: "90px",
          top: "50%",
          borderRadius: "10px",
          padding: "10px 0",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="ami"
        style={{
          width: "30px",
          color: "transparent",
          padding: "12px 0",
          borderRight: "4px solid #fff ",
        }}
      >
        0{i + 1}
      </div>
    ),
  };

  return (
    <>
      <Slider {...settings}>
        <div className="">
          <img src={BanImg} alt="" />
        </div>
        <div className="">
          <img src={BanImg} alt="" />
        </div>
        <div className="">
          <img src={BanImg} alt="" />
        </div>
        <div className="">
          <img src={BanImg} alt="" />
        </div>
      </Slider>
      <Container>
        <Flex className="justify-between">
          <div className="flex items-center lg:gap-x-4 gap-x-2 w-[33%]">
            <span className="font-bold text-[#262626]">2</span>
            <h2 className="font-sans font-normal lg:text-[16px] text-[9px] text-[#6D6D6D]">
              Two years warranty
            </h2>
          </div>
          <div className="flex items-center gap-x-4">
            <FaTruck />
            <h2 className="font-sans font-normal lg:text-[16px] text-[9px] text-[#6D6D6D]">
              Free shipping
            </h2>
          </div>
          <div className="flex items-center gap-x-4">
            <IoReload />
            <h2 className="font-sans font-normal lg:text-[16px] text-[9px] text-[#6D6D6D]">
              Return policy in 30 days
            </h2>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Banner;
