import React from "react";  






const PSubnav = ({onNavigate}) => {

    const handleLogout = () => {
        // Clear token from local storage
        localStorage.removeItem("token");
        // Redirect user to the login page
        window.location.href = '/login';
        };

    return (
        <>
          
  
  <nav role="navigation" className="px-7" >
  <div className="flex items-center justify-end ">


<div className='flex md:mr-6 xl:mr-16'>

            <button onClick={() => onNavigate('section1')}  className="text-blue-900 font-medium  border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                Profiles
            </button>

            <button onClick={() => onNavigate('section2')}  className="text-blue-900 font-medium  border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                Family appointments
            </button>

            <button onClick={() => onNavigate('section3')}   className="text-blue-900 font-medium  border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                Medicine
            </button>

            <button onClick={() => onNavigate('section4')}   className="text-blue-900 font-medium  border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                Doctors
            </button>


            <button onClick={handleLogout} className="text-blue-900 font-medium  border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
    Log out
</button>





           
              
            
            </div>



          </div>
        
      
  </nav>
  
   




        </>

    );
}

export default PSubnav;