// @flow
import {
    TrackType
} from './track-type';
import {
    LabelOptions
} from './label-options';

const LabelToTrackMap = {
    [LabelOptions.AUDIO]: TrackType.AUDIO,
    [LabelOptions.CAPTIONS]: TrackType.TEXT,
    [LabelOptions.QUALITIES]: TrackType.VIDEO
};

export {
    LabelToTrackMap
};



// WEBPACK FOOTER //
// ./track/label-to-track-map.js


// WEBPACK FOOTER //
// core/track/label-to-track-map.js