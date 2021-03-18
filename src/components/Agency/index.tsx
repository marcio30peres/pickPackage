import { useContext } from 'react'
import { PositionContext } from '../../contexts/PositionContext'

import { Container } from './styles'
import agencyImg from '../../assets/agency.svg'

export function Agency() {
    const {maxPosition} = useContext(PositionContext)
    return (
        <Container style={{
            left: `${maxPosition.x*4}rem`, 
            top: `${maxPosition.y*4}rem`}}
        >
            <img src={agencyImg} alt="Agency"/>
        </Container>
    )
}