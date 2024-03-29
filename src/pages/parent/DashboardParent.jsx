import React, {useState} from "react";
import PSubnav from "../../components/PSubnav";
import Profile from "../../components/Profile";
import Navigation from "../../components/Navigation"; 
import UserInformation from "../../components/UserInformation"; 
import Appointments from "../../components/Appointments";
import Medicine from "../../components/Medicine";
import Doctors from "../../components/Doctors";












const DashboardParent = () => {
  const user = UserInformation();
  const [activeSection, setActiveSection] = useState('section1');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };





  return (
    <>
    <Navigation />
    
 {user && (
    <div>
    <div className="max-w-xl py-5 mx-8">
      <h1 className="font-black text-blue-900 text-4xl mb-4">Welcome back, {user.forename} </h1>
      <p className="text-base text-xl text-[#374151]">Please choose a profile to find more information</p>
    </div>
  

  <div className="bg-tetriady w-full h-screen">

    
  <PSubnav  onNavigate={handleNavigation}/>


     
    <div>
      {activeSection === 'section1' &&
           
            <div className="mx-8 grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">
              
           <Profile />
            <Profile />
            
          </div>

      }

{activeSection === 'section2' && <div><Appointments/></div>}
  {activeSection === 'section3' && <div><Medicine /></div>}
  {activeSection === 'section4' && <div><Doctors /></div>}
    </div>
       
    <div>
    </div>
 
 
     

    
    
     

  </div>
  </div>
  )}
    
    </>
        
   
  );
};

export default DashboardParent;

