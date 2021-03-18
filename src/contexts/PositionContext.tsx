import { createContext, ReactNode, useEffect, useState } from "react";

interface Position {
    x: number
    y: number
}

interface PositionContextData {
    maxPosition: Position
    postmanPosition: Position
}

interface PositionContextProviderProps {
    children: ReactNode
}

export const PositionContext = createContext({} as PositionContextData)

export function PositionContextProvider({children}: PositionContextProviderProps) {
    const maxPosition: Position = {
        x: Math.floor(window.innerWidth/64) - 2,
        y: Math.floor(window.innerHeight/64) - 2
    }

    const [postmanPosition, setPostmanPosition] = useState<Position>({
        x: maxPosition.x - 1, 
        y: maxPosition.y
    })

    useEffect(() => {
        document.addEventListener('keydown', walk)

        return () => {
            document.removeEventListener('keydown', walk)
        }
    }, [postmanPosition])

    function walk(ev: KeyboardEvent) {
        switch (ev.key) {
            case 'ArrowUp':
                if(postmanPosition.y > 1) {
                    setPostmanPosition({
                        ...postmanPosition, 
                        y: postmanPosition.y - 1
                        })
                    }
                break
            case 'ArrowDown':
                if(postmanPosition.y < maxPosition.y){
                    setPostmanPosition({
                        ...postmanPosition, 
                        y: postmanPosition.y + 1
                    })
                }
                break
            case 'ArrowLeft':
                if(postmanPosition.x > 1) {
                    setPostmanPosition({
                        ...postmanPosition, 
                        x: postmanPosition.x - 1
                    })
                }
                break
            case 'ArrowRight':
                if(postmanPosition.x < maxPosition.x) {
                    setPostmanPosition({
                        ...postmanPosition, 
                        x: postmanPosition.x + 1
                    })
                }
                break
        }
    }
    return (
        <PositionContext.Provider value={{
            maxPosition,
            postmanPosition
        }}>
            {children}
        </PositionContext.Provider>
    )
}