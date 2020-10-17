import React from 'react'
import {Formik, Field, Form} from 'formik'
import { Grid, Row, Column } from 'carbon-components-react'

import WrapperForm from '../WrapperForm'
import SubmitButton from '../SubmitButton'
import { TitleArticle } from '../../assets/styles/General-styles'

const TermsForm = ({step, onBack, formData, validationSchema, handleSubmit, nextStep}) => {
    return (
        <>
            <WrapperForm validationSchema={validationSchema} formData={formData} step={step} onBack={onBack} nextStep={nextStep} handleSubmit={handleSubmit}>
                <Grid>
                    <TitleArticle>Terminos</TitleArticle>
                    <Row>
                        <Column>
                        </Column>
                    </Row>
                </Grid>
            </WrapperForm>
        </>
    )
}

export default TermsForm