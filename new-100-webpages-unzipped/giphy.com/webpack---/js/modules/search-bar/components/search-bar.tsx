import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { debounce, filter, take } from 'lodash'
import { isAndroid } from 'mobile/shared/environment'
import React, { PureComponent } from 'react'
import { channelSocialSearch, getTrendingSearchTerms } from 'shared/api'
import { googleAnalyticsEvent } from 'shared/util/analytics'
import { ThemeProvider } from 'styled-components'
import { getSessionValue } from '../../../shared/redux/init-store'
import ChannelBox from './channel-box'
import getDropDownItems from './get-dropdown-items'
import CancelIcon from './icons/cancel'
import InputPlaceholderEducationAnimation from './input-placeholder-education'
import {
    BlockPage,
    Container,
    DropdownContainer,
    HiddenButton,
    Input,
    InputContainer,
    MainPlaceholder,
    SearchButtonContainer,
    SearchCancel,
    SearchForm,
} from './sc'
import SearchButton from './search-button'
import SearchDropDown from './search-drop-down'
import trendingSearchTerms from './trending-search-terms'

const LARGE_PHONE_SIZE = 628 // iPhone 6 and up
const gaEventSearchStart = () => googleAnalyticsEvent({ action: 'Focus', category: 'Search Bar', label: 'Start' })
const gaEventSearchSubmit = (label: string) => googleAnalyticsEvent({ action: 'Search', category: 'Search Bar', label })

type Props = {
    isOffScreen?: boolean
    needsFixed?: boolean
    scrollTop?: number
    isSticker?: boolean
    onFocus?: Function
    onBlur?: Function
    appHeight?: number
    isDesktop?: boolean
    searchTerm?: string
    isFixed?: boolean
    dontPosition?: boolean
    style?: any
}

type State = {
    currentSelectedChannel: string
    currentSelectedChannelImage: string
    hideCancel: boolean
    searchType: string
    inputText: string
    trendingDropdownItems: Item[]
    dropDownItems: Item[]
    currentCursorPosition: number
    placeholderText: string
    showAnimationPlaceholder: boolean
    backspaceOnChannelBox: boolean
    isInputFocused: boolean
    suppressDropdown: boolean
    focusedIndex: number
    searchMade: boolean
}

type Item = {
    name: string
    link: string
    type: 'trending' | 'tags' | 'channels'
    slug?: string
    img?: string
}
class SearchBar extends PureComponent<Props, State> {
    state = {
        currentSelectedChannel: '',
        currentSelectedChannelImage: '',
        hideCancel: true,
        searchType: '',
        inputText: '',
        trendingDropdownItems: [],
        dropDownItems: [],
        currentCursorPosition: -1,
        placeholderText: '',
        showAnimationPlaceholder: true,
        backspaceOnChannelBox: false,
        isInputFocused: false,
        suppressDropdown: true,
        focusedIndex: -1,
        searchMade: false,
    }
    checkCancelButtonOnDelay: () => void
    checkCancelButtonTimeout: number
    input: HTMLInputElement | null
    maxItems: number
    maxChannels: number
    maxSocialChannels: number
    lastSearchedTerm: any
    dropdownRef: HTMLDivElement | null

    constructor(props) {
        super(props)
        const { searchTerm = '', isDesktop, pageType } = props
        const isChannelSearch = searchTerm && searchTerm.charAt(0) === '@'
        if (isChannelSearch) {
            this.channelSearchForUserTerm(true)
            this.state.currentCursorPosition = this.getSearchTermWithoutChannelName(searchTerm).length
        }

        // I don't know why EXPLORE is different :/
        if (searchTerm && pageType !== 'EXPLORE') {
            this.state.showAnimationPlaceholder = false
            this.state.inputText = isChannelSearch ? this.getSearchTermWithoutChannelName(searchTerm) : searchTerm
        }

        if (!isDesktop) {
            this.state.suppressDropdown = true
        }

        // when using the browser history, safari seems to clear the input field
        // all by itself.
        this.checkCancelButtonOnDelay = () => {
            // @ts-ignore
            this.checkCancelButtonTimeout = setTimeout(this.checkCancelButton, 50)
        }
    }

