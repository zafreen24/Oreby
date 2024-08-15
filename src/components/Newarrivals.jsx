import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivalsitem from './Arrivalsitem'
import { apiData } from './ContextApi'
import {useContext} from 'react'
import Slider from "react-slick";
import { FaLongArrowAltLeft,FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom'


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='h-[50px] w-[50px] rounded-full text-center leading-[50px] text-[20px] bg-[#979797] text-white absolute top-[38%] right-0 z-50 translate-y-[-50%] '><FaLongArrowAltRight className='inline-block'/></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='h-[50px] w-[50px] rounded-full text-center leading-[50px] text-[20px] bg-[#979797] text-white absolute top-[38%] left-[-21px] z-50 translate-y-[-50%] '><FaLongArrowAltLeft className='inline-block'/></div>
  );
}


const Newarrivals = () => {
  let data = useContext(apiData)
  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
      
  return (
    <section>
        <Container>
            <h2 className="font-sans text-[36px] font-bold mt-20">New Arrivals</h2>
       
              <Slider {...settings}>
              {data.map((item)=>(
               <Link to="/product">
                <Arrivalsitem item={item}/>
               </Link>
              
                
              ))}
              </Slider>
        
        </Container>
    </section>
  )
}

export default Newarrivals