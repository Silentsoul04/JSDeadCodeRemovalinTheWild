import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import {
    isBoolean
} from 'lodash'
import css from './radio.css'
import {
    uniqueId
} from 'lodash'

const Radio = ({
    className,
    value,
    children,
    group,
    title,
    isChecked,
    onChange = () => {}
}) => {
    const id = uniqueId(`${group}_`)

    return ( <
        div className = {
            `${css.inputGroup} ${className}`
        }
        title = {
            title
        } >
        <
        input type = "radio"
        className = {
            css.radioInput
        }
        name = {
            group
        }
        id = {
            id
        }
        value = {
            value
        }
        onChange = {
            onChange
        }
        defaultChecked = {
            isBoolean(isChecked) ? isChecked : null
        }
        required /
        >
        <
        label className = {
            css.label
        }
        htmlFor = {
            id
        } >
        <
        div className = {
            css.radio
        }
        /> {
            children
        } <
        /label> <
        /div>
    )
}

Radio.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    group: PropTypes.string.isRequired,
    children: PropTypes.node,
    title: PropTypes.string,
    isChecked: PropTypes.bool,
}

export default Radio