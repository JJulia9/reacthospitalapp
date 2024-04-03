import React from "react";
import "../assets/storyBoard.css";

const StoryBoard = () => {
    
    return (
        <>
        <div className="board">
        <h1 className="font-black text-sky-950 text-3xl mb-4">How to prepare for the X-RAY? </h1>

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
</div>




        </>
    )
}


export default StoryBoard;