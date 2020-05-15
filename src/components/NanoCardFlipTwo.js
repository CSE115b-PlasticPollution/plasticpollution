import React from 'react'
import './NanoCardFlipStyleTwo.css'
import Nav from 'react-bootstrap/Nav';


const NanoCardFlipTwo = () =>{

  return(
    <div className = "nanoInfoFormatBody">

            <div class="flip-boxNanoBody">
              <div class="flip-box-innerNanoBody">
              <div class="flip-box-frontNanoBody">
              <h2></h2>
              </div>
              <div class="flip-box-backNanoBody">
              <h2></h2>
              <button><Nav.Link href="/plasticpollution/#/HumanConsumptionNano" className ="buttonColor A">Begin Journey</Nav.Link></button>
              </div>
            </div>
          </div>

</div>
  )
}

export default NanoCardFlipTwo;
