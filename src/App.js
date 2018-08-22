import React, { Component } from 'react';
import CartItem from './CartItem';
import './App.css';
import products from './products';
import CheckoutButton from './CheckoutButton';
import Clock from 'react-live-clock';
 
class App extends Component {
state = {
  products: products.map(p => ({ ...p, quantity: 0 })),
  value: 0
}

incrementQuantity(productId){
  const products = this.state.products.slice()
  const product = products.find(p => p.id === productId)
  product.quantity++
  this.setState({
    products
  })
}

totalValue(){
  const value = this.state.products.map(product =>{
    return product.quantity * product.price
  }).reduce((acc, curr) => acc + curr, 0)
  this.setState({
    value
  })
}
  render() {
    return (
      <div>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Amsterdam'} />
          <h1>Shopping Cart</h1>
          <ul>
            {this.state.products.map(product => <CartItem 
            name={product.name} 
            price={product.price} 
            key={product.id}
            quantity={product.quantity}
            onPlusClick ={() => this.incrementQuantity(product.id)}/>)}
          </ul> 
          <CheckoutButton onClick={() => this.totalValue()}/>
          <p> Total value: {this.state.value}</p>
      </div>
    );
  }
}

export default App;
