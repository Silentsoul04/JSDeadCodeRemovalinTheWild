import React, { ReactNode, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

type Props = {
    children: ReactNode
    // if you don't want things to jump around, specifiy a height
    height?: number | 'auto'
    dontUnmount?: boolean
}
/**
 *
 * Render the children when the component is in the viewport.
 * @params Props
 */
export const WhenInView = ({ children, height = 'auto', dontUnmount = false }: Props) => {
    const [ref, inView] = useInView()
    const hasShown = useRef(false)
    if (dontUnmount) {
        if (inView) {
            // permenantly flag if once
            hasShown.current = true
        }
    } else {
        hasShown.current = inView
    }
    return (
        <div ref={ref} style={{ height }}>
            {hasShown.current ? children : null}
        </div>
    )
}
