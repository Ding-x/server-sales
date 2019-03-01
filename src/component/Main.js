import React, { Component } from 'react';
import Header from "./client/Header"
import Footer from "./client/Footer"
import Home from "./client/Home"
import ShoppingCart from "./client/ShoppingCart"
import Addition from "./client/Addition"



import { Switch, Route, Redirect, withRouter } from 'react-router-dom'


class Main extends Component {
  
  render() {
    const additionWihID = ({match}) => {
      return(
          <Addition  id={match.params.id}
          />
      );
    };

    return (
      <div >
        <Header />
        <Switch history={this.props.history}>
          <Route path='/Home' component={Home} />
          <Route exact path='/ShoppingCart'  component={ShoppingCart} />
          <Route path='/Addition/:id' component={additionWihID} />
          <Redirect to="Home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
