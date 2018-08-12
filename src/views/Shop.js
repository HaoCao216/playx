import React, { Component } from 'react';
import './style/Shop.css';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import BanVang from '../assets/img/banvang.png';
import BanNgoc from '../assets/img/ngo.png';
const options = [
  { value: '1', label: 'Vũ Trụ 1 sao' },
  { value: '2', label: 'Vũ Trụ 2 sao' },
  { value: '3', label: 'Vũ Trụ 3 sao' },
  { value: '4', label: 'Vũ Trụ 4 sao' },
  { value: '5', label: 'Vũ Trụ 5 sao' },
  { value: '6', label: 'Vũ Trụ 7 sao' },
  { value: '7', label: 'Vũ Trụ 7 sao' },
]
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
              <div className={this.state.active ? 'shop-body-tab__left active-tab' : 'shop-body-tab__left'}>
                <div className="shop-body__top">
                  <div>200,000,000 Vàng</div>
                </div>
                <div className="shop-body__bottom">
                  <div><img src={BanVang} /></div>
                  <div className="select-option">
                    <div className="select-title">Máy chủ</div>
                    <Select 
                      options={options} 
                      defaultValue={[options[0]]}
                    />
                    <div className="input-vang">
                      <div className="select-title">Nhập số vàng cần mua</div>
                      <input type="number" placeholder="100000"/>
                    </div>
                    <button className="buy-btn">Mua</button>
                  </div>
                </div>
              </div>

              <div className={this.state.active ? 'shop-body-tab__left' : 'shop-body-tab__left active-tab'}>
                <div className="shop-body__top">
                  <div> Ký : 204 Ngọc</div>
                </div>
                <div className="shop-body__bottom">
                  <div><img src={BanNgoc} /></div>
                  <div className="select-option">
                    <div className="select-title">Máy chủ</div>
                    <Select 
                      options={options} 
                      defaultValue={[options[0]]}
                    />
                    <div className="input-vang">
                      <div className="select-title">Nhập số vàng cần mua</div>
                      <input type="number" placeholder="100000"/>
                    </div>
                    <button className="buy-btn">Mua</button>
                  </div>
                </div>
              </div>

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
