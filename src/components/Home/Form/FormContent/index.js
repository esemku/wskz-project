import React, { useState } from 'react'
import './FormContent.scss'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { register } from '../../../../redux/actions/formActions'

import InputWrapper from './InputWrapper'
import InputWrapperRadio from './InputWrapperRadio'
import InputWrapperCheckbox from './InputWrapperCheckbox'
import {
  checkEmail,
  checkZipCode,
  checkNumberExist,
  checkSpecialCharacter,
  checkUpperCase
} from '../validation/formValidation'


const FormContent = ({ register }) => {
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
    regApproval: '',
    marApproval: ''
  })

  const handleFormikSubmit = (e, values) => {
    e.preventDefault()
    register({ data: values })
  }

  return (
    <Formik
      initialValues={userData}
      validate={values => {
        const errors = {}
        /*Login*/
        if (values.login.length < 4) {
          errors.login = 'Minimum 4 znaki'
        }
        /*Password*/
        if (values.password.length < 8) {
          errors.password = 'Minimum 8 znaków'
        }
        if (!checkUpperCase(values.password)) {
          errors.password = 'Minimum 1 wielka litera'
        }
        if (!checkNumberExist(values.password)) {
          errors.password = 'Minimum 1 cyfra'
        }
        if (!checkSpecialCharacter(values.password)) {
          errors.password = 'Minimum 1 znak specjalny'
        }
        /*Zip code*/
        if (!checkZipCode(values.postcode)) {
          errors.postcode = 'Nieprawidłowy kod pocztowy'
        }
        if (values.postcode.length > 6) {
          errors.postcode = 'Nieprawidłowy kod pocztowy'
        }
        /*Email*/
        if (checkEmail(values.email)) {
          errors.email = 'Email jest niepoprawny'
        }
        /*Pesel*/
        if (values.pesel.length !== 9 && values.pesel.length !== 16) {
          errors.pesel = 'Nieprawidłowy pesel'
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
            <InputWrapperRadio
              name='gender'
              title='Płeć'
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.gender}
              touched={touched.gender}
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
              name='postcode'
              type='text'
              placeholder='Kod pocztowy'
              value={values.postcode}
              handleBlur={handleBlur}
              handleChange={handleChange}
              error={errors.postcode}
              touched={touched.postcode}
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
            <InputWrapperCheckbox
              name='regApproval'
              content='Wyrażam zgodę na przetwarzanie danych'
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <InputWrapperCheckbox
              name='marApproval'
              content='Wyrażam zgodę na przesyłanie reklam'
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <div className='form__btn-wrapper'>
              <button
                type='submit'
                disabled={Object.values(errors).length > 0}
                className='form__btn form__btn--submit'
                onClick={(e) => handleFormikSubmit(e, values)}
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


const mapDispatchToProps = {
  register
}

export default connect(null, mapDispatchToProps)(FormContent)
