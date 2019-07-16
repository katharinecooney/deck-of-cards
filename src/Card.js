import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div>
        <img src={this.props.photo} alt={this.props.description}/>
      </div>
    )
  }
}

export default Card;