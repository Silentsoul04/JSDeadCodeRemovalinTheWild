import styled, { css } from 'styled-components'
import { colors } from '@giphy/react-giphy-brand'

// margin right for click area
const Container = styled.div`
    width: 38px;
    position: relative;
`

const Icon = styled.svg`
    left: 50%;
    margin: -19px 0 0 -19px;
    position: absolute;
    top: 50%;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    ${props =>
        !props.isSearchVisible &&
        css`
            opacity: 0;
            transform: rotate(${props.rotate});
        `};
`

const SearchIcon = ({ isSearchVisible, onClick }) => (
    <Container onClick={onClick}>
        <Icon
            isSearchVisible={!isSearchVisible}
            rotate={`-90deg`}
            width="38"
            height="38"
            xmlns="http://www.w3.org/2000/svg"
        >
            <svg width="39px" height="39px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path
                        d="M15.8134723,24.1354338 L9.77039087,30.7069375 C9.39655341,31.1134642 8.76394322,31.1399641 8.35741647,30.7661267 C7.95088972,30.3922892 7.92438982,29.759679 8.29822728,29.3531523 L14.3963624,22.7217809 C13.1606554,21.1764738 12.4200672,19.2033871 12.4200672,17.0554591 C12.4200672,12.1072603 16.3504207,8.08695652 21.2100336,8.08695652 C26.0696465,8.08695652 30,12.1072603 30,17.0554591 C30,22.0036578 26.0696465,26.0239616 21.2100336,26.0239616 C19.1746699,26.0239616 17.3023175,25.3187173 15.8134723,24.1354338 Z M21.2100336,24.1693451 C25.0321861,24.1693451 28.1406227,20.9897687 28.1406227,17.0554591 C28.1406227,13.1211495 25.0321861,9.94157304 21.2100336,9.94157304 C17.3878811,9.94157304 14.2794445,13.1211495 14.2794445,17.0554591 C14.2794445,20.9897687 17.3878811,24.1693451 21.2100336,24.1693451 Z"
                        id="Combined-Shape"
                        fill={colors.giphyPink}
                        fillRule="nonzero"
                    />
                </g>
            </svg>
        </Icon>
        <Icon
            isSearchVisible={isSearchVisible}
            rotate={`90deg`}
            width="38"
            height="38"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h39v39H0z" />
                <path
                    fill={colors.giphyPink}
                    d="M10.858 12.272l15.87 15.87.756.756 1.414-1.414-.756-.756-15.87-15.87-.756-.756-1.414 1.414z"
                />
                <path
                    fill={colors.giphyPink}
                    d="M28.142 12.272l-15.87 15.87-.756.756-1.414-1.414.756-.756 15.87-15.87.756-.756 1.414 1.414z"
                />
            </g>
        </Icon>
    </Container>
)

export default SearchIcon
