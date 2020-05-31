import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './nanoJumboStyle.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FlipCard from './NanoCardFlip'
import FlipCardTwo from './NanoCardFlipTwo'

const nanoJumbo = () => {

  const style = {
    backgroundColor:'black',
  }
  const fontStyle = {
    color:'white'
  }
  const moveJumbo = {

  }

  const removeCursor = {
    cursor: 'not-allowed'
  }

  const newAlign = {
    marginTop: '1%',
    backgroundColor: 'black',
    width: '100%',
    display: 'table-header-group'
  }
  return(
    <div>
      <Jumbotron fluid style={{
        display: 'flex',
        placeContent: 'center',
        backgroundColor:'black'
      }} >
        <Container style={newAlign}>
          <Row>
            <Col> <h1 style = {{color:'white'}}>Life-Cycle</h1>
              <p><iframe style={removeCursor} src="https://gifer.com/embed/2ydo" width='450' height='269.760' frameBorder="0" allowFullScreen></iframe></p>
              <p style={{ color: 'white' }}>Macros such plastic cups, bags, etc... end up in the ocean. Over time these plastics begin to disolve into micros, and then become nano particle that are eaten by fish.</p>
            </Col>
            <Col>  <h1 style={{ color: 'white' }}>Human's Consumption</h1>
              <p><iframe style={removeCursor} src="https://gifer.com/embed/fxnH" width='450' height='269.760' frameBorder="0" allowFullScreen></iframe></p>
              <p style={fontStyle}>The fish are then consumed by humans in a variety of foods, coming full circle in the life-cycle</p>
              </Col>
            <Col>      <h1 style={{ color: 'white' }}>Health Impacts</h1>
              <p><iframe style={removeCursor} src="https://gifer.com/embed/O0Wu" width='450' height='269.760' frameBorder="0" allowFullScreen></iframe></p>
              <p style={{ color: 'white' }}>Sciencetist are still unsure how nanos affect the human brain and body, but they suspect that nano plastics may harm our body</p>
              </Col>
          </Row>
     
    
      </Container>
    </Jumbotron>


    </div>
  )
}

export default nanoJumbo;
