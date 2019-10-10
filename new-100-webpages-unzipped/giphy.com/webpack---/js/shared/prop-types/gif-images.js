import PropTypes from 'prop-types'
import imageProps from './image'

const {
    string,
    number,
    oneOfType,
    shape
} = PropTypes

export default shape({
    downsized: shape({
        ...imageProps,
        size: oneOfType([number, string]),
    }),
    downsized_large: shape({
        ...imageProps,
        size: oneOfType([number, string]),
    }),
    downsized_still: shape({
        ...imageProps,
    }),
    fixed_height: shape({
        ...imageProps,
        mp4: string,
    }),
    fixed_height_downsampled: shape(imageProps),
    fixed_height_small: shape(imageProps),
    fixed_height_small_still: shape(imageProps),
    fixed_height_still: shape(imageProps),
    fixed_width: shape({
        ...imageProps,
        mp4: string,
    }),
    fixed_width_downsampled: shape(imageProps),
    fixed_width_small: shape(imageProps),
    fixed_width_small_still: shape(imageProps),
    fixed_width_still: shape(imageProps),
    looping: shape({
        mp4: string,
    }),
    mp4: shape(imageProps),
    source: shape(imageProps),
    original: shape({
        ...imageProps,
        frames: oneOfType([number, string]),
        mp4: string,
        size: oneOfType([number, string]),
    }),
    original_still: shape(imageProps),
})