import React,{useState} from 'react'
import logo  from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';
export default function Navbar({setToggle}) {
    const [active,setActive]=useState(true);
    const func=()=>{
        setActive(!active);
        setToggle();
    }
    return (
        <nav className="w-full px-4 sm:px-48 absolute top-0 left-0 right-0 bg-white flex flex-row justify-between items-center font-public z-50">
           
      </nav>
    )
}
/**
  <img src={logo} alt="Logo" />
            <div className="hidden md:flex items-center justify-center text-grayishblue text-sm ">
                <a href="#" className="nav-item px-4 py-5">Home</a> 
                <a href="#" className="nav-item px-4 py-5">Contact</a> 
                <a href="#" className="nav-item px-4 py-5">About</a> 
                <a href="#" className="nav-item px-4 py-5">Blog</a> 
                <a href="#" className="nav-item px-4 py-5">Careers</a> 
            </div>
            <button className="hidden md:block bg-gradient-to-r from-limegreen text-md to-brightcyan py-2 px-6 rounded-full text-white  hover:opacity-80">
                Request Invite
            </button>
            {
                (active)?
                <div className="p-3 m-2 rounded-sm md:hidden " onClick={()=>func()}>
               <img src={hamburger} className="text-md font-bold " alt="Hamburger icon"/>
           </div>
           :
           <div className="p-3 m-2 rounded-sm  md:hidden " onClick={()=>func()}>
           <img src={close} className="text-md font-bold" alt="Hamburger icon"/>
       </div>
            }
 */