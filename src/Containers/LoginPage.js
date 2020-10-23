import React from 'react'
import { Grid, Row, Column } from 'carbon-components-react'
import LoginForm  from '../Components/LoginComponents/LoginForm'
import Logo from '../assets/images/hero-login-image.jpg'
import { Image } from '../assets/styles/General-styles'


const LoginPage = () => {
    return (
        <Grid style={{padding: 0, overflowY: 'hidden', overflowX: 'hidden'}}>
            <Row>
                <Column  style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <LoginForm />
                </Column>
                <Column style={{padding: 0, overflowY: 'hidden'}}>
                    <div style={{height: '100vh', width: '100%' }}>
                        <Image src={Logo} />
                    </div>
                </Column>
            </Row>
        </Grid>
    )
}

export default LoginPage