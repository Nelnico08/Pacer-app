import { CHANGE_LANGUAGE } from "../actionTypes"

export const changeLanguage = (language) => {
  return{
    type: CHANGE_LANGUAGE,
    payload: language
  }
}

export const registerUser = (user) => () => {
  fetch(`http://localhost:3001/user/register`,{
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(() => window.location.href='/')
  .catch(error => console.log(error))
}