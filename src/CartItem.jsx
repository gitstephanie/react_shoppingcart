import React, { Component } from 'react';

export default class CartItem extends Component {

render() {
    return (
        <li>
            {this.props.name}   Price = {this.props.price}   Quantity = {this.props.quantity}   <button key={this.props.id} onClick={this.props.onPlusClick}>+</button>
        </li>
    )
}

}

