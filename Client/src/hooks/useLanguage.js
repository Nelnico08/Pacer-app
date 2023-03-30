import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/actions/user";


export default function useLanguage() {

  const language = useSelector(state => state.user.language)
  const dispatch = useDispatch();

  const handlerLanguage = (e) => {
    e.preventDefault();
    dispatch(changeLanguage(e.target.value))
  }

  return{
    language,
    handlerLanguage
  }
}