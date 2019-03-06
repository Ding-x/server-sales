import React, { Component } from 'react';
import Header from "./client/Header"
import Footer from "./client/Footer"
import Home from "./client/Home"
import ShoppingCart from "./client/ShoppingCart"
import Addition from "./client/Addition"
import Auth from "./client/Auth"
import Step1 from "./client/NewOrder/Step1"
import Step2 from "./client/NewOrder/Step2"
import Step2Detail from "./client/NewOrder/Step2Detail"
import Step3 from "./client/NewOrder/Step3"

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {fetchProducts,loginUser, logoutUser, updateCart} from '../redux/ActionCreators';

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
  updateCart: (cart) => dispatch(updateCart(cart))
});



class Main extends Component {

  componentDidMount() {
    this.props.fetchProducts();   
  }
  
  render() {
    const additionWihID = ({match}) => {
      return(
          <Addition  id={match.params.id}
          />
      );
    };

    const editProjectWithID = ({match}) => {

      var cart = this.props.cart.cart[match.params.id];

      return(
          <Step2Detail  
          cart={cart} 
          products={this.props.cart.cart} 
          index={match.params.id} 
          updateCart={this.props.updateCart}
          />
      );
    };

    return (
      <div >
        <Header auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} history={this.props.history}/>
        <Switch history={this.props.history}>
          <Route exact path='/Home' component={()=><Home auth={this.props.auth} history={this.props.history}  />} />
          <Route exact path='/Auth' component={()=><Auth auth={this.props.auth} loginUser={this.props.loginUser} history={this.props.history}/>}  />
          <Route exact path='/ShoppingCart'  component={ShoppingCart} />
          <Route path='/Addition/:id' component={additionWihID} />

          <Route exact path='/NewOrder/Step1' component={()=> <Step1 cart={this.props.cart.cart} updateCart={this.props.updateCart} />} />
          <Route exact path='/NewOrder/Step2' component={()=> <Step2 cart={this.props.cart.cart} updateCart={this.props.updateCart} history={this.props.history} />} />

          <Route path='/NewOrder/Step2/:id' component={editProjectWithID} />

          <Route exact path='/NewOrder/Step3' component={()=> <Step3 cart={this.props.cart.cart} updateCart={this.props.updateCart} history={this.props.history} />} />

          <Redirect to="Home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
