import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './nanoJumboStyle.css'

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
  return(
    <div>
    <Jumbotron className ="styleJumboNano" style={style} fluid>
      <Container>
      <h1 style={fontStyle}>Life-Cycle</h1>
      <p><iframe style = {removeCursor} src="https://gifer.com/embed/2ydo" width='450' height= '269.760' frameBorder="0" allowFullScreen></iframe></p>
      <p style={fontStyle}>Macros such plastic cups, bags, etc... end up in the ocean. Over time these plastics begin to disolve into micros, and then become nano particle that are eaten by fish.</p>
      </Container>
    </Jumbotron>
    <Jumbotron className ="styleJumboTwoNano" style={style} fluid>
      <Container>
      <h1 style={fontStyle}>Human's Consumption</h1>
      <p><iframe style = {removeCursor} src="https://gifer.com/embed/fxnH" width='450' height='269.760' frameBorder="0" allowFullScreen></iframe></p>
      <p style={fontStyle}>The fish are then consumed by humans in a variety of foods, coming full circle in the life-cycle</p>
      </Container>
    </Jumbotron>
    <Jumbotron className ="styleJumboThreeNano" style={style} fluid>
      <Container>
      <h1 style={fontStyle}>Health Impacts</h1>
      <p><iframe style = {removeCursor} src="https://gifer.com/embed/O0Wu" width='450' height='269.760' frameBorder="0" allowFullScreen></iframe></p>
      <p style={fontStyle}>Sciencetist are still unsure how nanos affect the human brain and body, but they suspect that nano plastics may harm our body</p>

      </Container>
    </Jumbotron>


    </div>
  )
}

export default nanoJumbo;
