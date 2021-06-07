import React from 'react'
import EDUCATION_DETAILS from './Education_Details'
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
        <div id='main-display'>
          <h5 className='display-headers'>Description</h5>
          <hr className='display-hr'/>
          <p id='description-display'>{props.description}</p>
            <EDUCATION_DETAILS DETAILS={props.DETAILS} />
        </div>
      </div>
    )
}

export default Display