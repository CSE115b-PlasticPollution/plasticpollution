import React from 'react';
import bins from './assets/bins.jpg'
import binstrash from './assets/binstrash.jpg'
import binsdump from './assets/binsdump.jpg'
import binsrecycle from './assets/binsrecycle.jpg'
import binsbackpck from './assets/binsbackpack.jpg'
import './Macro.css'


const Macro = (myRef) => {
    return (
      <div className="scene_container" >


         <h1>The Journey of Macro-Plastics</h1>
          <p>Macro information</p>
          <a id="area1" className="area1" href="#"></a>
          <a id="area2" className="area2" href="/Macro2"></a>
          <img className="scene" ></img>
          <p id="d1"className="description">This is a description of the trash bins, they are used for trash yada yada green tea is made out of little leaves and you soak them.</p>
      </div>

    );
}

export default Macro;