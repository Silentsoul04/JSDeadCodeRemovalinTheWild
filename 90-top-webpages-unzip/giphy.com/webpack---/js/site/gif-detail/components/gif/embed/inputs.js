import PropTypes from 'prop-types'
import CopyableInput from 'shared/components/inputs/copyable'
import css from './inputs.css'

const { string } = PropTypes

/**
 * GIF Detail - Embed Inputs: Controls the
 * copy/paste text input and embed type
 * toggles on the GIF Detail page.
 *
 * @class GifEmbedInputs
 */
const GifEmbedInputs = ({ className, code }) => (
    <div className={className}>
        <div className={css.row}>
            <span className={css.label}>GIF Embed Code</span>
            <CopyableInput
                className={css.input}
                value={code}
                onCopy={() => {
                    global.showSuccess('Copied embed code to clipboard!')
                }}
            />
        </div>
    </div>
)

GifEmbedInputs.propTypes = {
    className: string,
    code: string.isRequired,
}

export default GifEmbedInputs
