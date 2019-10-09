import * as slideshowSelector from './slideshow'
import * as errorSelector from './error'
import * as drawSelector from 'shared/redux/draw'
import * as filterSelector from 'shared/redux/creation-filters'

export const getSlideshow = ({ slideshow }) => slideshowSelector.getSlideshow(slideshow)
export const getSlideshowStartFileId = ({ slideshow }) => slideshowSelector.getStartFileId(slideshow)
export const getSlideshowTotalDuration = ({ slideshow }) => slideshowSelector.getTotalDuration(slideshow)
export const getSlideshowStillDuration = ({ slideshow }) => slideshowSelector.getStillDuration(slideshow)
export const getSlideshowMaxStillDuration = ({ slideshow }) => slideshowSelector.getStillMaxDuration(slideshow)
export const getSlideshowDurations = ({ slideshow }) => slideshowSelector.getDurations(slideshow)
export const getSlideshowTotalFileSize = ({ slideshow }) => slideshowSelector.getTotalFileSize(slideshow)
export const getSlideshowReady = ({ slideshow }) => slideshowSelector.getReady(slideshow)
export const getLetterbox = ({ slideshow }) => slideshowSelector.getLetterbox(slideshow)
export const getDrawLineStyle = ({ draw }) => drawSelector.getLineStyle(draw)
export const getDrawLineWidth = ({ draw }) => drawSelector.getLineWidth(draw)
export const getDrawColor = ({ draw }) => drawSelector.getColor(draw)
export const getDrawSticker = ({ draw }) => drawSelector.getSticker(draw)
export const getDrawLineStep = ({ draw }) => drawSelector.getLineStep(draw)
export const getError = ({ error }) => errorSelector.getError(error)
export const getCurrentFilter = ({ creationFilters }) => filterSelector.getCurrentFilter(creationFilters)
export const hasFilter = ({ creationFilters }) => filterSelector.hasFilter(creationFilters)
export const getFilters = ({ creationFilters }) => filterSelector.getFilters(creationFilters)
