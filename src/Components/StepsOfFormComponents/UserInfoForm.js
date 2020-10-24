import React, { useEffect } from 'react'

//Componentes
import {
    Column,
    Grid,
    Row
} from 'carbon-components-react'
import {Field} from 'formik'

import { TextInputForm } from '../FormsComponets'


import { TitleArticle } from '../../assets/styles/General-styles'

import WrapperForm from '../WrapperForm'

const UserInfoForm = (
    {
        setFormData,
        formData,
        validationSchema,
        onBack,
        handleSubmit,
        step,
        nextStep,
        isConfirm
    }
) => {
    return (
        <>
            <WrapperForm 
            validationSchema={validationSchema} 
            formData={formData} 
            step={step} 
            onBack={onBack} 
            nextStep={nextStep} 
            handleSubmit={handleSubmit} 
            setFormData={setFormData} 
            isConfirm={isConfirm}>

                <Grid>
                    <TitleArticle>Información del usuario</TitleArticle>
                    <Row>
                        <Column>
                            <div className="form-fieldset">
                                <div className="form-field">
                                    <Field
                                        style={{ width: '300px' }}
                                        autoFocus
                                        labelText="Nombre"
                                        name="name"
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
                                        labelText="Apellido"
                                        name="lastName"
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
                                        labelText="Numero de telefono"
                                        name="phoneNumberUser"
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
                                        labelText="Rol de trabajo"
                                        name="jobTitle"
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
                                        labelText="Correo electronico"
                                        name="userEmail"
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
                                        labelText="Fecha de aplicación"
                                        name="applicationDate"
                                        disabled
                                        value={new Date()}
                                        tabIndex="-1"
                                        component={TextInputForm}
                                    />
                                </div>
                            </div>
                        </Column>
                    </Row>
                    <TitleArticle>Información del presidente de la compañia</TitleArticle>
                    <Row>
                        <Column>
                            <div className="form-fieldset">
                                <div className="form-field">
                                    <Field
                                        style={{ width: '300px' }}
                                        labelText="Nombre"
                                        name="ownerName"
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
                                        labelText="Apellido"
                                        name="ownerLastName"
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
                                        labelText="Numero telefonico"
                                        name="phoneOwner"
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
                                        labelText="Correo electronico"
                                        name="ownerEmail"
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

export default UserInfoForm