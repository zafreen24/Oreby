import React from 'react'
import Clocks from "../assets/clock1.png"
import Container from "./Container"

const Clock = () => {
  return (
   <Container>
        <div className="mt-[55px]">
    <img src={Clocks} alt="" />
   </div>
   </Container>
  )
}

export default Clock