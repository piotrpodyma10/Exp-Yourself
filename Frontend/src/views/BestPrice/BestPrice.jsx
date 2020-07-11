import React from 'react';
import './BestPrice.scss';

class BestPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        options: [{ name: 'First option', price: '99.99'}, { name: 'Second option', price: '79.99'}, { name: 'Third option', price: '17.99'}],
        selectedId: 0
      }
  }



  render() {
    return (
      <div className="best-price-container">
        <div>Choose your option</div>
        <div>
            {this.state.options.map((option, index) => {
                return (
                    <div onClick={() => this.setState({ selectedId: index})}>
                        <div>{option.name}</div>
                        <div>{option.price}</div>
                    </div>
                )
            })}
        </div>
        <div> SELECTED VALUE: {this.state.options[this.state.selectedId].name}</div>
      </div>
    );
  }
}

export default BestPrice;