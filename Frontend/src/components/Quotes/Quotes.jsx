import React from 'react';
import { Link } from 'react-router-dom';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iteration: -1,
      quotes: [
        'Don`t just be good to others. Be good to yourselft too',
        'We mature with the damage, not with the years',
        'I just don`t want to feel so bad anymore',
        'Someone people want to see you fail. Disappoint them!',
        'The strongest hearts have the most scars!'
      ]
    }
 } 
  changeQuote = () => {
    setTimeout(() => 
      {
        this.setState({ iteration: this.state.iteration === this.state.quotes.length -1 ? 0 : this.state.iteration + 1})
        
      }, 5000)
    return this.state.quotes[this.state.iteration]
  }

  render() {
    return (
        <div className='quote-modal'>
            <div className='quote'>
              "{this.changeQuote()}"
            </div>
            <Link to="/best-price">About</Link>
        </div>
    );
  }
}

export default Quotes;