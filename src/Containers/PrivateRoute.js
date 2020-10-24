import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({component: Component, isLogged, ...rest}) => {
    return (
        <Route 
        {...rest}
        render={ props => 
            isLogged ? (<Component {...props}/>)
            : (<Redirect to={{
                pathname: '/login',
            }} />)
        }
        />
    )
}

const mapStateToProps = state => {
    return {
        isLogged: state.user ? state.user.id : undefined 
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)