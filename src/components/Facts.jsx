import React from "react";
import smile from "../assets/images/smile.svg";

const Facts = () => {
    return (
       
        
                <div className="relative group h-48 flex flex-col  bg-white bg-clip-border text-gray-700 shadow-md">
                
                    <div className="h-28">
                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.2] duration-300 w-[90%] h-48 bg-secondary  justify-center align-middle">
                        <img src={smile} className="w-20 h-20 mt-6 m-auto" alt="" title="" loading="lazy" width="200" height="200" />
                    </div>
                    </div>
                    <div className="p-6 z-10 w-full">
                    <p className="mb-2 inline-block text-tg text-center w-full text-m font-sans font-semibold leading-snug tracking-normal antialiased">
                    The human body orchestrates a symphony of trillions of cells communicating through chemical messages, enabling coordinated functions like growth, repair, and response to the environment.
                    </p>
                    </div>
                
                </div>
                
                
      
    );
}

export default Facts;