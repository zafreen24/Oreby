import { getAuth, createUserWithEmailAndPassword, updateProfile,sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import React, { useState } from 'react';
import Container from '../components/Container';
import { Link, useNavigate} from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';



const Signup = () => {
    const auth = getAuth();
    const db = getDatabase();
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [conPass, setConPass] = useState("");

    let [firstNameErr, setFirstNameErr] = useState("");
    let [lastNameErr, setLastNameErr] = useState("");
    let [emailErr, setEmialErr] = useState("");
    let [passErr, setPassErr] = useState("");
    let [conPassErr, setConPassErr] = useState("");
    let [success, setSuccess] = useState("");

    let [validEmailErr, setValidEmailErr] = useState("") 
    let [validPassErr, setValidPassErr] = useState("")



    let [pshow, setPshow] = useState(false);
    let [conpshow, setconPshow] = useState(false);
    let navigate = useNavigate();
0
    let handleFirstName = (e) => {
        setFirstName(e.target.value); 
        setFirstNameErr("");
    };

    let handleLastName = (e) => {
        setLastName(e.target.value);
        setLastNameErr("");
    };
    
    let handleEmail = (e) => {
        setEmail(e.target.value);
        setEmialErr("");
    };

    let handlePassword = (e) => {
        setPassword(e.target.value);
        setPassErr("");
    };

    let handleConPass = (e) => {
        setConPass(e.target.value);
        setConPassErr("");
    };



    let handleSubmit = (e) => {

        if(!firstName){
            setFirstNameErr("First Name Field is Required");
        };
        if(!lastName){
            setLastNameErr("Last Name Field is Required");
        };
        if(!email){
            setEmialErr("Email Field is Required");
        }
        if(!validEmail.test(email)){
            setValidEmailErr("Your email is invalid");
        }
        if(!password){
            setPassErr("Password Field is Required");
        };
        if (!validPassword.test(password)){
            setValidPassErr("Your password is invalid");
        }
        if(!conPass){
            setConPassErr("Confirm Password Field is Required")
        };


        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {})
        .then(()=>{
            updateProfile(auth.currentUser, {
                displayName: firstName,
                displayName: lastName,
              })
        })
        .then(()=>{
            toast.success("Successfully Submitted verified Your Email");
            sendEmailVerification(auth.currentUser);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConPass("");
            setTimeout(() => {
            navigate("/login");
            }, 2000);
        }).then(()=>{
            set(ref(db, 'users/'), {
                firstName: firstName,
                lastName : lastName,
                email: email,
            });
        })
        .catch((error) => {
            if(error.code.includes("auth/email-already-in-use")){
                setEmialErr("Email alreday in use")
            }
            const errorMessage = error.message;
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
                <Container className='px-5 lg:px-0 font-dmsans'>
                    <div className=" pt-[5px]">
                        <div className="">
                            <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>Sign up</h3>
                            <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'>
                                 <Link to="/">Home</Link> <IoIosArrowForward /> 
                                 <Link to="/signup">Sign up</Link> 
                            </p>
                        </div>
                    </div>


                    <div className="lg:w-[45%] w-full mt-[50px]">
                        <p className='font-dmsans text-[18px] font-normal text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        {success ? (
                            <p className="bg-[green] w-96 text-[#fff] py-1 mt-1">{success}</p>) : ("")}
                    </div>


                
                <form>
                <div className="mt-[50px] py-[50px] border-y-[1px]  border-[#F0F0F0]">
                            <div>
                                <div className="">
                                <h3 className='font-dmsans text-[39px] font-bold text-[#262626]'>Your Personal Details</h3>
                                </div>
                                <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 
                                        className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>First Name</h3>

                                        <input 
                                        onChange={handleFirstName} 
                                        type="text" 
                                        placeholder="First Name" 
                                        value={firstName}
                                        className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px] z-10' />

                                        
                                            {firstNameErr ? (<p className=" w-[100%] text-[red] text-[15px] py-1 mt-1 font-bold tracking-wider justify-center">
                                                {firstNameErr}
                                            </p>) : ("") }
                                        

                                    </div>
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 
                                        className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Last Name</h3>

                                        <input 
                                        value={lastName}
                                        onChange={handleLastName}
                                        type="text"  
                                        placeholder='Last Name' 
                                        className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                        {lastNameErr ? (<p className="w-[100%] text-[red] text-[15px] py-1 mt-1 font-bold tracking-wider justify-center">{lastNameErr}</p>) : ("") }
                                    </div>

                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 
                                        className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'
                                        value={email} >Email address</h3>

                                        <input 
                                        onChange={handleEmail} 
                                        type="email" 
                                        required 
                                        placeholder='company@domain.com' 
                                        className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                        { emailErr ? (<p className="w-[100%] text-[red] text-[15px] py-1 mt-1 font-bold tracking-wider justify-center">{emailErr}</p>) : ("") }
                                        
                                        { validEmailErr ? (<p className="w-[100%] text-[red] text-[15px] py-1 mt-1 font-bold tracking-wider justify-center">{validEmailErr}</p>) : ("") }
                                        
                                        
                                    </div>

                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 
                                        className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Telephone</h3>

                                        <input 
                                        type="tel" 
                                        placeholder='Your phone number' 
                                        className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="mt-[50px] pb-[50px] border-b-[1px]  border-[#F0F0F0]">
                            <div>
                                <h3 className='font-dmsans text-[39px] font-bold text-[#262626]'>New Customer</h3>
                                <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 
                                        className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Address 1</h3>

                                        <input 
                                        type="text"  
                                        placeholder='4279 Zboncak Port Suite 6212' 
                                        className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                                    </div>

                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 
                                        className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Address 2</h3>

                                        <input 
                                        type="text"  
                                        placeholder='---' 
                                        className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                                    </div>

                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 
                                        className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>City</h3>

                                        <input 
                                        type="text"  
                                        placeholder='Your city' 
                                        className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                                    </div>

                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 
                                        className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Post Code</h3>

                                        <input 
                                        type="text" 
                                        placeholder='05228' 
                                        className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                                    </div>

                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 
                                        className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Division</h3>

                                        <input 
                                        type="text" 
                                        placeholder='Please select' 
                                        className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                                    </div>

                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                                        <h3 
                                        className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>District</h3>

                                        <input 
                                        type="text" 
                                        placeholder='Please select' 
                                        className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[50px] pb-[50px] border-b-[1px]  border-[#F0F0F0]">
                            <div>
                                <div className="">
                                <h3 className='font-dmsans text-[39px] font-bold text-[#262626]'>Your Password</h3>
                                </div>
                                <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5 relative">
                                        <div className="">
                                            <h3 className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]'>Password</h3>

                                            <input 
                                            onChange={handlePassword} 
                                            value={password}
                                            type={pshow ? "text" : "password"} 
                                            required 
                                            placeholder='Password' 
                                            className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                            {passErr ? (<p className="w-[100%] text-[red] text-[15px] py-1 mt-1 font-bold tracking-wider justify-center">{passErr}</p>) : ("") }
                                            {validPassErr ? (<p className="w-[100%] text-[red] text-[15px] py-1 mt-1 font-bold tracking-wider justify-center">{validPassErr}</p>) : ("") }
                                        </div>

                                        <div 
                                        onClick={()=>setPshow(!pshow)} 
                                        className=" absolute top-[50%] translate-y-[-50%] right-[25px] cursor-pointer text-[20px]">
                                        {pshow == true ? <FaEye/>: <FaEyeSlash/>}                                           
                                        </div>
                                    </div>

                                    <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5 relative">
                                        <h3 
                                        className='font-dmsans text-[16px] leading-[23px] font-bold text-[#262626]' placeholder='First Name'>Repeat Password</h3>

                                        <input 
                                        value={conPass}
                                        onChange={handleConPass}
                                        type={conpshow == true ? "text" : "password"}  
                                        placeholder='Password' 
                                        className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />

                                        {conPassErr ? (<p className="w-[100%] text-[red] text-[15px] py-1 mt-1 font-bold tracking-wider justify-center">{conPassErr}</p>) : ("") }

                                    <div 
                                        onClick={()=>setconPshow(!conpshow)} 
                                        className=" absolute top-[50%] translate-y-[-50%] right-[25px] cursor-pointer text-[20px]">
                                        {conpshow == true ? <FaEye/>: <FaEyeSlash/>}                                           
                                    </div>

                                    </div>

                                    
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className=" flex mt-[40px]">                               
                                <input type="checkbox" /> 
                                <p className='font-dmsans text-[14px] font-normal text-[#767676] ms-3'>
                                    I have read and agree to the Privacy Policy</p>
                            </div>

                            <div className="flex items-center mt-5 ">
                                <h3 className='font-dmsans text-[14px] font-normal text-[#767676]'>Subscribe Newsletter</h3>

                                <input 
                                type="radio" 
                                name='yes' 
                                className='ms-6' />
                                <h3 className='font-dmsans text-[14px] font-normal text-[#767676] ms-2'>Yes</h3>

                                <input 
                                type="radio" 
                                name='yes' 
                                className='ms-4' />
                                <h3 className='font-dmsans text-[14px] font-normal text-[#767676] ms-2'>No</h3>
                            </div>

                            <div className="mt-5">
                                <button 
                                type='submit' 
                                onClick={handleSubmit} 
                                className='font-dmsans text-[14px] font-bold text-white py-[16px] px-[77px] bg-[#262626]'>Sign up</button>
                            </div>
                           
                        </div>
                </form>


                </Container>
        </>
    )
}

export default Signup