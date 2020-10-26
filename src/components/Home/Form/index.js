import React from 'react'
import './Form.scss'

import FormHeader from './FormHeader'
import FormContent from './FormContent'


const Form = () => {
  return (
    <main>
      {/* <FormHeader /> */}
      <div className='content-wrapper'>
        <FormContent />
      </div>
    </main>
  )
}


export default Form
