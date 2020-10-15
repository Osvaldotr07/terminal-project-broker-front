import React from 'react'
import { FieldProps, getIn } from 'formik'
import { TextInput } from 'carbon-components-react'

export const TextInputForm = ({field, form, ...props}) => {
    const errorText = getIn(form.touched, field.name)  && getIn(form.erros, field.name)
    const invalidCheck = Boolean(getIn(form.touched, field.name) && getIn(form.erros, field.name))

    return (
        <TextInput 
            id={field.name}
            invalidText={errorText}
            invalid={invalidCheck}
            {...field}
            {...props}
        />
    )
}