import React from 'react'
import { FaPlus } from "react-icons/fa6";
import {useState} from "react"
import { RxCross2 } from "react-icons/rx";


const Faccordian = () => {

     let [show, setShow] = useState(false)
    
  return (
    
<>
<div className="w-[50%]">
    <div onClick={()=> setShow(!show)} className="flex items-center justify-between">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.perspiciatis distinctio 
        beatae deserunt!</p>
     {show == true ? <RxCross2/> :  <FaPlus/> }   

   
    </div>
    {show &&
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis illo mollitia eius 
        necessitatibus eligendi, consectetur maxime, explicabo fuga nobis sint voluptatem 
        ut minima quae tempora totam, laboriosam
         assumenda autem.</p>
    }
</div>

</>

  )
}

export default Faccordian