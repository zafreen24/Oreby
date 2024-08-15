import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Sunglass3 from "../assets/sunglass3.png";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {
  productIncrement,
  productDecrement,
  removeProduct,
} from "../components/slice/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { handleCheckOut } from "react";

const Cart = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let data = useSelector((state) => state.product.cartItem);

  let handleIncrement = (index) => {
    dispatch(productIncrement(index));
  };
  let handleDecrement = (index) => {
    dispatch(productDecrement(index));
  };
  let handleRemove = (index) => {
    dispatch(removeProduct(index));
  };

  const { totalPrice, totalquantity } = data.reduce(
    (acc, item) => {
      acc.totalPrice += item.price * item.qun;
      acc.totalquantity += item.qun;
      return acc;
    },
    { totalPrice: 0, totalquantity: 0 }
  );

  let handleCheckOut = () => {
    toast("Heads up, toasts will stack automatically!");
    setTimeout(() => {
      navigate("/checkout");
    }, 3000);
  };

  return (
    <div className="my-20">
      <Container>
        <h2 className="font-sans text-[45px] font-bold text-[#262626]">Cart</h2>
        <p className="font-sans text-[18px] text-[#767676]">Home &#62; Cart</p>
        <Flex className="justify-between bg-[#F5F5F3] h-[60px] items-center">
          <div className="w-[40%]">
            <h3 className="text-center font-sans text-[20px] font-bold text-[#262626]">
              Product
            </h3>
          </div>
          <div className="w-[15%]">
            <h3 className="text-center font-sans text-[20px] font-bold text-[#262626]">
              Price
            </h3>
          </div>
          <div className="w-[30%]">
            <h3 className="text-center font-sans text-[20px] font-bold text-[#262626]">
              Quantity
            </h3>
          </div>
          <div className="w-[15%]">
            <h3 className="text-center font-sans text-[20px] font-bold text-[#262626]">
              Total
            </h3>
          </div>
        </Flex>
        {data.map((item, index) => (
          <Flex className="items-center my-14">
            <div className="w-[40%]">
              <div className="flex items-center justify-around">
                <div className="" onClick={() => handleRemove(index)}>
                  <RxCross2 />
                </div>
                <div className="">
                  <img
                    className="w-[100px] h-[100px]"
                    src={item.thumbnail}
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="font-sans text-[16px] font-normal text-[#262626]">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-[15%]">
              <h4 className="text-center">${item.price}</h4>
            </div>
            <div className="w-[30%] ">
              <div className="flex w-[150px] h-[50px]  justify-around items-center mx-auto">
                <div
                  onClick={() => handleDecrement(index)}
                  className="font-sans text-[20px] text-[#767676]"
                >
                  -
                </div>
                <div className="font-sans text-[20px] text-[#767676]">
                  {item.qun}
                </div>
                <div
                  onClick={() => handleIncrement(index)}
                  className="font-sans text-[20px] text-[#767676]"
                >
                  +
                </div>
              </div>
            </div>
            <div className="w-[15%]">
              <h4 className="text-center">${item.price * item.qun}</h4>
            </div>
          </Flex>
        ))}

        <div className="flex justify-end">
          <div className="">
            <h2 className="font-sans text-[27px] font-bold text-[#262626] text-end">
              Cart totals
            </h2>
            <div className="flex w-[400px] border-2 border-[#F0F0F0] justify-around">
              <div className="">
                <h3 className="text-[#262626]">Subtotal</h3>
              </div>
              <div className="">
                <h3 className="text-[#767676]">{totalPrice} $</h3>
              </div>
            </div>
            <div className="flex my-3 w-[400px] border-2 border-[#F0F0F0] justify-around">
              <div className="">
                <h3 className="text-[#262626]">Quantity</h3>
              </div>
              <div className="">
                <h3>{totalquantity}</h3>
              </div>
            </div>
            <div className="flex my-3 w-[400px] border-2 border-[#F0F0F0] justify-around">
              <div className="">
                <h3 className="text-[#262626]">Total</h3>
              </div>
              <div className="">
                <h3 className="text-[#262626]">{totalPrice} $</h3>
              </div>
            </div>
            <div className="mt-2" onClick={handleCheckOut}>
              <p
                className="w-[220px] h-[50px] border-2 border-[#F0F0F0] bg-black text-[#ffffffcd]
              text-center leading-[50px]"
              >
                Proceed to Checkout
              </p>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Container>
    </div>
  );
};

export default Cart;
