import React from 'react';
import './MicroBoardwalk.css'
import BagPopUp from "./microPopBoxBag"


const MicroBoardwalk= () => {
    return <div className="full_boardwalk_page">
         <h1 className="macrotxttitle"> The Journey of Micro-Plastics</h1>
         <h2 className="macrotxt">Micros are smaller plastic particles, around 50 micrometers to 5mm. The plastics usually come from the natural breakdown of Macroplastics. This stage of plastic is a part of the breakdown of Macroplastics, and may eventually break down into Nanoplastic. </h2>
        <div className="main_div_boardwalk">
        <BagPopUp title = "Store"/>
        <BagPopUp title = "Road"/>
        <BagPopUp title = "Ocean"/>
    </div>
    </div>
}

export default MicroBoardwalk;