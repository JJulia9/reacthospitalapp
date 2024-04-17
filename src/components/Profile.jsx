import React from "react";
import { Link } from "react-router-dom";
import UserInformation from "./UserInformation";
import { useState } from 'react';

const Profile = () => {
  const user = UserInformation();


  const [selectedUserId, setSelectedUserId] = useState(null); // State to track the selected user ID

  const handleProfileClick = (userId) => {
    setSelectedUserId(userId);

  };
 
  const formatDOB = (dob) => {
    const formattedDOB = new Date(dob).toLocaleDateString('en-GB');
    const [day, month, year] = formattedDOB.split('/');
    return `${day}.${month}.${year}`;
  }; 




  return (
    <>
      {user && (
        <>

        <Link to={`/profileCard/${user._id}`} className="transition-all duration-1000 bg-white hover:bg-secondary hover:shadow-xl m-2 p-4 relative z-40 group">
              <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-blue-900 group-hover:w-1/2"></div>
              <div className="py-2 px-9 relative">
                <div className="text-center my-2">
                  <img className="h-16 w-16 rounded-full" src={user.photo} alt="profilePicture" />
                </div>
                
                <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">{user.forename} {user.surname}</h3>
                <p className="mt-2 text-base text-gray-600 group-hover:text-white">Date of birth: {formatDOB(user.dob)}</p>
              </div>
            </Link>


          {user.kids.map((kid) => (
            <Link key={kid._id} to={`/kid/${kid._id}`} className="transition-all duration-1000 bg-white hover:bg-secondary hover:shadow-xl m-2 p-4 relative z-40 group">
              <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-blue-900 group-hover:w-1/2"></div>
              <div className="py-2 px-9 relative">
                <div className="text-center my-2">
                  <img className="h-16 w-16 rounded-full" src={kid.photo} alt="profilePicture" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">{kid.forename} {kid.surname}</h3>
                <p className="mt-2 text-base text-gray-600 group-hover:text-white">Date of birth: {formatDOB(kid.dob)}</p>
              </div>
            </Link>

          

          ))}
        </>
      )}
    </>
  );
};

export default Profile;
