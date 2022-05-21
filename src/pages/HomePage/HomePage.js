import "./HomePage.css"
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Fade, Zoom, Slide } from "react-awesome-reveal";


export default function HomePage() {

    return (
        <div className="homepage">
            <section id="banner">
                <Container className="banner-container">
                    <div className="banner-text-container">
                        <div className="banner-title-first fs-title-section-25-left">
                            Giải pháp IELTS 9.0 cho <span className="red-highlight"> người lười </span>
                        </div>
                        <div className="banner-text-second fs-title-section-25-left">
                            (Là bạn đấy.)
                        </div>
                        <Fade>
                            <button className=" btn">Tìm hiểu ngay
                                <i className="bi bi-arrow-down"></i>
                            </button>
                        </Fade>
                    </div>
                </Container>
            </section>
            <section id="navbar">
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="fs-title-section-12">
                                <NavDropdown title="About Hello IELTS" id="collasible-nav-dropdown" renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="IELTS Exam Information" id="collasible-nav-dropdown" renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="IELTS Prep" id="collasible-nav-dropdown" renderMenuOnMount={true}>
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Chữa bài thi mẫu" id="collasible-nav-dropdown" renderMenuOnMount={true}>                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="IELTS Tips" id="collasible-nav-dropdown" renderMenuOnMount={true}>                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Your courses" id="collasible-nav-dropdown" renderMenuOnMount={true}>                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </section>
            <section id="ielts-courses">
                <div className="course-container-title-container fs-title-section-20">
                    <div className="course-container-title">Các khoá học của Hello IELTS</div>
                </div>
                <div className="course-container-content d-flex flex-wrap">
                    <div className="course-item" style={{ backgroundImage: `url(${"http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-pak-7972316-min_1440x960.jpg"})` }}>
                        <div className="course-overlay">
                            <div className="course-item-content">
                                <div className=""><i className="bi bi-calendar"></i>19/04/2022</div>
                                <div className=""><i className="bi bi-clock-fill"></i>8:00 - 10:00 (GMT+7)</div>
                                <div className=""><i className="bi bi-person-fill"></i>248 học sinh</div>
                                <div className=""><i className="bi bi-chat"></i>Tiếng Anh</div>
                                <div className=""><i className="bi bi-cash-coin"></i>1.000 đ</div>
                            </div>
                            <div className="course-item-title fs-title-section-25-left">Khoá học số 1</div>
                        </div>
                    </div>
                    <div className="course-item" style={{ backgroundImage: `url(${"http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-dolgikh-giftpunditscom-1326947-min_2540x1693.jpg"})` }}>
                        <div className="course-overlay">
                            <div className="course-item-content">
                                <div className=""><i className="bi bi-calendar"></i>19/04/2022</div>
                                <div className=""><i className="bi bi-clock-fill"></i>8:00 - 10:00 (GMT+7)</div>
                                <div className=""><i className="bi bi-person-fill"></i>248 học sinh</div>
                                <div className=""><i className="bi bi-chat"></i>Tiếng Anh</div>
                                <div className=""><i className="bi bi-cash-coin"></i>1.000 đ</div>
                            </div>
                            <div className="course-item-title fs-title-section-25-left">Khoá học số 1</div>
                        </div>
                    </div>
                    <div className="course-item" style={{ backgroundImage: `url(${"http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-andrea-piacquadio-3807755-min_1440x960.jpg"})` }}>
                        <div className="course-overlay">
                            <div className="course-item-content">
                                <div className=""><i className="bi bi-calendar"></i>19/04/2022</div>
                                <div className=""><i className="bi bi-clock-fill"></i>8:00 - 10:00 (GMT+7)</div>
                                <div className=""><i className="bi bi-person-fill"></i>248 học sinh</div>
                                <div className=""><i className="bi bi-chat"></i>Tiếng Anh</div>
                                <div className=""><i className="bi bi-cash-coin"></i>1.000 đ</div>
                            </div>
                            <div className="course-item-title fs-title-section-25-left">Khoá học số 1</div>
                        </div>
                    </div>
                </div>
                <button id="seemore-course-button" className="button fill-button"> Xem thêm </button>
            </section>
            <section id="about-hello-ielts">
                <div className="hello-ielts-container d-flex">
                    <div className="about-hello-ielts-title fs-title-section-25">Hello IELTS có gì  <br /> <span className="underline-text"> ấn tượng ? </span></div>
                    <div className="about-hello-ielts-container">
                        <div className="about-hello-ielts-content d-flex flex-column">
                            <Zoom>
                                <div className="elementor-icon-box-wrapper ">
                                    <div className="elementor-icon-box-icon">
                                        <span className="elementor-icon elementor-animation-">
                                            <i className="bi bi-folder-fill"></i>   </span>
                                    </div>
                                    <div className="elementor-icon-box-content fs-text-section-15">
                                        <h3 className="elementor-icon-box-title">
                                            <span>100+</span>
                                        </h3>
                                        <p className="elementor-icon-box-description">
                                            Là lượng đề thi trong <br />ngân hàng đề của chúng mình</p>
                                    </div>
                                </div>
                            </Zoom>
                            <Zoom>
                                <div className="elementor-icon-box-wrapper">
                                    <div className="elementor-icon-box-icon">
                                        <span className="elementor-icon elementor-animation-">
                                            <i className="bi bi-mortarboard-fill"></i>
                                        </span>
                                    </div>
                                    <div className="elementor-icon-box-content fs-text-section-15">
                                        <h3 className="elementor-icon-box-title">
                                            <span>100+</span>
                                        </h3>
                                        <p className="elementor-icon-box-description">
                                            Là lượng đề thi trong <br />ngân hàng đề của chúng mình</p>
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                        <div className="about-hello-ielts-content d-flex flex-column">
                            <Zoom>
                                <div className="elementor-icon-box-wrapper ">
                                    <div className="elementor-icon-box-icon">
                                        <span className="elementor-icon elementor-animation-">
                                            <i className="bi bi-folder-fill"></i>
                                        </span>
                                    </div>
                                    <div className="elementor-icon-box-content fs-text-section-15">
                                        <h3 className="elementor-icon-box-title">
                                            <span>100+</span>
                                        </h3>
                                        <p className="elementor-icon-box-description">
                                            Là lượng đề thi trong <br />ngân hàng đề của chúng mình</p>
                                    </div>
                                </div>
                            </Zoom>
                            <Zoom>
                                <div className="elementor-icon-box-wrapper">
                                    <div className="elementor-icon-box-icon">
                                        <span className="elementor-icon elementor-animation-">
                                            <i className="bi bi-mortarboard-fill"></i>
                                        </span>
                                    </div>
                                    <div className="elementor-icon-box-content">
                                        <h3 className="elementor-icon-box-title">
                                            <span>100+</span>
                                        </h3>
                                        <p className="elementor-icon-box-description">
                                            Là lượng đề thi trong <br />ngân hàng đề của chúng mình</p>
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </section>
            <section id="why-us" style={{ backgroundImage: `url(${"http://holaduhoc.edu.vn/wp-content/uploads/2022/02/4028065-scaled.jpg"})` }}>
                <div className="why-us-content d-flex">
                    <div className="why-us-title fs-title-section-25-left ">Vì sao <br /> bạn nên chọn chúng tôi?</div>
                    <div className="why-us-overlay elementor-widget-container fs-text-section-15">
                        <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-book"></i>						
                                    </span>
                                <span className="elementor-icon-list-text"><i className="bi bi-book-fill"></i>Ngân hàng đề thi liên tục cập nhật</span>
                            </li>
                            <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-clock"></i>						
                                    </span>
                                <span className="elementor-icon-list-text"><i className="bi bi-clock-fill"></i>Hỗ trợ 24/7 bởi các chuyên gia IELTS</span>
                            </li>
                            <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="far fa-user"></i>						
                                    </span>
                                <span className="elementor-icon-list-text"><i className="bi bi-person-fill"></i>Cộng đồng năng động gồm nhiều học sinh thuộc mọi lứa tuổi</span>
                            </li>
                            <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="far fa-comment"></i>						
                                    </span>
                                <span className="elementor-icon-list-text"><i className="bi bi-chat"></i>Giải thích chi tiết sau khi làm mỗi đề</span>
                            </li>
                            <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" className="fas fa-bed"></i>						
                                    </span>
                                <span className="elementor-icon-list-text"><i className="bi bi-clock-fill"></i>Lộ trình nâng band điểm dễ dàng cho người lười</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="new-ielts-test">
                <div className="new-ielts-test-title fs-title-section-25">
                    Các bộ đề mới nhất
                </div>
                <div className="new-ielts-test-container d-flex flex-wrap">
                    <div className="new-ielts-test-box">
                        <img alt="new-ielts-test-pic" src="http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-dolgikh-giftpunditscom-1326947-min_2540x1693-1536x1024.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                    <div className="new-ielts-test-box">
                        <img alt="new-ielts-test-pic" src="http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-andrea-piacquadio-3807755-min_1440x960.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                    <div className="new-ielts-test-box">
                        <img alt="new-ielts-test-pic" src="http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-pak-7972316-min_1440x960.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                    <div className="new-ielts-test-box">
                        <img alt="new-ielts-test-pic" src="http://holaduhoc.edu.vn/wp-content/uploads/2022/02/vanderbilt_zoom-9-768x432.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                    <div className="new-ielts-test-box">
                        <img alt="new-ielts-test-pic" src="http://holaduhoc.edu.vn/wp-content/uploads/2022/01/3c0dfceb248deb1a6c7c161b4f912a56.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                    <div className="new-ielts-test-box">
                        <img alt="new-ielts-test-pic" src="http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-pixabay-355948-1536x934.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                </div>
            </section>
            <section id="feedback">
                <div className="feedback-title fs-title-section-25">Đánh giá từ học sinh</div>
                <div className="feedback-box-container d-flex">
                    <Slide direction='right'>
                        <div className="feedback-box fs-text-section-15">
                            <div className="feedback-box-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className="feedback-box-person-name">Bạn A
                            </div>
                        </div>
                    </Slide>
                    <Slide direction='up'>
                        <div className="feedback-box feedback-second fs-text-section-15">
                            <div className="feedback-box-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className="feedback-box-person-name">Bạn A
                            </div>
                        </div>
                    </Slide>
                    <Slide direction='right'>
                        <div className="feedback-box fs-text-section-15">
                            <div className="feedback-box-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className="feedback-box-person-name">Bạn A
                            </div>
                        </div>
                    </Slide>
                </div>
            </section>
        </div>
    )
}