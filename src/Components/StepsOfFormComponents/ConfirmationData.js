import React, {useEffect} from 'react'

//Componentes
import {
    Button
} from 'carbon-components-react'

import { Formik, Field, Form } from 'formik'
import { connect } from 'react-redux'
import { createOneForm } from '../../actions/index'

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
                createOneForm(values, '/myforms', tk)
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
    createOneForm
}

const mapStateToProps = ({data}) => {
    return {
        tk: data.token,
        email: data.user.email
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationData)