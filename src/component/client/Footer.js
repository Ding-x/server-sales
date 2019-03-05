import React, { Component } from 'react';
import "./Style.css"

class Header extends Component {
  render() {
    return (
      <div>
        <footer className='py-5 bg-light'>
          <p className='m-0 text-center text-black'>Copyright &copy; Your Website 2018</p>
        </footer>
      </div>
    );
  }
}

export default Header;