import React, { Component } from 'react';

export default class CartItem extends Component {

render() {
    return (
        <div>
            <li>{this.props.name}</li>
            <li>{this.props.price}</li>
            <li>{this.props.quantity}</li>
            <button onClick={this.props.onPlusClick}>+</button>
        </div>
    )
}

}

