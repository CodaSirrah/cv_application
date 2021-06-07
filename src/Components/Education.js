import React from 'react'

const Education = (props) => {
const {SCHOOL, SUBJECT, DEGREE, START, END, FORM_SUBMIT} = props;

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
    if (e.target.name === 'school' || e.target.name === 'subject' || e.target.name === 'degree') {
      VALIDATE.CHECK_FIRST_LETTER(e);
    }
  }
  return(
    <div id='education-container'>
      <button id='education-btn' onClick={SHOW_FORM}>Education</button>
      <form noValidate id='education-form' onChange={CHANGE_FORM}>
        <div className='child-container' id='school-container'>
          <label htmlFor='school'>School:</label>
          <input type='text' name='school' autoComplete='off' onChange={SCHOOL} />
          <span id='school-error' aria-live="polite" />
        </div>

        <div className='child-container' id='subject-container'>
          <label htmlFor='subject'>Subject:</label>
          <input type='text' name='subject' autoComplete='off' onChange={SUBJECT} />
          <span id='subject-error' aria-live="polite" />
        </div>

        <div className='child-container' id='degree-container'>
          <label htmlFor='degree'>Degree:</label>
          <input type='text' name='degree' autoComplete='off' onChange={DEGREE} />
          <span id='degree-error' aria-live="polite" />
        </div>

        <div className='child-container' id='education-start-container'>
          <label htmlFor='start-date'>Start-Date:</label>
          <input type='number' name='start-date' min='1950' max='2050' step='1' placeholder='2015' onChange={START} />
        </div>

        <div className='child-container' id='education-end-container'>
          <label htmlFor='end-date'>End-Date:</label>
          <input type='number' name='end-date' min='1950' max='2050' step='1' placeholder='2020'onChange={END} />
        </div>
        <input type='submit' id='education-submit' onClick={FORM_SUBMIT}></input>
      </form>
    </div>
    )
  }

export default Education
