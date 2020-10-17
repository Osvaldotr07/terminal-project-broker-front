import React, { useState, useEffect, useCallback } from 'react'
import * as yup from 'yup';

import { Grid, Row, Column, Button } from 'carbon-components-react';
import UserInfoForm from '../Components/StepsOfFormComponents/UserInfoForm'
import TermsForm from '../Components/StepsOfFormComponents/TermsForm'
import CompanyForm from '../Components/StepsOfFormComponents/CompanyForm'

import ProgressIndicatorComponent from '../Components/ProgressIndicatorComponent'

//data
import formFiledDefatult from '../utils/dataForm'

//schema
import { UserInfoSchema, CompanyName } from '../Schemas/formSchema'

const FormLanding = () => {
    const [step, setStep] = useState(2)
    const [formData, setFormData] = useState(formFiledDefatult)

    const nextStep = () => setStep((prev) => prev + 1)
    const backStep = () => setStep((prev) => prev - 1)

    const handleSubmit = (values, direction) => {
        console.log(values)
        setFormData(values)
        direction === 'back' ? backStep() : nextStep()
    }

    const validationUserInfo = formData.validate ? UserInfoSchema : null
    const validateTerms = formData.validate ? yup.object({
        terms: yup
            .boolean()
            .oneOf([true], 'Necesitas aceptar los terminos y condiciones')

    }) : null
    const validateCompany = formData.validate ? CompanyName : null

    const handleStep = useCallback((value) => {
        switch (value) {
            case 0:
                return (
                    <TermsForm
                        setFormData={setFormData}
                        formData={formData}
                        validationSchema={validateTerms}
                        handleSubmit={handleSubmit}
                        onBack={backStep}
                        step={step}
                        nextStep={nextStep} />
                )
            case 1:
                return (
                    <UserInfoForm
                        setFormData={setFormData}
                        formData={formData}
                        validationSchema={validationUserInfo}
                        handleSubmit={handleSubmit}
                        onBack={backStep}
                        step={step}
                        nextStep={nextStep} />
                )
            case 2:
                return <CompanyForm
                    setFormData={setFormData}
                    formData={formData}
                    validationSchema={validateCompany}
                    handleSubmit={handleSubmit}
                    onBack={backStep}
                    step={step}
                    nextStep={nextStep} />
            default:
                return <h1>Final</h1>
        }
    })

    return (
        <>
            <Grid style={{ margin: '10px' }}>
                <Row>
                    <Column sm={2} md={2} lg={4}>
                        <ProgressIndicatorComponent vertical step={step} spaceEqually />
                    </Column>
                    <Column >
                        {handleStep(step)}
                    </Column>
                </Row>
            </Grid>
        </>
    )
}

export default FormLanding 