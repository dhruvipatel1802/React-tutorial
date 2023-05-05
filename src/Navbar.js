import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import image from 'C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/logo1.png';

const Navbar =() => {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <img src={image} className="image_containor1" alt="logoimage"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          < Link to={"/"} className="nav-link active" aria-current="page" href='hm'>Home </Link>
        </li>
        <li className="nav-item">
          < Link to={"/about"} className="nav-link" href='ab'>About Us</Link>
        </li>
        <li className="nav-item">
          <Link to={"/bdonor"}className="nav-link" href='bd'>Blood Donor </Link>
        </li>
        <li className="nav-item">
          <Link to={"/breq"} className="nav-link" href='br'>Blood Requirement </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contactus"}className="nav-link" href='cu'>Contact Us </Link>
        </li>
  
      </ul>
      
      <button class="btn btn-Danger " type="submit">SIGNUP</button>
      <button class="btn btn-Primary " type="submit">LOGIN</button>

    </div>
  </div>
</nav>
</>
);
}
export default Navbar;