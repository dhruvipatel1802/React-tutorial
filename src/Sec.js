import React from "react";
import "./Sec.css";
import Image from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/contact.jpg";
import ft from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/insta.png";
import ft1 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/fb.png";
import ft2 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/twit.png";
import ft3 from "C:/Users/Dhruvi/OneDrive/Desktop/myapp/src/imags/yt.png";
function Sec() {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="abc">
      <div className="right">
        <div className="container mt-5">
          <h2 className="mb-3">CONTACT US</h2>
          <div className="line"></div>

          <h4 className="mb-4">CONTACT US</h4>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Full Name:
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="phone">
                Phone Number:
              </label>
              <input
                className="form-control"
                type="phone"
                id="phone"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message:
              </label>
              <textarea className="form-control" id="message" required />
            </div>

            <button className="btn btn-dark" type="submit">
              {formStatus}
            </button>
          </form>

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
      <div className="left">
        <img src={Image} alt="hy" className="img-fluid" />
      </div>
    </div>
  );
}
export default Sec;
