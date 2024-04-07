import React from "react";
import { Link } from "react-router-dom";



const Profile = () => {
  return (
    <>
     <Link to
                ="#"
                className="transition-all duration-1000 bg-white hover:bg-secondary hover:shadow-xl m-2 p-4 relative z-40 group"
              >
                <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-blue-900 group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                  <div className="text-center my-2">
                            <img class="h-16 w-16 rounded-full"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt="profilePicture" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">Family member name </h3>
                  <p className="mt-2 text-base text-gray-600 group-hover:text-white"> about person</p>
                </div>
              </Link>
    </>
    )
}

export default Profile;