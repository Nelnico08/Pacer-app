import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/actions";


export default function useLanguage() {

  const language = useSelector(state => state.language)
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