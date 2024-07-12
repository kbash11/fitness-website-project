import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/gym-1048852_640.png";
import { toast } from 'react-hot-toast';
import LoginModal from './LoginModal';
import SignInModal from './SignInModal';
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useContext } from 'react';
import {AppContext} from '../context/AppContext';


const Navbar = () => {

  const {isLoggedIn,setIsLoggedIn,setLoginFormData,selected,setSelected}=useContext(AppContext);

  const [openLogin,setOpenLogin]=useState(false);
  const [openSignUp,setOpenSignUp]=useState(false);
  const [openMenu,setOpenMenu]=useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropDown,setDropDown]=useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (openLogin || openSignUp) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
     
    return () => {              // Cleanup function is used so that if both are false then body functions normally
      body.style.overflow = 'auto';
    };
  }, [openLogin, openSignUp]);

  // THIS IS USED SO THAT WHEN WIDTH IS GREATER THAN md, HAMBURG MENU is CLOSED
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenMenu(false);
      }
      if(window.innerWidth>=640){
        setDropDown(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setOpenMenu,setDropDown]);

  

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      createPassword: "",
      confirmPassword: ""
    });
    toast.error("Logged out");
  };

  return (
    <div className={`fixed h-[45px] sm:h-[60px] top-0 w-full z-20 ${scrolled ? 'bg-slate-900 shadow-lg shadow-slate-800' : 'bg-transparent'} transition-colors duration-300`}>
      <div className='flex max-w-[1200px] justify-around  items-center sm:mt-3 mx-3'>
        {/* LOGO */}
        <NavLink onClick={()=>setSelected('home')} to="/">
          <div className='fixed top-0 left-[10px] flex justify-center items-center'>
            <img src={logo} alt='logo' className='w-[50px] sm:w-[60px]' loading='lazy' />
            <span className='self-align font-bold noto-serif-logo text-2xl sm:text-3xl   text-white'>Fitify</span>
          </div>
        </NavLink>

        
      {/* MOBILE-MENU */}
        <div className='flex'>
          <button className='md:hidden fixed right-[10px] top-[10px]' 
          onClick={()=>{
            setOpenMenu(true);
            setDropDown(false);
            setSelected(true);
          }}>
              <IoReorderThree color='white' className='text-[30px]'/>
          </button>

          {/* services button for mobile view */}
          {
            isLoggedIn && 
            <div onClick={()=> {
              setDropDown(!dropDown);
              setOpenMenu(false);
              setSelected('sercice-icon')
              } }
              className='flex fixed right-[50px] top-[10px] md:hidden justify-center items-center roboto-bold hover:cursor-pointer'>
              <div className={` ${dropDown ? 'text-blue-500 underline' : 'text-white'} text-lg hover:underline underline-offset-8`}>Services</div>
              <div>
                {
                  dropDown ? (<RiArrowDropUpLine size={30} className='text-blue-500' />):
                  (<RiArrowDropDownLine size={30} color='white'  />)
                }
              </div>
            </div>
          }
        </div>

        {/* Drop-down for services */}
        {
          isLoggedIn && dropDown && (
            <div className={`fixed right-[60px] top-[55px] lg:hidden w-3/12 h-auto z-30 bg-white p-2 rounded-sm shadow-md transition-transform duration-300 ${dropDown ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
              <div className='text-center flex flex-col space-y-2 text-sm text-black'>
                <div>
                  <NavLink to='/diet' onClick={()=>setDropDown(false)} className="hover:text-blue-700 transition-all duration-200 " >Diet Plan</NavLink>
                </div>
                <div className="bg-black h-[0.6px] w-full opacity-10"></div>
                <div>
                  <NavLink to='/workout' onClick={()=>setDropDown(false)} className="hover:text-blue-700 transition-all duration-200 ">Workout Plan</NavLink>
                </div>
                <div className="bg-black h-[0.6px] w-full opacity-10"></div>
                <div>
                  <NavLink to='/ai' onClick={()=>setDropDown(false)} className="hover:text-blue-700 transition-all duration-200 ">Ask Ai</NavLink>
                </div>
              </div>
            </div>
          )
        }

        
        {/*side mobile menu when logged out */}
        {
          !isLoggedIn && openMenu && (
            <div id="menucontainer" className="w-screen h-screen"
              onClick={(e) =>
                e.target.id === "menucontainer" ? setOpenMenu(false) : null
              }>
              <div className={`fixed w-4/12 right-[10px] top-[10px] rounded-sm bg-white p-2 text-black text-lg flex flex-col justify-center items-center space-y-1 md:hidden transition-transform duration-300 ${openMenu ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                <div className="mt-1">
                  <NavLink to="/" onClick={()=>setOpenMenu(false)} className="hover:text-blue-700 transition-all duration-200 ">
                    Home
                  </NavLink>
                </div>
                <div className="bg-black h-[0.6px] w-full opacity-10"></div>
                <div>
                  <NavLink to="/" onClick={()=>setOpenMenu(false)} className="hover:text-blue-700 transition-all duration-200 ">
                    About
                  </NavLink>
                </div>
                <div className="bg-black h-[0.6px] w-full opacity-10"></div>
                <div>
                  <NavLink to="/" onClick={()=>setOpenMenu(false)} className="hover:text-blue-700 transition-all duration-200 ">
                    Contact
                  </NavLink>
                </div>
                <div className="bg-black h-[0.6px] w-full opacity-10"></div>
                <div>
                  <button
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenLogin(true);
                    }}
                    className="hover:text-blue-700 transition-all duration-200 "
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          )
        }
        {openLogin && <LoginModal setOpenLogin={setOpenLogin} setOpenSignUp={setOpenSignUp} setIsLoggedIn={setIsLoggedIn} />}
        {openSignUp && <SignInModal setOpenSignUp={setOpenSignUp} setIsLoggedIn={setIsLoggedIn} />}

        {/* side mobile menu when logged in */}
        {
          isLoggedIn && openMenu && (
            <div id='menucontainer' onClick={(e)=> e.target.id==='menucontainer' ? setOpenMenu(false) : null} className='w-screen h-screen'>
            <div className={`fixed w-4/12 right-[10px] top-[10px] rounded-sm bg-white p-2 text-black text-lg flex flex-col justify-center items-center space-y-1 md:hidden transition-transform duration-300 ${openMenu ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
              <div className='mt-1'>
                <NavLink to='/' onClick={()=>setOpenMenu(false)} className='hover:text-blue-700 transition-all duration-200 '>Home</NavLink>
              </div>
              <div className='bg-black h-[0.6px] w-full opacity-10'></div>
              <div className='mt-1'>
                <NavLink to='/dashboard' onClick={()=>setOpenMenu(false)} className='hover:text-blue-700 transition-all duration-200 '>Dashboard</NavLink>
                </div>
              <div className='bg-black h-[0.6px] w-full opacity-10'></div>
              <div>
                <NavLink to='/' onClick={()=>setOpenMenu(false)} className='hover:text-blue-700 transition-all duration-200 '>About</NavLink>
              </div>
              <div className='bg-black h-[0.6px] w-full opacity-10'></div>
              <div>
                <NavLink to='/' onClick={()=>setOpenMenu(false)} className='hover:text-blue-700 transition-all duration-200 '>Contact</NavLink>
              </div>
              <div className='bg-black h-[0.6px] w-full opacity-10'></div>
              <div><button onClick={()=>{
                setOpenMenu(false);
                setIsLoggedIn(false);
                toast.error("Logged out")
                }}  className='hover:text-blue-700 transition-all duration-200 '>Log out</button></div>
              </div>
            </div>
          )
        }
        {
          openMenu &&
          <button className='md:hidden' onClick={()=>setOpenMenu(false)}>
          <RxCross2 color='black' size={15} className='fixed top-[11px] right-[11px]'/>
          </button>
        }


{/*---------------------------DEKSTOP VIEW --------------------------*/}

        {/* for pages */}
        <section className='hidden text-lg md:flex justify-between mx-auto items-center roboto-bold'>
          <ul className='flex gap-x-6'>
            <li><NavLink onClick={()=>setSelected('home')} className={`${ selected==='home' ? "text-blue-400 underline underline-offset-8 decoration-blue-400" : "text-white"}  hover:underline decoration-1 underline-offset-8 transition-all duration-300`} to="/">HOME</NavLink></li>
            {
              !isLoggedIn && 
              <li><NavLink onClick={()=>setSelected('about')} className={`${ selected==='about' ? "text-blue-400 underline underline-offset-8 decoration-blue-400" : "text-white"}  hover:underline decoration-1 underline-offset-8 transition-all duration-300`} to="/">ABOUT</NavLink></li>
            }
            {
              !isLoggedIn &&
              <li><NavLink onClick={()=>setSelected('contact')} className={`${ selected==='contact' ? "text-blue-400 underline underline-offset-8 decoration-blue-400" : "text-white"}  hover:underline decoration-1 underline-offset-8 transition-all duration-300`} to="/">CONTACT</NavLink></li>
            }
            {
              isLoggedIn &&
              <li><NavLink onClick={()=>setSelected('dashboard')} className={`${ selected==='dashboard' ? "text-blue-400 underline underline-offset-8 decoration-blue-400" : "text-white"}  hover:underline decoration-1 underline-offset-8 transition-all duration-300`} to="/dashboard">DASHBOARD</NavLink></li>
            }
            
          </ul>
        </section>

        {/* for services */}
        <div className='hidden lg:flex justify-between items-center roboto-bold gap-x-4 text-lg mr-3'>
          {
            isLoggedIn &&
            <div><NavLink onClick={()=>setSelected('dietPlan')} className={`${selected==='dietPlan' ? "text-blue-300 underline underline-offset-8 decoration-blue-300" : "text-white"}  uppercase hover:underline decoration-1 underline-offset-8 transition-all duration-300 flex wrap`}
            to="/diet">Diet Plan</NavLink></div>
          }
          {
            isLoggedIn &&
            <div><NavLink onClick={()=>setSelected('exercises')} className={`${selected==='exercises' ? "text-blue-400 underline underline-offset-8 decoration-blue-400" : "text-white"}  uppercase hover:underline decoration-1 underline-offset-8 transition-all duration-300 flex wrap`}
            to="/workout">Excercises</NavLink></div>
          }
          {
            isLoggedIn &&
            <div><NavLink onClick={()=>setSelected('ai')} className={`${selected==='ai' ? "text-blue-400 underline underline-offset-8 decoration-blue-400" : "text-white"}  uppercase hover:underline decoration-1 underline-offset-8 transition-all duration-300 flex wrap`}
            to="/ai">ASK AI</NavLink></div>
          }
        </div>
       
        {/* for buttons */}
        <div className='hidden md:flex justify-between items-center roboto-bold gap-x-4 text-lg'>

          {/* LOGIN BUTTON */}
          {!isLoggedIn && 
            <button className='text-white bg-slate-800 px-3 py-[0.3rem] rounded hover:bg-slate-700 border border-slate-500'
            onClick={()=>setOpenLogin(true)} >Log In</button>
          }
          { openLogin && <LoginModal setOpenLogin={setOpenLogin} setOpenSignUp={setOpenSignUp} setIsLoggedIn={setIsLoggedIn}/> }
          
          {/* SIGN UP BUTTON */}
          {!isLoggedIn && 
            <button className='text-white bg-slate-800 px-3 py-[0.3rem] rounded hover:bg-slate-700 border border-slate-500'
            onClick={()=>setOpenSignUp(true)}>Sign Up</button>
          }
          {openSignUp && <SignInModal setOpenSignUp={setOpenSignUp} setIsLoggedIn={setIsLoggedIn} />}
          
          {/* SERVICES BUTTON */}
          {
            isLoggedIn && 
            <div onClick={()=> {
              setDropDown(!dropDown);
              setOpenMenu(false);
              } }
              className='flex  lg:hidden justify-center items-center roboto-bold hover:cursor-pointer'>

              <div className={` ${dropDown ? 'text-blue-500 underline' : 'text-white'} text-lg hover:underline underline-offset-8`}>Services</div>
              <div>
                {
                  dropDown ? (<RiArrowDropUpLine size={30} className='text-blue-500' />):
                  (<RiArrowDropDownLine size={30} color='white'  />)
                }
              </div>
            </div>
          }

          {/* LOGOUT BUTTON */}
          {isLoggedIn && 
            <button onClick={() =>{
              handleLogout();
              setSelected('home');
            }} className='text-white bg-slate-800 px-3 py-[0.3rem] rounded hover:bg-slate-700 border border-slate-500'>Log out</button>            
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
