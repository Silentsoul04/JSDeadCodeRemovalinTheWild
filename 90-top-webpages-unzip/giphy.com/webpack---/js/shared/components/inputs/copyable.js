import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars

/**
 * Copyable Input: Controls a copyable input which
 * autoselects itself when clicked and shows a
 * message when it is copied from.
 *
 * @class CopyableInput
 */
const CopyableInput = ({ className, value, onCopy }) => (
    <input
        className={className}
        type="text"
        value={value}
        readOnly={true}
        spellCheck={false}
        onClick={e => e.target.select()}
        onFocus={e => e.target.select()}
        onCopy={() => onCopy && onCopy()}
    />
)

CopyableInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    onCopy: PropTypes.func,
}

export default CopyableInput
