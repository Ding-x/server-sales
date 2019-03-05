import React, { Component } from 'react';
import "./Style.css";



export default class ShoppingCartLogo extends Component{
    
    toShoppingCart = () => {
        this.props.history.push(`/ShoppingCart`);
    }

    render(){
        return(
            <div className="shopping-cart-box" onClick={this.toShoppingCart}><i className="fas fa-cart-plus shopping-cart"></i></div>
        )
    }

}