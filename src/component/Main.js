import React, { Component } from 'react';
import Header from "./client/Header"
import Footer from "./client/Footer"
import Home from "./client/Home"
import Services from "./client/Services"

import ShoppingCart from "./client/ShoppingCart"
import Addition from "./client/Addition"
import Auth from "./client/Auth"
import NotFound from "./NotFound"


import options from "../data/option"

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchProducts,
        loginUser, logoutUser,
        fetchCart, addInToCart, clearCart, deleteFromCart, updateItemInCart
      } from '../redux/ActionCreators';

const mapStateToProps = state => {

  return {
    products: state.products,
    auth:state.auth,
    cart:state.cart
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () =>  dispatch(fetchProducts()),

  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),

  fetchCart: () =>  dispatch(fetchCart()),
  addInToCart: (item) => dispatch(addInToCart(item)),
  clearCart: () => dispatch(clearCart()),
  deleteFromCart: (id) => dispatch(deleteFromCart(id)),
  updateItemInCart: (item) => dispatch(updateItemInCart(item))
});



class Main extends Component {

  componentDidMount() {
    this.props.fetchProducts(); 
    this.props.fetchCart(); 
  }
  
  render() {
    
    const additionWihID = ({match}) => {

      var product

      for(let collection of this.props.products.products){
        for(let combo of collection.data){
          if(combo.id===parseInt(match.params.id)){
            product = combo
          }
        }
      }

      return(
          <Addition  combo={product} options={options} auth={this.props.auth} history={this.props.history} cart={this.props.cart.cart} updateItemInCart={this.props.updateItemInCart}
          />
      );
    };



    return (
      <div >
        <Header auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} history={this.props.history}/>
        <Switch history={this.props.history}>
        
          <Route exact path='/Home' component={()=><Home auth={this.props.auth} history={this.props.history} data={this.props.products.products} />} />
          
          <Route exact path='/Services' component={()=><Services 
                                                        auth={this.props.auth} 
                                                        history={this.props.history} 
                                                        data={this.props.products.products}
                                                        cart={this.props.cart.cart}
                                                        addInToCart={this.props.addInToCart} />} />

          <Route exact path='/Auth' component={()=><Auth auth={this.props.auth} loginUser={this.props.loginUser} history={this.props.history}/>}  />
          
          <Route exact path='/ShoppingCart'  component={()=> <ShoppingCart 
                                                              history={this.props.history} 
                                                              cart={this.props.cart.cart} 
                                                              clearCart={this.props.clearCart}
                                                              deleteFromCart={this.props.deleteFromCart}
                                                              />} />
          <Route path='/Addition/:id' component={additionWihID} />

          <Route exact path='/NotFound'  component={NotFound} />
          <Redirect to="/Home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
