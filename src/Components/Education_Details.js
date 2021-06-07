import React from 'react'

const EDUCATION_DETAILS = (props) => {
  const { DETAILS } = props;

  const EDIT = (e) => {
    document.querySelector('#edit-details').classList.toggle('hidden');
    document.querySelector('#edit-school').children[1].value = e.target.parentElement.children[1].textContent;
    document.querySelector('#edit-subject').children[1].value = e.target.parentElement.children[2].children[0].textContent.slice(9);
    document.querySelector('#edit-degree').children[1].value = e.target.parentElement.children[2].children[1].textContent.slice(8);
    document.querySelector('#edit-start-date').children[1].value = e.target.parentElement.children[0].children[0].textContent.slice(0, -3);
    document.querySelector('#edit-end-date').children[1].value = e.target.parentElement.children[0].children[1].textContent;
    document.querySelector('.fa-check-square').setAttribute('data-id', e.target.dataset.id);
  }

  const REMOVE = (e) => {
    e.target.parentElement.remove();
  }

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
            <div className='detail-specifics'>
              <p className='detail-subject'>Subject: {detail.subject}</p>
              <p className='detail-degree'>Degree: {detail.degree}</p>
            </div>
            <i className="fas fa-sticky-note" data-id={detail.id} onClick={EDIT} />
            <i className="fas fa-minus-square" onClick={REMOVE} />
          </div>)
      })} 
    </div>
    
  )
}

export default EDUCATION_DETAILS
