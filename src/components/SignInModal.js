import React, { useState,useContext } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import signInImage from '../assets/signin.jpg';
import { AppContext } from '../context/AppContext';

const SignInModal = ({ setOpenSignUp, setIsLoggedIn }) => {
  const {loginFormData, setLoginFormData,setSelected} = useContext(AppContext);

  const [showCreatedPassword, setShowCreatedPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    if (loginFormData.createPassword !== loginFormData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    setIsLoggedIn(true);
    toast.success('Account Created');
    setOpenSignUp(false);
    console.log(loginFormData);
    setSelected('dashboard')
    navigate('/dashboard');
  }

  function changeHandler(event) {
    setLoginFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <div
      id="signinContainer"
      onClick={(e) => e.target.id === 'signinContainer' ? setOpenSignUp(false) : null}
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div className=" flex w-8/12 md:w-7/12 bg-white rounded overflow-hidden">
        <div className="hidden md:block w-6/12">
          <img src={signInImage} loading='lazy' alt="Sign In" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full md:w-6/12 p-6 bg-blue-50" >
          
          {/* close icon */}
          <button onClick={() => setOpenSignUp(false)} className="absolute top-[8px] right-[8px]">
            <ImCross className='text-[10px]' opacity="80%" color='black' />
          </button>
          <h1 className='text-center uppercase mb-3 font-extrabold text-blue-800 text-lg lg:text-2xl drop-shadow'>Create new Account</h1>
          <form onSubmit={submitHandler} className="space-y-4" id='signupForm'>
            <div className="flex flex-col space-y-1 md:space-y-2">
              <label className="flex flex-col">
                <span className='text-[0.9rem]'>First Name<sup className='text-red-700' >*</sup></span>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={loginFormData.firstName}
                  onChange={changeHandler}
                  placeholder="enter your first name"
                  className="border rounded p-1 text-[0.8rem] bg-slate-200"
                />
              </label>
              <label className="flex flex-col">
                <span className='text-[0.9rem]'>Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  value={loginFormData.lastName}
                  onChange={changeHandler}
                  placeholder="enter your last name"
                  className="border rounded p-1 text-[0.8rem] bg-slate-200"
                />
              </label>
              <label className="flex flex-col">
                <span className='text-[0.9rem]'>Email<sup className='text-red-700' >*</sup></span>
                <input
                  required
                  type="email"
                  name="email"
                  value={loginFormData.email}
                  onChange={changeHandler}
                  placeholder="enter your email"
                  className="border rounded p-1 text-[0.8rem] bg-slate-200"
                />
              </label>
              <label className="flex flex-col relative">
                <span className='text-[0.9rem]'>Create Password<sup className='text-red-700' >*</sup></span>
                <input
                  required
                  type={showCreatedPassword ? 'text' : 'password'}
                  name="createPassword"
                  value={loginFormData.createPassword}
                  onChange={changeHandler}
                  placeholder="create password"
                  className="border rounded p-1 text-[0.8rem] bg-slate-200"
                />
                <span
                  className="absolute right-3 top-7 md:top-9 cursor-pointer"
                  onClick={() => setShowCreatedPassword((prev) => !prev)}
                >
                  {showCreatedPassword ? <AiOutlineEyeInvisible fill="#AFB2BF" /> : <AiOutlineEye fill="#AFB2BF" />}
                </span>
              </label>
              <label className="flex flex-col relative">
                <span className='text-[0.9rem]'>Confirm Password<sup className='text-red-700' >*</sup></span>
                <input
                  required
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={loginFormData.confirmPassword}
                  onChange={changeHandler}
                  placeholder="confirm password"
                  className="border rounded p-1 text-[0.8rem] bg-slate-200"
                />
                <span
                  className="absolute right-3 top-7 md:top-9 cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <AiOutlineEyeInvisible fill="#AFB2BF" /> : <AiOutlineEye fill="#AFB2BF" />}
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full md:w-[150px] text-md text-white mt-6 bg-blue-600 hover:bg-blue-700 rounded-[8px] font-medium text-richblack-900 px-[10px] py-[8px]"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
