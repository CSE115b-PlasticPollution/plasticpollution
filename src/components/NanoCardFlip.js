import React from 'react'
import './NanoFlipCardStyle.css'
import Nav from 'react-bootstrap/Nav';


const NanoCardFlip = () =>{

  return(
    <div className = "nanoInfoFormat">

            <div class="flip-boxNano">
              <div class="flip-box-innerNano">
              <div class="flip-box-frontNano">
              <h2></h2>
              </div>
              <div class="flip-box-backNano">
              <h2>3D Tour</h2>
              <button><Nav.Link href="/plasticpollution/#/Nano3D" className ="buttonColor A">Begin Journey</Nav.Link></button>
              </div>
            </div>
          </div>

</div>
  )
}

export default NanoCardFlip;
