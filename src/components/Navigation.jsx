import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
<div className="h-full w-full px-6">
  
  <nav role="navigation" className="bg-white ">
  <div className="flex items-center justify-between">

        <a href="/" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 rounded-md flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
          <div className="flex items-center">
            <svg id="logo" enable-background="new 0 0 300 300" height="44" viewBox="0 0 300 300" width="43" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <path fill="#1e3a8a" d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z" />
              </g>
            </svg>
            <h2 className="hidden sm:block text-base text-gray-700 font-bold leading-normal px-3">The North</h2>
          </div>
        </a>

        
<div className='flex md:mr-6 xl:mr-16'>
            <Link to="/" className="focus:text-blue-900 border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-l font-medium leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                </svg>
              </span>
              Home
            </Link>


            <Link to="/departmentPage" className="focus:text-blue-900 border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-l font-medium leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                </svg>
              </span>
              Department
            </Link>


            <Link to="/contact" className="focus:text-blue-900 border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-l font-medium leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                  <circle cx="12" cy="12" r="9"></circle>
                </svg>
              </span>
              Contact Us
            </Link>


            <Link to="/login" className="focus:text-blue-900 border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-l font-medium leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="7 8 3 12 7 16"></polyline>
                  <polyline points="17 8 21 12 17 16"></polyline>
                  <line x1="14" y1="4" x2="10" y2="20"></line>
                </svg>
              </span>
              Sign In
            </Link>         
           

           
            {/* <a href="/dashboardparent" className="focus:text-blue-900 border-b-2 border-transparent focus:border-blue-900 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                  <img className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png" alt="logo" />
               </a> */}
              
            
            </div>



          </div>
        
      
  </nav>
  
   
</div>
  








        


        </>

    );
}
export default Navigation;