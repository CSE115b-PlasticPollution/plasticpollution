import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';

const nanoFood3D = (props) => {

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
  alert('Its been a long day... Lets go home and have dinner!');
}

return(
  <div>
  <iframe width='100%' height='800px' src="https://poly.google.com/view/7vujUtBlWby/embed?chrome=min" frameborder='0' style={style} allowvr='yes' allow='vr; xr; accelerometer; magnetometer; gyroscope; autoplay;' allowfullscreen mozallowfullscreen='true' webkitallowfullscreen='true' onmousewheel='' ></iframe>
  <Button style = {buttonLayout} onClick = {toggleAlert} variant="warning" size="lg" block>
    <h1 style = {styleButton}> <Nav.Link style = {styleButton} href="/plasticpollution/#/nanoDinner3D">Follow Fisherman?</Nav.Link> </h1>
  </Button>
  </div>
)
}

export default nanoFood3D;
