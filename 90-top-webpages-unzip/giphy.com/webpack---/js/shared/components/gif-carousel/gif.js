import { Gif } from '@giphy/react-giphy-brand'
import PropTypes from 'prop-types'
import gifProps from 'shared/prop-types/gif'
import { giphyBlack } from 'shared/css/colors.css'
import useCanVideoAutoPlay from 'shared/hooks/can-video-autoplay'

const CarouselGif = ({ gif, width, height, onClick, isAnimating = false }) => {
    const useVideo = useCanVideoAutoPlay()
    return (
        <Gif
            key={gif.id}
            gif={gif}
            width={width}
            height={height}
            autoPlay={isAnimating}
            backgroundColor={giphyBlack}
            rendition={'original'}
            showTags={false}
            hideLock
            hideAdIndicator
            useVideo={useVideo}
            onClick={e => {
                e.preventDefault()
                onClick && onClick()
            }}
        />
    )
}

CarouselGif.propTypes = {
    gif: gifProps.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    isAnimating: PropTypes.bool,
    onClick: PropTypes.func,
}

export default CarouselGif
