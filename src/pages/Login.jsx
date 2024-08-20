import React, { useState } from 'react'
import Container from '../components/Container'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider  } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';


 

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passShow, setPassShow] = useState(false);
  let navigate = useNavigate();

  let [emailErr, setEmialErr] = useState("");
  let [passErr, setPassErr] = useState("");
  let [success, setSuccess] = useState("");

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmialErr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassErr("");
  };

  let handleSubmit = (e) => {
    if(!email){
      setEmialErr("Email Field is Required");
    };
    if(!password){
      setPassErr("Password Field is Required");
    };

    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => { 
      toast.success("Successfully Login");
      setTimeout(() => {
      navigate("/myaccount");
      }, 2000);
    })
    .catch((error) => {
      if(error.code.includes("auth/user-not-found")){

      }else{
        setEmialErr("Valid Email is required");
      };

      if(error.code.includes("auth/wrong-password")){

      }else{
        setPassErr("Valid password is required");
      };
    });
    
  };

  





  return (
    <>

<ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />

      <section>
        <Container>
          <div className=" pt-[5px]">
            <div className="">
              <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>Login</h3>
              <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'> <Link to="/">Home</Link> <IoIosArrowForward /> <Link to="/login">Login</Link> </p>
            </div>
          </div>

          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-0 md:h-screen lg:py-0">

              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                    {success ? (
                            <p className="bg-[green] w-96 text-[#fff] py-1 mt-1">{success}</p>) : ("")}
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        onChange={handleEmail}
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                        {emailErr ? (<p className="w-[100%] text-[red] text-[15px] py-1 mt-1 font-bold tracking-wider justify-center">{emailErr}</p>) : ("") }

                    </div>
                    <div className='relative'>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <div className="relative ">
                      <input
                        onChange={handlePassword}
                        type={passShow == true ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                          {passErr ? (<p className="w-[100%] text-[red] text-[15px] py-1 mt-1 font-bold tracking-wider justify-center">{passErr}                          </p>) : ("") }

                      <div 
                        onClick={ ()=> setPassShow(!passShow)}
                        className=" absolute top-[50%] translate-y-[-50%] right-[3%] cursor-pointer text-[20px]">
                        
                        {passShow == true ? <FaEye/> : <FaEyeSlash/> }
                      </div>
                      </div>

                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                    onClick={handleSubmit}
                      type="submit"
                      className="w-full text-white bg-[#767676] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign in
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Sign up
                      </Link>

                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

        </Container>
      </section>
    </>
  )
}

export default Login