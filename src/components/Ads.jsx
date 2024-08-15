import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Lamp from "../assets/Ad_1 (1).png"
import Clock from "../assets/Ad_2.png"
import Lamp2 from "../assets/Ad_3.png"

const Ads = () => {
  return (
    <Container>
       <Flex className="justify-between lg:mt-[90px] mt-[30px]">
           <div className="w-[48%]">
              <img className='w-full' src={Lamp} alt="" />
           </div>
           <div className="w-[48%]">
              <div className="w-full">
                <img className='w-full' src={Clock} alt="" />
              </div>
              <div className="w-full lg:mt-[40px] mt-[10px]">
                <img className='w-full' src={Lamp2} alt="" />
              </div>
           </div>
       </Flex>
    </Container>
  )
}

export default Ads