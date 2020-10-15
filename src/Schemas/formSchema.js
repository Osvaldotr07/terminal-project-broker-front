import react from 'react'
import * as yup from 'yup'

export const UserInfoSchema = () => yup.object({
    nombreField: yup.string().required('Nombre es requerido').max(35, 'El nombre no puede tener mas 35 caracteres')
})
