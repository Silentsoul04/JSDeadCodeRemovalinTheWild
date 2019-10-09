import PropTypes from 'prop-types'

const { string, number, oneOfType } = PropTypes

export default {
    height: oneOfType([number, string]),
    url: string,
    width: oneOfType([number, string]),
}
