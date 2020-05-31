import React from 'react';
import china from './assets/chinashipping.jpg'
import Trans from './mechanicalRecycling'
import TransChem from './chemRecycling'

import './MacroAsia.css'




const Macro = (myRef) => {
    return (
      <div className="main_div_macro">
      <div className="scene_container2">
        <div className='leftcolumn'>
          <div className='buttonContainer'>
            <a className="backButton" href='./#/MacroRecycle'>&#8249;</a>
          </div>
        </div>
        <div className="middle">
          <h1 className="macrotxttitle"> Shipped to China</h1>
          <img  src={china} ></img>

        </div>
        <div className='rightcolumn'>
          <div className='buttonContainer'>
            <a className="finishButton" href='./#/'>Finish</a>
          </div>
        </div>
        
      </div>
      <div><h2 className="description2 macrotxt">
      In the past, China accepted a large amount of our recycling, but recent purity standards made it so much of this is being rejected. Now, our contaminated recycling is being sent to other areas in Asia. 
      Recycled materials still require new, virgin plastic to make products. This means that even a bottle made with recycled plastic is still contributing to net world plastic increase. 
      </h2>
      <h2 className="description2 macrotxttitle">Broadly, there are two major ways to recycle plastic: </h2>
        <div className="landfill_macro_double_cont">
          <div>
          <h2 className="description2 macrotxt">Mechanical recycling</h2>
            <h2 className="description2 macrotxt">Plastic is washed, ground into powders and melted, and turned into similar plastic products</h2>
            <Trans/>
            </div>
          <div>
          <h2 className="description2 macrotxt">Chemical recycling </h2>
        <h2 className="description2 macrotxt"> Plastic is broken down into basic components, and could be turned into synthetic crude oil </h2>
        <TransChem/>
        </div>
      </div>
      </div>
      </div>
    );
}

export default Macro;
