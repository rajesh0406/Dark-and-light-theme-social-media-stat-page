import React,{useState} from 'react';
export default function Modal() {
    const [active,setActive]=useState(1);
    return (
        <div className="pt-24 fixed z-40 w-full h-full bg-black opacity-60">
           
     </div>
    )
}
/* <div className="opacity-100 mx-4 rounded-md bg-white shadow-md flex flex-col justify-center items-center py-4  ">
                <a href="#" className={
                    active===1?"bg-gradient-to-r from-limegreen text-sm text-white to-brightcyan px-8 py-3 mx-28 rounded-full"
                :"px-8 py-3 rounded-full"} onClick={()=>setActive(1)}>Home</a> 
                <a href="#"className={
                    active===2?"bg-gradient-to-r from-limegreen text-sm text-white to-brightcyan px-8 py-3 rounded-full"
                :"px-8 py-3 rounded-full"} onClick={()=>setActive(2)} >Contact</a> 
                <a href="#" className={
                    active===3?"bg-gradient-to-r from-limegreen text-sm text-white to-brightcyan px-8 py-3 rounded-full"
                :"px-8 py-3 rounded-full"} onClick={()=>setActive(3)} >About</a> 
                <a href="#" className={
                    active===4?"bg-gradient-to-r from-limegreen text-sm text-white to-brightcyan px-8 py-3 rounded-full"
                :"px-8 py-3 rounded-full"} onClick={()=>setActive(4)}>Blog</a> 
                <a href="#" className={
                    active===5?"bg-gradient-to-r from-limegreen text-sm text-white to-brightcyan px-8 py-3 rounded-full"
                :"px-8 py-3 rounded-full"} onClick={()=>setActive(5)} >Careers</a> 
            </div> */