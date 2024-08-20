import React, { useContext, useState,useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { apiData } from "../ContextApi";
import { useDispatch } from "react-redux"
import { addToCart } from '../slice/productSlice'

const Post = ({ allData,categorySearchFilter,multiList,filterPrice}) => {

  let [filterShow, setFilterShow] = useState([])
  let [cateShow, setCateShow] = useState(true)
  let dispatch = useDispatch()
  
  
  // let data = useContext(apiData);
  useEffect(()=>{
    let filterAmi = categorySearchFilter.slice(0,5)
    setFilterShow(filterAmi)
  },[categorySearchFilter])

  let handleShow = () =>{
    setFilterShow(categorySearchFilter)
    setCateShow(false)
  }
  
  let handleHide = ()=>{
    let filterAmi = categorySearchFilter.slice(0,5)
    setFilterShow(filterAmi)
    setCateShow(true)
  }
  let handleAddTocart = (item) => {
    dispatch(addToCart({ ...item, qun:1 }));

};
  
  return (
    <>
     {filterPrice.length > 0 ?
         <div className="">
         <div className="flex flex-wrap">
         {filterPrice.map((item) =>(
         <div className="lg:w-[32%] w-[48%] px-0 group mb-[30px]">
          
             <div className="">
               <div className="relative overflow-hidden">
               <Link to={`/product/${item.id}`}>
                 <img
                   className="w-full lg:h-[250px] h-[170px]"
                   src={item.thumbnail} alt="product_img"/>
                     </Link>
                 <h5 className="absolute top-[20px] left-[26px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm">
                   {item.discountPercentage}%
                 </h5>
                 <div className="w-full lg:h-[50%] bg-[#fff] absolute left-0 bottom-[-150px] lg:pt-[25px] pt-[10px] lg:pr-[30px] pr-[15px] flex flex-col lg:gap-y-2 gap-y-1 duration-500 ease-in-out group-hover:bottom-0">
                   <div className="flex items-center justify-end gap-x-3">
                     <h3 className="text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out">
                       Add to Wish List
                     </h3>
                     <FaHeart />
                   </div>
                   <div className="flex items-center justify-end gap-x-3">
                     <h3 className="text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out">
                       Compare
                     </h3>
                     <TfiReload />
                   </div>
                   <div className="flex items-center justify-end gap-x-3">
                     <h3 className="text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out">
                       Add to Cart
                     </h3>
                     <FaShoppingCart />
                   </div>
                 </div>
               </div>
   
               <div className="flex justify-between pt-[15px] relative z-20 items-center">
                 <h3 className="font-sans text-[#262626] lg:text-[18px] text-[16px] font-bold ">
                   {item.title}
                 </h3>
                 <h4 className="text-[#767676] font-sans lg:text-[20px] text-[16px] font-normal ">
                   ${item.price}
                 </h4>
               </div>
               <h5 className="text-[#767676] font-sans lg:text-[18px] text-[16px] font-normal pb-[10px]">
                 Available Stock: {item.stock}
               </h5>
             </div>
         
         </div>
       ))}
      </div>
      {cateShow ? categorySearchFilter.length > 5 &&
          <button onClick={handleShow}>Show All</button>
                     :
          <button onClick={handleHide}>Hide</button>
     }
      
   </div>
      :
     
     categorySearchFilter.length > 0 ? 
     
   <div className="">
      <div className="flex flex-wrap">
      { filterShow.map((item) =>(
      <div className="lg:w-[32%] w-[48%] px-0 group mb-[30px]">
       
          <div className="">
            <div className="relative overflow-hidden">
            <Link to={`/product/${item.id}`}>
              <img
                className="w-full lg:h-[250px] h-[170px]"
                src={item.thumbnail} alt="product_img"/>
                  </Link>
              <h5 className="absolute top-[20px] left-[26px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm">
                {item.discountPercentage}%
              </h5>
              <div className="w-full lg:h-[50%] bg-[#fff] absolute left-0 bottom-[-150px] lg:pt-[25px] pt-[10px] lg:pr-[30px] pr-[15px] flex flex-col lg:gap-y-2 gap-y-1 duration-500 ease-in-out group-hover:bottom-0">
                <div className="flex items-center justify-end gap-x-3">
                  <h3 className="text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out">
                    Add to Wish List
                  </h3>
                  <FaHeart />
                </div>
                <div className="flex items-center justify-end gap-x-3">
                  <h3 className="text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out">
                    Compare
                  </h3>
                  <TfiReload />
                </div>
                <div className="flex items-center justify-end gap-x-3">
                  <h3 className="text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out">
                    Add to Cart
                  </h3>
                  <FaShoppingCart />
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-[15px] relative z-20 items-center">
              <h3 className="font-sans text-[#262626] lg:text-[18px] text-[16px] font-bold ">
                {item.title}
              </h3>
              <h4 className="text-[#767676] font-sans lg:text-[20px] text-[16px] font-normal ">
                ${item.price}
              </h4>
            </div>
            <h5 className="text-[#767676] font-sans lg:text-[18px] text-[16px] font-normal pb-[10px]">
              Available Stock: {item.stock}
            </h5>
          </div>
      
      </div>
    ))}
   </div>
   {cateShow ? categorySearchFilter.length > 5 &&
       <button onClick={handleShow}>Show All</button>
                  :
       <button onClick={handleHide}>Hide</button>
  }
   
</div>
    :
    <div className={`${multiList == "activeList" ? "" : "flex flex-wrap justify-between"}`}>
     {    allData.map((item) => (
     
     <div className="lg:w-[32%] w-full py-3 group mb-[30px]">
     
        <div className="">
        
          <div className="relative overflow-hidden">
          <Link to={`/product/${item.id}`}>
            <img
              className="w-full lg:h-[250px] h-[170px]"
              src={item.thumbnail}
              alt="product_img"
            />
             </Link>
            <h5 className="absolute top-[20px] left-[26px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm">
              {item.discountPercentage}%
            </h5>
            <div className="w-full lg:h-[50%] bg-[#fff] absolute left-0 bottom-[-150px] lg:pt-[25px] pt-[10px] lg:pr-[30px] pr-[15px] flex flex-col lg:gap-y-2 gap-y-1 duration-500 ease-in-out group-hover:bottom-0">
              <div className="flex items-center justify-end gap-x-3">
                <h3 className="text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out">
                  Add to Wish List
                </h3>
                <FaHeart />
              </div>
              <div className="flex items-center justify-end gap-x-3">
                <h3 className="text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out">
                  Compare
                </h3>
                <TfiReload />
              </div>
              <div className="flex items-center justify-end gap-x-3">
                <h3 onClick={()=>handleAddTocart(singleData)} className="text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out">
                  Add to Cart
                </h3>
                <FaShoppingCart />
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-[15px] relative z-20 items-center">
            <h3 className="font-sans text-[#262626] lg:text-[18px] text-[16px] font-bold ">
              {item.title}
            </h3>
            <h4 className="text-[#767676] font-sans lg:text-[20px] text-[16px] font-normal ">
              ${item.price}
            </h4>
          </div>
          <h5 className="text-[#767676] font-sans lg:text-[18px] text-[16px] font-normal pb-[10px]">
            Available Stock: {item.stock}
          </h5>
        </div>
     
    </div>
   
  ))
  }
    </div>
    }
    
     
    </>
  );
};

export default Post;
