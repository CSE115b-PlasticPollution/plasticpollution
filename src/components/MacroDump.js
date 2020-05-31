import React from 'react';
import stormdrain from './assets/stormdrain.jpg'
import './MacroDump.css'


const Macro = (myRef) => {
    return (
      <div className="main_div_macro">
      <div className="scene_container2">
        <div className='leftcolumn'>
          <div className='buttonContainer'>
            <a className="backButton" href='./#/Macro'>&#8249;</a>
          </div>
        </div>
        <div className="middle">
          <h1 className="macrotxttitle">Dumping Your Plastic</h1>
          <h2 className="macrotxt">Oh no! Your plastic has been carried by the wind into the storm drain. Follow to storm drain to see where the plastic ends up.</h2>
          <a id="area" className="areastorm " href="/plasticpollution/#/MacroOcean"></a>
          <img className="stormdrain" src={stormdrain} ></img>

        </div>
        <div className='rightcolumn'>

        </div>
        
      </div>
      </div>
    );
}

export default Macro;
