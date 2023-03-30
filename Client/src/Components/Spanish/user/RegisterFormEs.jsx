import { useState } from "react"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { basicSchemaEs } from '../../../schemas'

export default function RegisterForm() {
  const [inputType, setInputType] = useState('password')

  const onSubmit = (values, actions) => {
    actions.resetForm()
  }

  const { 
    values, 
    errors, 
    touched, 
    isSubmitting, 
    handleBlur, 
    handleChange, 
    handleSubmit 
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema: basicSchemaEs,
    onSubmit,
  })

  const navigate = useNavigate()

  const handleInputType = (e) => {
    e.preventDefault();
    setInputType(inputType === 'password' ? "text" : "password")
  }

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="w-screen min-h-screen bg-gradient-to-b from-amber-200 via-amber-100 to-zinc-400 flex flex-wrap justify-center content-center">
      <div className="flex flex-col items-center text-orange-900 border-solid border-2 border-amber-900 rounded-3xl sm:p-10 p-0">
        <h3 className="font-bold underline">Regístrate</h3>

        <div className="grid grid-cols-2 m-2">
          <label className="text-center">Nombre* :</label>
          <input 
            className={errors.firstname && touched.firstname ? "inputForm text-left border-red-600 border-2" : "inputForm text-left"} 
            value={values.firstname}
            onChange={handleChange}
            id="firstname"
            type="text"
            placeholder="Ingresa tu nombre"
            onBlur={handleBlur}
          />
        </div>

        <div className="grid grid-cols-2 m-2">
          <label className="text-center">Apellido* :</label>
          <input 
            className={errors.lastname && touched.lastname ? "inputForm text-left border-red-600 border-2" : "inputForm text-left"}
            value={values.lastname}
            onChange={handleChange}
            id="lastname"
            type="text"
            placeholder="Ingresa tu apellido"
            onBlur={handleBlur}
          />
        </div>

        <div className="grid grid-cols-2 m-2">
          <label className="text-center">Nombre usuario* :</label>
          <input 
            className={errors.username && touched.username ? "inputForm text-left border-red-600 border-2" : "inputForm text-left"}
            value={values.username}
            onChange={handleChange}
            id="username"
            type="text"
            placeholder="Ingresa tu nombre usuario"
            onBlur={handleBlur} 
          />
        </div>

        <div className="grid grid-cols-2 m-2">
          <label className="text-center">Email* :</label>
          <input 
            className={errors.email && touched.email ? "inputForm text-left border-red-600 border-2" : "inputForm text-left"}
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Ingresa tu email"
            onBlur={handleBlur}
          />
        </div>

        <div className="grid grid-cols-2 m-2 max-w-[394px]">
          <label className="text-center">Contraseña* :</label>
          <div className="flex">
            <input 
              className={errors.password && touched.password ? "inputForm text-left border-red-600 border-2 max-w-md" : "inputForm text-left max-w-[90%]"} 
              type={inputType}
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="Ingresa tu contraseña"
              onBlur={handleBlur}
            />
            <button className="flex flex-wrap justify-center content-center" onClick={handleInputType}>
              {inputType === "password" ? <AiOutlineEye size="20px" /> : <AiOutlineEyeInvisible size="20px" />}
            </button>
          </div>
        </div>

        <p>* Campos Requeridos</p>

        <div>
          <input type="submit" disabled={isSubmitting} value="Enviar" className="btn" />
          <input type="button" value="Inicio" className="btn" onClick={handleGoHome} />
        </div>

      </div>
    </form>
  )
}