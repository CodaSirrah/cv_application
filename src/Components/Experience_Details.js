import React from 'react'

const EXPERIENCE_DETAILS = (props) => {
  const { EX_DETAILS } = props;
  let itemID = '';


  const EDIT = (e) => {
    document.querySelector('#edit-education-details').classList.add('hidden');
    if (itemID === e.target.dataset.id) {
      document.querySelector('#edit-experience-details').classList.toggle('hidden');
    } else if (itemID !== e.target.dataset.id && document.querySelector('#edit-experience-details').classList.contains('hidden')) {
      document.querySelector('#edit-experience-details').classList.remove('hidden');
    }
    
    document.querySelector('#edit-position').children[1].value = e.target.parentElement.children[1].textContent;
    document.querySelector('#edit-company').children[1].value = e.target.parentElement.children[2].children[0].textContent.slice(9);
    document.querySelector('#edit-city').children[1].value = e.target.parentElement.children[2].children[1].textContent.slice(6);
    document.querySelector('#edit-experience-start-date').children[1].value = e.target.parentElement.children[0].children[0].textContent.slice(0, -3);
    document.querySelector('#edit-experience-end-date').children[1].value = e.target.parentElement.children[0].children[1].textContent;
    document.querySelector('#experience-square').setAttribute('data-id', e.target.dataset.id);
    itemID = e.target.dataset.id;
  }

  const REMOVE = (e) => {
    e.target.parentElement.remove();
  }

  return(
    <div id='experience-details-container'>
      {EX_DETAILS.map((detail) => {
        return (
          <div key={detail.id} className='experience-details'>
            <div id='experience-detail-date-container'>
              <p className='experience-detail-date'>{detail.start_date} - </p>
              <p className='experience-detail-date'>{detail.end_date}</p>
            </div>
            <p className='experience-detail-position'>{detail.position}</p>
            <div className='experience-detail-specifics'>
              <p className='experience-detail-company'>Company: {detail.company}</p>
              <p className='experience-detail-city'>City: {detail.city}</p>
            </div>
            <i className="fas fa-sticky-note" data-id={detail.id} onClick={EDIT} />
            <i className="fas fa-minus-square" onClick={REMOVE} />
          </div>)
      })} 
    </div>
  )
}

export default EXPERIENCE_DETAILS
