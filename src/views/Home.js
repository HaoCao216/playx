import React, { Component } from 'react';
import './style/Home.css'
import './style/styles.css'; //Allows for server-side rendering.

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options : {
        items: 5,
        nav: false,
        rewind: true,
        autoplay: true,
        loop: true,
      },
      toptrading: [
        {
          name: "Apolo"
        },
        {
          name: "Hakuto"
        },
        {
          name: "John Nathan"
        },
        {
          name: "Hanji66"
        },
        {
          name: "Kutoma2147"
        },
        {
          name: "XxVvVxX"
        },
        {
          name: "Jules Wild"
        },
        {
          name: "Marukomi2546"
        },
        {
          name: "Jean William"
        },
        {
          name: "Hanjohn Kurimao"
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <div className="first-page">
          <div className="carousel-tab">
            <div className="first-img" />
          </div>
          <div className="slider-show-bg" >
            <div className="slider-show-bg__title">Vàng Ngọc - Cổng thanh toán được ưa chuộng nhất Việt Nam</div>
            <div className="slider-info">
              <div>
                <div>60,000 +</div>
                <div>Giờ phục vụ</div>
              </div>
              <div>
                <div>57,000 +</div>
                <div>Người bán</div>
              </div>
              <div>
                <div>35,000,000 +</div>
                <div>Giao dịch</div>
              </div>
            </div>
          </div>
        </div>
        <div className="background-site-clone">
          <div className="site-clone-w">
            <div className="site-clone__title">FIND OUR GAMES ON APPSTORE</div>
            <div className="border-line"></div>
            <div className="buy-form">
              <div className="buy-form__child">
                <img src="/h2-custom-icon-img-1.png" />
                <div>Mua Vàng</div>
              </div>
              <div className="buy-form__child">
                <img src="/h2-custom-icon-img-2.png" />
                <div>Mua Ngọc</div>
              </div>
              <div className="buy-form__child">
                <img src="/h2-custom-icon-img-3.png" />
                <div>Nạp Tiền</div>
              </div>
              <div className="buy-form__child">
                <img src="/h2-custom-icon-img-4.png" />
                <div>Đăng Nhập</div>
              </div>
            </div>
          </div>
          <div className="top-site">
            <div className="top-site__child">
              <h2>Top 10 nạp thẻ</h2>
              <div className="box">
                <ul>
                  {this.state.toptrading.map((top, index) =>
                    <div key={index} className="flex-layout">
                      <div>{index}</div>
                      <div className="avatar">
                        <img src="/h2-custom-icon-img-1.png"/>
                      </div>
                      <div className="name">
                        {top.name}
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            </div>
            <div className="top-site__child">
              <h2>Lịch sử giao dịch</h2>
              <div className="box"></div>
            </div>
          </div>  
        </div>  
      </div>
    );
  }
}

export default Home;
