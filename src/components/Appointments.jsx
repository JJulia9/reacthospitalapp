import React from "react";
import appointmentsData from "../json/appointments.json";

const Appointments = () => {
    return (
        <>

{appointmentsData.map((appointment, index) => (

       <div  key ={index} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
    <div className="p-8 flex items-center">
        <div className="pr-4 bg-secondary p-2 rounded-lg text-center">
        <p className="text-4xl font-bold text-white">{appointment.day}</p>
        <p className="text-sm text-white">{appointment.monthYear}</p>
        </div>
        <div className="ml-4">
        <div className="uppercase tracking-wide text-sm text-blue-900 font-semibold">{appointment.appointmentName}</div>
        <p className="mt-2 text-gray-500">{appointment.appointmentTime}</p>
        <br/>
        <p className="mt-2 text-gray-500">{appointment.doctor}</p>
        <img className="h-16 w-16 rounded-full my-1" src={appointment.doctorPhoto} alt="Doctor's Image"/>



        {/* <p className="mt-2 text-gray-500">Patient: Jane Doe</p>
        <img className="h-16 w-16 rounded-full mx-auto" src="https://randomuser.me/api/portraits/women/50.jpg" alt="Patient's Image"/> */}
        </div>
    </div>
    </div>       
        
   
          
            ))}

    
    

        </>
    )
};

export default Appointments;