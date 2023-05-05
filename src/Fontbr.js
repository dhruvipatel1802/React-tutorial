import React from "react";
import "./Sec3";
function Sec3() {
  const [formStatus, setFormStatus] = React.useState("SUBMIT");
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

        <div className="container mt-5">
  
          <form onSubmit={onSubmit}>
            <div className="mno">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Full Name:
              </label>
              <input className="form-control" type="text" id="name1" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="phone">
                Phone Number:
              </label>
              <input
                className="form-control" type="phone"
                id="phone1"
                required />
            </div>
            </div>
            <div className="mno">
            <div className="mb-3">
              <label className="form-label" htmlFor="age">
                Age:
              </label>
              <input className="form-control" type="text" id="age1" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                className="form-control"
                type="email"
                id="email1"
                required />
            </div>
            </div>

            <div className="mno">
            <div className="mb-3">
              <label className="form-label" htmlFor="bgrp">
                Blood Group:
              </label>
              <input className="form-control" type="text" id="bgroup" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="text">
                Gender:
              </label>
              <input
                className="form-control"
                type="text"
                id="gender"
                required />
            </div>
            </div>

            <div className="mno">
            <div className="mb-3">
              <label className="form-label" htmlFor="text">
                Address:
              </label>
              <input
                className="form-control"
                type="text"
                id="add"
                required />
            </div>
            </div>
           

            <button className="btn btn-dark" type="submit">
              {formStatus}
            </button>
          </form>
          </div>
 
 

  );
}
export default Sec3;
