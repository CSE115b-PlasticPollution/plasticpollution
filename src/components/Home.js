import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import 'react-awesome-slider/dist/styles.css';
import Home from './Home.css'
import Counter from './TimeCounterComponent';
import {useSpring, animated} from 'react-spring';
import CounterContainer from './containerForCounterComp';
import {Route, Link} from 'react-router-dom';



const home = () => {
    let parallax;
    return (
        <Parallax pages={3.2} scrolling= {true} vertical ref={ref => parallax = ref} className="homeBody">
            <ParallaxLayer offset={0} speed={0}>
                <span classname="slideshowContainer">{slider}</span>
            </ParallaxLayer>
            <ParallaxLayer offset={1.2} speed= {1}>
                <Infographics/>
            </ParallaxLayer>
            <ParallaxLayer offset={1.999} speed={.3}>
                <CounterContainer/>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={4}>
                <ContainerWithtextonRight name= "Macros" namehref= "/plasticpollution/#/Macro" classname = "card macroCard" url={require('../assets/macro.jpg')} text="Macro plastics are defined as plastics with a diameter greater than 5mm in size. That's about the size of the diameter of a common plastic straw. Plastic’s are incredibly versatile materials that can be used in a variety of ways. Whether it be car parts, plastic bottles, toys, or even everyday appliances; plastic is often used in many everyday essential objects. Plastics have an incredibly long lifespan, and never truly break down without the help of human recycling measures. Start this Macros adventure to learn more about the paths a single use plastic can take after you’ve finished using it. "/>
                <ContainerWithtextonLeft/>
                <ContainerWithtextonRight name= "Nanos" namehref= "/plasticpollution/#/Nano" classname = "card nanoCard" url={require('../assets/nano.jpg')} text="
Nanoplastics are the smallest plastic particles, any plastic under 50 micrometers. They are the result of the breakdown of micro plastics into smaller particles. Due to their incredibly small size, these plastic particles are able to easily bypass containment systems used in landfills and waste water. Nanoplastics are toxic and easily consumable by humans and marine life, rendering them harmful to the health of humans as well as marine life. Start this Nanos adventure to learn about"></ContainerWithtextonRight>
            </ParallaxLayer>
        </Parallax>
    );
}

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    bullets={false}
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}>
    <div className="slideshowContainer">
        <img style = {{height: '100%', width: '100%', position: 'relative'}} src ={require('../assets/lotsOfPlastic.jpg')} ></img>
        <h1 style= {{ fontSize: 100, color: 'white', fontFamily: 'Orbitron', position:'absolute', width: '100%', top: 200, textAlign: 'center'}}>In a world full of plastic</h1>
    </div>
    <div className="slideshowContainer">
        <img style = {{height: '100%', width: '100%'}} src={require('../assets/platicBottle.jpg')}/>
        <h1 style= {{ fontSize: 100, color: 'white', fontFamily: 'Orbitron', position:'absolute', width: '100%', top: 200, textAlign: 'center'}}>What's YOUR impact?</h1>
        </div>
  </AutoplaySlider>
);

  function Infographics(props){
      return  <div className= "infoContainer">
      <iframe src="https://ourworldindata.org/grapher/global-plastics-production" className="infograph"></iframe>
      <div className="infoTextContainer">
        <h3 className="titleforinfo">Plastic Production</h3>
        <b></b>
        <p className="parforinfo"> We produce about 300 million tons of plastic per year. 17.6 billion pounds of plastic leaks into the marine environment from land-based sources every year</p>
        </div>
      </div>;
  }

  function ContainerWithtextonRight(props){
      return  <div class="plasticContainer">
        <div className="article">
        <p className="articleText">
          <h3>{props.name}</h3>
          <p className="articleText">{props.text}</p>
          <p className ="backgroundButtonColor">
          <Button color="light" >
            <Nav.Link href={props.namehref} className ="buttonColor">Start {props.name} Adventure</Nav.Link>
          </Button>
          </p>
      </p>
      </div>
      <div class="articleC">
        <Card class = {props.classname}/>
      </div>
  </div>;
  }
  function ContainerWithtextonLeft(props){
      return <div class="plasticContainer">
      <div class="articleC">
          <Card class = "card microCard"/>
      </div>
      <div class="article">
      <p className="articleText">
          <h3 >Micros</h3>
          <p className="articleText">Micros are smaller plastic particles, around 50 micrometers to 5mm. The plastics usually come from the natural breakdown of Macroplastics. This stage of plastic is a part of the breakdown of Macroplastics, and may eventually break down into Nanoplastic. There are also a few ways microplastics can be directly manufactured and enter our oceans and landfills that way, such as microbeads that are in some skin care products. Humans also may consume these plastics without realizing it, but this is a topic still up for debate on exact effects on human health. Start this Micros adventure to learn about Micros entry into waterways as well as their journey on land. .</p>
          <p className ="backgroundButtonColor">
          <Button color="light" >
          <Nav.Link href="/plasticpollution/#/Micro" className ="buttonColor A">Start Micro Adventure</Nav.Link>
          </Button>
          </p>
          </p>
      </div>
  </div>;
  }

  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  function Card(features) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
      <animated.div
        class= {features.class}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    )
  }

export default home;
