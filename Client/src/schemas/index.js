import * as yup from "yup"

const namesRules = /^[a-zA-Z]+$/
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/

export const basicSchema = yup.object().shape({
    firstname: yup.string().matches(namesRules, { message: "Enter a valid name" }).required("Required"),
    lastname: yup.string().matches(namesRules, { message: "Enter a valid name" }).required("Required"),
    username: yup.string().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup
        .string()
        .min(10)
        .matches(passwordRules, { message: "Password must have at least 10 characters, 1 upper case letter, 1 lower case letter and 1 number"})
        .required("Required")
})

export const basicSchemaEs = yup.object().shape({
    firstname: yup.string().matches(namesRules, { message: "Ingrese un nombre válido" }).required("Requerido"),
    lastname: yup.string().matches(namesRules, { message: "Ingrese un nombre válido" }).required("Requerido"),
    username: yup.string().required("Requerido"),
    email: yup.string().email("Ingrese un correo válido").required("Requerido"),
    password: yup
        .string()
        .min(10)
        .matches(passwordRules, { message: "La contraseña debe tener al menos 10 caracteres, 1 minúscula, 1 mayúscula y 1 número"})
        .required("Requerido")
})