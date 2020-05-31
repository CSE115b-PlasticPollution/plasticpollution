import React from 'react';
import landfill from './assets/landfill.jpg'
import './Macro2.css'
import MapChart from './landfillMap'


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
          <h1 className="macrotxttitle">Landfill</h1>
          <img className="landfill" src={landfill} ></img>

        </div>
        <div className='rightcolumn'>
          <div className='buttonContainer'>
            <a className="finishButton" href='./#/'>Finish</a>
          </div>
        </div>
        
      </div>
      <div> 
        <h2 className="description2 macrotxt"> None of the energy or material used can be recovered when plastics are disposed of in landfills. Space constraints are also becoming an issue. Although land in the United States is abundant, smaller countries such as Denmark and Japan already are relying more heavily on incineration to conserve land resources.
        Even then landfills are plentiful in the US. </h2>
        <div className="landfill_macro_double_cont">
        <img className="landfill_us_map"src="https://www.saveonenergy.com/assets/default/outreach/land-of-waste/asset1.png"></img>
        <h2 className="description2 macrotxt">This constitutes a long-term risk of contamination of soil and groundwater with plastics’ components as well as with other contaminants contained in landfill leachate.</h2>
        </div>
        <h1 className="macrotxttitle">Largest Landfill Sites</h1>
        <div className="landfill_macro_double_cont">
        <div className="landfill_map_container"><MapChart></MapChart>
        <div className="area1_landfill"></div>
        <div className="area2_landfill"></div>
        <div className="area3_landfill"></div>
        <div className="area4_landfill"></div>
        <div className="area5_landfill"></div>
        <div className="area6_landfill"></div>
        <div className="area7_landfill"></div>
        <div className="area8_landfill"></div>
        <div className="landfill_apex"><h2 className="macrotxt centerlandfill">Apex Regional</h2><div className="apex"></div><h2 className="macrotxtsmall">Location: Las Vegas, United States </h2><h2 className="macrotxtsmall">Size: 2,200 acres </h2></div>
        <div className="landfill_bordo"><h2 className="macrotxt centerlandfill">Bordo Poniente</h2><div className="bordo"></div><h2 className="macrotxtsmall">Location: Mexico City, Mexico </h2><h2 className="macrotxtsmall">Size: 927 acres </h2></div>
        <div className="landfill_laogang"><h2 className="macrotxt centerlandfill">Laogang</h2><div className="lao"></div><h2 className="macrotxtsmall">Location: Shanghai China</h2><h2 className="macrotxtsmall">Size: 830 acres</h2></div>
        <div className="landfill_malagrotta"><h2 className="macrotxt centerlandfill">Malagrotta</h2><div className="mala"></div><h2 className="macrotxtsmall">Location: Rome Italy</h2><h2 className="macrotxtsmall">Size: 680 acres</h2></div>
        <div className="landfill_puenta"><h2 className="macrotxt centerlandfill">Puenta Hills</h2><div className="puenta"></div><h2 className="macrotxtsmall">Location: Los Angelos, United States</h2><h2 className="macrotxtsmall">Size: 630acres </h2></div>
        <div className="landfill_sudo"><h2 className="macrotxt centerlandfill">Sudokwan</h2><div className="sudo"></div><h2 className="macrotxtsmall">Location: Incheon, South Korea </h2><h2 className="macrotxtsmall">Size: 570 acres </h2></div>
        <div className="landfill_delhi"><h2 className="macrotxt centerlandfill">Delhi Landfills</h2><div className="delhi"></div><h2 className="macrotxtsmall">Location: New Delhi, India</h2><h2 className="macrotxtsmall">Size: 500 acres</h2></div>
        <div className="landfill_deonar"><h2 className="macrotxt centerlandfill">Deonar</h2><div className="deonar"></div><h2 className="macrotxtsmall">Location: Mumbai, India</h2><h2 className="macrotxtsmall">Size: 326 acres</h2></div>
        </div>
        </div>
      </div>
      </div>
    );
}

export default Macro;
