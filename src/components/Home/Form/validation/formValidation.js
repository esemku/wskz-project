export const checkNumberExist = value => {
  return value.match(/\d/)
}

export const checkSpecialCharacter = value => {
  const specialCharRegex = /[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/

  return value.match(specialCharRegex)
}

export const checkZipCode = value => {
  const zipcodeRegex = /\d{2}-\d{3}/

  return value.match(zipcodeRegex)
}

export const checkUpperCase = value => {
  const uppercaseRegex = /[A-Z]/

  return value.match(uppercaseRegex)
}

export const checkEmail = value => {
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
}