    async componentDidMount() {
        const { isDesktop, appHeight } = this.props

        if (isDesktop) {
            this.focusInput()
        }

        // the event that fires on browser history is popstate, check the cancel
        // after a delay
        window.addEventListener('popstate', this.checkCancelButtonOnDelay, false)
        // checks user agent, needs to be in cdm
        this.setMaxItems(appHeight)
        // checks this.input, needs to be in cdm
        this.checkCancelButton()

        // default terms
        let terms: any = trendingSearchTerms
        try {
            const { data } = await getTrendingSearchTerms()
            // terms we loaded
            terms = data
        } catch (e) {
            console.error('Trending terms failed', e)
        }

        this.setState({
            trendingDropdownItems: terms.map(
                (name: string) =>
                    ({
                        name,
                        link: `/search/${encodeURIComponent(name)}`,
                        type: 'trending',
                    } as Item),
            ),
        })
    }

    componentDidUpdate(_, prevState) {
        const { suppressDropdown, isInputFocused } = this.state
        const { suppressDropdown: prevSuppressDropdown, isInputFocused: prevIsInputFocused } = prevState
        const { isDesktop } = this.props

        // by the time we've updated the state, the dropdown is on the screen and
        // the dropdown ref now exists. here is where we disable scrolling
        if (prevIsInputFocused !== isInputFocused || prevSuppressDropdown !== suppressDropdown) {
            if (this.dropdownRef && !isDesktop) {
                if (isInputFocused && !suppressDropdown) {
                    disableBodyScroll(this.dropdownRef, {
                        // enables all children (aka the gif carousel) in the target element to be scrollable
                        allowTouchMove: el => {
                            while (el && el !== document.body) {
                                if (el.getAttribute('body-scroll-lock-ignore') !== null) {
                                    return true
                                }
                                el = el.parentNode
                            }
                        },
                    })
                }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        // if we go offScreen to reset the search bar
        if (!this.props.isOffScreen && nextProps.isOffScreen) {
            this.doBlur()
        }

        // on Android, we can't just blur or setSearchBarHeight when appHeight changes,
        // because it changes when the keyboard appears
        if (isAndroid() && nextProps.appHeight > this.props.appHeight!) {
            setTimeout(() => {
                if (this.input === document.activeElement) {
                    this.doBlur()
                }
            }, 100)
        }
    }

    componentWillUnmount() {
        // playing it safe
        clearAllBodyScrollLocks()
        clearTimeout(this.checkCancelButtonTimeout)
        if (this.input) this.input.removeEventListener('keyup', this.checkCancelButton, false)
        window.removeEventListener('popstate', this.checkCancelButtonOnDelay, false)
    }

    setMaxItems(appHeight) {
        if (appHeight < LARGE_PHONE_SIZE) {
            this.maxItems = 3
            this.maxChannels = 1
            this.maxSocialChannels = 4
        } else {
            this.maxItems = isAndroid() ? 4 : 5
            this.maxChannels = 2
            this.maxSocialChannels = isAndroid() ? 7 : 6
        }
    }

    async search() {
        this.setState({ searchMade: true })

        // When we use one store, just use the redux value of searchType
        // which will be in session storage via redux-sessionstorage.
        // With two stores, the value search-bar receives will always be initalized correctly from sessionStorage,
        // but if it's toggled the separate store doesn't know and we have to read it here
        const isStickerMode = getSessionValue('searchType') === 'sticker'
        if (this.input) {
            // this.props.isSticker comes is provided by connect
            const query = this.props.isSticker || isStickerMode ? `${this.input.value} stickers` : this.input.value
            gaEventSearchSubmit(query)

            if (this.state.currentSelectedChannel) {
                location.href = `/search/?q=${this.state.currentSelectedChannel}+${query}`
            } else {
                location.href = `/search/?q=${query}`
            }
        }
    }

    checkCancelButton = () => {
        if (!this.input) {
            return // saftey precaution for the popstate that fires on a delay
        }

        this.setState({
            hideCancel: !this.state.inputText,
        })
    }
    getSearchTerm() {
        if (!this.input) {
            return ''
        }
        return (this.state.inputText || '').trim().toLowerCase()
    }

    checkCursorPosition() {
        if (this.input) {
            const startPosition = this.input.selectionStart || 0
            this.setState({ currentCursorPosition: startPosition })
        }
    }

    getSearchTermWithoutChannelName(searchTerm) {
        const searchQuery = searchTerm.split(' ').splice(1, searchTerm.split(' ').length - 1)

        if (searchQuery.length === 1) {
            return searchQuery[0]
        } else if (searchQuery.length > 0) {
            return searchQuery.join(' ')
        }
        return ''
    }

    async checkForChannelSearchExactMatch(isSearchPage?: boolean) {
        const { isDesktop } = this.props
        // get the search term from props if it is a url search
        const searchTerm = isSearchPage ? this.props.searchTerm : this.state.inputText
        const channelNameWithoutAtSign = (searchTerm || '').split(' ')[0].substring(1)

        const channels = await channelSocialSearch(channelNameWithoutAtSign)

        // take MAX_NUMBER_OF_CHANNELS and map them to the dropdown format
        // handle for case of no channels existing on that search and then match the search for an exact match on channel
        if (channels && channels[0].slug === channelNameWithoutAtSign.toLowerCase()) {
            this.selectAChannel(channels[0].slug, channels[0].icon, true)

            const searchWithoutChannelName = this.getSearchTermWithoutChannelName(searchTerm)
            this.setState({
                inputText: searchWithoutChannelName,
                placeholderText: searchWithoutChannelName
                    ? ''
                    : isDesktop
                    ? 'Add a tag to search this channel’s GIFs and Stickers'
                    : 'Search channel',
                showAnimationPlaceholder: false,
                currentCursorPosition: this.getSearchTermWithoutChannelName(searchTerm).length,
            })
        } else {
            this.setState({
                inputText: `${searchTerm} `,
                placeholderText: '',
                showAnimationPlaceholder: false,
            })
        }
        // store the result so we can display immediately next time
    }

    async setDropDownItems(searchTerm, searchType) {
        // check to see
        const dropDownItems = await getDropDownItems(
            searchTerm,
            searchType,
            this.maxChannels,
            this.maxItems,
            this.maxSocialChannels,
        )
        const { isInputFocused } = this.state
        if (isInputFocused && searchTerm === this.lastSearchedTerm) {
            this.setState({
                dropDownItems,
            })
        }
    }

    channelSearchForUserTerm = debounce((isSearchPage?: boolean) => {
        const searchTerm = this.getSearchTerm()
        this.lastSearchedTerm = searchTerm

        if (isSearchPage) {
            this.checkForChannelSearchExactMatch(isSearchPage)
        } else {
            this.setDropDownItems(searchTerm, 'socialSearch')
        }
    }, 250)

    searchForUserTerm = debounce(() => {
        const searchTerm = this.getSearchTerm()
        this.lastSearchedTerm = searchTerm
        this.setDropDownItems(searchTerm, 'regularSearch')
    }, 250)

    selectAChannel = (channel, img, isSearchPage?: boolean) => {
        const { isDesktop } = this.props
        this.setState({
            currentSelectedChannel: `@${channel.trim().toLowerCase()}`,
            currentSelectedChannelImage: img,
            suppressDropdown: true,
            placeholderText: isDesktop ? 'Add a tag to search this channel’s GIFs and Stickers' : 'Search channel',
        })

        // this handles the case for mobile url search
        if (isSearchPage) {
            if (isDesktop) {
                setTimeout(() => {
                    this.focusInput()
                    this.setState({ isInputFocused: true })
                }, 500)
            }
        } else {
            this.setState({ inputText: '' })
            setTimeout(() => {
                this.focusInput()
                this.setState({ isInputFocused: true, currentCursorPosition: 0 })
            }, 500)
        }
    }

    selectAGif = () => {
        const { isDesktop } = this.props

        // do the blur after a gif has been selected from the carousel
        if (!isDesktop) {
            this.doBlur()
        }
    }

    determineSearchType() {
        const searchTerm = this.getSearchTerm()
        if (searchTerm[0] === '@') {
            this.setState({ searchType: 'channel' })
            this.setMaxItems(this.props.appHeight)
            this.channelSearchForUserTerm()
        } else {
            this.setState({ searchType: '' })
            this.setMaxItems(this.props.appHeight)
            this.searchForUserTerm()
        }
    }

    doBlur = () => {
        if (this.input) {
            // just in case we didn't have focus somehow
            this.input.blur()
        }
        this.onBlur()
    }

    focusInput = () => {
        if (this.input) {
            this.input.focus()
        }
    }

    onBlur = () => {
        if (this.input) this.input.removeEventListener('keyup', this.checkCancelButton, false)

        this.setState({
            isInputFocused: false,
            focusedIndex: -1,
        })
        // we did nothing on focus on android, do nothing now
        if (this.props.isFixed) {
            return
        }

        // func for focus, useful if dontPosition is used
        const { onBlur = () => {} } = this.props
        onBlur()
    }
    onFocus() {
        const { isDesktop } = this.props

        // behavior for the cancel button
        if (this.input) this.input.addEventListener('keyup', this.checkCancelButton, false)

        // default trending search terms even on the explore page with a populated input
        if (!isDesktop && !this.state.currentSelectedChannel) {
            this.setState(
                {
                    suppressDropdown: false,
                    dropDownItems: take(this.state.trendingDropdownItems, this.maxItems),
                },
                () => {
                    // scroll to the top to ensure iOS will show all the dropdown results
                    window.scrollTo(0, 0)
                },
            )
        } else {
            this.determineSearchType()
        }

        // sometimes showing the dropdown right away would cause the input to blur (chrome desktop, and android)
        setTimeout(
            () =>
                this.setState({
                    isInputFocused: this.input === document.activeElement,
                }),
            100,
        )
        gaEventSearchStart()

        // android works okay with just fixed
        // desktop is fixed because it's within a container that is minimized on scroll
        if (this.props.isFixed) {
            return
        }

        // func for focus, useful if dontPosition is used
        const { onFocus = () => {} } = this.props
        onFocus()
    }

    handleArrowUp() {
        const { focusedIndex, dropDownItems } = this.state
        if (dropDownItems.length > 0 && focusedIndex > -1) {
            this.setState({ focusedIndex: focusedIndex - 1 })
        }
    }

    handleArrowDown() {
        const { focusedIndex, dropDownItems, searchType } = this.state

        if (dropDownItems.length > 0 && searchType !== 'channel') {
            if (
                focusedIndex <
                filter(dropDownItems, (item: Item) => {
                    return item.type === 'tags'
                }).length -
                    1
            ) {
                this.setState({ focusedIndex: focusedIndex + 1 })
            }
        } else if (focusedIndex < dropDownItems.length - 1) {
            this.setState({ focusedIndex: focusedIndex + 1 })
        }
    }

    onKeyUpInput() {
        this.checkCancelButton()
        this.checkCursorPosition()
    }

    handleShowPlaceholder() {
        const { isDesktop } = this.props

        if (this.state.inputText) {
            this.setState({ placeholderText: '', showAnimationPlaceholder: false })
        } else if (this.state.currentSelectedChannel) {
            this.setState({
                placeholderText: isDesktop ? 'Add a tag to search this channel’s GIFs and Stickers' : 'Search channel',
                showAnimationPlaceholder: false,
            })
        } else {
            this.setState({ placeholderText: '', showAnimationPlaceholder: true })
        }
    }

    handleInputChange = value => {
        this.setState({ inputText: value }, () => {
            this.handleShowPlaceholder()
            this.determineSearchType()
        })

        this.checkCursorPosition()
        if (this.state.currentSelectedChannel) {
            this.setState({ inputText: value })
        }

        if (this.state.dropDownItems.length === 0) {
            this.setState({ focusedIndex: -1 })
        }
    }

    onCancel = () => {
        this.setState({
            hideCancel: true,
            inputText: '',
            showAnimationPlaceholder: true,
            currentSelectedChannel: '',
            dropDownItems: take(this.state.trendingDropdownItems, this.maxItems),
        })

        // need this because the keyboard kills the focus on the input when we hit the cancel button
        setTimeout(() => {
            this.focusInput()
            this.setState({ isInputFocused: true })
        }, 101)
    }

    onKeydown(e) {
        const { isDesktop } = this.props
        const isaTypingChannelSearch = this.state.inputText[0] === '@' && this.state.inputText.split(' ').length === 1
        // allow the dropdown to be displayed now that the user has shown intent to search
        if (!this.state.currentSelectedChannel) {
            this.setState({
                suppressDropdown: false,
            })
        }

        switch (e.keyCode) {
            // BACKSPACE
            case 8:
                if (this.state.currentSelectedChannel && this.state.currentCursorPosition === 0 && !isDesktop) {
                    this.setState({
                        currentSelectedChannel: '',
                        backspaceOnChannelBox: false,
                        placeholderText: '',
                    })

                    if (!this.state.inputText) {
                        this.setState({ showAnimationPlaceholder: true })
                    }
                } else if (this.state.currentSelectedChannel && this.state.currentCursorPosition === 0) {
                    this.setState({ backspaceOnChannelBox: true })
                }
                // if the cursor position is at the beginning of the input and they have backspaced once
                // remove the channel from currentChannel
                if (this.state.backspaceOnChannelBox === true && this.state.currentCursorPosition === 0) {
                    this.setState({
                        currentSelectedChannel: '',
                        backspaceOnChannelBox: false,
                        placeholderText: '',
                    })

                    if (!this.state.inputText) {
                        this.setState({ showAnimationPlaceholder: true })
                    }
                    break
                    // if they backspace once and the click somewhere else and backspace again
                    // we get rid of the initial backspaced state
                } else if (this.state.backspaceOnChannelBox === true) {
                    this.setState({ backspaceOnChannelBox: false })
                }
                break
            // SPACEBAR
            case 32:
                if (isaTypingChannelSearch) {
                    this.checkForChannelSearchExactMatch()
                } else {
                    this.setState({ focusedIndex: -1 })
                }
                break
            // ARROW UP
            case 38:
                isDesktop && this.handleArrowUp()
                e.preventDefault()
                break
            // ARROW DOWN
            case 40:
                isDesktop && this.handleArrowDown()
                e.preventDefault()
                break
            // ENTER
            case 13:
                if (
                    this.state.dropDownItems.length > 0 &&
                    this.state.suppressDropdown === false &&
                    this.state.focusedIndex > -1 &&
                    isDesktop
                ) {
                    const dropDownItem: Item = this.state.dropDownItems[this.state.focusedIndex]
                    this.setState({ inputText: dropDownItem.name, suppressDropdown: true, focusedIndex: -1 })
                    if (dropDownItem.type === 'channels') {
                        this.selectAChannel(dropDownItem.slug, dropDownItem.img)
                    }
                } else {
                    this.setState({ suppressDropdown: true, searchMade: true })
                    this.search()
                }
                break

            default:
                break
        }
    }

    onBlockPageTouchEnd = () => {
        this.setState({
            isInputFocused: false,
        })

        if (this.input) {
            this.input.blur()
        }
    }
    render() {
        const { needsFixed, isDesktop, dontPosition, style: styleProp = {} } = this.props
        const {
            hideCancel,
            currentSelectedChannelImage,
            dropDownItems,
            isInputFocused,
            inputText,
            backspaceOnChannelBox,
            searchMade,
            searchType,
            placeholderText,
            showAnimationPlaceholder,
            currentSelectedChannel,
            focusedIndex,
            suppressDropdown,
        } = this.state

        const device = isDesktop ? `desktop` : `mobile`
        // on Android put the search bar in fixed even if we haven't scrolled,
        // this makes more room for the dropdown
        const fixedForActiveInput = isAndroid() && this.input === document.activeElement

        const containerPosition =
            // We'll use fixed for android and
            needsFixed || fixedForActiveInput ? 'fixed' : 'sticky' // this can be overriden if dontPosition is set

        let inputStyle = {}
        if (showAnimationPlaceholder) {
            inputStyle = { backgroundColor: 'transparent' }
        } else if (currentSelectedChannel && !isDesktop) {
            inputStyle = { paddingLeft: 55 }
        } else if (currentSelectedChannel) {
            inputStyle = { paddingLeft: 12 }
        }
        if (dontPosition) {
            styleProp.position = 'static'
        }

        return (
            <ThemeProvider theme={{ isDesktop }}>
                <Container style={styleProp} position={containerPosition}>
                    <InputContainer>
                        {currentSelectedChannel ? (
                            <ChannelBox
                                backspaceOnChannelBox={backspaceOnChannelBox}
                                device={device}
                                currentSelectedChannelImage={currentSelectedChannelImage}
                                currentSelectedChannel={currentSelectedChannel}
                            />
                        ) : null}
                        <SearchForm
                            action=""
                            method=""
                            onSubmit={e => {
                                e.preventDefault()
                            }}
                        >
                            {!hideCancel && !isDesktop && (
                                <SearchCancel onTap={this.onCancel}>
                                    <CancelIcon />
                                </SearchCancel>
                            )}
                            <MainPlaceholder onClick={this.focusInput} isChannel={!!currentSelectedChannel} as="p">
                                {placeholderText}
                            </MainPlaceholder>
                            <InputPlaceholderEducationAnimation
                                isDesktop={device === 'desktop'}
                                showAnimationPlaceholder={showAnimationPlaceholder}
                                onClick={this.focusInput}
                                rollInPlaceholderText={'@username + tag to search within a verified channel'}
                                placeholderText={'Search all the GIFs and Stickers'}
                                mobilePlaceholderText={'Search all the GIFs and Stickers'}
                                mobileRollInPlaceholderText={'@username to search channels'}
                            />
                            <Input
                                isChannelInput={
                                    searchType === 'channel' &&
                                    !currentSelectedChannel &&
                                    dropDownItems &&
                                    dropDownItems.length > 0
                                }
                                isChannelSearch={!!currentSelectedChannel}
                                style={inputStyle}
                                ref={c => (this.input = c)}
                                type="text"
                                value={inputText}
                                onFocus={() => this.onFocus()}
                                onBlur={() => {
                                    const { isDesktop } = this.props

                                    // first we'll enable scrolling again in mobile
                                    if (!isDesktop && this.dropdownRef) {
                                        enableBodyScroll(this.dropdownRef)
                                    }

                                    this.onBlur()
                                }}
                                onKeyDown={e => this.onKeydown(e)}
                                onKeyUp={() => this.onKeyUpInput()}
                                autoCapitalize="off"
                                onChange={({ target: { value } }) => this.handleInputChange(value)}
                                autoCorrect="off"
                                autoComplete="off"
                            />
                            <HiddenButton type="submit" />
                        </SearchForm>
                    </InputContainer>
                    <SearchButtonContainer onTap={() => this.search()}>
                        <SearchButton isSearching={searchMade} device={device} />
                    </SearchButtonContainer>
                    {isInputFocused && !suppressDropdown && (
                        <DropdownContainer ref={node => (this.dropdownRef = node)}>
                            <SearchDropDown
                                items={dropDownItems}
                                searchType={searchType}
                                onChannelSelected={this.selectAChannel}
                                onGifSelected={this.selectAGif}
                                focusedIndex={focusedIndex}
                                searchTerm={this.getSearchTerm()}
                            />
                        </DropdownContainer>
                    )}
                    {!isDesktop && (
                        <BlockPage
                            isInputFocused={isInputFocused}
                            onTouchEnd={this.onBlockPageTouchEnd}
                            onClick={e => e.preventDefault()}
                        />
                    )}
                </Container>
            </ThemeProvider>
        )
    }
}

export default SearchBar
