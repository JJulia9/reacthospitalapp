import React from "react";
import "../../assets/storyBoard.css";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";


const StoryBoard = () => {
    
    return (
        <>
        <Navigation />
        <section className="bg-white">
        
            <div className="max-w-xl mx-auto text-center py-14 mt-6">
              <div className="inline-flex px-4 py-1.5 mx-auto rounded-full">
                <p className="font-black text-blue-900 text-3xl">
                How to prepare for the X-RAY?                </p>
              </div>
              <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white mb-2 text-g uppercase">
                please read carefully
              </p>
            </div>
       
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



</section>

<Footer />

        </>
    )
}


export default StoryBoard;
