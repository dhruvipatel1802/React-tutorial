import './Section.css';
import Image from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/Section.jpg";
import Image2 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/wbd.png";
import Image3 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/doublered.png";
import Image4 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/platelets.png";
import Image5 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/plasma.png";
import im from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/reg.jpg";
import im1 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/mcup.avif";
import im2 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/card1.avif";
import im3 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/rest.avif";
import ft from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/insta.png";
import ft1 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/fb.png";
import ft2 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/twit.png";
import ft3 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/yt.png";
function Section() {
    return (
        <>
       <div className="font_fluid1">
           LEARN ABOUT BLOOD DONATE
        </div>
           
            <img src= {Image} className="img-fluid2" alt='hello'/>
  

        <div className="img-font">
        <p><b>Blood donation refers to a practice where people
        donate their blood to  people so it helps <br/>them with  
        their health problems. Blood is one of the most essential
         fluids of our body  <br/> that helps in the smooth functioning of
          our body. If the body loses blood in excessive  <br/>amounts, 
          people to get deadly diseases and even die. Thus, we see
           how blood donation <br/> is literally life-saving which helps 
           people. It is also a sign of humanity that unites people <br/> 
           irrespective of caste, creed, religion and more.In order to raise awareness 
           about this life<br/> saving procedure, the world observes <u>14th June as Blood Donor Day.</u> 
           It promotes blood <br/> donation and urges people to save lives by donating blood.on this day, 
           the WHO<br/> organizes a campaign that invites people to donate blood. A person eligible to donate<br/> 
           blood must fall in the age bracket of 17-66 years of age. They must weigh more than<br/> 50 kgs and
            have sound health. 
           </b></p>
        </div>

        <div className="font_fluid2">
           TYPES OF BLOOD DONATION
        </div>
        
        <div className="font_fluid3">
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        WHOLE BLOOD DONATION</button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <img src={Image2} className="img"alt='hlw'/>
      <div className="accordion-body">Whole blood is the most flexible type of donation. It can be transfused in its original form, <br/>or used to help  multiple people when separated into its specific components of red cells,<br/> plasma and platelets. Learn more  about whole blood donations.
      <br/><br/>Who it helps: <b>Whole blood is frequently given to trauma patients and people undergoing surgery.</b>
      <br/><br/>Time it takes:  <b>About 1 hour</b>
      <br/><br/> Ideal blood types:  <b>All blood types</b>
      <br/><br/> Donation frequency:<b> Every 56 days, up to 6 times a year</b>
</div>
    </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       POWER RED DONATION
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <img src={Image3} className="img1"alt='hlw'/>
     <div className="accordion-body1">During a Power Red donation, you give a concentrated dose of red cells, the part of your<br/> blood used every day for those needing transfusions as part of their care. This type of<br/> donation uses an automated process that separates your red blood cells from the other blood <br/> components, and then safely and comfortably returns your plasma and platelets to you.
      <br/><br/> Who it helps: <b>Red cells from a Power Red donation are typically given to trauma patients, newborns and
      emergency <br/>transfusions during birth, people with sickle cell anemia, and anyone suffering blood loss.</b>
      <br/><br/>Time it takes:<b> About 1.5 hours</b>
      <br/><br/>Ideal blood types: <b>O positive, O negative, A negative, and B negative</b>
      <br/><br/>Donation frequency:<b> Every 112 days, up to 3 times/year</b>
     </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       PLATELET DONATION
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <img src={Image4} className="img2"alt='hlw'/>
      <div className="accordion-body">Platelets are tiny cells in your blood that form clots and stop bleeding. Platelets are most <br/>often used by cancer patients and others facing life-threatening illnesses and injuries.
      <br/>In a platelet donation, an apheresis machine collects your platelets along with some plasma,<br/> returning your red cells and most of the plasma back to you. A single donation <br/>of platelets can yield several 
      transfusable units, whereas it takes about five whole blood<br/> donations to make up a single transfusable unit of platelets.
      <br/><br/>Who it helps: <b>Platelets are a vital element of cancer treatments and organ transplant procedures, as well as other<br/> surgical procedures.</b>
      <br/><br/>Time it takes:<b> About 2.5-3 hours</b>
      <br/><br/>Ideal blood types:<b> A positive, A negative, B positive, O positive, AB positive and AB negative</b>
      <br/><br/>Donation frequency: <b>Every 7 days, up to 24 times/year</b>
      </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       PLASMA DONATION
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <img src={Image5} className="img3"alt='hlw'/>
      <div className="accordion-body">During an AB Elite donation, you give plasma, a part of your blood used to treat<br/> patients in emergency situations. 
      AB plasma can be given to anyone regardless of<br/>  their blood type. Plasma is collected through an automated process that separates <br/>  from other
       blood components, then safely and comfortably returns your red blood <br/> cells and platelets to you. AB Elite maximizes your donation and<br/>  takes 
       just a few minutes longer than donating blood.
       <br/><br/> Who it helps: <b>AB Plasma is used in emergency and trauma situations to help stop bleeding.</b> 
       <br/><br/>Time it takes:<b> About 1 hour and 15 minutes</b>
       <br/><br/>Ideal blood types:<b> AB positive, AB negative</b>
       <br/><br/>Donation frequency: <b>Every 28 days, up to 13 times/year</b>
      </div>
    </div>
  </div>
  <div className="font_fluid4">
           HOW TO DONATE BLOOD?
        </div>
        <br/>
       <div className='card'>
         <div className='f1'>REGISTRATION </div>
          <img src={im} alt="."className='i'/>
        </div>
       
        <div className='card1'>
         <div className='f2'>MEDICAL CKECK UP</div>
          <img src={im1} alt="."className='i1'/>
        </div>

        <div className='card2'>
         <div className='f3'>ACTUAL DONATION</div>
          <img src={im2} alt="."className='i2'/>
        </div>

        <div className='card3'>
         <div className='f2'>REST & REPLENISH</div>
          <img src={im3} alt="."className='i3'/>
        </div>

        <div className="footer">
          <img src={ft} alt="hi" className="insta"/>
          <img src={ft1} alt="hi" className="fb"/>
          <img src={ft2} alt="hi" className="twit"/>
          <img src={ft3} alt="hi" className="yt"/>
            <div className="font">
              <p>DEVELOPED BY:</p>
              <p>DHRUVI PATEL</p>
              <p>PRIYANSHI PATEL</p>
              <p>TRUPAL PATEL</p>
            </div>
          </div>
</div>
</div>
</div>

</div>
</>
    );
}
export default Section;