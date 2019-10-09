const FacebookIcon = ({ color = '#417EF2' }) => (
    <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <path
                d="m27.95192,8.76923c0.34636,0 0.64609,0.12655 0.89919,0.37966c0.25311,0.2531 0.37966,0.55283 0.37966,0.89919l0,17.90384c0,0.34636 -0.12655,0.64609 -0.37966,0.89919c-0.2531,0.25311 -0.55283,0.37966 -0.89919,0.37966l-5.11538,0l0,-7.95283l2.55769,0l0.42961,-2.94734l-2.9873,0l0,-2.3179c0,-0.42629 0.10823,-0.75266 0.32471,-0.97912c0.21647,-0.22646 0.53451,-0.33969 0.95413,-0.33969l1.91827,0l0,-2.65761c-0.57282,-0.09325 -1.27218,-0.13987 -2.0981,-0.13987c-1.37211,0 -2.41948,0.34802 -3.14217,1.04406c-0.72268,0.69604 -1.08402,1.64351 -1.08402,2.84243l0,2.5477l-2.55769,0l0,2.94734l2.55769,0l0,7.95283l-9.66128,0c-0.34636,0 -0.64609,-0.12655 -0.89919,-0.37966c-0.25311,-0.2531 -0.37966,-0.55283 -0.37966,-0.89919l0,-17.90384c0,-0.34636 0.12655,-0.64609 0.37966,-0.89919c0.2531,-0.25311 0.55283,-0.37966 0.89919,-0.37966l17.90384,0z"
                id="path-1"
            />
        </defs>
        <g className="layer">
            <title>Layer 1</title>
            <g fill="none" fillRule="evenodd" id="Page-1">
                <g id="facebook">
                    <g id="Group-2" transform="translate(-0.054945 0)">
                        <g id="icons/social/facebook" transform="translate(2.10989 2)">
                            <mask id="mask-2">
                                <use id="svg_1" xlinkHref="#path-1" />
                            </mask>
                            <use
                                fill={color}
                                fillRule="evenodd"
                                id="Mask"
                                x="-10.625"
                                xlinkHref="#path-1"
                                y="-10.625"
                            />
                            <g id="colors/social/_master" mask="url(#mask-2)">
                                <g id="colors/social/white" />
                            </g>
                        </g>
                        <rect height="42" id="Rectangle" width="42" x="-10.57005" y="-10.625" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
)

export default FacebookIcon
