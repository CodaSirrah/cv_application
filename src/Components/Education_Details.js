import React from 'react'

const EDUCATION_DETAILS = (props) => {
  const { DETAILS } = props;


  return(
    <div id='education-details'>
      <h5 className='display-headers'>Education</h5>
      <hr className='display-hr'/>
      {DETAILS.map((detail) => {
        return (
          <div key={detail.id} className='details'>
            <div id='detail-date-container'>
              <p className='detail-date'>{detail.start_date} - </p>
              <p className='detail-date'>{detail.end_date}</p>
            </div>
            <p className='detail-school'>{detail.school}</p>
            <div>
              <p className='detail-subject'>Subject: {detail.subject}</p>
              <p className='detail-degree'>Degree: {detail.degree}</p></div>
          </div>)
      })} 
    </div>
    
  )
}

export default EDUCATION_DETAILS
