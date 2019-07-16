import React, { Component } from 'react';
import axios from 'axios';

class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      deckID: ''
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
    return (
      <div>
        <h1>decks</h1>
      </div>
    )
  }
}

export default Deck;