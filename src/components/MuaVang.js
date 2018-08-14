import React, { Component } from 'react';
import Select from 'react-select';
import BanNgoc from '../assets/img/ngo.png';
import { Dialog } from '@blueprintjs/core';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Dialog.css'
const options = [
    { value: '1', label: 'Vũ Trụ 1 sao' },
    { value: '2', label: 'Vũ Trụ 2 sao' },
    { value: '3', label: 'Vũ Trụ 3 sao' },
    { value: '4', label: 'Vũ Trụ 4 sao' },
    { value: '5', label: 'Vũ Trụ 5 sao' },
    { value: '6', label: 'Vũ Trụ 7 sao' },
    { value: '7', label: 'Vũ Trụ 7 sao' },
]

const MySwal = withReactContent(Swal)

class MuaVang extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            showAlert: false
        }
    }
    handleClose = () => {
        this.setState({
            isOpen: false
        })
    }
    handleOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    PopupComfirm() {
        MySwal.fire({
            type: 'success',
            title: 'Gửi Mua Thành Công',
            showConfirmButton: false,
            timer: 2000,
        })
    }
     
    onConfirm = () => {
        this.PopupComfirm()
        this.setState({
            isOpen: false,
            showAlert: true
        })
    } 

    render() {
        return (
            <div className={this.props.type === 'vang' ? 'shop-body-tab__left active-tab' : 'shop-body-tab__left'}>
                <div className="shop-body__top">
                    <div>200,000,000 Vàng</div>
                </div>
                <div className="shop-body__bottom">
                    <div><img alt="123" src={BanNgoc} /></div>
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
                        <button onClick={this.handleOpen} className="buy-btn">Mua</button>
                    </div>
                </div>
                <Dialog
                    icon="info-sign"
                    onClose={this.handleClose}
                    title="ĐẶT MUA VÀNG"
                    isOpen={this.state.isOpen}
                    canOutsideClickClose={false}
                >
                    <div className="dialog-body">
                        <div className="dialog-title">
                            <div className="cbr">Chú Bé Rồng</div>
                        </div>
                        <div className="font-style-dialog">
                            <div>Số tiền mua: </div>
                            <div>Số vàng nhận: </div>
                            <div className="tips">
                                Nhập tên và mật khẩu tài khoản của các bạn để chúng tôi vào chuyển vàng.
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="group">      
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Nhập tên tài khoản</label>
                            </div>
                            <div className="group">      
                                <input type="password" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Nhập mật khẩu</label>
                            </div>
                            <div className="group-btn">
                                <button className="gateway-btn">Nạp Tiền</button>
                                <button onClick={this.onConfirm} className="buy-btn">Gửi Mua</button>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default MuaVang;
