import React from 'react'
import ButtonGroup from './button-group'

const buttonProps = [
    { val: 'male', label: 'Male' },
    { val: 'female', label: 'Female' },
    { val: 'other', label: 'Non-binary' },
]
const GenderButtonGroup = ({ className = '', defaultSelectedValue }) => (
    <ButtonGroup
        groupName="gender"
        className={className}
        buttons={buttonProps}
        defaultSelectedValue={defaultSelectedValue}
    />
)

export default GenderButtonGroup
