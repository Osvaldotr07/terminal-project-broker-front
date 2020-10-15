import * as React from 'react'

//Componentes
import {
    Button,
    Column,
    Grid,
    Row
} from 'carbon-components-react'

import { TextInputForm } from '../Components/FormsComponets'
import {
    Field,
    Formik,
    Form
} from 'formik'

import { TitleArticle } from '../assets/styles/General-styles'

//schemas

import dataForm from '../utils/dataForm'

const UserInfoForm = (
    {
        setForm,
        formData,
        validationSchema
    }
) => {
    return (
        <>
            <div className="form-container">

                <Formik
                    initialValues={formData}
                    onSubmit={({values, errors}) => {
                        setForm(values)
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
                            <Form>
                                <TitleArticle>User Info</TitleArticle>
                                <Grid>
                                    <Row>
                                        <Column>
                                            <div className="form-fieldset">
                                                <div className="form-field">
                                                    <Field
                                                        style={{ width: '300px' }}
                                                        autoFocus
                                                        labelText="Nombre"
                                                        name="nombreField"
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
                                                        labelText="Apellido"
                                                        name="appelidoField"
                                                        component={TextInputForm}
                                                    />
                                                </div>
                                            </div>
                                        </Column>
                                    </Row>
                                </Grid>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </>
    )
}

export default UserInfoForm