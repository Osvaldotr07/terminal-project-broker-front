import React from 'react'

import {
    Content,
    ProgressIndicator,
    ProgressStep
} from 'carbon-components-react'

const ProgressIndicartorComponent = () => {

    const stylesProgress = {
        border: 'none',
        background: 'none'
    }

    return (
        <Content>
            <div className="bx--grid maincontent">
                <div className="bx--row form-container">
                    <div className="bx--col-md-16">
                        <ProgressIndicator vertical currentIndex={1} spaceEqually>
                            <ProgressStep
                                style={stylesProgress}
                                description="Step 1: Terms"
                                label="Terms"
                            />
                            <ProgressStep
                                style={stylesProgress}
                                description="Step 2: User Information"
                                label="User Info"
                            />
                            <ProgressStep
                                style={stylesProgress}
                                description="Step 3: Company Details"
                                label="Company Details"
                            />
                            <ProgressStep
                                style={stylesProgress}
                                description="Step 4: Company Address"
                                label="Company Addresses"
                            />
                            <ProgressStep
                                style={stylesProgress}
                                description="Step 5: Confirmation"
                                label="Confirmation"
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