import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/actions/user";


export default function useLanguage() {

  const language = useSelector(state => state.user.language)
  const dispatch = useDispatch();

  if(window.localStorage.getItem('language') && window.localStorage.getItem('language') !== 'EN' && window.localStorage.getItem('language') !== 'ES'){
    dispatch(changeLanguage('EN'))
  }

  if(window.localStorage.getItem('language') && window.localStorage.getItem('language') !== language){
    dispatch(changeLanguage(window.localStorage.getItem('language')))
  }

  const handlerLanguage = (e) => {
    e.preventDefault();
    dispatch(changeLanguage(e.target.value))
  }

  return{
    language,
    handlerLanguage
  }
}