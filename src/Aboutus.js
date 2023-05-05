import React from "react";
import './Aboutus.css';
import Font1 from './Font1';
import Im from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/about.jpg";
import ft from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/insta.png";
import ft1 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/fb.png";
import ft2 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/twit.png";
import ft3 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/yt.png";
function Aboutus () {
    return(
        <>
        <div className="dmp">
        <div className='Rec2'>
             <Font1/>
        </div>
        <img src={Im} alt="h" className="img-fluid3"/>
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
         );
}
export default Aboutus;