import React from "react";
import UserInformation from "./UserInformation";

const Doctors = () => {
    const user = UserInformation();

    return (
        <>
            {user && (
               
                 <div className="mx-8 grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20 justify-center">
                <div className="transition-all duration-1000 bg-white hover:bg-secondary hover:shadow-xl m-2 p-4 relative z-40 group">
                    <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-blue-900 group-hover:w-1/2"></div>
                    <div className="py-2 px-9 relative">
                        <div className="text-center my-2">
                            <img className="h-16 w-16 rounded-full"
                                src={user.doctor_id.photo}
                                alt="doctorPic" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">{user.doctor_id.name}</h3>
                        <p className="mt-2 text-base text-gray-600 group-hover:text-white">{user.doctor_id.speciality}</p>
                    </div>
                </div>
                </div>
                
            )}
        </>
    );
}

export default Doctors;
