import React from 'react'

const EDIT_EXPERIENCE = (props) => {

  const CANCEL = () => {
    document.querySelector('#edit-experience-details').classList.toggle('hidden');
  }

  return (
    <div id='edit-experience-details' className='hidden'>

      <div id='edit-position' className='child-container'>
        <label htmlFor='edit-position'>Position:</label>
        <input type='text' name='edit-position' />
      </div>

      <div id='edit-company' className='child-container'>
        <label htmlFor='edit-company'>Company:</label>
        <input type='text' name='edit-company' />
      </div>
      
      <div id='edit-city' className='child-container'>
        <label htmlFor='edit-city'>City:</label>
        <input type='text' name='edit-city' />
      </div>
      
      <div id='edit-experience-start-date' className='child-container'>
        <label htmlFor='experience-start-date-edit'>Start-Date:</label>
        <input type='number' name='experience-start-date-edit' />
      </div>

      <div id='edit-experience-end-date' className='child-container'>
        <label htmlFor='experience-end-date-edit'>End-Date:</label>
        <input type='number' name='experience-end-date-edit' />
      </div>
      <div id='experience-operations'>
        <i className="fas fa-window-close" onClick={CANCEL}/>
        <i className="fas fa-check-square" id='experience-square'onClick={props.update}/>
      </div>
      
    </div>
  )

}

export default EDIT_EXPERIENCE
