import React from 'react'
import { Button } from 'carbon-components-react'
const SubmitButton = ({step, setDirection, formData, setFormData}) => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        {
            step > 1 ?
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

        <Button
            style={{ marginLeft: '10px' }}
            kind="primary"
            type='submit'
            onClick={() => setDirection('forward')}
        >
            Next
        </Button>
    </div>
)

export default SubmitButton