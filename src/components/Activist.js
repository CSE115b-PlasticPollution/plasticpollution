import React from 'react';
import styleActivist from './Activist.css'
import microPic from './assets/ocean.jpg'
import microP from './assets/handNano.jpg'
import bins from './assets/activismBin.jpg'

const activist = (props) => {

    return (
        <div>
        <div className="grid-containerHelp">
          <div className="grid-itemHelp">
          <h1>{props.name}</h1>
          <img class = "itemSize" src = {microPic} />
          {props.children}
          </div>
          <div className="grid-itemText">

          <p>Recycling is how we take trash and transform it into new products. There are several types of recycling processes that allow some materials to be used one or more times. Recycling is good for us and the environment because it reduces the use of new raw materials to product new products. It also reduces the energy we use, improves the quality of air and water, and fights climate change.
          All sorts of things can be recycled. Some of the most common processes used today recycle plastics,glass, electronics, carboard, and newspapers!</p>
          </div>
          </div>

          <div className="grid-itemBins">
          <h1>Which Bin?</h1>
          <img class = "itemSize" src = {bins} />
          </div>
        </div>
    )
}

export default activist;
