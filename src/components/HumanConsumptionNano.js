import React from 'react';
import HumanConsumptionNanoCSS from './HumanConsumptionNano.css';
import FishCSS from './Fish.css';
import SunCloud from './sunCloud.css';
import BlobFish from './NanoBlobFish.css';
import Particles from 'react-particles-js';
import NanoEvaporationCSS from './NanoEvaporation.css';
import NanoEvaporation from './NanoEvaporation.js';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useTrail, animated} from 'react-spring'
import HoverImage from "react-hover-image"
import yourFile from '../assets/fish.png'
import yourFileTwo from '../assets/nanoLifeCycle.jpg'
import weatherNanoPic from '../assets/weather.png'
import plankton from '../assets/planktonOne.jpg'
import fishNano from '../assets/handNano.jpg'
import plasticInFish from '../assets/plasticInFish.jpg'
import nanoPlastic from '../assets/nanoPlastic.jpg'
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Fragment } from "react";
import bubble from '../assets/Water-bubble.mp3'


const HumanConsumptionNano = () => {
  /* For Nano Audio */
  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  const style = {
    border:'none'
  }
  /* End of Nano Audio */
    const hoverStyle = {
       position: "relative",
       top: "60%",
       height: "140px",
       width: "140px",
       borderRadius: "65%"
     };
     const hoverStyleTwo = {
       position: "relative",
       top: "60%",
       height: "540px",
       width: "540px",
       borderRadius: "65%"
     };
     const styleMe = {
       height:"200px",
       width: "230px",
       backgroundColor: "black",
       border:"none",
       padding: "20px",
       display: "inline-block",
       font: "20px",
       margin: "4px 2px",
       cursor: "pointer",
       borderRadius: "65%"
     };
     const styleMeWeather = {
       height:"340px",
       width: "260px",
       backgroundColor: "black",
       border:"none",
       display: "inline-block",
       font: "20px",
       margin: "4px 2px",
       cursor: "pointer",

     };
     const styleMeGo = {

       backgroundColor: 'black',
       position: 'absolute',
       top: '160%',
       left: '75%',
       borderRadius: "35%"
     };
     const styleMeTwo = {
       backgroundColor: 'black',
       position: 'absolute',
       top: '115%',
       left: '-13%',
       borderRadius: "35%"
     };
     const styleMeNano = {
       backgroundColor: 'black',
       position: 'absolute',
       top: '80%',
       left: '75%',
       borderRadius: "35%"
     };
     const styleMeNanoFormat = {
       height:"200px",
       width: "230px",
       backgroundColor: "black",
       border:"none",
       padding: "20px 20px 20px 20px",
       display: "inline-block",
       font: "20px",
       cursor: "pointer",
       borderRadius: "65%"
     };

     const buttonFormat = {
       backgroundColor:"white",
       color:"black",
       width:"45px",
       height:"25px",
       font: "sans-serif"
     };

return(

<div className="pushSkyDown">
  {/* The Sky enclosed by container div */}
  <div id="sky">
	 <div class="theSun">
		<div class="ray_box">
			<div class="ray ray1"></div>
			<div class="ray ray2"></div>
			<div class="ray ray3"></div>
			<div class="ray ray4"></div>
			<div class="ray ray5"></div>
			<div class="ray ray6"></div>
			<div class="ray ray7"></div>
			<div class="ray ray8"></div>
			<div class="ray ray9"></div>
			<div class="ray ray10"></div>
		  </div>
	    </div>
      <div class="cloudwrapperOne">
		  <div class="cloud c1"></div>
	    <div class="cloudwrapperTwo">
		  <div class="cloud c2"></div>
	    </div>
	    <div class="cloudwrapperThree">
		  <div class="cloud c3"></div>
	    </div>
      </div>
      {/* Beginning of fish */}
      <div className ="backgroundFish">
      <div>
      <div className="fish">
      <div className="fishRed">
      <div className="fish-bodyRed"></div>
      <div className="finLeftRed">
      <div className="finLeft1Red"></div>
      <div className="finLeft2Red"></div>
      <div className="finLeft3Red"></div>
      <div className="finLeft4Red"></div>
      </div>
      <div className="finRightRed">
        <div className="finRight1Red"></div>
        <div className="finRight2Red"></div>
        <div className="finRight3Red"></div>
        <div className="finRight4Red"></div>
      </div>
      <div className="tailRed">
        <div className="tailMiddleRed"></div>
        <div className="tailLeftRed"></div>
        <div className="tailRightRed"></div>
        <div className="tail1Red"></div>
        <div className="tail2Red"></div>
        <div className="tailFinRed">
        <div className="tailFinMiddleRed"></div>
        <div className="tailFin1Red"></div>
        <div className="tailFin2Red"></div>
        <div className="tailFin3Red"></div>
        <div className="tailFin4Red"></div>
        <div className="tailFin5Red"></div>
        <div className="tailFin6Red"></div>
        </div>
      </div>
      </div>
        </div>
        <div className="fishRed">
        <div className="fish-bodyRed"></div>
        <div className="finLeftRed">
        <div className="finLeft1Red"></div>
        <div className="finLeft2Red"></div>
        <div className="finLeft3Red"></div>
        <div className="finLeft4Red"></div>
        </div>
        <div className="finRightRed">
          <div className="finRight1Red"></div>
          <div className="finRight2Red"></div>
          <div className="finRight3Red"></div>
          <div className="finRight4Red"></div>
        </div>
        <div className="tailRed">
          <div className="tailMiddleRed"></div>
          <div className="tailLeftRed"></div>
          <div className="tailRightRed"></div>
          <div className="tail1Red"></div>
          <div className="tail2Red"></div>
          <div className="tailFinRed">
          <div className="tailFinMiddleRed"></div>
          <div className="tailFin1Red"></div>
          <div className="tailFin2Red"></div>
          <div className="tailFin3Red"></div>
          <div className="tailFin4Red"></div>
          <div className="tailFin5Red"></div>
          <div className="tailFin6Red"></div>
          </div>
          </div>
          {/* End of Fish*/}
          </div>
          </div>
       </div>
    </div>
      {/* Water Bottles */}
  <div className =" bottleAlignment">
      <ul>
       <li class="water-bottle">
         <div class="cap">
         <div class="cap-top">
         </div>
         <div class="cap-seal">
         </div>
         </div>
          <div class="bottle">
          <div class="water-empty"> </div>
          </div>
      </li>
      <li class="water-bottle">
         <div class="cap">
         <div class="cap-top">
         </div>
         <div class="cap-seal">
         </div>
         </div>
         <div class="bottle">
         <div class="water-low"> </div>
         </div>
     </li>
     <li class="water-bottle">
        <div class="cap">
        <div class="cap-top">
        </div>
        <div class="cap-seal">
        </div>
        </div>
        <div class="bottle">
        <div class="water-full"> </div>
        </div>
     </li>
    </ul>
    <ul>
    <li class="water-bottle">
       <div class="cap">
       <div class="cap-top">
       </div>
       <div class="cap-seal">
       </div>
       </div>
       <div class="bottle">
       <div class="water-empty"> </div>
       </div>
    </li>
    <li class="water-bottle">
       <div class="cap">
       <div class="cap-top">
       </div>
       <div class="cap-seal">
       </div>
       </div>
       <div class="bottle">
       <div class="water-low"> </div>
       </div>
    </li>
    <li class="water-bottle">
       <div class="cap">
       <div class="cap-top">
       </div>
       <div class="cap-seal">
       </div>
       </div>
       <div class="bottle">
       <div class="water-full"> </div>
       </div>
     </li>
    </ul>
     <ul>
      <li class="water-bottle">
       <div class="cap">
       <div class="cap-top">
       </div>
       <div class="cap-seal">
       </div>
       </div>
       <div class="bottle">
       <div class="water-empty"> </div>
       </div>
      </li>
    </ul>
  </div>
  {/* End of Water Bottles */}

  {/* Sand */}
  <div className ="yellowSand">
  </div>
  {/* End of Sand*/}

  {/* Nano Plastic Particles Jumbo Tron */}
  <div className ="divJumbo">
    <Jumbotron fluid className ="divJumbo">
      <Container>
        <h1 className ="divTextColor">Nano Plastic Particles</h1>
        <p className ="divTextColor">
          disentigrate onto the ocean floor, where later plankton feed on the nano particles. Once plankton digest these particles into their system, fish feed on the plankton, and eventually end up consumed by humans.
        </p>
      </Container>
    </Jumbotron>
  </div>
  {/* End ofNano Plastic Particles Jumbo Tron */}

    {/* Black water */}
  <div class = "water">
      {/* Particles */}
      <div className="particleBody">
        <Particles />
      </div>
      {/* End of Particles */}

      {/* Blob Fish */}
      <div> {/* Nested 1cursor Blob Fish User & Image Hover*/}
      <NanoEvaporation /> {/* Blob FIsh Cursor */}
      <div>

     </div>
        <div class="fishMe">
            <div class="face">
            <div class = "left-fin">
            </div>
            <div class = "mouth">
            </div>
            <div class = "nose">
            </div>
            <div class = "right-fin">
            </div>
            </div>
            {/* End of Hover Over Nest div */}

            <div style = {styleMeTwo}> {/* Pop Over Image Plankton 1*/}
              <Fragment>
              <MDBContainer >
                <div style={styleMe}>
                <MDBPopover placement="right"  popover clickable id="popper2" >
                  <MDBBtn color = "dark" ><sound />

                  <div> {/* Begin of sound */}
                    <button onClick={playAudio}>
                      <span>Eat Plankton?</span>
                    </button>
                    <audio className="audio-element">
                      <source src="http://http.tastyspleen.net/~p1/quake2/weapons/sound/misc/bubbles.wav"></source>
                    </audio>
                  </div> {/* End of sound */}

                 <img style = {styleMe} src={plankton}/>
                  </MDBBtn >
                  <div>
                    <MDBPopoverHeader >Nano Impacts On The Human Body</MDBPopoverHeader>
                    <MDBPopoverBody >
                    <img src ={yourFileTwo} />
                    </MDBPopoverBody>
                  </div>
                </MDBPopover>
              </div>
            </MDBContainer>
            </Fragment>
            </div> {/*  End of Pop Over Image 1 */}

              <Fragment> {/*  Begin of Pop Over Image 2 */}
              <MDBContainer >
                <div style={styleMeNano}>
                <MDBPopover placement="left"  popover clickable id="popper5" >
                  <MDBBtn color = "dark" >
                  <div> {/* Begin of sound */}
                    <button onClick={playAudio}>
                      <span style={buttonFormat}> Eat Nano Plastics?</span>
                    </button>
                    <audio className="audio-element">
                      <source src="http://http.tastyspleen.net/~p1/quake2/weapons/sound/misc/bubbles.wav"></source>
                    </audio>
                  </div> {/* End of sound */}

                <img style = {styleMeNanoFormat} src={nanoPlastic}/>
                  </MDBBtn>
                  <div>
                    <MDBPopoverHeader >Scientists have found microplastics in 114 aquatic species, and more than half of those end up on our dinner plates. Now they are trying to determine what that means for human health. So far science lacks evidence that microplastics—pieces smaller than one-fifth of an inch—are affecting fish at the population level</MDBPopoverHeader>
                    <MDBPopoverBody >
                    <img src ={plasticInFish} />
                    </MDBPopoverBody>
                  </div>
                </MDBPopover>
              </div>
            </MDBContainer>
            </Fragment> {/*  End of Pop Over Image 2 */}
            {/* -------- 3rd picture pop up----------- */}
            <Fragment>
            <MDBContainer >
              <div style={styleMeGo}>
              <MDBPopover placement="bottom"  popover clickable id="popper7" >
                <MDBBtn color = "dark" ><sound />
                <div> {/* Begin of sound */}
                  <button onClick={playAudio}>
                    <span>Where do Nanos go?</span>
                  </button>
                  <audio className="audio-element">
                    <source src="http://http.tastyspleen.net/~p1/quake2/weapons/sound/misc/bubbles.wav"></source>
                  </audio>
                </div> {/* End of sound */}
               <img style = {styleMeNanoFormat} src={fishNano}/>
                </MDBBtn >
                <div>
                  <MDBPopoverHeader >Weathering of plastic generates microplastic, releases chemical additives,
                  and likely also produces nanoplastic and chemical fragments cleaved from the polymer backbone.
                  The potential impacts of weathering plastic in the oceans pose assessment challenges that are
                  characterized by both uncertainty and ignorance. It is clear that we must assess the risk of impacts
                  that are known or that can be anticipated on the basis of our experience with other pollution problems.
                  Learn how you can help by clicking the activist link.
                  <div className='buttonContainer'>
                    <a href='/plasticpollution/#/Activist'>Become An Activist</a>
                  </div>
                  </MDBPopoverHeader>
                  <MDBPopoverBody >
                  <img style = {styleMeWeather} src ={weatherNanoPic} />
                  </MDBPopoverBody>
                </div>
              </MDBPopover>
            </div>
          </MDBContainer>
          </Fragment>   {/* End of 3rd pop up picture}
          {/* End of Blob Fish */}
        </div>
      </div>            {/* End of nested hoveer blob */}

  </div>                {/* End of Black water */}

</div>
    );
}

export default HumanConsumptionNano;
