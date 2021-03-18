import { useContext } from 'react'
import { PositionContext } from '../../contexts/PositionContext'

import { Container } from './styles'
import postmanImg from '../../assets/postman.svg'

export function Postman() {
    const {postmanPosition} = useContext(PositionContext)
    return (
        <Container style={{
            left: `${postmanPosition.x*4}rem`, 
            top: `${postmanPosition.y*4}rem`}}
        >
            <img src={postmanImg} alt="Postman"/>
        </Container>
    )
}