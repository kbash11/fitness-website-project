import { Link } from 'react-router-dom'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import toast from 'react-hot-toast'
import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImCross } from "react-icons/im";
import SignInModal from './SignInModal'
import { AppContext } from '../context/AppContext'

const LoginModal = ({setOpenLogin,setOpenSignUp}) => {
    const {setIsLoggedIn,loginFormData,setLoginFormData,setSelected}=useContext(AppContext);

    const [showPassword,setShowPassword]=useState(false);
    function changeHandler(event){
        setLoginFormData((prevData)=>(
            {
                ...prevData,[event.target.name]: event.target.value
            }
        ))
    }
    const navigate=useNavigate();
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log(loginFormData);
        setOpenLogin(false);
        setSelected('dashboard');
        navigate("/dashboard");
    }
  return (
    <div
      id="loginContainer"
      onClick={(e) => e.target.id === 'loginContainer' ? setOpenLogin(false) : null}
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div className='w-full flex justify-center items-center '>
        
        <form onSubmit={submitHandler}
            className='relative flex flex-col gap-y-3 mt-6 w-9/12 sm:w-5/12 md:w-4/12 bg-blue-50 rounded p-5'>
                {/* close button */}
                <button onClick={()=>setOpenLogin(false)} className="absolute top-[8px] right-[8px]">
                    <ImCross size={12} opacity="60%" />
                </button>
                <h1 className='text-center uppercase mb-3 font-extrabold text-blue-800 text-xl sm:text-2xl md:text-3xl drop-shadow'>Welcome back</h1>
                
                <label className='w-full '>
                    <p className='text-[0.9rem] text-slate-900 mb-1 leading-[1.375rem] '>First Name<sup className='text-red-700' >*</sup></p>
                    <input required type="text" name="firstName" 
                    value={loginFormData.firstName} onChange={changeHandler} placeholder="Enter your first name"
                    className='bg-richblack-800 rounded-[0.5rem] text-slate-600 w-full p-[8px] text-[0.875rem] bg-slate-200'/>
                </label>

                <label className='w-full '>
                    <p className='text-[0.9rem] text-slate-900 mb-1 leading-[1.375rem] '>Last Name<sup className='text-red-700' >*</sup></p>
                    <input required type="text" name="lastName" 
                    value={loginFormData.lastName} onChange={changeHandler} placeholder="Enter your last name"
                    className='bg-richblack-800 rounded-[0.5rem] text-slate-600 w-full p-[8px] text-[0.875rem] bg-slate-200'/>
                </label>

                <label className='w-full '>
                    <p className='text-[0.9rem] text-slate-900 mb-1 leading-[1.375rem] '>Email Address<sup className='text-red-700' >*</sup></p>
                    <input required type="email" name="email" 
                    value={loginFormData.email} onChange={changeHandler} placeholder="Enter Email Id"
                    className='bg-richblack-800 rounded-[0.5rem] text-slate-600 w-full p-[8px] text-[0.875rem] bg-slate-200'/>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.9rem] text-slate-900 mb-1 leading-[1.375rem] '>Password<sup className='text-red-700' >*</sup></p>
                    <input required type={ showPassword ? ("text") : ("password") } name="password" 
                    value={loginFormData.password} onChange={changeHandler} placeholder="Enter your password" 
                    className='bg-richblack-800 rounded-[0.5rem] text-slate-600  w-full p-[8px] text-[0.875rem] bg-slate-200 appearance-none'/>
                    
                    <span className={`absolute right-3 top-[33px] cursor-pointer ${loginFormData.password ? 'visible' : 'invisible'}`}
                    onClick={()=>setShowPassword((prev)=>!prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                
                    <Link to='#'>
                        <p className='text-xs mt-1 text-slate-800 italic max-w-max ml-auto opacity-70'>
                            Forget Password
                        </p>
                    </Link>
                </label>

                <button className='w-full md:w-[80px] text-white bg-blue-600 hover:bg-blue-700 rounded-[8px] font-medium text-richblack-900 px-[10px] py-[8px]'>
                    Sign In
                </button>
                
                <div className='w-full h-[1px] mt-2 mb-1 bg-black opacity-25'></div>
                <p className='italic text-[0.9rem]'><span className='opacity-40'>Don't have an account? </span><span className='text-blue-600 hover:text-blue-700 cursor-pointer' 
                    onClick={()=>{setOpenLogin(false);
                    setOpenSignUp(true);
                    <SignInModal/>}}>Create one</span> 
                </p>
                
            </form>
        </div>
    </div>
  )
}

export default LoginModal
