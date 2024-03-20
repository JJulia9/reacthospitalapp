import React from "react";
import PSubnav from "../../components/PSubnav";
import Profile from "../../components/Profile";









const DashboardParent = () => {
  return (
    <>

 
 
    <div className="max-w-xl py-5 mx-8">
      <h1 className="font-black text-blue-900 text-4xl mb-4">Welcome back, </h1>
      <p className="text-base text-xl text-[#374151]">Please choose a profile to find more information</p>
    </div>
 

 

  <div className="bg-tetriady w-full h-screen">

    
  <PSubnav />


     

           
            <div className="mx-8 grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">
              
           <Profile />
            <Profile />
           

          

            </div>
       

  <div>


  </div>
 
 
     

    
    
     

  </div>
    
    </>
        
   
  );
};

export default DashboardParent;

