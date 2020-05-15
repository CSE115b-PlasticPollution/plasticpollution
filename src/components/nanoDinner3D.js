import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';

const nanoDinner3D = (props) => {

  const buttonLayout = {
    position: 'relative',
    marginTop:'-1%'
  }
  const styleButton = {
    color:'white'
  }
  const style = {
    border:'none'
}
const toggleAlert = () => {
  alert('The journey has been completed. We have gone through the entire life-cycle full circle, and as you can see what we do to our oceans, end up eventually consumed by us! Always be mindful of how you get rid of your plastics by recycling!');
}

return(
  <div>
  <iframe width='100%' height='800px' src="https://poly.google.com/view/0rGJSBnda4F/embed?chrome=min" frameborder='0' style={style} allowvr='yes' allow='vr; xr; accelerometer; magnetometer; gyroscope; autoplay;' allowfullscreen mozallowfullscreen='true' webkitallowfullscreen='true' onmousewheel='' ></iframe>
  <Button style = {buttonLayout} onClick = {toggleAlert} variant="success" size="lg" block>
    <h1 style = {styleButton}> <Nav.Link style = {styleButton} href="/plasticpollution/#/Activist">How to Help!</Nav.Link> </h1>
  </Button>
  <Button style = {buttonLayout} onClick = {toggleAlert} variant="primary" size="lg" block>
    <h1 style = {styleButton}> <Nav.Link style = {styleButton} href="/plasticpollution/#/">Main Menu</Nav.Link> </h1>
  </Button>
  </div>
)
}

export default nanoDinner3D;
