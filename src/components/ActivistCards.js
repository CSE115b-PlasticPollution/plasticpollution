import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import {render} from 'react-dom';
import './ActivistCardStyle.css'

const ActivistCard = () =>{

  return(
    <div className = "activistInformationalDisplay">

                  <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <h2></h2>
              </div>
              <div class="flip-box-back">
                <h2>Back Side</h2>
              </div>
            </div>
          </div>
          <div>
              <div class="flip-boxV">
                <div class="flip-box-innerV">
                  <div class="flip-box-frontV">
                    <h2></h2>
                  </div>
                  <div class="flip-box-backV">
                    <h2>Back Side</h2>
                  </div>
                </div>
                </div>

                </div>
                <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <h2></h2>
            </div>
            <div class="flip-box-back">
              <h2>Back Side</h2>
            </div>
          </div>
          </div>

</div>
  )
}

export default ActivistCard;
