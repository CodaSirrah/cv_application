import React from 'react';

const GeneralInfo = (props) => {
  const { change } = props;

  const VALIDATE = (() => {
    const SPECIALS = [
      '!',
      '?',
      ';',
      ':',
      '<',
      '>',
      '@',
      '#',
      '~',
      '£',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '-',
      '_',
      '[',
      ']',
      '{',
      '}',
      '|',
    ];
    const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const LETTERS = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'z',
    ];

    const checkName = (e) => {
      let error = e.target.parentElement.children[2];
      let firstLetter = e.target.value.charAt(0);
      let check = {
        specials: false,
        firstLetter: false,
        numbers: false,
      };

      SPECIALS.forEach((character) => {
        if (e.target.value.includes(character)) {
          return (check.specials = true);
        }
      });
      NUMBERS.forEach((number) => {
        if (e.target.value.includes(number)) {
          return (check.numbers = true);
        }
      });
      if (check.specials === true) {
        return (error.textContent = 'No special characters allowed.');
      } else if (check.numbers === true) {
        return (error.textContent = 'No number characters allowed.');
      } else if (firstLetter !== firstLetter.toUpperCase()) {
        return (error.textContent = 'Please capitalize the 1st letter.');
      } else {
        return (error.textContent = '');
      }
    };
    const checkEmail = (e) => {
      let error = e.target.parentElement.children[2];
      if (
        !e.target.value.includes('@') &&
        e.target.value &&
        e.target.value.charAt(0) !== ''
      ) {
        return (error.textContent =
          'An email address requires the "@" symbol.');
      } else if (e.target.value.length > 0 && e.target.value.length < 6) {
        return (error.textContent =
          'An email address requires atleast 6 characters.');
      } else {
        return (error.textContent = '');
      }
    };
    const checkPhone = (e) => {
      let error = e.target.parentElement.children[2];
      let check = {
        specials: false,
        letters: false,
      };
      SPECIALS.forEach((character) => {
        if (e.target.value.includes(character)) {
          return (check.specials = true);
        }
      });
      LETTERS.forEach((letter) => {
        if (e.target.value.includes(letter)) {
          return (check.letters = true);
        }
      });
      if (check.specials === true) {
        return (error.textContent = 'No special characters allowed.');
      } else if (check.letters === true) {
        return (error.textContent = 'No Latin characters allowed.');
      } else if (e.target.value.length > 0 && e.target.value.length < 7) {
        return (error.textContent = 'A phone number requires atleast 7 digits');
      } else {
        return (error.textContent = '');
      }
    };
    return {
      checkName,
      checkEmail,
      checkPhone,
    };
  })();

  const CHANGE_FORM = (e) => {
    if (e.target.name === 'firstName' || e.target.name === 'lastName') {
      VALIDATE.checkName(e);
    }
    if (e.target.name === 'email') {
      VALIDATE.checkEmail(e);
    }
    if (e.target.name === 'phone') {
      VALIDATE.checkPhone(e);
    }
  };

  return (
    <div id='general-info-container'>
      <form noValidate id='general-info-form' onChange={CHANGE_FORM}>
        <div className='child-container' id='fn-container'>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            name='firstName'
            autoComplete='off'
            onChange={change}
          />
          <span id='first-name-error' aria-live='polite'></span>
        </div>

        <div className='child-container' id='ln-container'>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            autoComplete='off'
            onChange={change}
          />
          <span id='last-name-error' aria-live='polite'></span>
        </div>

        <div className='child-container' id='email-container'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            spellCheck='off'
            autoComplete='off'
            onChange={change}
          />
          <span id='email-error' aria-live='polite'></span>
        </div>

        <div className='child-container' id='phone-container'>
          <label htmlFor='phone'>Phone:</label>
          <input type='tel' name='phone' autoComplete='off' onChange={change} />
          <span id='phone-error' aria-live='polite'></span>
        </div>

        <div className='child-container' id='description-container'>
          <label htmlFor='description' id='description-label'>
            Description:
          </label>
          <textarea
            name='description'
            placeholder='Sell yourself...'
            onChange={change}
          />
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
