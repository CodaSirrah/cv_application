import React from 'react'

const EDUCATION_DETAILS = (props) => {
  const { DETAILS } = props;


  return(
    <ul>
      {DETAILS.map((detail) => {
        return (
          <div className='educationi-details'>
            <p className='detail-start'>{detail.start_date}</p>
            <p className='detail-end'>{detail.end_date}</p>
            <p className='detail-school'>{detail.school}</p>
            <p className='detail-subject'>{detail.subject}</p>
            <p className='detail-award'>{detail.award}</p>
          </div>)
      })}
    </ul>
    
  )
}

export default EDUCATION_DETAILS
