import React, { Component } from 'react';
import './style/Shop.css';
import MuaVang from '../components/MuaVang'
import MuaNgoc from '../components/MuaNgoc'
import { Link } from 'react-router-dom'

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'vang'
    }
  }

  changeTabVang = () => {
    this.setState({
      active: 'vang'
    })
  }

  changeTabNgoc = () => {
    this.setState({
      active: 'ngoc'
    })
  }

  render() {
    return (
      <div id="shop" style={{textAlign: 'center'}}>
        <div className="shop-page">
          <div className="btn-buy">
            <Link to="/shop/vang" className="link-shop">
              <div onClick={this.changeTabVang} className={this.state.active === 'vang' ? 'buy-gold active' : 'buy-gold'}>
                <span>Mua Vàng</span>
              </div>
            </Link>
            <Link to="/shop/ngoc" className="link-shop">
              <div onClick={this.changeTabNgoc} className={this.state.active === 'ngoc' ? 'buy-gem active' : 'buy-gem'}>
                <span>Mua Ngọc</span>
              </div>
            </Link>
          </div>
          <div className="shop-body">
            <div className="title-shop">Dịch Vụ Bán Vàng</div>
            <div className="shop-body-tab">
              <MuaVang type={this.props.match.params.type}/>
              <MuaNgoc type={this.props.match.params.type}/>
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
