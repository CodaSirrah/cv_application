import React from 'react'
import EDUCATION_DETAILS from './Education_Details'
import EXPERIENCE_DETAILS from './Experience_Details'
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
          <h5 className='display-headers'>Education</h5>
          <hr className='display-hr'/>
          <EDUCATION_DETAILS ED_DETAILS={props.EDUCATION_DETAILS} />
          <h5 className='display-headers'>Experience</h5>
          <hr className='display-hr'/>
          <EXPERIENCE_DETAILS EX_DETAILS={props.EXPERIENCE_DETAILS} />
        </div>
      </div>
    )
}

export default Display