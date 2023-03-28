import { useState } from "react"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

const initialSignIn = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: ''
}

export default function Register() {
  const [inputType, setInputType] = useState('password')
  const [inputFiels, setInputFiels] = useState(initialSignIn)

  const navigate = useNavigate()

  const handleInputType = (e) => {
    e.preventDefault();
    setInputType(inputType === 'password' ? "text" : "password")
  }

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <form className="w-screen min-h-screen bg-gradient-to-b from-amber-200 via-amber-100 to-zinc-400 flex flex-wrap justify-center content-center">
      <div className="flex flex-col items-center text-orange-900 border-solid border-2 border-amber-900 rounded-3xl p-10">
        <h3 className="font-bold underline">Sign in</h3>

        <div className="grid grid-cols-2 m-2">
          <label className="text-center">Firstname:</label>
          <input className="inputForm text-left" />
        </div>

        <div className="grid grid-cols-2 m-2">
          <label className="text-center">Lastname:</label>
          <input className="inputForm text-left" />
        </div>

        <div className="grid grid-cols-2 m-2">
          <label className="text-center">Username:</label>
          <input className="inputForm text-left" />
        </div>

        <div className="grid grid-cols-2 m-2">
        <label className="text-center">Email:</label>
        <input className="inputForm text-left" />
        </div>

        <div className="grid grid-cols-2 m-2">
        <label className="text-center">Password:</label>
        <div className="flex">
          <input type={inputType} className="inputForm text-left" />
          <button className="flex flex-wrap justify-center content-center" onClick={handleInputType}>
            {inputType === "password" ? <AiOutlineEye size="20px" /> : <AiOutlineEyeInvisible size="20px" />}
          </button>
        </div>
        </div>

        <div>
          <input type="submit" value="submit" className="btn" />
          <input type="button" value="Home" className="btn" onClick={handleGoHome} />
        </div>

      </div>
    </form>
  )
}
