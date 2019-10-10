export const BREAKPOINT_4_COLUMN = 800
export const BREAKPOINT_3_COLUMN = 600

export const STORY_HEIGHT_SMALL = 230
export const STORY_HEIGHT_LARGE = 300

export const STORY_MARGIN_SMALL = 6
export const STORY_MARGIN_LARGE = 12

export const STORY_ASPECT_RATIO = 0.8

export const getItemStyles = ({
    itemWidth,
    spacing,
    columns,
    appWidth
}, index, noFeatured = false) => {
    // if noFeatured is on, do not format grid and keep it a simple column grid
    if (noFeatured) {
        return {
            marginRight: index % columns === columns - 1 ? 0 : spacing,
            width: itemWidth,
        }
    }

    // if grid is less than two columns, just make all stories full width
    if (columns < 2) {
        return {
            appWidth
        }
    }

    // if grid is two columns, the first item is big while the rest is a two column grid below
    if (columns < 3) {
        /*
            two column grid layout
            [   00  ]
            ---------
            [01] [02]
            ---------
            [   03  ]
            ---------
            [04] [05]
        */
        const isWide = index === 0
        return {
            marginRight: !isWide && index % 2 === 1 ? spacing : 0,
            width: isWide ? appWidth : itemWidth,
        }
    }

    const featuredWidth = itemWidth * 2 + spacing
    const chunkIndex = index % 24
    let isFeatured = false
    let hasMargin = false

    if (columns < 4) {
        /*
            three column grid layout

            [   00  ] [01]
            --------------
            [03] [   04  ]
            --------------
            [05] [06] [07]
            --------------
            [   08  ] [09]
            --------------
            [10] [11] [12]
            --------------
            [13] [   14  ]
            --------------
            [15] [16] [17]
            --------------
            [   18  ] [19]
            --------------
            [20] [21] [22]
            --------------
            [23] [   24  ]
        */
        isFeatured = [0, 3, 7, 13, 17, 23].indexOf(chunkIndex) > -1
        hasMargin = [1, 3, 6, 8, 11, 13, 16, 18, 21, 23].indexOf(chunkIndex) < 0
    } else {
        /*
            four column grid layout
            
            [   00  ] [01] [02]
            -------------------
            [03] [04] [   05  ]
            -------------------
            [06] [07] [08] [09]
            -------------------
            [10] [   11  ] [12]
            -------------------
            [13] [14] [15] [16]
            -------------------
            [   17  ] [18] [19]
            -------------------
            [20] [21] [22] [23]
        */
        isFeatured = [0, 5, 11, 17].indexOf(chunkIndex) > -1
        hasMargin = [2, 5, 9, 12, 16, 19, 23].indexOf(chunkIndex) < 0
    }

    return {
        marginRight: hasMargin ? spacing : 0,
        width: isFeatured ? featuredWidth : itemWidth,
    }
}

export const getStateStyles = ({
    columns = 0,
    isFixedHeight = false,
    width
}) => {
    let columnCount = columns || (width >= BREAKPOINT_4_COLUMN ? 4 : width >= BREAKPOINT_3_COLUMN ? 3 : 2)
    const spacing = columnCount < 3 ? STORY_MARGIN_SMALL : STORY_MARGIN_LARGE
    const itemWidth = (width - spacing * (columnCount - 1)) / columnCount
    const itemHeight = isFixedHeight ?
        width <= BREAKPOINT_3_COLUMN ?
        STORY_HEIGHT_SMALL :
        STORY_HEIGHT_LARGE :
        itemWidth / STORY_ASPECT_RATIO

    return {
        spacing,
        itemWidth,
        itemHeight,
        columns: columnCount,
        appWidth: width,
    }
}