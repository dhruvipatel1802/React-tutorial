import React from 'react';
import Fontbd from './Fontbd';
import './Sec2.css';
import Image1 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/bdonor.jpg";
import ft from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/insta.png";
import ft1 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/fb.png";
import ft2 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/twit.png";
import ft3 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/yt.png";
function Sec2 () {
  return (
   <>
       <div className='xyz'>
        <img src={Image1} alt='bd' className='img-fluid1'/>
        <div className='Rec1'>
           <Fontbd/>
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

export default Sec2