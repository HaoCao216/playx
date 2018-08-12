import React, { Component } from 'react';
import './style/Menu.css'
class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className={this.props.activeMenu ? 'menu-hide active' : 'menu-hide'}>
        Blank
      </div>
    );
  }
}

export default Menu;
