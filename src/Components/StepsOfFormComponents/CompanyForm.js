import React from 'react'

import { Grid, Row, Column } from 'carbon-components-react'
import { Field } from 'formik'
import WrapperForm from '../WrapperForm'
import { TextInputForm } from '../FormsComponets'

import { TitleArticle } from '../../assets/styles/General-styles'

const CompanyForm = ({ step, onBack, formData, validationSchema, handleSubmit, nextStep, setFormData }) => {
    return (
        <>
            <WrapperForm validationSchema={validationSchema} formData={formData} step={step} onBack={onBack} nextStep={nextStep} handleSubmit={handleSubmit} setFormData={setFormData}>
                <Grid>
                    <TitleArticle>Datos de la compañia</TitleArticle>
                    <Row>
                        <Column>
                            <div className="form-fieldset">
                                <div className="form-field">
                                    <Field
                                        style={{ width: '300px' }}
                                        autoFocus
                                        labelText="Nombre de la compañia"
                                        name="companyName"
                                        component={TextInputForm}
                                    />
                                </div>
                            </div>
                        </Column>
                        <Column>
                            <div className="form-fieldset">
                                <div className="form-field">
                                    <Field
                                        style={{ width: '300px' }}
                                        autoFocus
                                        labelText="RFC de la compañia"
                                        name="rfcCompany"
                                        component={TextInputForm}
                                    />
                                </div>
                            </div>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <div className="form-fieldset">
                                <div className="form-field">
                                    <Field
                                        style={{ width: '300px' }}
                                        autoFocus
                                        labelText="URL de la compañia"
                                        name="companyUrl"
                                        component={TextInputForm}
                                    />
                                </div>
                            </div>
                        </Column>
                        <Column>
                            <div className="form-fieldset">
                                <div className="form-field">
                                    <Field
                                        style={{ width: '300px' }}
                                        autoFocus
                                        labelText="Numero telefonico de la compañia"
                                        name="companyPhoneNumber"
                                        component={TextInputForm}
                                    />
                                </div>
                            </div>
                        </Column>
                        <Column>
                            <div className="form-fieldset">
                                <div className="form-field">
                                    <Field
                                        style={{ width: '300px' }}
                                        autoFocus
                                        labelText="Facebook de la compañia"
                                        name="facebookProfile"
                                        component={TextInputForm}
                                    />
                                </div>
                            </div>
                        </Column>
                        <Column>
                            <div className="form-fieldset">
                                <div className="form-field">
                                    <Field
                                        style={{ width: '300px' }}
                                        autoFocus
                                        labelText="Twitter de la compañia"
                                        name="twitterProfile"
                                        component={TextInputForm}
                                    />
                                </div>
                            </div>
                        </Column>
                    </Row>
                </Grid>
            </WrapperForm>
        </>
    )
}

export default CompanyForm