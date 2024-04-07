import React from "react";
import "../../assets/storyBoard.css";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { useParams } from "react-router-dom";


const StoryBoard = () => {
    const { name } = useParams(); // Get department ID from URL params


    
  // Render content based on department ID
  const renderContent = () => {
    switch (name) {
      case "X-Ray":
        return (
          <div className="board">
             <hr class="h-2  bg-green"/>

<ul className="timeline">
<li>
        <time datetime="1">1
        <br/>
        Meet your doctor to discuss the need for an x-ray <br/> review medical history, and address any concerns or <br/> questions regarding the procedure
        </time>
        
        <p>
        <br/>
        <strong>Consultation with doctor</strong>
        <br/>
        <br/>
        </p>
        
    </li>

    <li>
        <time datetime="2">2 <br/>
        Prepare for the x-ray scan by wearing comfortable clothing <br/> without metal objects, jewelry, or accessories.<br/>  You may be asked to change into a hospital gown. <br/> Follow any specific instructions provided by the medical staff <br/> regarding fasting or medication intake before the scan
        
        
         </time>
       
        <p> <br/><strong> Prepare for X-ray Scan Appointment</strong><br/><br/> </p>
        

        </li>

        <li>
        <time datetime="3">3 <br/>
        During the procedure, you will be positioned <br/> by a radiology technologist and asked to remain still<br/> while images are captured. The process is <br/>painless and typically takes only a few minutes

        </time>
       
        <p>
        <br/> <strong>X-ray Scan Procedure</strong><br/><br/>
        </p>
    </li>

    <li>
        <time datetime="4">
            4
            <br />
            Return for a follow-up appointment to review <br />the results of the x-ray scan with your doctor. <br /> Discuss any findings, recommendations for further treatment <br /> or testing, and address any additional questions or concerns
            <br /><br />
            </time>
      
        <p>

            <br />  <strong>Follow-up Appointment</strong> <br /><br />
           
        </p>
    </li>



    <li>
        <time datetime="5">5
        <br />
        Meet with your doctor to review the detailed results <br />of the x-ray scan. Discuss the interpretation <br /> of the images, any diagnoses, and proposed treatment plans <br />or next steps. Ensure that you fully understand the findings <br />and recommendations before proceeding with further medical care.
        </time>
        
        <p>
           <br />
        <strong>Review of Scan Results</strong>
        <br /><br />
        </p>
    </li>
    
	
</ul>
<hr class="h-2  bg-green"/>


          </div>
        );



      case "MRI":
        return (
            <div className="board">
            <hr class="h-2  bg-green"/>

<ul className="timeline">
<li>
       <time datetime="1">1
       <br/>
       On the day of your MRI scan, you should be able to eat, <br /> drink and take any medication as usual, <br />unless you're advised otherwise. <br />
       As the MRI scanner produces strong <br />magnetic fields, it's important to remove any metal <br /> objects from your body.


       </time>
       
       <p>
       <br/>
       <strong>Before the scan</strong>
       <br/>
       <br/>
       </p>
       
   </li>

   <li>
       <time datetime="2">2 <br/>
       Some MRI scans involve having an injection of contrast agent (dye). <br /> This makes certain tissues and blood vessels show up <br />more clearly and in greater detail.
       
       
        </time>
      
       <p> <br/><strong> Contrast agent</strong><br/><br/> </p>
       

       </li>

       <li>
       <time datetime="3">3 <br/>
       An MRI scanner is a short cylinder that's open at both ends. <br /> You'll lie on a motorised bed that's moved inside the scanner. <br />You'll enter the scanner either head first or feet first,<br /> depending on the part of your body being scanned.

       </time>
      
       <p>
       <br/> <strong>During the scan</strong><br/><br/>
       </p>
   </li>

   <li>
       <time datetime="4">
           4
           <br />
           After the scan, you can resume normal activities immediately.  <br />But if you have had a sedative, a friend or relative <br /> will need to take you home and stay with you <br />for the first 24 hours.

It's not safe to drive, <br /> operate heavy machinery or drink alcohol for 24 hours after having a sedative.
           <br /><br />
           </time>
     
       <p>

           <br />  <strong>After the scan</strong> <br /><br />
          
       </p>
   </li>



   <li>
       <time datetime="5">5
       <br />
       Meet with your doctor to review the detailed results <br />of the x-ray scan. Discuss the interpretation <br /> of the images, any diagnoses, and proposed treatment plans <br />or next steps. Ensure that you fully understand the findings <br />and recommendations before proceeding with further medical care.
       </time>
       
       <p>
          <br />
       <strong>Review of Scan Results</strong>
       <br /><br />
       </p>
   </li>
   
   
</ul>
<hr class="h-2  bg-green"/>


         </div>
        );


      // Add more cases for other departments as needed


      default:
        return null; // Handle invalid department name
    }
  };

  
    return (
        <>
        
      <Navigation />
      <section className="bg-white">
        <div className="max-w-xl mx-auto text-center py-14 mt-6">
          <div className="inline-flex px-4 py-1.5 mx-auto rounded-full">
            <p className="font-black text-blue-900 text-3xl">
              How to prepare for the procedure?
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white mb-2 text-g uppercase">
            please read carefully
          </p>
        </div>
        {renderContent()}
      </section>
      <Footer />
    </>
  );
};
   


export default StoryBoard;
