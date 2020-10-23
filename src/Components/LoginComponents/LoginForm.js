import React from 'react'
import { Formik, Field, Form } from 'formik'
import { TitleArticle } from '../../assets/styles/General-styles'
import { TextInputForm } from '../FormsComponets'
import { Button } from 'carbon-components-react'
import { LoginSchema } from '../../Schemas/formSchema'

//redux
import { connect } from 'react-redux'

//actions
import { loginUser } from '../../actions'

const LoginForm = ( {loginUser } ) => {
    const initialData = {
        email: '',
        password: ''
    }
    return (
        <div className="form-container">
            <Formik
                initialValues={initialData}
                validationSchema={LoginSchema}
                onSubmit={
                    (values, actions, errors) => {
                       loginUser(values, "/init")
                    }
                }
            >
                {
                    ({
                        values,
                        validateForm
                    }) => (
                            <>
                                <TitleArticle>Iniciar sesión</TitleArticle>
                                <Form>
                                    <div className="form-fieldset">
                                        <div className="form-field">
                                            <Field
                                                style={{ width: '300px' }}
                                                autoFocus
                                                labelText="Usuario"
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
                                        Enviar
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
    loginUser
}

export default connect(null, mapDispatchToProps)(LoginForm)
