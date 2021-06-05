import React from 'react'
import Details from './Education_Details'
const Display = (props) => {
    return (
      <div id='cv-display'>
        <div id='name-display'>
          <p id='d-full-name'>{props.fullName}</p>
          <i className="fas fa-user"></i>
        </div>
        <div id='contact-display'>
          <p id='d-email-title'>Email</p>
          <p id='d-email'>{props.email}</p>
          <p id='d-phone-title'>Phone Number</p>
          <p id='d-phone'>{props.phone}</p>
        </div>
        <div id='education-display'>
          <h5 id='education-header'>Education</h5>
          <div className='education-details'>
            <Details DETAILS={props.DETAILS} />
          </div>
        </div>
      </div>
    )
}

export default Display