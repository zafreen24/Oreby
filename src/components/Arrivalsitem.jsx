import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import Item1 from "../assets/Pic1.png";

const Arrivalsitem = ({ item }) => {

  return (
    <div className="lg:w-[94%] py-5">
      <div className="relative overflow-hidden group">
        <img src={item.thumbnail}className='h-[300px]' alt="" />
        <div className="bg-white  absolute left-0 h-[120px] bottom-[-120px] w-full duration-700 ease-in-out group-hover:bottom-[0px] flex items-center justify-end">
          <ul className="pr-5">
            <li className="flex items-center hover:text-[#767676] duration-300 justify-end gap-x-4">
              Add to Wish List
              <FaHeart />
            </li>
            <li className="flex items-center hover:text-[#767676] duration-300 justify-end py-2 gap-x-4">
              Compare
              <IoReload />
            </li>
            <li className="flex items-center hover:text-[#767676] duration-300 justify-end gap-x-4">
              Add to Cart
              <FaCartArrowDown />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between py-3">
        <h3 className="font-sans text-[20px] font-bold text-[#222]">{item.title}</h3>
        <p className="font-sans text-[18px]  text-[#767676] ">${item.price}</p>
      </div>
    </div>
  );
};

export default Arrivalsitem;
