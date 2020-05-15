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


const Nano = () => {

  const styleJumbo = {
    backgrondColor:'black'
  }
  const styleBack = {
    backgrondColor:'black'
  }

  const oceanFormat = {
    width:'100%',
    height:'80vh'
  }
  const oceanFormatTwo = {
    position:'relative',
    width:'100%',
    marginTop:'-3%',
    height:'35vh'
  }

  return (
    <div>
      <NanoEvaporation />
       <Spring from ={{ opacity: 0, marginTop: -500}} to ={{ opacity: 1, marginTop:0 }}>
        {props => (
          <div style= {props}>

            <div className="backgroundNano parallax">
            </div>

            <div className="backgroundNano parallax">
            </div>
             <NanoComponentTwo />
             <FlipCardTwo />
             <FlipCard />
             <img src = "https://cdn.downtoearth.org.in/library/large/2019-12-04/0.92334300_1575475699_17.jpg" style = {oceanFormat}/>

            <div className ="nanoInfo">
            </div>

              <Jumbo className = 'styleJumbo' />
              <img src = "https://singularityhub.com/wp-content/uploads/2019/08/clear-concept-underwater-ocean-floor-perspectives-shutterstock-1422884786.jpg" style = {oceanFormatTwo}/>

            </div>
        )}
       </Spring>



       </div>
  );
}


export default Nano;
