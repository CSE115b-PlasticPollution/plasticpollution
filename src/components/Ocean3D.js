import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';


const Ocean3D = () => {

const style = {
    border:'none'
}

const buttonLayout = {
  position: 'relative',
  marginTop:'-1%'
}
const styleButton = {
  color:'white'
}

const toggleAlert = () => {
  alert('Lets go back to the beach!');
}

const toggleNano = () => {
  alert('As you have already seen the ocean wild-life feeds on these plastic pollutants. Over time they become Nanoplastic particles (to small for the human eye) which can penetrate animal tissues and organs. Lets see what happens next!');
}

  return(
    <div>
    <iframe width='100%' height='800px' src="https://poly.google.com/view/apy-a7LwVHI/embed?chrome=min" frameborder='0' style = {style} allowvr='yes' allow='vr; xr; accelerometer; magnetometer; gyroscope; autoplay;' allowfullscreen mozallowfullscreen='true' webkitallowfullscreen='true' onmousewheel =''></iframe>
    <Button style = {buttonLayout} onClick = {toggleAlert} variant="info" size="lg" block>
      <h1 style = {styleButton}> <Nav.Link style = {styleButton} href="/plasticpollution/#/nano3D">Go back to the Beach?</Nav.Link> </h1>
    </Button>
    <Button style = {buttonLayout} onClick = {toggleNano} variant="danger" size="lg" block>
      <h1 style = {styleButton}> <Nav.Link style = {styleButton} href="/plasticpollution/#/nanoFood3D">Follow the Nanos!</Nav.Link> </h1>
    </Button>
    </div>
  )
}

export default Ocean3D;
