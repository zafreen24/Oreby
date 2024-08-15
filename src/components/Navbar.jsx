import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaCartPlus } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState, useContext, useRef, useEffect } from "react";
import CartImg from "../assets/cartimg.png";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { apiData } from "./ContextApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const info = useContext(apiData);
  const data = useSelector((state) => state.product.cartItem);
  const [cartShow, setCartShow] = useState(false);
  const [usercartShow, setUsercartShow] = useState(false);
  const [userShow, setuserShow] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const cartref = useRef();
  const userref = useRef();
  const userAccref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartref.current.contains(e.target)) {
        setCartShow(!cartShow);
      } else {
        setCartShow(false);
      }
      if (userref.current.contains(e.target)) {
        setUsercartShow(!usercartShow);
      } else {
        setUsercartShow(false);
      }
      if (userAccref.current.contains(e.target)) {
        setuserShow(!userShow);
      } else {
        setuserShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [cartShow, usercartShow, userShow]);

  const handleInput = (e) => {
    setSearchInput(e.target.value);

    if (e.target.value === "") {
      setSearchFilter([]);
      setSelectedIndex(-1);
    } else {
      const searchResults = info.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchFilter(searchResults);
      setSelectedIndex(0);
    }
  };

  const handleSingleSearch = (id) => {
    navigate(`/product/${id}`);
    setSearchFilter([]);
    setSearchInput("");
    setSelectedIndex(-1);
  };

  const handleKey = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < searchFilter.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      handleSingleSearch(searchFilter[selectedIndex].id);
    }
  };

  return (
    <nav className="bg-[#f5f5f3] py-4">
      <Container>
        <Flex className="items-center">
          <div className="w-[30%] relative">
            <div ref={cartref} className="flex items-center gap-x-3">
              <HiBars3BottomLeft />
              <p className="font-sans hidden lg:block text-[16px] text-[#767676] hover:text-[#262626]">
                Shop by Category
              </p>
            </div>
            {cartShow && (
              <div className="absolute z-50 top-[52px] left-0 bg-[#262626] w-[300px]">
                <ul className="py-4">
                  <li className="text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out">
                    Accesories
                  </li>
                  <li className="text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out">
                    Furniture
                  </li>
                  <li className="text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out">
                    Electronics
                  </li>
                  <li className="text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out">
                    Clothes
                  </li>
                  <li className="text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out">
                    Bags
                  </li>
                  <li className="text-[#ffffffaf] font-sans text-[16px] py-2 pl-3 hover:pl-6 duration-300 ease-in-out">
                    Home appliances
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-[40%]">
            <div className="relative">
              <input
                value={searchInput}
                onKeyDown={handleKey}
                onChange={handleInput}
                placeholder="search products.."
                type="search"
                className="w-full h-[50px] border-2 border-[#fff] outline-none px-2"
              />
              <div className="absolute top-[50%] right-4 translate-y-[-50%]">
                <FaSearch />
              </div>
              {searchFilter.length > 0 && 
                <div className="w-[500px] h-[400px] overflow-y-scroll absolute z-50 bg-[#F5F5F3] top-[49px] left-0">
                  {searchFilter.map((item, index) => (
                    <div
                      key={item.id}
                      className={`py-3 ${
                        index === selectedIndex ? "bg-gray-200" : ""
                      }`}
                      onClick={() => handleSingleSearch(item.id)}
                    >
                      <div className="flex justify-around items-center bg-[#F5F5F3] h-[120px]">
                        <div className="">
                          <img
                            className="w-[100px] h-[100px]"
                            src={item.thumbnail}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h3 className="font-bold font-sans text-[14px]">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>
          </div>
          <div className="w-[30%] relative">
            <div className="flex items-center justify-end gap-x-2">
              <div className="flex" ref={userAccref}>
                <FaUser />
                <RiArrowDownSFill />
              </div>
              <div ref={userref} className="">
                <div className="relative">
                  <FaCartPlus />
                  {data.length > 0 ? (
                    <div
                      className="absolute h-[20px] w-[20px]
               bg-[#8888fe] left-[20px] top-[-15px] rounded-full text-center text-[white]"
                    >
                      {data.length}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {userShow && (
              <div className="absolute z-50 top-[30px] right-0 w-[300px] bg-[#262626] py-3 px-6">
                <ul className="font-sans text-[16px] font-normal text-[#ffffffb2]">
                  <li className="py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]">
                    My Account
                  </li>
                  <li className="py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]">
                  <Link to="/login">Log in</Link>
                  </li>
                  <li className="py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]">
                    <Link to="/signup">Signup</Link>
                  </li>
                </ul>
              </div>
            )}
            {usercartShow && (
              <div className="w-[300px] absolute z-50 bg-[#F5F5F3] top-[49px] right-0">
                {data.map((item)=>(
                   <div className="py-3 ">
                   <div className="flex justify-around items-center bg-[#F5F5F3] h-[120px]">
                     <div className="">
                       <img className="w-[100px] h-[]100px" src={item.thumbnail} alt="" />
                     </div>
                     <div className="">
                       <h3 className="font-bold font-sans text-[14px]">
                        {item.title}
                       </h3>
                       <h5 className="font-bold font-sans text-[14px]">
                         {item.price}
                       </h5>
                     </div>
                     <div className="">
                       <RxCross1 />
                     </div>
                   </div>
                   <div className="bg-[#fff]">
                     <h3 className="pl-4 py-3 font-regular font-sans text-[16px] text-[#767676]">
                       Subtotal:
                       <span className="leading-[23px] font-bold font-sans text-[16px] text-[#262626] ">
                         $44.00
                       </span>
                     </h3>
                     <div className="flex justify-around">
                       <div className="">
                         <Link to="/cart"
                           className="w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px]"
                           
                         >
                           View Cart
                         </Link>
                       </div>
                       <div className="">
                         <a
                           className="w-[148px] h-[50px] border-2 border-[#262626] bg-black text-[#ffffffcd] inline-block text-center leading-[50px]"
                           href="#"
                         >
                           Checkout
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
                ))}
               
              </div>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
