import React from 'react';
import './Sec3.css';
import Fontbr from "./Fontbr";
 import Image6 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/breq1.avif";
 import ft from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/insta.png";
 import ft1 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/fb.png";
 import ft2 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/twit.png";
import ft3 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/yt.png";
function Sec3 () {
  return (
   <>
       <div className='mno'>
         <img src={Image6} alt='bd' className='img-fluid6'/> 
        <div className='Rec3'>
        <h2 className="mb-4">PATIENT'S DETAILS</h2>
          <Fontbr/>
        </div>
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

        </>
  )
}

export default Sec3