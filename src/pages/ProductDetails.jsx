import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState, elm , inf} from "react"
import Container from "../components/Container"
import Flex from "../components/Flex"
import Basket from "../assets/basket.png"
import Sunglass2 from "../assets/sunglass2.png"
import Headphn2 from "../assets/headphn2.png"
import Table2 from "../assets/table2.png"
import { FaStar } from "react-icons/fa6";
import Faccordian from '../components/Faccordian'
import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../components/slice/productSlice'


const ProductDetails = () => {
    
    let [singleData, setSingleData] = useState([])
    let productId = useParams()
    let dispatch = useDispatch();
    
   
    let getData = () =>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setSingleData(response.data);
        })
    }

  useEffect(()=>{
     getData()
},[])

let clientRating = Array.from({length:5},(elm, index)=>{
    let ratingNumber = index + 0.5
    
    return(
        singleData.rating >= index + 1 ? <FaStar className='text-[#FFD881]'/> : singleData.rating > ratingNumber ? < FaStarHalfAlt className='text-[#FFD881]'/> : <FaRegStar className='text-[#FFD881]'/>
    );
});


let handleAddTocart = (item) => {
    dispatch(addToCart({ ...item, qun:1 }));

};

  return (
       <div className="">
        <Container>
            <Flex className='flex-wrap justify-between'>
                {singleData?.images?.map((item)=>(
                       <div className="w-[48%] my-4">
                       <img src={item} alt="" />
                      </div>
                ))}
            
               
            </Flex>
            <div className="pt-6">
                <h3 className='font-sans text-[45px] font-bold text-[#262626]'>Product</h3>
                <div className="flex items-center pt-4">
                {clientRating}
                    <div className="pl-3">
                        <span>1 Review</span>
                    </div>
                </div>
                <div className="flex items-center pt-8">
                <h3 className='font-sans text-[20px] text-[#767676]'>${singleData.price}</h3>
                <h4 className='font-sans text-[20px] font-bold text-[#262626] pl-3'>$44.00</h4>
                </div>
                {/* <div className="flex items-center">
                    <div className="mr-2">
                        <h3 className='font-sans text-[20px] font-bold text-[#262626]'>QUANTITY :</h3>
                    </div>
                    <div className="flex w-[150px] h-[50px] border-2 border-[#262626] justify-around items-center">
                        <div className="font-sans text-[20px] text-[#767676]">-</div>
                        <div className="font-sans text-[20px] text-[#767676]">0</div>
                        <div className="font-sans text-[20px] text-[#767676]">+</div>
                    </div>
                </div>
                <div className="flex items-center my-6 border-b-[1px] border-[#262626] gap-x-6">
                    <h3 className='font-sans text-[20px] font-bold text-[#262626]'>STATUS:</h3>
                    <h4  className='font-sans text-[20px] text-[#767676]'>In stock</h4>
                </div> */}
                <div className="my-5">
                    <a className='py-[16px] px-[45px] border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-[#fff] cursor-pointer duration-300 ease-in-out'>Add to Wish List</a>
                    <Link to="/cart" onClick={()=>handleAddTocart(singleData)}>
                    <a className='py-[16px] px-[45px] border-2 border-[#262626] inline-block ms-4  hover:bg-[#262626] hover:text-[#fff] cursor-pointer duration-300 ease-in-out'>Add to Cart</a>
                    </Link>
                </div>
          <Faccordian/>


                
            </div>
        </Container>
       </div>
  )
}

export default ProductDetails