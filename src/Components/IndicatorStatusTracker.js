import React from 'react'

import {
    Content,
    ProgressIndicator,
    ProgressStep
} from 'carbon-components-react'

const IndicatorStatusTracker = ({
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
                    <div className="bx--col-md-18">
                        <ProgressIndicator  currentIndex={step} spaceEqually>
                            <ProgressStep
                                style={stylesProgress}
                                description="Enviado"
                                label="Enviado"
                            />
                            <ProgressStep
                                style={stylesProgress}
                                description="Validando"
                                label="Validando"
                            />
                            <ProgressStep
                                style={stylesProgress}
                                description="Esparando Autorizacion"
                                label="Esperando Autorización"
                            />
                            <ProgressStep
                                style={stylesProgress}
                                description="Aceptado"
                                label="Aceptado"
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

export default IndicatorStatusTracker