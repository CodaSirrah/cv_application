import React from 'react'

const EDUCATION_DETAILS = (props) => {
  const { ED_DETAILS } = props;

  const EDIT = (e) => {
    document.querySelector('#edit-education-details').classList.toggle('hidden');
    document.querySelector('#edit-school').children[1].value = e.target.parentElement.children[1].textContent;
    document.querySelector('#edit-subject').children[1].value = e.target.parentElement.children[2].children[0].textContent.slice(9);
    document.querySelector('#edit-degree').children[1].value = e.target.parentElement.children[2].children[1].textContent.slice(8);
    document.querySelector('#edit-education-start-date').children[1].value = e.target.parentElement.children[0].children[0].textContent.slice(0, -3);
    document.querySelector('#edit-education-end-date').children[1].value = e.target.parentElement.children[0].children[1].textContent;
    document.querySelector('#education-square').setAttribute('data-id', e.target.dataset.id);
  }

  const REMOVE = (e) => {
    e.target.parentElement.remove();
  }

  return(
    <div id='education-details-container'>
      {ED_DETAILS.map((detail) => {
        return (
          <div key={detail.id} className='education-details'>
            <div id='education-detail-date-container'>
              <p className='education-detail-date'>{detail.start_date} - </p>
              <p className='education-detail-date'>{detail.end_date}</p>
            </div>
            <p className='education-detail-school'>{detail.school}</p>
            <div className='education-detail-specifics'>
              <p className='education-detail-subject'>Subject: {detail.subject}</p>
              <p className='education-detail-degree'>Degree: {detail.degree}</p>
            </div>
            <i className="fas fa-sticky-note" data-id={detail.id} onClick={EDIT} />
            <i className="fas fa-minus-square" onClick={REMOVE} />
          </div>)
      })} 
    </div>
    
  )
}

export default EDUCATION_DETAILS
