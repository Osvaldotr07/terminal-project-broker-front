import React from 'react'

import {
    Content,
    ProgressIndicator,
    ProgressStep
} from 'carbon-components-react'

const ProgressIndicartorComponent = ({
    step
}) => {

    const stylesProgress = {
        border: 'none',
        background: 'none'
    }

    return (
        <Content style={{marginTop: 20}}>
            <div className="bx--grid maincontent">
                <div className="bx--row form-container">
                    <div className="bx--col-md-16">
                        <ProgressIndicator vertical currentIndex={step} spaceEqually>
                            <ProgressStep
                                style={stylesProgress}
                                description="Step 1: Inicio"
                                label="Inicio"
                            />
                            <ProgressStep
                                style={stylesProgress}
                                description="Step 2: Informacion del usuario"
                                label="Información del usuario"
                            />
                            <ProgressStep
                                style={stylesProgress}
                                description="Step 3: Detalles de la compañia"
                                label="Detalles de la compañia"
                            />
                            <ProgressStep
                                style={stylesProgress}
                                description="Step 4: Dirección de la compañia"
                                label="Dirección de la compañia"
                            />
                            <ProgressStep
                                style={stylesProgress}
                                description="Step 5: Confirmación"
                                label="Confirmación"
                            />
                        </ProgressIndicator>
                    </div>
                    <div className="bx--col">
                        {/* {handleFormStepChange(step)} */}
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default ProgressIndicartorComponent