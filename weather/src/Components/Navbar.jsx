import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import {sum} from '../Functions/Func'

const sumf = (e) =>{
    e.preventDefault();
   console.log('hii');
}

export default function Navbar() {
  return (
    <div>
      <nav className="flex bg-blue-800 text-white justify-between">
        <div className="flex justify-between gap-8 p-2">
          <div className="h-8">
            <img className="h-28"
              src="https://mausam.imd.gov.in/imd_latest/contents/img/logo-india-big.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-center">
              Ministry of Earth Sciences <br /> India Meteorological Department <br /> Met
              Centre Hyderabad English Facebook Twitter
            </p>
          </div>
          <div className="flex gap-2">
            <p><FaFacebookSquare/></p>
            <p><FaTwitterSquare/></p>
          </div>
        </div>
        <div className="flex p-2 ">
            <div className="flex flex-col gap-1 items-end">
            <form action="" onSubmit={sumf} className="flex gap-1">  
            
                <input className="rounded-sm" type="text" />
                <button type="submit" onClick={sumf} className="bg-gray-200 rounded-sm text-black px-2">Search</button>
            </form>
            <select name="" id="" className="text-black w-1/3 rounded-sm">
                <option value="English">English</option>
                <option value="">Hindi</option>
               
            </select>
            </div>
          <div>
            <img className="h-28" src="https://mausam.imd.gov.in/imd_latest/img/imd_logo_enamble.png" alt="Bharat mausaum" />
          </div>
        </div>

    {/* ==Active links like Home , Contact== */}
      </nav>
    <div className="flex items-center justify-center gap-2  ">
     <p className="border-black border-r-2 px-2 mt-1">
        <a href=""><FaHome/></a>
     </p>
     <p className="border-black border-r-2 px-2 mt-1 gap-2 text-sm"><a href="https://mausam.imd.gov.in/hyderabad/aboutus.php">ABOUT US</a></p>
     <p className="border-black border-r-2 px-2 mt-1 gap-2 text-sm"><a href="">CONTACT US</a></p>
     <p className="border-black border-r-2 px-2 mt-1 gap-2 text-sm"><a href="">DATA SUPPLY</a></p>
     <p className="border-black border-r-2 px-2 mt-1 gap-2 text-sm"><a href="">TENDER</a></p>
     <p className="border-black border-r-2 px-2 mt-1 gap-2 text-sm"><a href="">PRESS RELEASE</a></p>
     <p className="border-black border-r-2 px-2 mt-1 gap-2 text-sm"><a href="">OTHERS</a></p>
    </div>
      
    </div>
  );
}
