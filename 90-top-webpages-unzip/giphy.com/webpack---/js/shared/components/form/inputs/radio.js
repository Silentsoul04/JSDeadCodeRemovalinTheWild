import styled from 'styled-components'
import SharedRadio from 'shared/components/inputs/radio'

const Container = styled.div`
    display: flex;
`

const Radio = styled(SharedRadio)`
    width: 50%;
`
const Radios = ({ inputs, group, onChange }) => (
    <Container>
        {inputs.map(({ value, label }) => (
            <Radio key={value} {...{ group, value, onChange }}>
                {label}
            </Radio>
        ))}
    </Container>
)

export default Radios
