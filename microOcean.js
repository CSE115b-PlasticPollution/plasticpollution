import React from 'react';
import MicroOceanCss from './microOcean.css'
import TurtleMove from './turtleAnimation';
import BagPopUp from './microPopBoxBag';
import ManyMicroFloat from './microMedium';
import NetFloat from './microNet';
import BagFloat from './plasticBag';
import MicroFloat from './microPiece';
import singleMicro from './microSingle';
import oceanCarousel from './carouselForMicroOcean'
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import oceanCarouselMariana from './carouselforMariana'

const MicroOcean = () => {
    return <div className="main-divMicro">
      <div className="container_grid">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="oceanMain">
      <Button className= "floatButton3"><Nav.Link href="/plasticpollution/#/FoodWeb"><BagFloat/></Nav.Link></Button>
      <Button className= "floatButton"><Nav.Link href="/plasticpollution/#/FishMarket"><NetFloat/></Nav.Link></Button>
      <div className="depthContainer650"><h2 className="MarianaText">650ft</h2></div>
      <div className="containerForMicrosTop"><ManyMicroFloat/><ManyMicroFloat/></div>
      <div className="containerForMicrosBottom"><ManyMicroFloat/><ManyMicroFloat/></div>
      <div className="containerForGarbage">{oceanCarousel}</div>
      <div className="depthContainer2000"><h2 className="MarianaText">2000ft</h2></div>
      <div className="containerForMariana">{oceanCarouselMariana}</div>
      <BagPopUp title="popoverBag"/>
      <div className="depthContainer36000"><h2 className="MarianaText">36,000ft</h2></div>

      </div>
      </div>

}


export default MicroOcean;
