import React, {useState} from 'react'
import {
    Formik,
    Form
} from 'formik'
import { Button } from 'carbon-components-react'
import SubmitButton from './SubmitButton'


const WrapperForm = ({ formData, handleSubmit, validationSchema, step, children, onBack, setFormData, isConfirm }) => {
    const [ direction, setDirection ] = useState(null)
    return (
        <div className="form-container">
            <Formik
                initialValues={formData}
                onSubmit={(values, actions, errors) => {
                    handleSubmit(values, direction)
                    errors = direction === 'back' ? undefined : errors
                }}
                validationSchema={validationSchema}
            >
                {
                    ({
                        values,
                        validateForm,
                        errors,
                        setFieldValue,
                        touched
                    }) => (
                        <>
                            <Form noValidate="noValidate">
                                {children}
                                <SubmitButton 
                                step={step} 
                                setDirection={setDirection} 
                                formData={formData} 
                                setFormData={setFormData} 
                                isConfirm={isConfirm}/>
                            </Form>
                        </>
                    )
                }
            </Formik>
        </div>
    )
}

export default WrapperForm