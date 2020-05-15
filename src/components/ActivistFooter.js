import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './ActivistJumboFoot.css'


const JumboFoot = () => {

const style = {
  color:'white'
}

const styleBack = {
  backgroundColor:'black'
}

  return(
    <div>
    <Jumbotron fluid style={styleBack}>
      <div className = "styleJumboFoot">
    <Container>
    </Container>
    </div>
    </Jumbotron>
    <img className ="picStyle" src = "https://charlotte.surfrider.org/wp-content/uploads/2019/08/Plastic-Pollution-Horizontal-Logo_Blue-1024x482.jpg" />
    </div>
  )
}

export default JumboFoot;
