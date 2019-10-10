import React from 'react'
import { giphyWhite } from '@giphy/js-brand'

const Close = () => (
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <path
                d="M21.96 4.5L4.5 21.6 21.96 4.5zm-10.016 8.55L3.87 5.143a.9.9 0 0 1 1.26-1.286l8.1 7.933 8.1-7.933a.9.9 0 1 1 1.26 1.286l-8.074 7.907 8.074 7.907a.9.9 0 1 1-1.26 1.286l-8.1-7.933-8.1 7.933a.9.9 0 1 1-1.26-1.286l8.074-7.907z"
                id="giphycloseicon"
            />
        </defs>
        <use fill={giphyWhite} xlinkHref="#giphycloseicon" transform="translate(-3 -3)" />
    </svg>
)

export default Close
