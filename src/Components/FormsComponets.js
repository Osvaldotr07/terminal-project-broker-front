import React, { useEffect } from 'react'
import { FieldProps, getIn } from 'formik'
import { TextInput } from 'carbon-components-react'

export const TextInputForm = ({field, form, ...props}) => {
    const errorText = getIn(form.touched, field.name)  && getIn(form.errors, field.name)
    const invalidCheck = Boolean(getIn(form.touched, field.name) && getIn(form.errors, field.name))

    useEffect(() => {
        console.log('field', field)
        console.log(getIn(form.touchd))
    }, [])
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