import React, { Component } from 'react'
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div>
        <img className="Card" src={this.props.photo} alt={this.props.description}/>
      </div>
    )
  }
}

export default Card;