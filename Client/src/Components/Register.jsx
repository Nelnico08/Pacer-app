import useLanguage from "../hooks/useLanguage"
import RegisterForm from "./English/user/RegisterForm"
import RegisterFormEs from "./Spanish/user/RegisterFormEs"

export default function Register() {

  const { language } = useLanguage()

  return (
    <div>
      {
        language === "EN" ? <RegisterForm /> : <RegisterFormEs />
      }
    </div>
  )
}
