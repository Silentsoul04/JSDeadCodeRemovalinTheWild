import React, { useRef, useEffect } from 'react'
import 'intersection-observer'

type LazyLoadMediaProps = {
    src: string
    alt?: string
}

export const LazyLoadImage = ({ src, alt = '' }: LazyLoadMediaProps) => {
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (!imgRef.current) return
        const io = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
            const { isIntersecting } = entry
            if (isIntersecting && imgRef.current) {
                imgRef.current.src = src
            }
        })

        io.observe(imgRef.current)

        return () => {
            io.disconnect()
        }
    }, [imgRef])

    return <img ref={imgRef} alt={alt} />
}

export const LazyLoadVideo = ({ src }: LazyLoadMediaProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        if (!videoRef.current) return
        const io = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
            const { isIntersecting } = entry
            if (isIntersecting && videoRef.current) {
                const source = videoRef.current.querySelector('source')

                if (source) {
                    source.src = src
                    videoRef.current.load()
                }
            }
        })

        io.observe(videoRef.current)

        return () => {
            io.disconnect()
        }
    }, [videoRef])

    return (
        <video ref={videoRef} autoPlay loop muted playsInline>
            <source type="video/mp4" />
        </video>
    )
}
