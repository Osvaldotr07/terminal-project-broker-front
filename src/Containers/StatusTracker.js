import React, {useEffect, useState} from 'react'
import { Grid, Row, Column } from 'carbon-components-react';
import { ContainerView, TitleError404 } from '../assets/styles/General-styles'
import IndicatorStatusTracker from '../Components/IndicatorStatusTracker'
import {getForms} from '../actions/index'

//redux
import { connect } from 'react-redux'

const StatusTracker = ({ forms, getForms, tk, email }) => {
    const [statusTracker, setStatusTracker] = useState([])
    const statusKey = {
        1: 'enviado',
        2: 'validando',
        3: 'Esperando Autorizacion',
        4: 'Aceptado',
        0: 'Rechazado'
    }
    useEffect(() => {
        getForms(tk, email)
        let formFixed = forms.data ?  forms.data.map(item => {
            return {
                id: item._id,
                companyName: item.companyName,
                name: item.name,
                status: statusKey[item.status],
                userEmail: item.userEmail
            }
        })
        : []
        setStatusTracker(formFixed)
    }, statusTracker)
    console.log(statusTracker)
    return (
        <ContainerView>
            <Grid style={{ margin: '10px' }}>
                {
                     statusTracker.map(item => (
                        <Row>
                            <Column sm={2} md={2} lg={4}>
                                <IndicatorStatusTracker  step={0} spaceEqually />
                            </Column>
                            {/* <Column >
                                {handleStep(step)}
                            </Column> */}
                        </Row>
                    ))
                }
            </Grid>
        </ContainerView>
    )
}

const mapDispatchToProps = {
    getForms
}
const mapStateToProps = state => {
    return {
        forms: state.forms ? state.forms : [],
        tk: state.data.token,
        email: state.data.user.email
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusTracker)