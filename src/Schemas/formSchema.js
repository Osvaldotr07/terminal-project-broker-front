import * as yup from 'yup'

const regexp = {
    numberPhoneRegex: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    emailRegex: /www.([a-z A-Z]{1,60})/
}

export const UserInfoSchema = () => yup.object({
    name: yup
    .string()
    .required('Nombre es requerido')
    .max(35, 'El nombre no puede tener mas 35 caracteres'),
    lastName: yup
    .string()
    .required('El apellido es requerido')
    .max(35, 'El apellido no debe de tener mas 35 caracteres'),
    phoneNumberUser: yup
    .string()
    .required('El numero telefonico es requerido')
    .max(25, 'Solo se puede ingresar 25 numeros')
    .nullable()
    .matches(regexp.numberPhoneRegex, 'No es un telefono valido'),
    jobTitle: yup
    .string()
    .required('El rol del trabajo es requerido')
    .max(60, 'Solo se permiten 60 caracteres'),
    userEmail: yup
    .string()
    .required('El correo debe de ser requerido')
    .email('El correo electronico no es valido ejemplo(example@exa.com)'),
    phoneOwner: yup
    .string()
    .required('El numero es requerido')
    .nullable()
    .max(25, 'Solo se pueden ingresar 25 numeros')
    .matches(regexp.numberPhoneRegex, 'No es un telefono valido'),
    ownerEmail: yup
    .string()
    .required('El correo es requerido')
    .max(60, 'No se pueden ingresar mas de 60 caracteres')
    .email('El correo electronico no es valido ejemplo(example@exa.com)'),
    ownerName: yup
    .string()
    .required('El correo es requerido')
    .max(60, 'No se pueden ingresar mas de 60 caracteres'),
    ownerLastName: yup
    .string()
    .required('El apellido es requerido')
    .max(60, 'No se pueden ingresar mas de 60 caracteres')
    .matches()
});

export const CompanyName = () => yup.object({
    companyName: yup
    .string()
    .required('El nombre de la compañia es requerido')
    .max(60, 'Solo se permiten 60 caracteristicas'),
    rfcCompany: yup
    .string()
    .required('El RFC es requerido')
    .max(13,' solo se permiten 13 caracteres'),
    companyUrl: yup
    .string()
    .max(60, 'No se permiten mas de 60 caracteres')
    .matches(regexp.emailRegex, 'No es una URL valida ejemplo: www.url.com'),
    companyPhoneNumber: yup
    .string()
    .required('El numero telefonico es requerido')
    .max(25, 'Solo se puede ingresar 25 numeros')
    .nullable()
    .matches(regexp.numberPhoneRegex, 'No es un numero telefonico valido'),
    facebookProfile: yup
    .string(),
    twitterProfile: yup
    .string()
})