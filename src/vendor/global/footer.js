import React, { Component } from "react";
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer className="footer">
                    <div className="footer_top">
                        <div className="container container-sm container-md">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-xl-4 mb-5 mb-md-4 mb-xl-0">
                                    <div className="footer_item footer_menu">
                                        <h2 className="label">Menu</h2>
                                        <div className="row">
                                            <div className="col-6 col-sm-5">
                                                <ul className="style_01">
                                                    <li>
                                                        <a href="#">
                                                            Trang chủ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Giới thiệu
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Tin tức</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Tuyển dụng
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Liên hệ</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-6 col-sm-5">
                                                <ul className="style_01">
                                                    <li>
                                                        <a href="#">
                                                            Danh sách dự án
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Sản phẩm nổi bật
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Hướng dẫn mua
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Pháp lý</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-xl-4 footer_border-lr mb-5 mb-xl-0">
                                    <div className="footer_item footer_contact">
                                        <h2 className="label">
                                            Liên hệ với chúng tôi
                                        </h2>
                                        <ul>
                                            <li className="phone">
                                                <a href="tel:1900123456">
                                                    <i className="fas fa-phone-alt" />
                                                    <span className="number">
                                                        1900 - 123 - 456
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-envelope" />
                                                    minerval@gmail.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-map-marker-alt" />
                                                    119 Pasteur, phường 6, quận
                                                    3,TPHCM
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-xl-4 ml-md-auto mr-md-auto mt-xl-0">
                                    <div className="footer_item footer_send_mail">
                                        <h2 className="label">
                                            Đăng ký nhận bản tin
                                        </h2>
                                        <div className="content">
                                            <p className="text_input-mail">
                                                Nhập e-mail của bạn để nhận tin
                                                tức mới nhất về Bất động sản
                                            </p>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    placeholder="Email của bạn"
                                                    className="form-control"
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        ĐĂNG KÝ
                                                    </span>
                                                </div>
                                                <div className="invalid-feedback">
                                                    Please choose a username.
                                                </div>
                                            </div>
                                            <ul className="list_social">
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-skype" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-google-plus-g" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="container">
                            <span className="footer_copy-right">
                                Bản quyền của Minerva năm 2020
                            </span>
                        </div>
                    </div>
                </footer>
                <ul className="footer_social">
                    <li>
                        <a
                            href="javascript:void(0)"
                            className="phone clickPhone"
                        >
                            <i className="icon fas fa-phone-alt" />
                            <i className="text">0909 123 456</i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="javascript:void(0)"
                            className="chat startChatOnline"
                        >
                            <i className="icon fas fa-comments" />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="totop toTop">
                            <i className="icon fas fa-chevron-up" />
                        </a>
                    </li>
                </ul>
                <div className="chat_online chatOnline">
                    <label className="chatLabel">
                        Tư vấn trực tuyến
                        <i className="close_chat fas fa-times-circle" />
                    </label>
                    <div className="send_info sendInfo">
                        <form>
                            <input
                                type="text"
                                placeholder="Họ tên*"
                                className="form-control"
                            />
                            <input
                                type="text"
                                placeholder="Số điện thoại*"
                                className="form-control"
                            />
                            <input
                                type="text"
                                placeholder="Email*"
                                className="form-control"
                            />
                            <textarea
                                type="text"
                                placeholder="Nội dung cần giải đáp"
                                className="form-control"
                                defaultValue={""}
                            />
                            <div className="submit">
                                <button className="btn btn_green startConversation fw-500">
                                    Bắt đầu trò chuyện
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="start_chat startChat">
                        <div className="chat">
                            <div className="chat--box chatBox section-scroll">
                                <div className="item you">Chào bạn,</div>
                                <div className="item me">
                                    Căn chung cư A10 còn không bạn. Giá bán hiện
                                    tại bao nhiêu vậy?
                                </div>
                                <div className="item you">nói tiếp đi</div>
                                <div className="item me">đợi tí nha!</div>
                                <div className="item you">Chào bạn,</div>
                                <div className="item me">
                                    Căn chung cư A10 còn không bạn. Giá bán hiện
                                    tại bao nhiêu vậy?
                                </div>
                                <div className="item you">nói tiếp đi</div>
                                <div className="item me">đợi tí nha!</div>
                                <div className="item you">Chào bạn,</div>
                                <div className="item me">
                                    Căn chung cư A10 còn không bạn. Giá bán hiện
                                    tại bao nhiêu vậy?
                                </div>
                                <div className="item you">nói tiếp đi</div>
                                <div className="item me">đợi tí nha!</div>
                                <div className="item you">Chào bạn,</div>
                                <div className="item me">
                                    Căn chung cư A10 còn không bạn. Giá bán hiện
                                    tại bao nhiêu vậy?
                                </div>
                                <div className="item you">nói tiếp đi</div>
                                <div className="item me">đợi tí nha!</div>
                            </div>
                            <div className="chat--input">
                                <input
                                    className="typing"
                                    type="text"
                                    placeholder="Nhập nội dung và Enter để gửi"
                                />
                                <span className="media">
                                    <div className="chatFiles files">
                                        <input type="file" />
                                        <i className="fas fa-paperclip" />
                                    </div>
                                    <i className="far fa-smile chatEmoji emoji" />
                                </span>
                            </div>
                            <div className="list_emoji listEmoji">
                                <span>😀</span> <span>😄</span> <span>😁</span>{" "}
                                <span>😆</span> <span>😅</span> <span>🤣</span>
                                <span>😂</span> <span>🙂</span> <span>🙃</span>{" "}
                                <span>😉</span> <span>😊</span> <span>😇</span>
                                <span>🥰</span> <span>😍</span> <span>🤩</span>{" "}
                                <span>😘</span> <span>😗</span> <span>😚</span>
                                <span>😙</span> <span>😋</span> <span>😛</span>{" "}
                                <span>🤪</span> <span>😝</span> <span>🤑</span>
                                <span>🤗</span> <span>🤭</span> <span>🤫</span>{" "}
                                <span>🤔</span> <span>🤐</span> <span>🤨</span>
                                <span>😐</span> <span>😑</span> <span>😶</span>{" "}
                                <span>😏</span> <span>😒</span> <span>🙄</span>
                                <span>😬</span> <span>🤥</span> <span>😌</span>{" "}
                                <span>😔</span> <span>😪</span> <span>🤤</span>
                                <span>😴</span> <span>🥳</span> <span>😎</span>{" "}
                                <span>👋</span> <span>👌</span>
                                <span>✌</span>
                                <span>🖐</span>
                                <span>🤘</span>
                                <span>👈</span>
                            </div>
                        </div>
                    </div>
                    <div className="end_chat">
                        <div className="heading">
                            Bạn muốn kết thúc trò chuyện ?
                            <span className="heading_sub">
                                Bạn có thực sự muốn kết thúc cuộc trò chuyện với
                                chúng tôi.
                            </span>
                        </div>
                        <div className="list_btn">
                            <a href="#" className="btn btn_red end_chat_all">
                                KẾT THÚC{" "}
                            </a>
                            <a href="#" className="btn btn_green end_chat_back">
                                QUAY LẠI
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer; // Don’t forget to use export default!
