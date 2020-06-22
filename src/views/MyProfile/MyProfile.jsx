import React from 'react';
import './MyProfile.scss';

class MyProfile extends React.Component {
  state = {
    username: '',
    iteration: -1,
    quotes: [
      'Don`t just be good to others. Be good to yourselft too',
      'We mature with the damage, not with the years',
      'I just don`t want to feel so bad anymore',
      'Someone people want to see you fail. Disappoint them!',
      'The strongest hearts have the most scars!'
    ]
  }

  changeQuote = () => {
    console.log('Test')

    setTimeout(() => 
      {
        this.setState({ iteration: this.state.iteration === this.state.quotes.length -1 ? 0 : this.state.iteration + 1})
        
      }, 2000)
    return this.state.quotes[this.state.iteration]
  }

  render() {
    return (
      <div className="my-profile-container">
        <div className='quote-modal'>
          <div className='quote'>
            "{this.changeQuote()}"
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;