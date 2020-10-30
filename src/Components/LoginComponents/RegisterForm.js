import React from 'react'
import { Formik, Field, Form } from 'formik'
import { TitleArticle } from '../../assets/styles/General-styles'
import { TextInputForm } from '../FormsComponets'
import { Button } from 'carbon-components-react'
import { ResgisterSchema } from '../../Schemas/formSchema'

//redux
import { connect } from 'react-redux'

//actions
import { registerUser } from '../../actions'

const RegisterForm = ({ registerUser }) => {
    const initialData = {
        name: '',
        email: '',
        password: '',
        isAdmin: false
    }
    return (
        <div className="form-container">
            <Formik
                initialValues={initialData}
                validationSchema={ResgisterSchema}
                onSubmit={
                    (values, actions, errors) => {
                        registerUser(values, "/login")
                    }
                }
            >
                {
                    ({
                        values,
                        validateForm
                    }) => (
                            <>
                                <TitleArticle>Crear cuenta</TitleArticle>
                                <Form>
                                    <div className="form-fieldset">
                                        <div className="form-field">
                                            <Field
                                                style={{ width: '300px' }}
                                                autoFocus
                                                labelText="Nombre de usuario"
                                                name="name"
                                                component={TextInputForm}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-fieldset">
                                        <div className="form-field">
                                            <Field
                                                style={{ width: '300px' }}
                                                autoFocus
                                                labelText="Email"
                                                name="email"
                                                component={TextInputForm}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-fieldset">
                                        <div className="form-field">
                                            <Field
                                                style={{ width: '300px' }}
                                                type="password"
                                                autoFocus
                                                labelText="Contraseña"
                                                name="password"
                                                component={TextInputForm}
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        style={{ marginLeft: '10px' }}
                                        kind="primary"
                                        type='submit'
                                    >
                                        Crear
                                    </Button>
                                </Form>
                            </>
                        )
                }

            </Formik>
        </div>
    )
}

const mapDispatchToProps = {
    registerUser
}



export default connect(null, mapDispatchToProps)(RegisterForm)
