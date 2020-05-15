import React from 'react';
import styleActivist from './Activist.css'
import microPic from './assets/ocean.jpg'
import microP from './assets/handNano.jpg'

const activistLink = (props) => {

    return (
        <div className="divLinks">
            <h2 className="preventionFormat">{props.name}</h2>
            <div>
            <ul>
              <li><a href="https://ourworldindata.org/plastic-pollution">Our World in Data</a></li>
              <li><a href="https://plastic-pollution.org/">Plastic Pollution</a></li>
              <li><a href="https://www.biologicaldiversity.org/campaigns/ocean_plastics/index.html">Oceans Plastic Pollution</a></li>
              <li><a href="https://www.nationalgeographic.com/environment/habitats/plastic-pollution/">National Geographic</a></li>
              <li><a href="https://plasticoceans.org/">Plastic Oceans</a></li>
              <li><a href="https://theoceancleanup.com/sources/">The Ocean Cleanup</a></li>
              <li><a href="https://www.plasticpollutioncoalition.org/">Plastic Pollution Coalition</a></li>
              <li><a href="https://www.sas.org.uk/our-work/plastic-pollution/plastic-pollution-facts-figures/">SAS</a></li>
            </ul>
            </div>
        </div>
    )
}

export default activistLink;
