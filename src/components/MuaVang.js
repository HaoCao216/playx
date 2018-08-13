import React, { Component } from 'react';
import Select from 'react-select';
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
class MuaVang extends Component {
    render() {
        return (
            <div className={this.props.active ? 'shop-body-tab__left' : 'shop-body-tab__left active-tab'}>
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
                            <input type="number" placeholder="100000" />
                        </div>
                        <button className="buy-btn">Mua</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MuaVang;
