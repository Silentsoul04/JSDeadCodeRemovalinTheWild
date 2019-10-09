import React from 'react'
import { findIndex } from 'lodash'
import styled from 'styled-components'
import { InputButton as BrandInputButton, ButtonGroup as BrandButtonGroup } from '@giphy/react-giphy-brand'
const InputButton = styled(BrandInputButton)`
    flex: 1;
`

type ButtonProps = {
    val: string | boolean
    label: string
}
type Props = {
    className?: string
    groupName: string
    buttons: ButtonProps[]
    defaultSelectedValue?: string | boolean
    onClick?: () => void
}

const getIndex = (buttons: ButtonProps[], val: any): number =>
    findIndex(buttons, ({ val: buttonVal }) => val === buttonVal)

const ButtonGroup = ({ className, groupName, buttons = [], defaultSelectedValue, onClick }: Props) => (
    <BrandButtonGroup
        buttonProps={{ name: groupName }}
        className={className}
        defaultSelectedIndex={getIndex(buttons, defaultSelectedValue)}
    >
        {buttons.map((buttonProps: ButtonProps) => (
            <InputButton key={buttonProps.label} val={buttonProps.val} label={buttonProps.label} onClick={onClick} />
        ))}
    </BrandButtonGroup>
)

export default ButtonGroup
