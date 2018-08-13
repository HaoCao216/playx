import React, { Component } from 'react';
import './style/Shop.css';
import MuaVang from '../components/MuaVang'
import MuaNgoc from '../components/MuaNgoc'

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true
    }
  }

  changeTab = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div id="shop" style={{textAlign: 'center'}}>
        <div className="shop-page">
          <div className="btn-buy">
            <div onClick={this.changeTab} className={this.state.active ? 'buy-gold active' : 'buy-gold'}>
              <span>Mua Vàng</span>
            </div>
            <div onClick={this.changeTab} className={this.state.active ? 'buy-gem' : 'buy-gem active'}>
              <span>Mua Ngọc</span>
            </div>
          </div>
          <div className="shop-body">
            <div className="title-shop">Dịch Vụ Bán Vàng</div>
            <div className="shop-body-tab">
              <MuaVang active={this.state.active}/>
              <MuaNgoc active={this.state.active}/>
              <div className="border-wall"/>
              <div className="shop-body-tab__right">
                <div className="useful">Mô tả :</div>
                <div>
                  <ul>
                    <li>Link hướng dẫn mua vàng ngọc: <a>https://vangngoc.vn/bai-viet/huong-dan-mua-vang-ngoc.html</a></li>
                    <li>Link Facebook của mình: <a>http://www.facebook.com/keomut.tuong</a></li>
                    <li>Sự uy tín của website: <a>http://vangngoc.vn/bai-viet/thong-tin-su-uy-tin-cua-website.html</a></li>
                    <li>Nếu bạn thắc mắc về sự uy tín, Hãy gọi: 016888.780.75  gặp Dũng 20 tuổi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
