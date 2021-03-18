import { useEffect, useState } from 'react'
import postmanImg from '../../assets/postman.svg'
import { Container } from './styles'

export function Postman() {
    const maxPosition = {
        x: Math.floor(window.innerWidth/64) - 2,
        y: Math.floor(window.innerHeight/64) - 2
    }
    const [position, setPosition] = useState({
        x: maxPosition.x - 1, 
        y: maxPosition.y
    })

    useEffect(() => {
        document.addEventListener('keydown', walk)

        return () => {
            document.removeEventListener('keydown', walk)
        }
    }, [position])

    function walk(ev: KeyboardEvent) {
        switch (ev.key) {
            case 'ArrowUp':
                if(position.y > 1)
                setPosition({...position, y: position.y - 1})
                break
            case 'ArrowDown':
                if(position.y < maxPosition.y)
                setPosition({...position, y: position.y + 1})
                break
            case 'ArrowLeft':
                if(position.x > 1)
                setPosition({...position, x: position.x - 1})
                break
            case 'ArrowRight':
                if(position.x < maxPosition.x)
                setPosition({...position, x: position.x + 1})
                break
        }
        console.log(position)
    }

    return (
        <Container style={{
            left: `${position.x*4}rem`, 
            top: `${position.y*4}rem`}}
        >
            <img src={postmanImg} alt="Postman"/>
        </Container>
    )
}