import React from 'react'
import { Button } from 'carbon-components-react'
const SubmitButton = ({step, setDirection, formData, setFormData, isConfirm}) => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        {
            step > 1 && !isConfirm ?
                <Button
                    kind="primary"
                    type="submit"
                    onClick={() => {
                        setFormData({...formData, validate: false})
                        setDirection('back')
                    }}
                >
                    Back
                </Button>
                : null
        }
        {
            !isConfirm ? 
                <Button
                    style={{ marginLeft: '10px' }}
                    kind="primary"
                    type='submit'
                    onClick={() => setDirection('forward')}
                >
                    Next
                </Button>
            : null
        }
    </div>
)

export default SubmitButton