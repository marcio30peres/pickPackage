import agencyImg from '../../assets/agency.svg'
import { Container } from './styles'

export function Agency() {
    const position = {
        x: Math.floor(window.innerWidth/64) - 2,
        y: Math.floor(window.innerHeight/64) - 2
    }

    return (
        <Container style={{
            left: `${position.x*4}rem`, 
            top: `${position.y*4}rem`}}
        >
            <img src={agencyImg} alt="Agency"/>
        </Container>
    )
}