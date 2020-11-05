import React, {useEffect} from 'react'

//Componentes
import {
    Button
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
    return (
        <>
            <UserInfoForm formData={formData} validationSchema={validationSchemaUser} isConfirm={true}/>
            <CompanyForm formData={formData} validationSchema={validationSchemaCompany} isConfirm={true}/>
            <CompanyAddress formData={formData} validationSchema={validationSchemaAddress} isConfirm={true}/>

           <Formik
            initialValues={formData}
            onSubmit={(values) => {
                values.userEmail = email
                values.applicationDate = new Date()
                values.status = 'Enviado'
                window.location.pathname === '/edit' ? updateOneForm(values, '/myforms', tk) : createOneForm(values, '/myforms', tk)
            }}
           >
               {({handleSubmit, isSubmiting}) => (
                   <Form>
                    <Button
                        className='button'
                        type='submit'
                        disabled={isSubmiting}
                    >
                        Enviar
                    </Button>
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