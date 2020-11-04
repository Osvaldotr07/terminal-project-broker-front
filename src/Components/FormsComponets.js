import React from 'react'
import { FieldProps, getIn } from 'formik'
import { TextInput, SelectItem, Select } from 'carbon-components-react'
import {
    FormHelperText,
    FormControl
} from '@material-ui/core'

export const TextInputForm = ({field, form,...props}) => {
    const errorText = getIn(form.touched, field.name)  && getIn(form.errors, field.name)
    const invalidCheck = Boolean(getIn(form.touched, field.name) && getIn(form.errors, field.name))
    console.log(form)
    return (
        <TextInput
            onChange={() => form.handleSubmit(form.values)}
            id={field.name}
            invalidText={errorText}
            invalid={invalidCheck}
            {...field} 
            {...props}
        />
    )
}

export const SelectInputForm = ({field, form, options, ...props}) => {
    const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name)
    return (
        <>
        <FormControl fullWidth error={!!errorText}>
            <Select fullWidth {...field} {...props} error={errorText} defaultValue="placeholder-item">
                <SelectItem label="Seleccione el pais" value="placeholder-item" disabled hidden />
                {
                    options.map(op => (
                        <SelectItem key={op.name} value={op.name} text={op.name}/>
                    ))
                }
            </Select>
            <FormHelperText>{errorText}</FormHelperText>
        </FormControl>
        </>
    )
}
