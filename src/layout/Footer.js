import React, { Component } from 'react';
import './style/Footer.css'
class Footer extends Component {

  render() {
    return (
      <footer id="footer">
        <div className="footer-w">
          <div className="shewX-div-left"/>
          <div className="shewX-div-right"/>
          <div className="footer-nav">
            <div>Trang chủ</div>
            <div>Mua Vàng</div>
            <div>Mua Ngọc</div>
            <div>Nạp Tiền</div>
            <div>Bài Viết</div>
            <div>Tài Khoản</div>
          </div>
          <div className="footer-line">
            <div className="phone">Hoàng Đình Dũng - Hotline: 016888.780.75</div>
            <div className="footer-nav-contact">
              <div><i className="fa fa-facebook-square"/></div>
              <div><i className="fa fa-youtube-play"/></div>
              <div><i className="fa fa-twitch"/></div>
              <div><i className="fa fa-twitter-square"/></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
