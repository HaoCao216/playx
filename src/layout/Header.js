import React, { Component } from 'react';
import Menu from './Menu'
import { Link } from 'react-router-dom'
import './style/Header.css'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMenu: false
    }
  }
  activeMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    })
  } 
  render() {
    return (
      <header id="navbar">
        <div className="navbar-outer">
          <Menu 
            activeMenu={this.state.activeMenu}
          />
          <div className="menu-icon" onClick={this.activeMenu}>
            <span className={this.state.activeMenu ? 'close' : ''}/>
          </div>
          <div className="navbar-outer_child">
            <div className="navbar-outer-left">
              <div className="edgtf-divided-left-inner-border-holder"></div>
              <div className="navbar-follow">
                <div><span>follow us on : </span></div>
                <div><i className="fa fa-facebook-square"/></div>
                <div><i className="fa fa-youtube-play"/></div>
                <div><i className="fa fa-twitch"/></div>
                <div><i className="fa fa-twitter-square"/></div>
              </div>
              <div className="navbar-left">
                <div>
                  <Link to="/">Trang chủ</Link>
                </div>
                <div>
                  <Link to="/shop">Mua Vàng</Link>
                </div>
                <div>
                  <Link to="/shop">Mua Ngọc</Link>
                </div>
              </div>
            </div>
            <div className="navbar-outer_child__logo">
              <div className="_child__logo">
              </div>
            </div>
            <div className="navbar-outer-right">
              <div className="edgtf-divided-right-inner-border-holder"></div>
              <div className="navbar-follow">
                <div className="navbar-follow__content">this is playerx, a theme for games, clans & esports</div>
              </div>
              <div className="navbar-right">
                <div>
                  <Link to="/shop">Nạp Tiền</Link>
                </div>
                <div>
                  <Link to="/shop">Bài Viết</Link>
                </div>
                <div>
                  <Link to="/shop">Tài Khoản</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
