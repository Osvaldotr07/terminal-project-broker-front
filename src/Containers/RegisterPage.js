import React from 'react'
import { Grid, Row, Column } from 'carbon-components-react'
import RegisterForm  from '../Components/LoginComponents/RegisterForm'
import Logo from '../assets/images/registerimage.jpg'
import { ImageLogin } from '../assets/styles/General-styles'


const RegisterPage = () => {
    return (
        <Grid style={{padding: 0, overflowY: 'hidden', overflowX: 'hidden'}}>
            <Row>
                <Column class="bx--col bx--col-sm-4" style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <RegisterForm />
                </Column>
                <Column class="bx--col" style={{padding: 0, overflowY: 'hidden'}}>
                    <div style={{height: '100vh', width: '100%' }}>
                        <ImageLogin src={Logo} />
                    </div>
                </Column>
            </Row>
        </Grid>
    )
}

export default RegisterPage