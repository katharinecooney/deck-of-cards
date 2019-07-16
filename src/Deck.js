import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      deckID: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`)
      .then(response => {
        this.setState({
          cards: [...this.state.cards, response.data.cards[0] ]
        })
      })
  }

  componentDidMount(){
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
     .then(response => {
       this.setState({
         deckID: response.data.deck_id
       })
     })
   }

  render() {
    
    return (
      <div>
        <h1>Card Dealer!</h1>
        <button onClick={this.handleClick}>Get a Card!</button>
        {
          this.state.cards.map(card => 
            <Card photo={card.image} description={`${card.value} of ${card.suit}`}/>
          )
        }
      </div>
    )
  }
}

export default Deck;