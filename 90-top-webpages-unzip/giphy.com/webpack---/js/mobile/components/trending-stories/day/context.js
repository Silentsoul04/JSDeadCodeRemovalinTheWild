import createContext from 'immer-wieder'
// GIPHY header is dated to the future
const giphyHeader = { label: 'GIPHY', date: new Date(Date.now() + 10000), position: -20 }
const showTodayAt = 50
const todayHeader = { label: 'Today', date: new Date(), position: showTodayAt }
const HeaderInfoContext = createContext(setState => ({
    headerInfo: [giphyHeader, todayHeader],
    actions: {
        addHeaderInfo: ({ label, sublabel, date, position }) =>
            // setState behaves like generic setState with immer semantics
            setState(draft => {
                draft.headerInfo.push({
                    label,
                    sublabel,
                    date,
                    position,
                })
                draft.headerInfo.sort((a, b) => a.date - b.date)
            }),
    },
}))

export const withHeaderInfoContext = select => WrappedComponent => props => (
    <HeaderInfoContext.Consumer select={select}>
        {context => <WrappedComponent {...context} {...props} />}
    </HeaderInfoContext.Consumer>
)

export default HeaderInfoContext
