import React from 'react'

const EDIT_EDUCATION = (props) => {
  
  const CANCEL = () => {
    document.querySelector('#edit-education-details').classList.toggle('hidden');
  }

  return (
    <div id='edit-education-details' className='hidden'>

      <div id='edit-school' className='child-container'>
        <label htmlFor='edit-school'>School:</label>
        <input type='text' name='edit-school' />
      </div>

      <div id='edit-subject' className='child-container'>
        <label htmlFor='edit-subject'>Subject:</label>
        <input type='text' name='edit-subject' />
      </div>
      
      <div id='edit-degree' className='child-container'>
        <label htmlFor='edit-degree'>Degree:</label>
        <input type='text' name='edit-degree' />
      </div>
      
      <div id='edit-education-start-date' className='child-container'>
        <label htmlFor='education-start-date-edit'>Start-Date:</label>
        <input type='number' name='education-start-date-edit' />
      </div>

      <div id='edit-education-end-date' className='child-container'>
        <label htmlFor='education-end-date-edit'>End-Date:</label>
        <input type='number' name='education-end-date-edit' />
      </div>
      <div id='education-operations'>
        <i className="fas fa-window-close" onClick={CANCEL}/>
        <i className="fas fa-check-square" id='education-square'onClick={props.update}/>
      </div>
      
    </div>
  )
}
export default EDIT_EDUCATION
