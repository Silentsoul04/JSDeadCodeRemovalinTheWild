import { useEffect, useState } from 'react'

const useIntroTrigger = () => {
    const [state, set] = useState<boolean>(false)

    useEffect(() => {
        const onTrigger = () => {
            set(true)
        }
        const onWheel = (e: MouseWheelEvent) => {
            if (Math.abs(e.deltaY) > 10) {
                onTrigger()
            }
        }
        const onClick = () => {
            onTrigger()
        }
        const onKeyDown = (e: KeyboardEvent) => {
            switch (e.keyCode) {
                case 32:
                case 40:
                    onTrigger()
                    break
                default:
                    break
            }
        }
        window.addEventListener('wheel', onWheel, false)
        document.body.addEventListener('click', onClick, false)
        document.body.addEventListener('keydown', onKeyDown, false)
        return () => {
            window.removeEventListener('wheel', onWheel, false)
            document.body.removeEventListener('click', onClick, false)
            document.body.removeEventListener('keydown', onKeyDown, false)
        }
    }, [])

    return state
}

export default useIntroTrigger
