import React from 'react';

const Education = (props) => {
  const { change, formSubmit } = props;

  const VALIDATE = (() => {
    const CHECK_FIRST_LETTER = (e) => {
      let error = e.target.parentElement.children[2];
      let firstLetter = e.target.value.charAt(0);
      if (e.target.value.charAt(0).toUpperCase() !== firstLetter) {
        return (error.textContent = 'Please capitalize the 1st letter.');
      } else {
        return (error.textContent = '');
      }
    };
    return { CHECK_FIRST_LETTER };
  })();

  const CHANGE_FORM = (e) => {
    if (
      e.target.name === 'school' ||
      e.target.name === 'subject' ||
      e.target.name === 'degree'
    ) {
      VALIDATE.CHECK_FIRST_LETTER(e);
    }
  };
  return (
    <div id='education-container'>
      <h3 id='education-title'>Education</h3>
      <form noValidate id='education-form' onChange={CHANGE_FORM}>
        <div className='child-container' id='school-container'>
          <label htmlFor='school'>School:</label>
          <input
            type='text'
            name='school'
            autoComplete='off'
            onChange={change}
          />
          <span id='school-error' aria-live='polite' />
        </div>

        <div className='child-container' id='subject-container'>
          <label htmlFor='subject'>Subject:</label>
          <input
            type='text'
            name='subject'
            autoComplete='off'
            onChange={change}
          />
          <span id='subject-error' aria-live='polite' />
        </div>

        <div className='child-container' id='degree-container'>
          <label htmlFor='degree'>Degree:</label>
          <input
            type='text'
            name='degree'
            autoComplete='off'
            onChange={change}
          />
          <span id='degree-error' aria-live='polite' />
        </div>

        <div className='child-container' id='education-start-container'>
          <label htmlFor='start-date'>Start-Date:</label>
          <input
            type='number'
            name='start_date'
            min='1950'
            max='2050'
            step='1'
            placeholder='2015'
            onChange={change}
          />
        </div>

        <div className='child-container' id='education-end-container'>
          <label htmlFor='end-date'>End-Date:</label>
          <input
            type='number'
            name='end_date'
            min='1950'
            max='2050'
            step='1'
            placeholder='2020'
            onChange={change}
          />
        </div>
        <i
          className='fas fa-check-circle'
          id='education-submit'
          onClick={formSubmit}
        />
      </form>
    </div>
  );
};

export default Education;
