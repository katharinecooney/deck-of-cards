import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css'

class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      deckID: ''
    }
    this.getCard = this.getCard.bind(this);
  }

  getCard(){
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
    const cards = this.state.cards.map(card => <Card key={card.code} photo={card.image} description={`${card.value} of ${card.suit}`}/>)
    return (
      <div>
        <h1>Card Dealer!</h1>
        <button onClick={this.getCard}>Get a Card!</button>
        <div className='Deck Deck-area'>
          {cards}
        </div>
        
      </div>
    )
  }
}

export default Deck;