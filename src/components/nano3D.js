import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';

const nano3D = (props) => {

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
  alert('Enjoy the ocean tour, but make sure to finish the beach...You can always hit the back button to return!');
}

    return(
      <div>
      <iframe width='100%' height='800px' src="https://poly.google.com/view/bRAaKaAmWza/embed?chrome=min" frameborder='0' style={style} allowvr='yes' allow='vr; xr; accelerometer; magnetometer; gyroscope; autoplay;' allowfullscreen mozallowfullscreen='true' webkitallowfullscreen='true' onmousewheel='' ></iframe>
      <>
    <Button style = {buttonLayout} onClick = {toggleAlert} variant="info" size="lg" block>
      <h1 style = {styleButton}> <Nav.Link style = {styleButton} href="/plasticpollution/#/Ocean3D">Go Into The Ocean?</Nav.Link> </h1>
    </Button>
  </>
      </div>
    )
}


export default nano3D;
