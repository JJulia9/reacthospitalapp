import React from "react";

const Footer = () => {
    return (
        <>

<footer className="bg-tetriady">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
         
            <div className="space-y-2">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 rounded-md flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
          <div className="flex items-center">
            <svg id="logo" enable-background="new 0 0 300 300" height="44" viewBox="0 0 300 300" width="43" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <path fill="#1e3a8a" d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z" />
              </g>
            </svg>
            <h2 className="hidden sm:block text-base text-gray-700 font-bold leading-normal px-3">The North</h2>
          </div>
        </button>
            </div>
    
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="/" className="text-grey-900 transition-colors duration-300  dark:hover:text-blue-900 hover:underline hover:text-blue-500">Home</a>
              <a href="/departmentPage" className="text-grey-900 transition-colors duration-300  dark:hover:text-blue-900 hover:underline hover:text-blue-500">Department</a>
              <a href="/contact" className="text-grey-900 transition-colors duration-300  dark:hover:text-blue-900 hover:underline hover:text-blue-500">Contact Us</a>
              <a href="/login" className="text-grey-900 transition-colors duration-300  dark:hover:text-blue-900 hover:underline hover:text-blue-500">Sign in</a>
             






            </div>



          </div>
</div>
         
    
    </footer>

        </>
    );
}


export default Footer;