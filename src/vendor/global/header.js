import React, { Component } from "react";
class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header_border">
                    <div className="container container-sm container-md">
                        <div className="header_top">
                            <div className="header_promotion">
                                <div className="text">
                                    <span className="highlight">
                                        Tin khuyến mãi
                                    </span>{" "}
                                    : Mua căn hộ dự án VTP được giảm 5% trong
                                    tháng 3. Chỉ cần nhập mã giảm giá VTP0190
                                </div>
                            </div>
                            <ul className="header_contact d-none d-md-flex">
                                <li className="chat">
                                    <a href="#">
                                        <i className="fas fa-comments" />
                                        Tư vấn
                                    </a>
                                </li>
                                <li className="phone">
                                    <a href="#">
                                        <i className="fas fa-phone-alt" />
                                        1900 - 123 - 456
                                    </a>
                                </li>
                                <li className="languages">
                                    <div className="dropdown">
                                        <a
                                            href="#"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            data-hover="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src="./assets/images/lang_vn.jpg"
                                                alt="languages"
                                            />
                                            <i className="icon_arrow fas fa-chevron-down" />
                                        </a>
                                        <ul className="dropdown-menu pull-right">
                                            <li>
                                                {" "}
                                                <a href="#">
                                                    <img
                                                        src="./assets/images/lang_en.png"
                                                        width={16}
                                                        height={16}
                                                    />{" "}
                                                    <span>English</span>{" "}
                                                </a>
                                            </li>
                                            <li className="active">
                                                <a href="#">
                                                    <img
                                                        src="./assets/images/lang_china.png"
                                                        width={16}
                                                        height={16}
                                                    />{" "}
                                                    <span>China</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container container-sm container-md">
                    <div className="header_wrap">
                        <a href="#" className="header_logo">
                            <img src="./assets/images/logo.jpg" alt="Minerva" />
                        </a>
                        <button className="mb_toggle">
                            <span />
                        </button>
                        <ul className="header_menu">
                            <li className="logo item d-md-none">
                                <a className="item-link" href="./Home.html">
                                    <img
                                        className="w-100"
                                        src="./assets/images/logo.jpg"
                                        alt="Minerva"
                                    />
                                </a>
                                <i className="icon-close">×</i>
                            </li>
                            <li className="active item mt-3 mt-md-0">
                                <a className="item-link" href="./Home.html">
                                    TRANG CHỦ
                                </a>
                            </li>
                            <li className="item">
                                <a
                                    className="item-link"
                                    href="./Introduce.html"
                                >
                                    DỰ ÁN ĐANG BÁN
                                </a>
                            </li>
                            <li className="item">
                                <a className="item-link" href="./Project.html">
                                    DỰ ÁN SẮP BÁN
                                </a>
                            </li>
                            <li className="item">
                                <a className="item-link" href="./News.html">
                                    SÀN GIAO DỊCH
                                </a>
                            </li>
                            <li className="item hasChild dropdown d-none d-md-block">
                                <a
                                    className="item-link dropdown-toggle"
                                    data-toggle="dropdown"
                                    data-hover="dropdown"
                                    href="#"
                                >
                                    HỔ TRỢ
                                </a>
                                <ul className="header_menu--child dropdown-menu">
                                    <li className="item-child">
                                        <a className="item-child-link" href="#">
                                            Hướng dẫn mua{" "}
                                        </a>
                                    </li>
                                    <li className="item-child">
                                        <a className="item-child-link" href="#">
                                            Pháp lý
                                        </a>
                                    </li>
                                    <li className="item-child">
                                        <a className="item-child-link" href="#">
                                            Tin tức
                                        </a>
                                    </li>
                                    <li className="item-child">
                                        <a className="item-child-link" href="#">
                                            Liên hệ
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="item header_register-mb d-block d-md-none hasChild">
                                <a className="item-link" href="#">
                                    <i className="pr-1 fas fa-user-circle" />
                                    HỔ TRỢ
                                </a>
                                <ul className="header_menu--child accordion">
                                    <li className="item-child">
                                        <a className="item-child-link" href="#">
                                            Hướng dẫn mua{" "}
                                        </a>
                                    </li>
                                    <li className="item-child">
                                        <a className="item-child-link" href="#">
                                            Pháp lý
                                        </a>
                                    </li>
                                    <li className="item-child">
                                        <a className="item-child-link" href="#">
                                            Tin tức
                                        </a>
                                    </li>
                                    <li className="item-child">
                                        <a className="item-child-link" href="#">
                                            Liên hệ
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="item d-flex justify-content-between d-md-none">
                                <a href="#" className="item-link pr-0">
                                    <i className="pr-1 fas fa-comments" />
                                    Tư vấn
                                </a>
                                <div className="header_mb_ultilites d-flex justify-content-center align-items-center">
                                    <a href="#" className="item-utility">
                                        <i className="icon far fa-heart" />
                                    </a>
                                    <a href="#" className="item-utility">
                                        <i className="icon fas fa-cart-plus" />
                                    </a>
                                    <div className="item-utility dropdown languages">
                                        <a
                                            href="#"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            data-hover="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src="./assets/images/lang_vn.jpg"
                                                alt="languages"
                                            />
                                            <i className="icon_arrow fas fa-chevron-down" />
                                        </a>
                                        <ul className="dropdown-menu pull-right">
                                            <li>
                                                {" "}
                                                <a href="#">
                                                    <img
                                                        src="./assets/images/lang_en.png"
                                                        width={16}
                                                        height={16}
                                                    />{" "}
                                                    <span>English</span>{" "}
                                                </a>
                                            </li>
                                            <li className="active">
                                                <a href="#">
                                                    <img
                                                        src="./assets/images/lang_china.png"
                                                        width={16}
                                                        height={16}
                                                    />{" "}
                                                    <span>China</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="item d-block d-md-none">
                                <a href="#" className="item-link phone">
                                    <i className="pr-1 fas fa-phone-alt" />
                                    1900 - 123 - 456
                                </a>
                            </li>
                            <li className="item header_register-mb d-block d-md-none hasChild">
                                <a className="item-link" href="#">
                                    <i className="pr-1 fas fa-user-circle" />
                                    Đăng ký / Đăng nhập
                                </a>
                                <ul className="header_menu--child mt-0 accordion">
                                    <li className="register_select">
                                        <div className="item-child-link accordion-toggle d-flex justify-content-between align-items-center">
                                            Đăng nhập
                                            <i className="icon_plus fas fa-plus" />
                                        </div>
                                        {/* form_register signin */}
                                        <div className="header_register form_register accordion-inner">
                                            <div className="form form_signInUp">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Email"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        placeholder="Mật khẩu"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group mb-0 text-center">
                                                    <a
                                                        href="#"
                                                        className="btn btn_green btn_signIn text-uppercase"
                                                    >
                                                        ĐĂNG NHẬP
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="register_select">
                                        <div className="item-child-link accordion-toggle d-flex justify-content-between align-items-center">
                                            Đăng ký
                                            <i className="icon_plus fas fa-plus" />
                                        </div>
                                        {/* form_register signup*/}
                                        <div className="header_register form_register accordion-inner">
                                            <div className="form form_signInUp">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Họ tên"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Email"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        placeholder="Mật khẩu"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        placeholder="Nhập lại mật khẩu"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group mb-0 text-center">
                                                    <a
                                                        href="#"
                                                        className="btn btn_green btn_signIn text-uppercase"
                                                    >
                                                        ĐĂNG KÝ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="register_select">
                                        <div className="item-child-link accordion-toggle d-flex justify-content-between align-items-center">
                                            Quên mật khẩu
                                            <i className="icon_plus fas fa-plus" />
                                        </div>
                                        {/* form_forgot */}
                                        <div className="header_register form_forgot accordion-inner">
                                            <div className="form form_signInUp">
                                                <div className="form-group form_forgot--info">
                                                    Hãy điền thông tin email của
                                                    bạn để <br />
                                                    chúng tôi lấy lại mật khẩu
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Email"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group mb-0 text-center">
                                                    <a
                                                        href="#"
                                                        className="btn btn_green btn_signIn text-uppercase mb-0"
                                                    >
                                                        GỬI
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="header_actions d-none d-md-flex">
                            <div className="item">
                                <a href="#" className="link">
                                    <span className="icon">
                                        <i className="heart far fa-heart" />
                                        <i className="number">4</i>
                                    </span>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="link">
                                    <i className="icon cart fas fa-cart-plus" />
                                </a>
                            </div>
                            <div className="item dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle link"
                                    data-toggle="dropdown"
                                    data-hover="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="icon user fas fa-user-circle" />
                                </a>
                                <div className="dropdown-menu">
                                    {/* form_register */}
                                    <div className="header_register form_register">
                                        <ul
                                            className="nav header_register--heading"
                                            role="tablist"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    id="pills-signin-tab"
                                                    data-toggle="pill"
                                                    href="#pills-signin"
                                                    role="tab"
                                                    aria-controls="pills-signin"
                                                    aria-selected="true"
                                                >
                                                    ĐĂNG NHẬP
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    id="pills-signup-tab"
                                                    data-toggle="pill"
                                                    href="#pills-signup"
                                                    role="tab"
                                                    aria-controls="pills-signup"
                                                    aria-selected="false"
                                                >
                                                    ĐĂNG KÝ
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane fade show active"
                                                id="pills-signin"
                                                role="tabpanel"
                                                aria-labelledby="pills-signin-tab"
                                            >
                                                <div className="form form_signInUp">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            placeholder="Email"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            placeholder="Mật khẩu"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group mb-0 text-center">
                                                        <a
                                                            href="#"
                                                            className="btn btn_green btn_signIn text-uppercase"
                                                        >
                                                            ĐĂNG NHẬP
                                                        </a>
                                                    </div>
                                                    <div className="form-group mb-0 text-center">
                                                        <a
                                                            href="#"
                                                            className="text-forgot forgotPassword"
                                                        >
                                                            Quên mật khẩu
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="pills-signup"
                                                role="tabpanel"
                                                aria-labelledby="pills-signup-tab"
                                            >
                                                <div className="form form_signInUp">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            placeholder="Họ tên"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            placeholder="Email"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            placeholder="Mật khẩu"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            placeholder="Nhập lại mật khẩu"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group mb-0 text-center">
                                                        <a
                                                            href="#"
                                                            className="btn btn_green btn_signIn text-uppercase"
                                                        >
                                                            ĐĂNG KÝ
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* form_forgot */}
                                    <div className="header_register form_forgot d-none">
                                        <div className="header_register--heading text-uppercase text-white text-center">
                                            QUÊN MẬT KHẨU
                                        </div>
                                        <div className="form form_signInUp">
                                            <div className="form-group form_forgot--info">
                                                Hãy điền thông tin email của bạn
                                                để <br />
                                                chúng tôi lấy lại mật khẩu
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    placeholder="Email"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group mb-0 text-center">
                                                <a
                                                    href="#"
                                                    className="btn btn_green btn_signIn text-uppercase mb-0"
                                                >
                                                    GỬI
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* form_logged  */}
                                    <div className="header_register form_logged d-none">
                                        <div className="header_register--heading">
                                            <figure className="avatar">
                                                <img
                                                    src="./assets/images/avatar_logged.jpg"
                                                    alt="Trần Thị Thu Hoài"
                                                />
                                            </figure>
                                            <div className="info">
                                                <div className="name">
                                                    Trần Thị Thu Hoài
                                                </div>
                                                <div className="mail">
                                                    thutran1975@gmail.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form_logged--action">
                                            <a href="#" className="action">
                                                {" "}
                                                Đăng xuất
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-background" />
            </header>
        );
    }
}
export default Header; // Don’t forget to use export default!
