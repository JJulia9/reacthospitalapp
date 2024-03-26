import React, {useState} from "react";
import USubnav from "../../components/USubnav";
import ProfileCard from "../../components/ProfileCard";
import Facts from "../../components/Facts";
import UserInformation from "../../components/UserInformation";
import Navigation from "../../components/Navigation";
import Appointments from "../../components/Appointments";





const DashboardUser = () => {
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
    </div>


  <div className="bg-tetriady w-full h-screen">
  <USubnav onNavigate={handleNavigation} />
  
  <div>
  {activeSection === 'section1' &&  
  <div>
   <ProfileCard />
   <h3 className="text-blue-900 text-xl font-medium max-w-xl mx-8"> Did you know...</h3>

  
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
 
   }



  {activeSection === 'section2' && <div><Appointments/></div>}
  {activeSection === 'section3' && <div>Content for Section 3</div>}
  {activeSection === 'section4' && <div>Content for Section 2</div>}
  {activeSection === 'section5' && <div>Content for Section 3</div>}








  </div>




  





  
     

    
    
     

  </div>
  </div>
  )}
  
</>

  
    );
    };

export default DashboardUser;
