import React, { Component } from 'react'
import './Card.css';

class Card extends Component {
  constructor(props){
    super(props);

    // we put this in the constructor because 
    // we only want it to run one time
    // we add it to the constructor object directly 
    // by tacking it onto 'this'
    let angle = Math.random() * 90 - 45;
    let xPosition = Math.random() * 40 - 20;
    let yPosition = Math.random() * 40 - 20;
    this._transform = `translate(${xPosition}px, ${yPosition}px) rotate(${angle}deg)`;
  }
  render() {
    
    return (
      <div>
        <img className="Card" src={this.props.photo} alt={this.props.description} style={{transform: this._transform}}/>
      </div>
    )
  }
}

export default Card;