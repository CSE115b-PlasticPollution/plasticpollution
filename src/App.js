import React from 'react';
import './App.css';
/* Tools Imported - Boot Strap React-Springs*/
import Navigation from './Navigation'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTrail, animated } from 'react-spring';
/* End of Tools Imported - Boot Strap React-Springs*/
/* Navigation & Linkage */
import { HashRouter, Router, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

/* End of Navigation & Linkage */
/* JS & CSS FILES */
import Particles from 'react-particles-js';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Faq from './components/Faq';
import Adventure from './components/Adventure';
import Activist from './components/Activist';
import ActivistLinks from './components/ActivistLinks';
import ActivistCard from './components/ActivistCards';
import ActivistVideo from './components/ActivistVideo';
import ActivismGames from './components/activismGame';
import Jumbo from './components/ActivistJumbo'
import JumboFoot from './components/ActivistFooter'
import Macro from "./components/Macro";
import Micro from "./components/Micro";
import MicroOcean from "./components/microOcean";
import Nano from "./components/Nano";
import HumanConsumptionNano from "./components/HumanConsumptionNano";
import Ocean3D from "./components/Ocean3D";
import PreventionJourney from "./components/PreventionJourney";
import  "./components/blobUseTrail.css";
import Macro2 from "./components/Macro2"
import MacroReuse from "./components/MacroReuse"
import MacroDump from "./components/MacroDump"
import MacroOcean from "./components/MacroOcean"
import MacroRecycle from "./components/MacroRecycle"
import MacroAsia from "./components/MacroAsia"
import FoodWeb from "./components/FoodWeb"
import FrozenFish from "./components/frozenFish"
import popOverNano from "./components/popOverNano"
import microPlastic from "./components/assets/ocean.jpg"
import myBins from "./components/assets/binsGame.png"
import "./components/main.css"
import "./components/mainCheck.css"
import Board from "./components/Board.js"
import BoardCheck from "./components/BoardCheck.js"
import BoardCheckFruit from "./components/BoardCheckFruit.js"
import Card from "./components/Card.js"
import Kitchen from "./kitchenActivist.jpg"
import CarouselLandPg from './components/ActivistCarousel'
import Nano3D from './components/nano3D'
import NanoFood3D from './components/nanoFood3D'
import NanoDinner3D from './components/nanoDinner3D'
/* End of JS & CSS FILES */


//Hash Router:
//A <Router> that uses the hash portion of the URL (i.e. window.location.hash)
//to keep your UI in sync with the URL.
const App = props => {

    return(
      <HashRouter>
        <Switch>
        <div>
          <Navigation />
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/faq" component={Faq}/>
          <Route path="/adventure" component={Adventure}/>
          <Route path="/Macro" component={Macro}/>
          <Route path="/Macro2" component={Macro2}/>
          <Route path="/MacroReuse" component={MacroReuse}/>
          <Route path="/MacroDump" component={MacroDump}/>
          <Route path="/MacroOcean" component={MacroOcean}/>
          <Route path="/MacroRecycle" component={MacroRecycle}/>
          <Route path="/MacroAsia" component={MacroAsia}/>
          <Route path="/Micro" component={Micro}/>
          <Route path="/Ocean" component={MicroOcean}/>
          <Route path="/FoodWeb" component={FoodWeb}/>
          <Route path="/FishMarket" component={FrozenFish}/>
          <Route path="/Nano" component={Nano}/>
          <Route path="/activist" component={activism}/>
          <Route path="/ActivistLinks" component={ActivistLinks} />
          <Route path="/activismGame" component={ActivismGames} />
          <Route path="/ActivistCarousel" component={CarouselLandPg} />
          <Route path="/ActivistCard" component={ActivistCard} />
          <Route path="/ActivistVideo" component={ActivistVideo} />
          <Route path="/ActivistJumbo" component={Jumbo} />
          <Route path="/ActivistFooter" component={JumboFoot} />
          <Route path="/nano3D" component={Nano3D} />
          <Route path="/nanoFood3D" component={NanoFood3D} />
          <Route path="/nanoDinner3D" component={NanoDinner3D} />
          <Route path="/Board" component = {Board} />
          <Route path="/BoardCheck" component = {BoardCheck} />
          <Route path="/BoardCheckFruit" component = {BoardCheckFruit} />
          <Route path="/Card" component = {Card} />
          <Route path="/HumanConsumptionNano" component={HumanConsumptionNano}/>
          <Route path="/Ocean3D" component={Ocean3D} />
          <Route path="/PreventionJourney" component={PreventionJourney}/>
          <Route path="/NanoEvaporation" component={NanoEvaporation}/>
          <Route path="/popOverNano" component={popOverNano}/>
          <Route path ="/Error" component={Error}/>
        </div>
            </Switch>
        </HashRouter>
  );
}
// End of Router ------------------------------------------------------------------------------

/* The App Component is the default component -------------------------------------------------
  1) Create a file.js under components directory
  2) Route the path from above to that file.js
  3) Create Underneath this code e.g) export a class X entends React.Component to render the function
     of that file.js. The rendering executes the function of your file.js
  4) Make sure to include the heading import file from './components/file.js' at the top of App.js
  *5 Optional ) You may have to go into Navigation to update your route path
  This is how one can nest components, so that they communicate to this* default wrapped
  You may reuse them (component contianing file.js with an executable function)
  on other components, simply by invoking: import foo from './components/file'
*/

/* Particle attributes */
const particleOpt = {particles:{
  line_link: {
    number: {
      value: 2250,
      density: {
        enable: true,
        value_area: 2250
      }
    }
  }
}}

/* Particle Rendered to Screen */
export class particles extends React.Component {
  render() {
    return (
      <div className ="particleBody">
      <Particles params={particleOpt} />
      </div>
    )
}}
/* NanoEvaporation Alias - Blob Fish Component, useTrail - This function */
export class NanoEvaporation extends React.Component {
    render(){
      return(NanoEvaporation())}

}

/* Activism Javascript */
export class activism extends React.Component{
/*State by default is always in App with React*/
state = {
  listOfPlastic:[
    {name:"Micro Plastics"},
    {name:"Nano Plastics"},
    {name:"Macro Plastics"}
  ],
  listOfLinks:[
    {name:"Prevention Links"}
  ],
  listOfGames:[
    {name:"Prevention Games"}
  ],
  listofCards:[
    {id:"card-1",name:"card",isDraggable:"true"},
    {id:"card-2",name:"cardTwo",isDraggable:"true"},
    {id:"card-3",name:"cardThree",isDraggable:"true"},
    {id:"card-4",name:"cardFour",isDraggable:"true"},
  ],
  Board:[
    {id:"board-1",name:"board"},
    {id:"board-2",name:"boardTwo"},
    {id:"board-3",name:"boardThree"},
    {id:"board-4",name:"boardCheckFruit"},
  ],
  showGrid:false,
  showGridTwo:false,
  showGridThree:false,
  showGridFour:false,
}
/* End of states */

/* render upon clicked the three plastics Micro,Nano,Macro */
switchName = (newName) => {
  this.setState({
  listOfPlastic:[{name:newName},
    {name:"Nano Plastics"}
  ],});
}
/*Toggle buttons upon click invokes How To Help!*/
togglerHandler = () => {
  const doesShow = this.state.showGrid;
  this.setState({showGrid:!doesShow});
}
/*Toggle buttons upon click invokes How To Links!*/
togglerHandlerLinks = () => {
  const doesShowTwo = this.state.showGridTwo;
  this.setState({showGridTwo:!doesShowTwo});
}
/*Toggle buttons upon click invokes Games!*/
togglerHandlerGame = () => {
  const doesShowThree = this.state.showGridThree;
  this.setState({showGridThree:!doesShowThree});
  alert("Match the Plastic Pollution items with the right bins!");

}
/*Toggle buttons upon click invokes 3D Interactive!*/
togglerHandler3D = () => {
  const doesShowFour = this.state.showGridFour;
  this.setState({showGridThree:!doesShowFour});

}
/* End of toggler handlers that display
body when buton is clicked in page */
render(){
/* Set displays to nothing,until condition becomes true*/
let displayAll = null;
let displayAllTwo = null;
let displayAllGame = null;
let displayCard = null;
let display3D = null;

const styleMap = {
  width: '101%',
  height: '635px',
  border: '5px none',
  marginLeft:'-3px',
  marginTop:'-52px'
}


/* Display body of button's body :How to Help,Play Game,etc */
  if(this.state.showGrid){
      displayAll = (
        <div>
        <Activist name = {this.state.listOfPlastic[0].name} />
        <Activist name = {this.state.listOfPlastic[1].name} />
        <Activist name = {this.state.listOfPlastic[2].name} />
        </div>
      );
    }
  else if(this.state.showGridTwo){
      displayAllTwo = (
        <div>
          <ActivistLinks name = {this.state.listOfLinks[0].name} />
        </div>
      );
    }
    else if(this.state.showGridTwo){
        displayAllTwo = (
          <div>
            <ActivistLinks name = {this.state.listOfLinks[0].name} />
          </div>
        );
      }
  else if(this.state.showGridThree){
      displayAllGame = (
        <div>
          <div className="flexbox">
            <img
            src = {Kitchen}
            className = "backgroundActivist"/>
            <Board id={this.state.Board[0].id}
            className={this.state.Board[0].name}>
            </Board>
            {/* End of Board 1 left column */}
            {displayCard}
            {/* Begin Board 2 column */}
              <div className="flexboxTwo">
                <Board
                id={this.state.Board[1].id}
                className={this.state.Board[1].name}>
                {/* Board 1 column 1 card*/}
                <Card
                id= {this.state.listofCards[1].id}
                className={this.state.listofCards[1].name}
                draggable= {this.state.listofCards[1].isDraggable}>
                <p className="zoom">Water Bottle<img
                className ="pictureIconHeight"
                src = "https://media.istockphoto.com/photos/empty-used-trash-bottle-ecology-environment-picture-id468931652" /></p>
                </Card>
                </Board>
              </div>
              <div className="flexboxThree">
                <Board
                id={this.state.Board[2].id}
                className={this.state.Board[2].name}>
                <Card
                id= {this.state.listofCards[2].id}
                className={this.state.listofCards[2].name}
                draggable= {this.state.listofCards[2].isDraggable}>
                <p className = "zoom">Soda Can<img
                className ="pictureIconSoda"
                src = "https://st2.depositphotos.com/1008960/6315/i/950/depositphotos_63159629-stock-photo-classic-coca-cola-can.jpg" /></p>
                </Card>
                </Board>
                <div className ="bananaSize">
                <Board
                  id={this.state.Board[3].id}
                  className={this.state.Board[3].name}>
                  <Card
                  id= {this.state.listofCards[3].id}
                  className={this.state.listofCards[3].name}
                  draggable= {this.state.listofCards[3].isDraggable}>
                  <p className ="zoom">Banana Peel<img className="bananaImg"
                  src = "https://www.4freephotos.com/medium/Banana-peel.jpg" /></p>
                </Card>
                </Board>
                </div>
              </div>
          </div>
            {/*Bin that doesnt accept all garbage */}
              <div className="flexboxCheck">
                  <BoardCheck
                  id="board-3"
                  className="boardCheck">
                </BoardCheck>
              </div>
          </div>
      );
    }
    return(
        <div>
        <div>
        <CarouselLandPg />
        <div className = "colorBack">
            <Jumbo />
        </div>
          <ActivistVideo />
          <ActivistCard />
          <ActivistCard />
        <iframe src="https://ourworldindata.org/grapher/mismanaged-waste-global-total" style={styleMap}></iframe>
        </div>
         <div class="grid-container">
          <div>
          <button className ="button-success pure-button"
          onClick = {this.togglerHandler}>How To Help</button>
          <div className="layoutDisplayContent">
          {displayAll}
          </div>
          </div>
          <div>
            <button className ="button-warning pure-button"
            onClick = {this.togglerHandlerGame}>Interactive Game</button>
            <div className="layoutDisplayContent">
            {displayAllGame}
            </div>
            </div>
          <div>
            <button className ="button-secondary pure-button"
            onClick = {this.togglerHandlerLinks}>Helpful Links</button>
            {displayAllTwo}
          </div>
        </div>
        <JumboFoot />
      </div>
    )
  }
}

export default App;
