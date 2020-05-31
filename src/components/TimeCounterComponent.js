import React from 'react';
import Home from './Home.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const popoverProduction = (
    <div className="popoverdiv">
        <img className= "popoverImg" src= "https://images.pexels.com/photos/7674/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Sample Image"></img>
        <p className="popovertext">9025 is about 9US tons. Which is more than the two whole cars every seconds. 
        Or over 285 new cars per minute. </p>
      </div>
);


const popoverCountdown = (
      <div className="popoverdiv">
        <img className= "popoverImg" src= "https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Sample Image"></img>
        <p className="popovertext"> Every second 19025lbs of plastic are produced, and 558lbs of plastic are thrown into the ocean</p>
        </div>
);


const popoverWaste = (
    <div className="popoverdiv">
        <img className= "popoverImg" src= "https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Sample Image"></img>
        <p className="popovertext">Plastic that is dumped in the ocean conglomerates at various depths, and can be detrimental to the marine life. </p>
      </div>
);

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        elapsedTime: null,
        productionTime: null,
        WasteTime: null
      };
      this.countUp = this.countUp.bind(this);
      this.countProduction= this.countProduction.bind(this)
      this.countWaste= this.countWaste.bind(this)
      this.startCounting = this.startCounting.bind(this);
      this.startCounting();
    }
  
    startCounting() {
      setInterval(this.countUp, 1000);
      setInterval(this.countProduction, 1000);
      setInterval(this.countWaste, 1000);
    }
  
    countUp() {
      this.setState(({ elapsedTime }) => ({ elapsedTime: elapsedTime + 1 }));
    }

    countProduction(){
        this.setState(({ productionTime }) => ({ productionTime: productionTime + 19025 }));
    }
    countWaste(){
        this.setState(({ WasteTime }) => ({ WasteTime: WasteTime + 558 }));
    }

    render() {
        return <div class="containerCircle">
        <div class="circle circleFast">
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverProduction}>
            <div class="aligner">
            <p className="circleText">{this.state.productionTime}<br></br>lbs produced</p>
            </div>
            </OverlayTrigger>
        </div>
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverCountdown}>
        <div class="circle circleSlow">
            <div class="aligner">
                <p onload= {this.startCounting} className="circleText">{this.state.elapsedTime} <br></br> seconds</p>
            </div>
        </div>
        </OverlayTrigger>
        <div class="circle circleMed">
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverWaste}>
            <div class="aligner">
            <p className="circleText">{this.state.WasteTime} <br></br>pounds dumped</p>
            </div>
            </OverlayTrigger>
        </div>
        </div>  ;
      }
    }

 
  
  export default Counter;