import React from 'react'


const InputWrapperRadio = ({ name, title, handleBlur, handleChange, error, touched }) => {
  return (
    <div className='form__input-wrapper'>
      <div className='form__input-title'>{title}</div>
      <div className='form__radio-wrapper'>
        <label>
          <input
            name={name}
            type='radio'
            className='form__input--radio'
            value='male'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          Mężczyzna
        </label>
        <label>
          <input
            name={name}
            type='radio'
            className='form__input--radio'
            value='female'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          Kobieta
        </label>
      </div>
    </div>
  )
}


export default InputWrapperRadio
