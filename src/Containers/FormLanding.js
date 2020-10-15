import React, { useState, useEffect, useCallback } from 'react'
import * as yup from 'yup';

import { Grid, Row, Column, Button } from 'carbon-components-react';
import UserInfoForm from '../Components/UserInfoForm'
import ProgressIndicatorComponent from '../Components/ProgressIndicatorComponent'

//data
import FormDefault from '../utils/dataForm'

//schema
import { UserInfoSchema } from '../Schemas/formSchema'

const FormLanding = () => {
    const [step, setStep] = useState(1)
    const [form, setForm] = useState(FormDefault)

    const next = () => setStep((prev) => prev + 1)
    const back = () => setStep((prev) => prev - 1)

    const validationUserInfo = form.validate ? UserInfoSchema : null  

    const handleStep = useCallback((value) => {
        switch (value) {
            case 0:
                return (
                    <h1>Hello world</h1>
                )
            case 1:
                return (
                    <UserInfoForm setForm={setForm} formData={form} validationSchema={validationUserInfo} />
                )
            default:
                return <h1>Final</h1>
        }
    })

    return (
        <>
            <Grid style={{ margin: '10px' }}>
                <Row>
                    <Column sm={2} md={2} lg={4}>
                        <ProgressIndicatorComponent vertical currentIndex={step} spaceEqually />
                    </Column>
                    <Column >
                        {handleStep(step)}
                        <Column>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                {
                                step > 0 ?
                                <Button
                                    kind="primary"
                                    tabIndex={0}
                                    type="submit"
                                    onClick={() => back()}
                                >
                                    Back
                                </Button>
                                : null
                                }

                                <Button
                                style={{marginLeft: '10px'}}
                                    kind="primary"
                                    tabIndex={0}
                                    type="submit"
                                    onClick={() => next()}
                                >
                                    Next
                                </Button>
                            </div>
                        </Column>
                    </Column>
                </Row>
            </Grid>
        </>
    )
}

export default FormLanding 