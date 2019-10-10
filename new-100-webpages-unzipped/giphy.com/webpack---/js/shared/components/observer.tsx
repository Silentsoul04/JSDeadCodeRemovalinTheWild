import React, { useRef, useEffect, ReactNode } from 'react'
import 'intersection-observer'

type Props = {
    children: ReactNode
    onVisibleChange: (isVisible: boolean) => void
    className?: string
    style?: object
    fireOnce?: boolean
}

const Observer = ({ className, children, onVisibleChange, style, fireOnce = false }: Props) => {
    const observerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!observerRef.current) return
        const io = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
            if (entry.isIntersecting && fireOnce) {
                io.disconnect()
            }
            onVisibleChange(entry.isIntersecting)
        })
        io.observe(observerRef.current)

        return () => {
            io.disconnect()
        }
    }, [observerRef])

    return (
        <div ref={observerRef} className={className} style={style}>
            {children}
        </div>
    )
}

export default Observer
