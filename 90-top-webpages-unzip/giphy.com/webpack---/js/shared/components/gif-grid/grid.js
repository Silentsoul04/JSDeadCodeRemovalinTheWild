import loadable from '@loadable/component'
import PropTypes from 'prop-types'
import { propTypes as preloadPropTypes, isInRange } from './preload-range'
import { uniq, sample, isEmpty, uniqueId } from 'lodash'
import GridBase from './grid-base'
import GifPreview from '../gif-preview'
import Label from '../gif-grid/gif-label'
import { Helmet } from 'react-helmet'
import { giphyRed, giphyYellow, giphyBlue, giphyPurple, giphyGreen } from '../../css/colors.css'
import gifPropTypes from 'shared/prop-types/gif'

const { arrayOf, element, func, string, bool, array } = PropTypes

// TODO, get these from css
const hexes = [giphyRed, giphyYellow, giphyBlue, giphyPurple, giphyGreen]
const postHexes = [giphyRed, giphyBlue, giphyPurple]

const GifEditPanel = loadable(() =>
    import(/* webpackChunkName: "gifEditPanel" */ 'shared/components/edit-panel/gif-modal'),
)

export default class Grid extends GridBase {
    static defaultProps = {
        autoPlay: false,
        css: {},
        isInPriorityRange: [],
        isInPreloadRange: [],
        isVisibleOnScreen: [],
        afterGif: Label,
        editMode: {},
    }
    static propTypes = {
        children: element,
        gifs: arrayOf(gifPropTypes).isRequired,
        columnGifs: array,
        isWebPOkay: bool,
        backgroundColor: string,
        onGifSeen: func,
        onGifHover: func,
        onGifPreClick: func,
        onGifClick: func,
        onDragEnd: func,
        onContextMenu: func,
        // queueing (loading) strategy for GifPreview
        queueStillGif: bool,
        ...preloadPropTypes,
    }
    backgroundColors = []
    gridId = uniqueId('grid')
    /**
     * Only rerender on the below changes
     */
    shouldComponentUpdate(nextProps) {
        if (nextProps.autoPlay !== this.props.autoPlay) {
            return true
        }
        if (nextProps.backgroundColor !== this.props.backgroundColor) {
            return true
        }
        if (nextProps.gifs !== this.props.gifs) {
            return true
        }
        if (nextProps.columnGifs !== this.props.columnGifs) {
            return true
        }
        if (nextProps.isInPriorityRange !== this.props.isInPriorityRange) {
            return true
        }
        if (nextProps.isInPreloadRange !== this.props.isInPreloadRange) {
            return true
        }
        if (nextProps.isVisibleOnScreen !== this.props.isVisibleOnScreen) {
            return true
        }
        if (nextProps.editMode !== this.props.editMode) {
            return true
        }
        return false
    }
    getContainer() {
        return this.gifsGrid
    }
    getElements() {
        return (
            // convert element list to regular array
            [].slice
                .call(this.getContainer().getElementsByTagName('li'))
                // grab all with indexes (index is a String)
                .filter(el => el.dataset.index)
                .sort((a, b) => parseInt(a.dataset.index) - parseInt(b.dataset.index))
        )
    }
    getImageUrls(gif) {
        const { isWebPOkay } = this.props
        const {
            animated: { webp, url },
            still: { url: still },
        } = gif.images
        const animated = isWebPOkay && webp ? webp : url
        return { animated, still }
    }
    getBackgroundColor(index, isPost) {
        // a backgroundColor can ba passed in, or we'll use the randomized hexes
        let backgroundColor = this.props.backgroundColor || this.backgroundColors[index]
        if (!backgroundColor) {
            backgroundColor = sample(isPost ? postHexes : hexes)
            // save it so gifs have the same color
            this.backgroundColors[index] = backgroundColor
        }
        return backgroundColor
    }
    getGifs() {
        const {
            shouldUseLinkFallback,
            gifs,
            isInPriorityRange,
            isInPreloadRange,
            isVisibleOnScreen,
            autoPlay,
            css,
            gifHeight,
            gifWidth,
            queueStillGif,
            onGifSeen,
            onGifHover,
            onGifPreClick,
            pageType,
            searchResponseId,
            onGifClick,
            isWebPOkay,
            onDragEnd,
            onContextMenu,
            beforeGif,
            gridTemplate,
            afterGif,
            // TODO not sure if we need this,
            // but if we rearrange grid items,
            // this would be ideal
            useIdAsKey = true,
        } = this.props

        return uniq(gifs, gif => gif.id).map((gif, index) => {
            const width = gifWidth ? gifWidth[index] : this.getGifWidth(gif),
                height = gifHeight ? gifHeight[index] : this.getGifHeight(gif),
                backgroundColor = this.getBackgroundColor(index, !isEmpty(gif.post)),
                componentProps = { width, height, gif, backgroundColor, ...this.props } // pass all props

            return (
                <li
                    className={css.item}
                    data-gif={true}
                    data-sticker={gif.is_sticker}
                    data-y={gif.y}
                    data-index={index}
                    key={useIdAsKey ? gif.id : index}
                    style={{ backgroundColor, marginBottom: gif.margin }}
                >
                    <GifPreview
                        pageType={pageType}
                        searchResponseId={searchResponseId}
                        gridTemplate={gridTemplate}
                        id={gif.id}
                        url={gif.url}
                        gridId={this.gridId}
                        preventDrag={isWebPOkay}
                        onSeen={onGifSeen ? rect => onGifSeen(gif, rect) : null}
                        onHover={onGifHover ? rect => onGifHover(gif, rect) : null}
                        onPreClick={onGifPreClick ? rect => onGifPreClick(gif, rect) : null}
                        onClick={onGifClick ? () => onGifClick(gif) : null}
                        onDragEnd={onDragEnd ? () => onDragEnd() : null}
                        onContextMenu={onContextMenu ? () => onContextMenu() : null}
                        isInPriorityRange={isInRange(index, isInPriorityRange)}
                        isInPreloadRange={isInRange(index, isInPreloadRange)}
                        isVisibleOnScreen={isInRange(index, isVisibleOnScreen)}
                        {...{ autoPlay, width, height, index, queueStillGif }}
                        {...this.getImageUrls(gif)}
                        isHidden={!!gif.is_hidden}
                        beforeGif={gif.beforeGif || beforeGif}
                        afterGif={gif.afterGif || afterGif}
                        beforeAfterProps={componentProps}
                        isPrivate={gif.is_private}
                        isSticker={gif.is_sticker}
                        user={gif.user}
                        tags={gif.tags}
                        shouldUseLinkFallback={shouldUseLinkFallback}
                        title={gif.title}
                    />
                </li>
            )
        })
    }
    getColumns() {
        // an array of columns containing an array of gif indexes in that column
        const { columnGifs } = this.props
        // an array of li wrapping GifPreviews
        const gifComponents = this.getGifs()
        return columnGifs.map(({ gifIndexes, margin, offsetY }, i) => {
            const children = gifIndexes.map(index => gifComponents[index])
            return (
                <ul
                    key={i}
                    className={this.props.css.column}
                    style={{ marginTop: offsetY, marginRight: i < columnGifs.length - 1 ? margin : 0 }}
                >
                    {children}
                </ul>
            )
        })
    }
    render() {
        const { children, columnGifs, documentTitle, editMode, toggleEditMode, updateEditMode } = this.props
        return (
            <div>
                <ul className={this.props.css.grid} ref={c => (this.gifsGrid = c)}>
                    {documentTitle ? (
                        <Helmet>
                            <title>{documentTitle}</title>
                        </Helmet>
                    ) : null}
                    {children}
                    {columnGifs ? this.getColumns() : this.getGifs()}
                </ul>
                {editMode && editMode.isEditing && (
                    <GifEditPanel
                        onClose={() => {
                            toggleEditMode()
                            updateEditMode()
                        }}
                    />
                )}
            </div>
        )
    }
}
