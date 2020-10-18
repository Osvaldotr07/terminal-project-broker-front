import React from 'react'

//Componentes
import {
    Button
} from 'carbon-components-react'

import { Formik, Field, Form } from 'formik' 

//Components
import UserInfoForm from './UserInfoForm'
import CompanyAddress from './CompanyAddress'
import CompanyForm from './CompanyForm'

const ConfirmationData = (
    {
        formData,
        validationSchemaUser,
        validationSchemaCompany,
        validationSchemaAddress
    }
) => {
    return (
        <>
            <UserInfoForm formData={formData} validationSchema={validationSchemaUser} isConfirm={true}/>
            <CompanyForm formData={formData} validationSchema={validationSchemaCompany} isConfirm={true}/>
            <CompanyAddress formData={formData} validationSchema={validationSchemaAddress} isConfirm={true}/>

           <Formik
            initialValues={formData}
            onSubmit={() => console.log(formData)}
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

export default ConfirmationData