import { baseUrl } from "../../main"
import { CHANGE_LANGUAGE } from "../actionTypes"

export const changeLanguage = (language) => {

  window.localStorage.setItem('language', language)

  return{
    type: CHANGE_LANGUAGE,
    payload: language
  }
}

export const registerUser = (user) => () => {
  fetch(`${baseUrl}/user/register`,{
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(() => window.location.href='/')
  .catch(error => console.log(error))
}