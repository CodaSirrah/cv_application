import React from 'react'

const EDUCATION_DETAILS = (props) => {
  const { DETAILS } = props;


  return(
    <div id='education-details'>
      <h5 className='display-headers'>Education</h5>
      <hr className='display-hr'/>
      {DETAILS.map((detail) => {
        return (
          <div key={detail.id}>
            <div id='detail-date'>
              <p className='detail-start'>{detail.start_date} -</p><p className='detail-end'>{detail.end_date}</p>
            </div>
            <div id='detail-main'>
              <p className='detail-school'>{detail.school}</p>
              <p className='detail-subject'>{detail.subject}</p>
              <p className='detail-award'>{detail.award}</p>
            </div>
          </div>)
      })}
    </div>
    
  )
}

export default EDUCATION_DETAILS
