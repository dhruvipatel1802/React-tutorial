import React from 'react';
import './Fontbd.css';
function Font_bd() {
    const [formStatus, setFormStatus] = React.useState('SUBMIT')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
          name: name.value,
          email: email.value,
          message: message.value,
        }
        console.log(conFom)
    }
  return (
 <div className="container mt-5">
       <h2 className="mb-4">DONOR'S DETAILS</h2>
      <form onSubmit={onSubmit}>
        <div className="line">
          </div>
        <div className="xyz">
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Full Name*:
          </label>
          <input className="form-control" type="text" id="name1" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="phone">
            Phone Number*:
          </label>
          <input className="form-control" type="phone" id="phone1" required />
        </div>
  
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input className="form-control" type="email" id="email1" required />
        </div>
        </div>

         <br/>
        <div className="xyz">
        <div className="mb-3">
          <label className="form-label" htmlFor="age">
            Age*:
          </label>
          <input className="form-control" type="text" id="age1" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="Gender">
            Gender*:
          </label>
          <input className="form-control" type="phone" id="gender" required />
        </div>
  
        <div className="mb-3">
          <label className="form-label" htmlFor="Blood Group">
          Blood Group* :
          </label>
          <input className="form-control" type="text" id="bgroup" required />
        </div>
        </div>
        <br/>
        <div className="def">
        <div className="mb-3">
          <label className="form-label" htmlFor="Weight">
            Weight*:
          </label>
          <input className="form-control" type="text" id="wg" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="address">
            Address*:
          </label>
          <input className="form-control" type="text" id="add" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="anyd">
            Any Dieseas*:
          </label>
          <input className="form-control" type="phone" id="anyd" required />
        </div>
        </div>
         <br/>
        <button className="btn btn-warning" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Font_bd