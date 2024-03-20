import React from "react";
import PSubnav from "../../components/PSubnav";
import ProfileCard from "../../components/ProfileCard";
import Facts from "../../components/Facts";



const DashboardUser = () => {
    return (
<>
  
 
    <div className="max-w-xl py-5 mx-8">
      <h1 className="font-black text-blue-900 text-4xl mb-4">Welcome back, </h1>
    </div>
 

 

  <div className="bg-tetriady w-full h-screen">
  <PSubnav />
  <ProfileCard />
  <h3 className="text-blue-900 text-xl font-medium max-w-xl mx-8"> Did you know... </h3>

  <section className=" py-24 px-4 ">
        <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
              <Facts />
              <Facts />
              <Facts />
          </div>
         </div>
  </section>
 
     

    
    
     

  </div>
</>

  
    );
    };

export default DashboardUser;
