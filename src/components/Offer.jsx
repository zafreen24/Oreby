import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Hat from "../assets/hat.png"
import Table from "../assets/table.png"
import Headphone from "../assets/headphone.png"
import Sunglass from "../assets/sunglass.png"

const Offer = () => {
  return (
   <section>
     <Container>
       <h2 className='text-[#262626] font-sans text-[36px] font-bold mt-24'>Special Offers</h2>
        <Flex className='flex-wrap justify-between'>
          <div className="w-[24%] py-5">
            <div className="">
            <img src={Hat} alt="" />
            </div>
             
            <div className="flex justify-between py-3">
              <h2 className="font-sans text-[20px] font-bold text-[#222]">Basic Crew  Neck Tee</h2>
                <p className="font-sans text-[18px]  text-[#767676] ">$44.00</p>
            </div>
          </div>
          <div className="w-[24%] py-5">
            <div className="">
            <img src={Table} alt="" />
            </div>
             
            <div className="flex justify-between py-3">
              <h2 className="font-sans text-[20px] font-bold text-[#222]">Basic Crew  Neck Tee</h2>
                <p className="font-sans text-[18px]  text-[#767676] ">$44.00</p>
            </div>
          </div>
          <div className="w-[24%] py-5">
            <div className="">
            <img src={Headphone} alt="" />
            </div>
             
            <div className="flex justify-between py-3">
              <h2 className="font-sans text-[20px] font-bold text-[#222]">Basic Crew  Neck Tee</h2>
                <p className="font-sans text-[18px]  text-[#767676] ">$44.00</p>
            </div>
          </div>
          <div className="w-[24%] py-5">
            <div className="">
            <img src={Sunglass} alt="" />
            </div>
             
            <div className="flex justify-between py-3">
              <h2 className="font-sans text-[20px] font-bold text-[#222]">Basic Crew  Neck Tee</h2>
                <p className="font-sans text-[18px]  text-[#767676] ">$44.00</p>
            </div>
          </div>
        </Flex>
     </Container>
   </section>
  )
}

export default Offer