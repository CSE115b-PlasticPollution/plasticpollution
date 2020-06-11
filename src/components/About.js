import React from 'react';
import Sammy from './sammy.png'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import SammyTwo from './SammyTwo.png';
import Berkeley from './ucb.png';
import Ucr from './ucr.png';
import Ucm from './ucm.png';
import Ucla from './ucla.png';
import Uci from './uci.png';
import AboutPg from './About.css'

import Jumbotron from 'react-bootstrap/Jumbotron';

const About = () => {

    return(
      <div className ="mainText">
      <Jumbotron fluid className ="jumboHeight">
    <h1>Meet The Banana Slug Team</h1>
    <p>UCSC Plastic Pollution</p>
    <p>This website was made in collaberation of the IDEASS lab, a year long course at UCSC which brings together
      students of different backgrounds to collaberate on projects that deal with social, and ecological issues of our time. 
      This project was initiated through the IDEASS lab and the students of the CSE 115 class helped with the creation and design of the website
      We would like to thank everyone who made this project possible. From the team that worked first hand on it to the professors and assistants 
      that assisted with it. Thank you professor Richard Jullig, professor Stella Heins, and teaching assistant Akila de Silva. </p>
</Jumbotron>
      <CardGroup>
      <Card>
    <Card.Img className ="pictureHeight" src={Berkeley} />
    <Card.Body>
      <Card.Title>Collin Hurst</Card.Title>
      <Card.Text>
        React Developer
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className = "pictureHeight" src={Ucr} />
    <Card.Body>
      <Card.Title>Cristian Castillo</Card.Title>
      <Card.Text>
        React Developer{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="pictureHeight" src={Ucm}/>
    <Card.Body>
      <Card.Title>Paola Reyes</Card.Title>
      <Card.Text>
    IDEASS Collaberator
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
<Card>
<Card.Img className="pictureHeight" src={SammyTwo} />
<Card.Body>
<Card.Title>Alexis Hooper</Card.Title>
<Card.Text>
IDEASS Collaberator
</Card.Text>
</Card.Body>
<Card.Footer>
<small className="text-muted"></small>
</Card.Footer>
</Card>
<Card>
<Card.Img className="pictureHeight" src={Uci} />
<Card.Body>
<Card.Title>Kevika Peires</Card.Title>
<Card.Text>
IDEASS Collaberator{' '}
</Card.Text>
</Card.Body>
<Card.Footer>
<small className="text-muted"></small>
</Card.Footer>
</Card>
<Card>
<Card.Img className ="pictureHeight" src={Ucla} />
<Card.Body>
<Card.Title>Benji Weaver</Card.Title>
<Card.Text>
IDEASS Collaberator
</Card.Text>
</Card.Body>
<Card.Footer>
<small className="text-muted"></small>
</Card.Footer>
</Card>
</CardGroup>
<Jumbotron fluid className ="jumboHeightTwo">
<p>
UCSC Plastic Pollution ©
</p>
</Jumbotron>
</div>
    );
}

export default About;
