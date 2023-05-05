import './Font.css';

function Font() {
    return (
        <>
        <div className="font_fluid">
           DONATE BLOOD.
            </div>
            <div className="font-fluid1">
                "Your Little Effort Can Give Others 
                <br/> 
                 Second Chance To Live".
              </div>
              <div>
              <button type="button" className="btn btn-primary"> <div id="donor_info"></div>DONOR'S DETAILS</button>
              <button type="button" className="btn btn-primary"> <div id="patient_info"></div>PATIENT'S DETAILS</button>
              </div>
              </>
            );
}
export default Font;