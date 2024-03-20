import React from "react";  
import {Link} from "react-router-dom";
import Appointments from "./Appointments";
import { Routes, Route } from 'react-router-dom';


const PSubnav = () => {
    return (
        <>
          
  
  <nav role="navigation" className="px-7" >
  <div className="flex items-center justify-end ">


<div className='flex md:mr-6 xl:mr-16'>
            <a href="#" className="text-blue-900 font-medium  border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
              Profiles
            </a>

            <Link to="/appointments" className="text-blue-900 font-medium  border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                Family appointments
            </Link>

            <a href="#" className="text-blue-900 font-medium  border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                Medicine
            </a>

            <a href="#" className="text-blue-900 font-medium  border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                Doctors
            </a>

            <a href="#" className="text-blue-900 font-medium  border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                Progress
            </a>

            <a href="#" className="text-blue-900 font-medium  border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                Log out
            </a>





           
              
            
            </div>



          </div>
        
      
  </nav>
  
   

  <Routes>
              <Route path="/appointments" element={<Appointments />} />
           </Routes>



        </>

    );
}

export default PSubnav;