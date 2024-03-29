import React from 'react';
import UserInformation from "./UserInformation";



const ProfileCard = () => {
    const user = UserInformation()
    
    const formatDOB = (dob) => {
        const formattedDOB = new Date(dob).toLocaleDateString('en-GB');
        const [day, month, year] = formattedDOB.split('/');
        return `${day}.${month}.${year}`;
      }; 

    return (
       

        <>

        {user && (

        <div>
        <h3 className="text-blue-900 text-xl font-medium max-w-xl mx-8"> Profile </h3>
        <div className="my-4 mx-8  h-64">
        <div className="bg-white p-3 shadow-sm ">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-secondary">
                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">First Name</div>
                        <div className="px-4 py-2">{user.forename}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Last Name</div>
                        <div className="px-4 py-2">{user.surname}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Parient Number</div>
                        <div className="px-4 py-2">{user.patient_number}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Guardian Name</div>
                        <div className="px-4 py-2">{user.guardian_name}</div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Current Address</div>
                        <div className="px-4 py-2">{user.address}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Phone</div>
                        <div className="px-4 py-2">{user.phone}</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email</div>
                        <div className="px-4 py-2">
                            <a className="text-blue-800" href="mailto:jane@example.com">{user.email}</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Birthday</div>
                        <div className="px-4 py-2">{formatDOB(user.dob)}</div>
                    </div>
                </div>
            </div>
           
           
        </div>
        </div>
        </div>
        )}

        </>
    );
}




export default ProfileCard;
