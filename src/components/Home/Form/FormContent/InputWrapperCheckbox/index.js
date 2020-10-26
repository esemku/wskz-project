import React from 'react'


const InputWrapperCheckbox = ({ name, content, handleBlur, handleChange, error, touched }) => {
  return (
    <div className='form__input-wrapper'>
      <div className='form__radio-wrapper'>
        <label>
          <input
            name={name}
            type='checkbox'
            className='form__input--checkbox'
            value='true'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {content}
        </label>
      </div>
    </div>
  )
}


export default InputWrapperCheckbox
