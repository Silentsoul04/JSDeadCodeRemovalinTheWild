import React from 'react' // eslint-disable-line no-unused-vars
import css from './callout.css'

export default function Callout({
    isFlagged,
    iconLeft = false
}) {
    if (isFlagged) {
        return ( <
            div className = {
                css.flagged
            } >
            <
            h2 > You reported this GIF < /h2> <
            svg className = {
                iconLeft ? css.iconLeft : css.icon
            }
            viewBox = "0 0 208.15 164.73" >
            <
            path d = "M81.22,163.51a4.68,4.68,0,0,1-6.3,0L1.29,89.78a4.35,4.35,0,0,1,0-6.2L31.66,53.22a4.55,4.55,0,0,1,6.2,0L78.08,93.64l44.09-44.18L170.29,1.22a4.55,4.55,0,0,1,6.2,0l30.37,30.37a4.35,4.35,0,0,1,0,6.2Z" / >
            <
            /svg> <
            /div>
        )
    }
    return ( <
        div className = {
            css.container
        } >
        <
        h2 > Flag this GIF < /h2> <
        svg className = {
            iconLeft ? css.iconLeft : css.icon
        }
        viewBox = "0 0 174 200.58" >
        <
        path d = "M0,12.45A5.3,5.3,0,0,1,1.36,9.36C2.23,8.5,19.75-3.88,52.25,1.23S132.6,28.71,168,12.7c2.88-1,6.1,2.4,6,4.77V123.34c0,2.3-5.12,6.76-14.87,9.51C132,143.72,51.64,117,51.64,117l.14,79.22a4.55,4.55,0,0,1-4.38,4.38H4.45a4.35,4.35,0,0,1-4.38-4.38Z" / >
        <
        /svg> <
        /div>
    )
}