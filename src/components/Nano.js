import React from 'react';
import NanoCss from './Nano.css'
import NanoComponentTwo from './NanoComponentTwo';
import NanoFlipCardComponent from './NanoFlipCardComponent';
import { Spring } from 'react-spring/renderprops';
import {Transition} from 'react-spring/renderprops'
import {useTransition} from 'react-spring'
import {useSprings, animated} from 'react-spring'
import {Trail} from 'react-spring/renderprops'
import Jumbo from './nanoJumbo'
import NanoEvaporation from './NanoEvaporation.js';
import Nano3D from './nano3D.js'
import FlipCard from './NanoCardFlip'
import FlipCardTwo from './NanoCardFlipTwo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Fade from "react-reveal/Fade";

const Nano = () => {


  const styleFooter = {
    width: '100%',
    marginTop: '-5.6%',
    height: '38vh'
  };

  const styleBack = {
    backgrondColor:'black'
  }

  const oceanFormat = {
    minInlineSize:'-webkit-fill-available',
    maxHeight:'fit-content',
    marginTop:'-16.5%',
    height:'130vh'


  };

  const oceanFormatTwo = {
    width:'100%',
  }

  const newAlignmentCards = {
      position:'absolute',
      marginTop: '13%',
      backgroundColor:'transparent',
      width: '100%',
      display: 'table-header-group'
    
  };

  return (
    <div>
      <div style = {{backgroundColor:'black'}}>

        <Fade bottom>
          <h1 style = {{height:'20vh',fontSize:'70px',fontFamily:'sans-serif',color:'white'}}>Nanoparticles</h1>
        </Fade>
      </div>

      <div>
        <Jumbotron
          fluid
          style={{
            display: "flex",
            placeContent: "center",
          }}
        >
          <Container style={newAlignmentCards}>
            <Row>
              <Col>
                <FlipCard />
              </Col>
              <Col>
                <FlipCardTwo />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
      <div>
        <img
          style={oceanFormat}
          src="https://cdn.downtoearth.org.in/library/large/2019-12-04/0.92334300_1575475699_17.jpg"
        />
      </div>
      <div>
        <Jumbo />

        <img
          src="https://singularityhub.com/wp-content/uploads/2019/08/clear-concept-underwater-ocean-floor-perspectives-shutterstock-1422884786.jpg"
          style={styleFooter}
        />
      </div>
    </div>
  );
}


export default Nano;


/*
 <NanoEvaporation />
   <Spring from ={{ opacity: 0, marginTop: -500}} to ={{ opacity: 1, marginTop:0 }}>
        {props => (
          <div style= {props}>

            <div className="backgroundNano parallax">
            </div>

            <div className="backgroundNano parallax">
            </div>

   )}
       </Spring>


       

*/