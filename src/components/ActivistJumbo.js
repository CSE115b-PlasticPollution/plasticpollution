import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './ActivistJumboStyle.css'


const Jumbo = () => {
  return(
    <Jumbotron className ="styleJumbo" fluid>
    <Container>
    <h1>See The Impacts Of Plastic Pollution</h1>
    <p>
      Review the cards to find out ways you can recycle at home. You can test what you have learned with the drag and drop games if your up to the challenge!
    </p>
    </Container>
    </Jumbotron>
  )
}

export default Jumbo;
