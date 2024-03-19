import React from "react";
import { Link } from "react-router-dom";

const CardAmusement = ({image, url, name, description}) => {
    return (
        <>
     

 
       
         <div
                className="transition-all duration-1000 bg-white hover:bg-secondary hover:shadow-xl m-2 p-4 relative z-40 group" >
                <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-blue-900 group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                  <img src={image} className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="game"/>
                  <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">{name}</h3>
                  <p className="mt-4 text-base text-gray-600 group-hover:text-white">{description}</p>
                  <Link to={url} target="_blank">
                  <button className="mt-8 text-blue-900 uppercase py-4 text-base font-light px-10 border border-blue-900 hover:bg-white hover:bg-opacity-10 hover:text-white hover:border-white">PLAY</button>
                  </Link>
                </div>
              </div>
         
        </>
    );
}
export default CardAmusement;