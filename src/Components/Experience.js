import React from 'react';

const Experience = (props) => {
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
      e.target.name === 'position' ||
      e.target.name === 'company' ||
      e.target.name === 'city'
    ) {
      VALIDATE.CHECK_FIRST_LETTER(e);
    }
  };

  return (
    <div id='experience-container'>
      <h3 id='experience-title'>Experience</h3>
      <form noValidate id='experience-form' onChange={CHANGE_FORM}>
        <div className='child-container' id='position-container'>
          <label htmlFor='position'>Position:</label>
          <input
            type='text'
            name='position'
            autoComplete='off'
            onChange={change}
          />
          <span id='position-error' aria-live='polite' />
        </div>

        <div className='child-container' id='company-container'>
          <label htmlFor='company'>Company:</label>
          <input
            type='text'
            name='company'
            autoComplete='off'
            onChange={change}
          />
          <span id='company-error' aria-live='polite' />
        </div>

        <div className='child-container' id='city-container'>
          <label htmlFor='city'>City:</label>
          <input type='text' name='city' autoComplete='off' onChange={change} />
          <span id='city-error' aria-live='polite' />
        </div>

        <div className='child-container' id='experience-start-container'>
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

        <div className='child-container' id='experience-end-container'>
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
          id='experience-submit'
          onClick={formSubmit}
        />
      </form>
    </div>
  );
};

export default Experience;
