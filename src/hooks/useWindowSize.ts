import { useEffect, useState } from 'react'

interface WindowSize {
    w: number
    h: number
}

function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        w: 0,
        h: 0,
    })

    useEffect(() => {
        const handler = () => {
            setWindowSize({
                w: window.innerWidth,
                h: window.innerHeight,
            })
        }

        // Set size at the first client-side load
        handler()

        window.addEventListener('resize', handler)

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('resize', handler)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return windowSize
}

export default useWindowSize