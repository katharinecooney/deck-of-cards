import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css'

class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      deckID: '',
      cardsRemaining: 52
    }
    this.getCard = this.getCard.bind(this);
  }

  async getCard(){
    try {
      let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`);
      if(response.data.success !== true) {
        throw new Error('No cards remaining')
      }
      console.log(response)
      this.setState({
        cards: [...this.state.cards, response.data.cards[0] ],
        cardsRemaining: response.data.remaining
      })
    } 
    catch(err) {
      alert(err)
    }
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
      <div className="Deck">
        <h1 className="Deck-title">Card Dealer!</h1>
        <h2 className="Deck-title subtitle">A Demo Built with React</h2>
        <button className="Deck-button" onClick={this.getCard}>Get a Card!</button>
        <div className='Deck Deck-area'>
          {cards}
        </div>
        
      </div>
    )
  }
}

export default Deck;