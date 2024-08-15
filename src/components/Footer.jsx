import React from 'react'
import Logo from '../assets/Logo.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-[#f5f5f3] mt-16'>
        <div className="container mx-auto px-[20px]">
           <div className="main py-[55px] flex justify-between">
            <div className="w-[100%]">
                <div className="flex justify-between ul_box">
                    <ul className='w-[33.3333333%]'>
                        <li className='font-sans text-[16px] font-bold leading-[23px] pb-[10px]'>MENU</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Home</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Shop</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>About</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Contact</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Journal</li>
                    </ul>
                    <ul className='w-[33.3333333%]'>
                        <li className='font-sans text-[16px] font-bold leading-[23px] pb-[10px]'>SHOP</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Category 1</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Category 2</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Category 3</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Category 4</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Category 5</li>
                    </ul>
                    <ul className='w-[33.3333333%]'>
                        <li className='font-sans text-[16px] font-bold leading-[23px] pb-[10px]'>HELP</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Privacy Policy</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Terms & Conditions</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Special E-shop</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Shipping</li>
                        <li className='font-sans text-[16px] font-[400] py-[3px] text-[#6d6d6d] leading-[23px]'>Secure Payments</li>
                    </ul>
                </div>
            </div>
            <div className="w-[100%] flex justify-between">
                <ul className='w-[100%] pt-[0px]'>
                    <li className='text-[16px] text-[#262626] font-[700] font-sans'>+880 1866211634</li>
                    <li className='text-[16px] text-[#262626] font-[700] font-sans'>zafreenmysa24@gmail.com</li>
                    <li className='text-[16px] text-[#262626] font-[400] leading-[23px]'>575 Crescent Ave. Quakertown, PA 18951</li>
                </ul>
                <div className="mt-[30px] w-[100%] ">
                    <img src={Logo} alt="" />
                </div>
            </div>
           </div>
           <div className="pt-[65px] pb-[30px] flex justify-between flex-wrap">
            <div className="flex gap-x-[10px]">
                <FaFacebookF/>
                <FaLinkedinIn/>
                <FaInstagram/>
            </div>
            <span className='font-sans text-center text-[14px] py-[3px] font-[400] text-[#6d6d6d] leading-[23px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</span>
           </div>
        </div>
    </section>
  )
}

export default Footer