import React, { Component } from 'react';
import CartItem from './CartItem';
import './App.css';
import products from './products';

class App extends Component {
state = {
 quantity: 0
}

incrementQuantity(productId){
  console.log(productId);
  console.log(this);
  console.log(this.state);
  this.setState(
    {quantity : this.state.quantity + 1}
  )
}

  render() {
    return (
      <div>
          <h1>Shopping Cart</h1>
          <ul>
            {products.map(product => <CartItem 
            name={product.name} 
            price={product.price} 
            key={product.id}
            quantity={this.state.quantity}
            onPlusClick ={() => this.incrementQuantity(product.id)}/>)}
          </ul> 
          <button>Checkout</button>
      </div>
    );
  }
}

export default App;
