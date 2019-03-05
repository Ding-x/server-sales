import React, { Component } from 'react';
import Header from "./client/Header"
import Footer from "./client/Footer"
import Home from "./client/Home"
import ShoppingCart from "./client/ShoppingCart"
import Addition from "./client/Addition"
import Auth from "./client/Auth"
import Step1 from "./client/NewOrder/Step1"
import Step2 from "./client/NewOrder/Step2"

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

    return (
      <div >
        <Header auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} history={this.props.history}/>
        <Switch history={this.props.history}>
          <Route path='/Home' component={()=><Home auth={this.props.auth} history={this.props.history}  />} />
          <Route path='/Auth' component={()=><Auth auth={this.props.auth} loginUser={this.props.loginUser} history={this.props.history}/>}  />
          <Route exact path='/ShoppingCart'  component={ShoppingCart} />
          <Route path='/Addition/:id' component={additionWihID} />

          <Route path='/NewOrder/Step1' component={()=> <Step1 cart={this.props.cart} updateCart={this.props.updateCart} />} />
          <Route path='/NewOrder/Step2' component={()=> <Step2 cart={this.props.cart} updateCart={this.props.updateCart} />} />

          <Redirect to="Home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
