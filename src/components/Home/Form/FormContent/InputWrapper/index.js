import React from 'react'

import OutlineInfoIcon from '../../../../../media/icons/OutlineInfoIcon'
import CheckIcon from '../../../../../media/icons/CheckIcon'


const InputWrapper = ({ name, placeholder, type, value, handleBlur, handleChange, error, touched }) => {
  return (
    <div className='form__input-wrapper'>
      <input
        name={name}
        type={type ? type : 'text'}
        className='form__input'
        placeholder={placeholder}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <div className='form__icon-wrapper'>
        {error && <OutlineInfoIcon />}
        {touched && !error && <CheckIcon />}
      </div>
      <div className='form__input-msg'>{error}</div>
    </div>
  )
}


export default InputWrapper
