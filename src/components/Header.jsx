import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from '../assets/Logo.png'
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import {useState} from "react"
import {Link} from 'react-router-dom'

const Header = () => {

    let [show, setShow] = useState(false)
    
  return (
    <header className='lg:h-[80px] h-[20px]'>
            <Container>
        <Flex className="justify-between items-center lg:h-[80px] h-[20px]">
        <div className="w-1/4">
            <img src={Logo} alt="" />
        </div>
        <div className="w-3/4">
            <ul className={`lg:flex justify-center  gap-x-10  
            absolute lg:static duration-700 ease-out text-white lg:text-[#262626]
            ${show == true ? "bg-[gray] left-0 top-[50px] w-full" : " top-[50px] left-[-200px]" }`}>

                <li className='font-sans text-[16px] text-[#767676] hover:text-[#262626]'><Link to="/">Home</Link></li>
                <li className='font-sans text-[16px] text-[#767676] hover:text-[#262626]'><Link to="/product">Shop</Link></li>
                <li className='font-sans text-[16px] text-[#767676] hover:text-[#262626]'><Link to="/about">About</Link></li>
                <li className='font-sans text-[16px] text-[#767676] hover:text-[#262626]'><Link to="/contact">Contact</Link></li>
                <li className='font-sans text-[16px] text-[#767676] hover:text-[#262626]'>Journal</li>
                
            </ul>
        </div>
        <div className="lg:hidden" onClick={()=>setShow(!show)}>
            {show == true ? <RxCross1/> : <FaBars/>}
        </div>

        </Flex>
    </Container>
    </header>
  )
}

export default Header