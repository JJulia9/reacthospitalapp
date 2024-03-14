import React from "react";
import Navigation from "../../components/Navigation";
import PSubnav from "../../components/PSubnav";
import ProfileCard from "../../components/ProfileCard";
import Facts from "../../components/Facts";





const DashboardParent = () => {
  return (
    <>

  <Navigation />
 
    <div className="max-w-xl py-5 mx-8">
      <h1 className="font-black text-blue-900 text-4xl mb-4">Welcome back, </h1>
      <p className="text-base text-xl text-[#374151]">Please choose a profile to find more information</p>
    </div>
 

 

  <div className="bg-tetriady w-full h-screen">
  <PSubnav />


     

           
            <div className="mx-8 grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">
              
            <a
                href="#"
                className="transition-all duration-1000 bg-white hover:bg-secondary hover:shadow-xl m-2 p-4 relative z-40 group"
              >
                <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-blue-900 group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                  <div className="text-center my-2">
                            <img class="h-16 w-16 rounded-full"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt="" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">Parient name</h3>
                  <p className="mt-2 text-base text-gray-600 group-hover:text-white"> something about person</p>
                </div>
              </a>

              <a
                href="#"
                className="transition-all duration-1000 bg-white hover:bg-secondary hover:shadow-xl m-2 p-4 relative z-40 group"
              >
                <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-blue-900 group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                  <div className="text-center my-2">
                            <img class="h-16 w-16 rounded-full"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt="" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">Parient name</h3>
                  <p className="mt-2 text-base text-gray-600 group-hover:text-white"> something about person</p>
                </div>
              </a>
           

            </div>
       

  <div>


  </div>
 
 
     

    
    
     

  </div>
    
    </>
        
   
  );
};

export default DashboardParent;

