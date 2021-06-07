import React from 'react'

const Experience = (props) => {
  const { POSITION, COMPANY, CITY, START, END, FORM_SUBMIT} = props;

  const SHOW_FORM = (e) => { 
    e.target.parentElement.children[1].classList.toggle('hidden');
  }

  const VALIDATE = (() => {
    const CHECK_FIRST_LETTER = (e) => {
      let error = e.target.parentElement.children[2];
      let firstLetter = e.target.value.charAt(0);
      if (e.target.value.charAt(0).toUpperCase() !== firstLetter) {
        return error.textContent = 'Please capitalize the 1st letter.'
      } else {
        return error.textContent = '';
      }
     }
     return { CHECK_FIRST_LETTER }
  })();

  const CHANGE_FORM = (e) => {
    if (e.target.name === 'position' || e.target.name === 'company' || e.target.name === 'city') {
      VALIDATE.CHECK_FIRST_LETTER(e);
    }
  }

  return(
    <div id='experience-container'>
      <button id='experience-btn' onClick={SHOW_FORM}>Experience</button>
      <form noValidate id='experience-form' onChange={CHANGE_FORM}>
        <div className='child-container' id='position-container'>
          <label htmlFor='position'>Position:</label>
          <input type='text' name='position' autoComplete='off' onChange={POSITION} />
          <span id='position-error' aria-live="polite" />
        </div>

        <div className='child-container' id='company-container'>
          <label htmlFor='company'>Company:</label>
          <input type='text' name='company' autoComplete='off' onChange={COMPANY} />
          <span id='company-error' aria-live="polite" />
        </div>

        <div className='child-container' id='city-container'>
          <label htmlFor='city'>City:</label>
          <input type='text' name='city' autoComplete='off' onChange={CITY} />
          <span id='city-error' aria-live="polite" />
        </div>

        <div className='child-container' id='experience-start-container'>
          <label htmlFor='start-date'>Start-Date:</label>
          <input type='number' name='start-date' min='1950' max='2050' step='1' placeholder='2015' onChange={START} />
        </div>

        <div className='child-container' id='experience-end-container'>
          <label htmlFor='end-date'>End-Date:</label>
          <input type='number' name='end-date' min='1950' max='2050' step='1' placeholder='2020' onChange={END} />
        </div>
        <input type='submit' id='experience-submit' onClick={FORM_SUBMIT} />
      </form>
    </div>
  )
}

export default Experience
