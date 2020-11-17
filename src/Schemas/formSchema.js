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
    .max(35, 'El apellido no debe de tener más 35 caracteres'),
    phoneNumberUser: yup
    .string()
    .required('El número telefónico es requerido')
    .max(25, 'Solo se puede ingresar 25 números')
    .nullable()
    .matches(regexp.numberPhoneRegex, 'No es un teléfono valido'),
    jobTitle: yup
    .string()
    .required('El rol del trabajo es requerido')
    .max(60, 'Solo se permiten 60 caracteres'),
    phoneOwner: yup
    .string()
    .required('El número es requerido')
    .nullable()
    .max(25, 'Solo se pueden ingresar 25 números')
    .matches(regexp.numberPhoneRegex, 'No es un teléfono valido'),
    ownerEmail: yup
    .string()
    .required('El correo es requerido')
    .max(60, 'No se pueden ingresar más de 60 caracteres')
    .email('El correo electrónico no es válido ejemplo(example@exa.com)'),
    ownerName: yup
    .string()
    .required('El correo es requerido')
    .max(60, 'No se pueden ingresar más de 60 caracteres'),
    ownerLastName: yup
    .string()
    .required('El apellido es requerido')
    .max(60, 'No se pueden ingresar más de 60 caracteres')
    .matches()
});

export const CompanyName = () => yup.object({
    companyName: yup
    .string()
    .required('El nombre de la compañía es requerido')
    .max(60, 'Solo se permiten 60 características'),
    rfcCompany: yup
    .string()
    .required('El RFC es requerido')
    .max(13,'Solo se permiten 13 caracteres'),
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

export const CompanyAddressSchema = () => yup.object({
    addressCompany: yup
    .string()
    .required('La dirección es requerida')
    .max(60, 'No se permiten más de 60 caracteres'),
    addressNumber: yup
    .number()
    .nullable()
    .required('El número de la dirección es requerido'),
    countryName: yup
    .string()
    .required('El país es requerido')
    .max(30, 'Solo se permiten ingresar 30 características'),
    cityName: yup
    .string()
    .required('La ciudad es requerida')
    .max(60, 'Solo se pueden ingresar 60 caracteres'),
    stateName: yup
    .string()
    .required('El estado es requerido')
    .max(60, 'Solo se pueden ingresar 60 caracteres'),
    zipName: yup
    .number()
    .nullable()
    .required('El Código postal es requerido')
})

export const LoginSchema = () => yup.object({
    email: yup.string().email().required('El correo electrónico es requerido'),
    password: yup.string().min(8, 'La contraseña debe de ser mayor a 8 caracteres').required("La contraseña es requerida")
})

export const ResgisterSchema = () => yup.object({
    name: yup.string().min(8, "El nombre de usuario debe de tener más de 8 dígitos").required("El nombre de usuario es requerido"),
    email: yup.string().email().required('El correo electrónico es requerido'),
    password: yup.string().min(8, 'La contraseña debe de ser mayor a 8 caracteres').required("La contraseña es requerida")
})