import React from 'react';
import kitchen from './assets/kitchen.jpg'
import Card from './CardMicro'
import './MacroReuse.css'


const Macro = (myRef) => {
    return (
      <div className="main_div_macro" > 
      <div className="scene_container2">
        <div className='leftcolumn'>
          <div className='buttonContainer'>
            <a className="backButton" href='./#/Macro'>&#8249;</a>
          </div>
        </div>
        <div className="middle">
          <h1 className="macrotxttitle">Reusing Your Plastic</h1>
          <img className="kitchen" src={kitchen} ></img>

        </div>
        <div className='rightcolumn'>
          <div className='buttonContainer'>
            <a className="finishButton" href='./#/'>Finish</a>
          </div>
        </div>
        
      </div>
      <div>
        <h2 className="description2 macrotxt">Potentially the best way to address the plastic pollution issue is through reducing and reusing. Small steps to reduce your plastic footprint can range from buying a reusable water bottle, bringing your own bags to the grocery store, using mason jars and buying unpackaged food items, avoiding fast food. Generally avoid single-use plastics where possible.</h2>
        <div className="reuse_cards">
        <Card class="reusecard reusablebottle"></Card>
        <Card class="reusecard reusablebag"></Card>
        <Card class="reusecard reusablemason"></Card>
        <Card class="reusecard reusablefast"></Card>
        </div>
        <h2 className="description2 macrotxt">Here are some projects you can do if you do end up using some single-use plastics! Follow the links...</h2>
         <a className="links macrotxt" href="https://www.budgetdumpster.com/blog/diy-plastic-bottles-recycling/ ">Ideas from the budget dumpster! </a>
         <a className="links macrotxt" href="https://www.hometalk.com/29761014/s-30-useful-ways-to-reuse-plastic-bottles">Ideas from hometalk!</a>
      </div>
      </div>
    );
}

export default Macro;
