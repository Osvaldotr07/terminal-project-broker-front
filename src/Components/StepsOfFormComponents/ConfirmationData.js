import React, {useState, useEffect} from 'react'

//Componentes
import {
    Button,
    Loading
} from 'carbon-components-react'

import { Formik, Field, Form } from 'formik'
import { connect } from 'react-redux'
import { createOneForm, updateOneForm } from '../../actions/index'

//Components
import UserInfoForm from './UserInfoForm'
import CompanyAddress from './CompanyAddress'
import CompanyForm from './CompanyForm'

const ConfirmationData = (
    {
        formData,
        validationSchemaUser,
        validationSchemaCompany,
        validationSchemaAddress,
        createOneForm,
        updateOneForm,
        tk,
        email
    }
) => {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <>
            {
                !isLoading ?
                    <>
                        <UserInfoForm formData={formData} validationSchema={validationSchemaUser} isConfirm={true}/>
                        <CompanyForm formData={formData} validationSchema={validationSchemaCompany} isConfirm={true}/>
                        <CompanyAddress formData={formData} validationSchema={validationSchemaAddress} isConfirm={true}/>
                    </>
                : null
            }

           <Formik
            initialValues={formData}
            onSubmit={(values) => {
                setIsLoading(true)
                values.userEmail = email
                values.applicationDate = new Date()
                values.status = 'Enviado'
                window.location.pathname === '/edit' ? updateOneForm(values, '/myforms', tk) : createOneForm(values, '/myforms', tk)
            }}
           >
               {({handleSubmit, isSubmiting}) => (
                   <Form>
                    {
                        !isLoading ? 
                            <Button
                                className='button'
                                type='submit'
                                disabled={isSubmiting}
                            >
                                Enviar
                            </Button>
                        : 
                        <>
                            <h1>Gracias por el registro</h1>
                            <Loading
                                description="Active loading indicator"
                                withOverlay={false}
                                small={false}
                            />
                        </>
                    }
                   </Form>
               )}

           </Formik>
        </>
    )
}

const mapDispatchToProps = {
    createOneForm,
    updateOneForm
}

const mapStateToProps = (state) => {
    return {
        tk: state.data.token,
        email: state.data.user.email,
        filtered: (state.itemFiltered || {}) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationData)