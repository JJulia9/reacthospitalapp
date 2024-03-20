import React from "react";

const Appointments = () => {
    return (
        <>
            
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
    <div className="p-8 flex items-center">
        <div className="pr-4 bg-blue-200 p-2 rounded-lg text-center">
        <p className="text-4xl font-bold text-white">18th</p>
        <p className="text-sm text-white">November, 2023</p>
        </div>
        <div className="ml-4">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Clinic Appointment</div>
        <p className="mt-2 text-gray-500">9:20 AM - 9:40 AM</p>
        <p className="mt-2 text-gray-500">Dr. John Doe, General Practitioner</p>
        <img className="h-16 w-16 rounded-full mx-auto" src="https://randomuser.me/api/portraits/men/75.jpg" alt="Doctor's Image"/>
        <p className="mt-2 text-gray-500">Patient: Jane Doe</p>
        <img className="h-16 w-16 rounded-full mx-auto" src="https://randomuser.me/api/portraits/women/50.jpg" alt="Patient's Image"/>
        </div>
    </div>
    </div>

        </>
    )
};

export default Appointments;