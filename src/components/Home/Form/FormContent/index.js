import React, { useState, useEffect } from 'react'
import './FormContent.scss'
import { Formik } from 'formik'

import InputWrapper from './InputWrapper'


const FormContent = () => {

  const [userData, serUserData] = useState({
    login: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    province: '',
    town: '',
    postcode: '',
    phone: '',
    pesel: '',
    regApproval: false,
    marApproval: false
  })

  const handleFormikSubmit = (e, email, password, firstName) => {
    e.preventDefault()
    console.log('email: ', email)
    console.log('password: ', password)
    console.log('firstName: ', firstName)
  }

  return (
    <Formik
      initialValues={userData}
      validate={values => {
        const errors = {}

        if (!values.email) {
          errors.email = 'Pole wymagane'
        }

        if (!values.password) {
          errors.password = 'Pole wymagane'
        }

        return errors
      }}
      enableReinitialize={true}
    >
      {({ errors, touched, values, handleBlur, handleChange }) => (
        <form noValidate={true} autoComplete='off' className='form'>
      		<div className='form__header'>
      			<h1 className='form__h1'>Formularz rejestracji</h1>
      			<p className='form__p'>Uzupełnij pola poniżej, aby utworzyć konto</p>
      		</div>
      		<div className='form__inputs-wrapper'>
            <InputWrapper
              name='login'
              placeholder='Login'
              value={values.login}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.login}
              touched={touched.login}
            />
            <InputWrapper
              name='email'
              placeholder='Email'
              type='email'
              value={values.email}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.email}
              touched={touched.email}
            />
            <InputWrapper
              name='password'
              placeholder='Hasło'
              type='password'
              value={values.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.password}
              touched={touched.password}
            />
            <InputWrapper
              name='firstName'
              placeholder='Imię'
              value={values.firstName}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.firstName}
              touched={touched.firstName}
            />
            <InputWrapper
              name='lastName'
              placeholder='Nazwisko'
              value={values.lastName}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.lastName}
              touched={touched.lastName}
            />
            <InputWrapper
              name='address'
              placeholder='Adres'
              value={values.address}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.address}
              touched={touched.address}
            />
            <InputWrapper
              name='province'
              placeholder='Województwo'
              value={values.province}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.province}
              touched={touched.province}
            />
            <InputWrapper
              name='town'
              placeholder='Miasto'
              value={values.town}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.town}
              touched={touched.town}
            />
            <InputWrapper
              name='postcode'
              placeholder='Kod pocztowy'
              value={values.postcode}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.postcode}
              touched={touched.postcode}
            />
            <InputWrapper
              name='phone'
              placeholder='Telefon'
              value={values.phone}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.phone}
              touched={touched.phone}
            />
            <InputWrapper
              name='pesel'
              placeholder='Pesel'
              value={values.pesel}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.pesel}
              touched={touched.pesel}
            />

            <div className='form__btn-wrapper'>
              <button
                type='submit'
                className='form__btn form__btn--submit'
                onClick={(e) => handleFormikSubmit(e, values.email, values.password, values.firstName)}
              >
                Zarejestruj się
              </button>
            </div>

          </div>
        </form>
      )}
    </Formik>
  )
}


export default FormContent
