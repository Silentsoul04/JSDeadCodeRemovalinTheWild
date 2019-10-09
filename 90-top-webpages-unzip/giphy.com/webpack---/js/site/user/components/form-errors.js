import { PureComponent } from 'react'
import { connect } from 'react-redux'
import log from 'shared/util/log'
import withLocationState from 'shared/components/with-location-state'
import { message } from 'shared/redux/message'

@withLocationState(['formErrors'])
@connect(
    undefined,
    { message },
)
class FormErrors extends PureComponent {
    componentDidMount() {
        // for testing..
        // const errors = {
        //         username: [
        //             {
        //                 message: 'A user with that username already exists.',
        //                 code: 'unique',
        //             },
        //         ]
        // }
        const { formErrors, message } = this.props
        if (formErrors) {
            log.warn(`form errors:`, formErrors)
            const [firstKey] = Object.keys(formErrors)
            if (firstKey) {
                const [error] = formErrors[firstKey]
                if (error) {
                    message(error.message, 'error')
                }
            }
        }
    }
    render() {
        return null
    }
}

export default FormErrors
