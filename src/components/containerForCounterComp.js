import React from 'react';
import Home from './Home.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from '@material-ui/core/Button';
import Counter from './TimeCounterComponent';

export default class CounterContainer extends React.Component {
    constructor() {
       super();
       this.state = {
         clicked: false
       };
       this.handleClick = this.handleClick.bind(this);
     }
  
    handleClick() {
      this.setState({
        clicked: true
      });
    }
    InitialStatement(){
        return <Jumbotron className="counterContainer_home"><div className="counterTextContainer">
            <h2 className="counterTitleText">Plastic Production and Waste by the numbers</h2>
          <p className="counterTitleText">See how much plastic is being produced and wasted every second.</p>
          <p className ="backgroundButtonColor">
          <Button color= "lightblue" variant="primary" onClick={this.handleClick}>See the numbers</Button>
          </p> 
          </div>
          </Jumbotron>
    }
    render () {
        return <div>
             {this.state.clicked ? (
          <Counter/>
        ) : (
            this.InitialStatement()
        )}
        </div>
    }
}






