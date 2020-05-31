import React from 'react';
import bins from './assets/bins.jpg'
import binstrash from './assets/binstrash.jpg'
import binsdump from './assets/binsdump.jpg'
import binsrecycle from './assets/binsrecycle.jpg'
import binsbackpck from './assets/binsbackpack.jpg'
import './Macro.css'


const Macro = (myRef) => {
    return (
      <div className="main_div_macro">
      <div className="scene_container">
         <h2 className="macrotxttitle"> The Journey of Macro-Plastics</h2>
          <h2 className="macrotxt">Macro plastics are defined as plastics with a diameter greater than 5mm in size. That's about the size of the diameter of a common plastic straw. </h2>
          <a id="area" className="area1" href="/plasticpollution/#/MacroRecycle"></a>
          <a id="area" className="area2" href="/plasticpollution/#/Macro2"></a>
          <a id="area" className="area3" href="/plasticpollution/#/MacroReuse"></a>
          <a id="area" className="area4" href="/plasticpollution/#/MacroDump"></a>
          <img className="scene" ></img>
          <div id="d0"></div>
          <h2 id="d1"className="macrotxtdesc">This bin is for clean recyclable products ONLY. Aluminum, paper, glass, and plastic. </h2>
          <h2 id="d2"className="macrotxtdesc">When in doubt, throw it out. This bin is for anything else besides clean aluminum, paper, glass, or plastic.</h2>
          <h2 id="d3"className="macrotxtdesc">Take the plastic with you for reuse later on. </h2>
          <h2 id="d4"className="macrotxtdesc">Leave it on the ground, it’s not your responsibility anyway.</h2>
   
      </div>
      </div>

    );
}

export default Macro;
