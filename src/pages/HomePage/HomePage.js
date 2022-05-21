import "./HomePage.css"
import { Container, Navbar, Nav, NavDropdown, Fade } from 'react-bootstrap'
import { useState } from 'react'

export default function HomePage() {
    const [hover, setHover] = useState(false);
    const changeSizeNavbar = () => {
        if (window.innerWidth > 500) {
            setHover(true)
        }
    }

    const [open, setOpen] = useState(false);

    return (
        <div className="homepage">
            <section id="banner">
                <Container className="banner-container">
                    <div className="banner-text-container">
                        <div className="banner-title-first fs-title-section-25-left">
                            Giải pháp IELTS 9.0 cho <span class="red-highlight"> người lười </span>
                        </div>
                        <div className="banner-text-second fs-title-section-25-left">
                            (Là bạn đấy.)
                        </div>
                        <button className=" btn">Tìm hiểu ngay
                            <i class="bi bi-arrow-down"></i>
                        </button>
                    </div>

                </Container>
            </section>
            <section id="navbar">
                <Navbar collapseOnSelect expand="lg" nav-justified>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="fs-title-section-12">
                                <NavDropdown title="About Hello IELTS" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="IELTS Exam Information" id="collasible-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="IELTS Prep" id="collasible-nav-dropdown"
                                // renderMenuOnMount={changeSizeNavbar}
                                >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Chữa bài thi mẫu" id="collasible-nav-dropdown"
                                // renderMenuOnMount={changeSizeNavbar}
                                >                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="IELTS Tips" id="collasible-nav-dropdown"
                                // renderMenuOnMount={changeSizeNavbar}
                                >                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Your courses" id="collasible-nav-dropdown"
                                // renderMenuOnMount={changeSizeNavbar}
                                >                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
                                <div className=""><i class="bi bi-calendar"></i>19/04/2022</div>
                                <div className=""><i class="bi bi-clock-fill"></i>8:00 - 10:00 (GMT+7)</div>
                                <div className=""><i class="bi bi-person-fill"></i>248 học sinh</div>
                                <div className=""><i class="bi bi-chat"></i>Tiếng Anh</div>
                                <div className=""><i class="bi bi-cash-coin"></i>1.000 đ</div>
                            </div>
                            <div className="course-item-title fs-title-section-25-left">Khoá học số 1</div>
                        </div>
                    </div>
                    <div className="course-item" style={{ backgroundImage: `url(${"http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-pak-7972316-min_1440x960.jpg"})` }}>
                        <div className="course-overlay">
                            <div className="course-item-content">
                                <div className=""><i class="bi bi-calendar"></i>19/04/2022</div>
                                <div className=""><i class="bi bi-clock-fill"></i>8:00 - 10:00 (GMT+7)</div>
                                <div className=""><i class="bi bi-person-fill"></i>248 học sinh</div>
                                <div className=""><i class="bi bi-chat"></i>Tiếng Anh</div>
                                <div className=""><i class="bi bi-cash-coin"></i>1.000 đ</div>
                            </div>
                            <div className="course-item-title fs-title-section-25-left">Khoá học số 1</div>
                        </div>
                    </div>
                    <div className="course-item" style={{ backgroundImage: `url(${"http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-pak-7972316-min_1440x960.jpg"})` }}>
                        <div className="course-overlay">
                            <div className="course-item-content">
                                <div className=""><i class="bi bi-calendar"></i>19/04/2022</div>
                                <div className=""><i class="bi bi-clock-fill"></i>8:00 - 10:00 (GMT+7)</div>
                                <div className=""><i class="bi bi-person-fill"></i>248 học sinh</div>
                                <div className=""><i class="bi bi-chat"></i>Tiếng Anh</div>
                                <div className=""><i class="bi bi-cash-coin"></i>1.000 đ</div>
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
                            <div class="elementor-icon-box-wrapper ">
                                <div class="elementor-icon-box-icon">
                                    <span class="elementor-icon elementor-animation-">
                                        <i class="bi bi-folder-fill"></i>   </span>
                                </div>
                                <div class="elementor-icon-box-content fs-text-section-15">
                                    <h3 class="elementor-icon-box-title">
                                        <span>100+</span>
                                    </h3>
                                    <p class="elementor-icon-box-description">
                                        Là lượng đề thi trong <br />ngân hàng đề của chúng mình</p>
                                </div>
                            </div>
                            <div class="elementor-icon-box-wrapper">
                                <div class="elementor-icon-box-icon">
                                    <span class="elementor-icon elementor-animation-">
                                        <i class="bi bi-mortarboard-fill"></i>                                    </span>
                                </div>
                                <div class="elementor-icon-box-content fs-text-section-15">
                                    <h3 class="elementor-icon-box-title">
                                        <span>100+</span>
                                    </h3>
                                    <p class="elementor-icon-box-description">
                                        Là lượng đề thi trong <br />ngân hàng đề của chúng mình</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-hello-ielts-content d-flex flex-column">
                            <div class="elementor-icon-box-wrapper ">
                                <div class="elementor-icon-box-icon">
                                    <span class="elementor-icon elementor-animation-">
                                        <i class="bi bi-folder-fill"></i>                                    </span>
                                </div>
                                <div class="elementor-icon-box-content fs-text-section-15">
                                    <h3 class="elementor-icon-box-title">
                                        <span>100+</span>
                                    </h3>
                                    <p class="elementor-icon-box-description">
                                        Là lượng đề thi trong <br />ngân hàng đề của chúng mình</p>
                                </div>
                            </div>
                            <div class="elementor-icon-box-wrapper">
                                <div class="elementor-icon-box-icon">
                                    <span class="elementor-icon elementor-animation-">
                                        <i class="bi bi-mortarboard-fill"></i>                                    </span>
                                </div>
                                <div class="elementor-icon-box-content">
                                    <h3 class="elementor-icon-box-title">
                                        <span>100+</span>
                                    </h3>
                                    <p class="elementor-icon-box-description">
                                        Là lượng đề thi trong <br />ngân hàng đề của chúng mình</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="why-us" style={{ backgroundImage: `url(${"http://holaduhoc.edu.vn/wp-content/uploads/2022/02/4028065-scaled.jpg"})` }}>
                <div className="why-us-content d-flex">
                    <div className="why-us-title fs-title-section-25-left ">Vì sao <br /> bạn nên chọn chúng tôi?</div>
                    <div class="why-us-overlay elementor-widget-container fs-text-section-15">
                        <ul class="elementor-icon-list-items">
                            <li class="elementor-icon-list-item">
                                <span class="elementor-icon-list-icon">
                                    <i aria-hidden="true" class="fas fa-book"></i>						</span>
                                <span class="elementor-icon-list-text"><i class="bi bi-book-fill"></i>Ngân hàng đề thi liên tục cập nhật</span>
                            </li>
                            <li class="elementor-icon-list-item">
                                <span class="elementor-icon-list-icon">
                                    <i aria-hidden="true" class="fas fa-clock"></i>						</span>
                                <span class="elementor-icon-list-text"><i class="bi bi-clock-fill"></i>Hỗ trợ 24/7 bởi các chuyên gia IELTS</span>
                            </li>
                            <li class="elementor-icon-list-item">
                                <span class="elementor-icon-list-icon">
                                    <i aria-hidden="true" class="far fa-user"></i>						</span>
                                <span class="elementor-icon-list-text"><i class="bi bi-person-fill"></i>Cộng đồng năng động gồm nhiều học sinh thuộc mọi lứa tuổi</span>
                            </li>
                            <li class="elementor-icon-list-item">
                                <span class="elementor-icon-list-icon">
                                    <i aria-hidden="true" class="far fa-comment"></i>						</span>
                                <span class="elementor-icon-list-text"><i class="bi bi-chat"></i>Giải thích chi tiết sau khi làm mỗi đề</span>
                            </li>
                            <li class="elementor-icon-list-item">
                                <span class="elementor-icon-list-icon">
                                    <i aria-hidden="true" class="fas fa-bed"></i>						</span>
                                <span class="elementor-icon-list-text"><i class="bi bi-clock-fill"></i>Lộ trình nâng band điểm dễ dàng cho người lười</span>
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
                        <img src="http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-dolgikh-giftpunditscom-1326947-min_2540x1693-1536x1024.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                    <div className="new-ielts-test-box">
                        <img src="http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-dolgikh-giftpunditscom-1326947-min_2540x1693-1536x1024.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                    <div className="new-ielts-test-box">
                        <img src="http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-dolgikh-giftpunditscom-1326947-min_2540x1693-1536x1024.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                    <div className="new-ielts-test-box">
                        <img src="http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-dolgikh-giftpunditscom-1326947-min_2540x1693-1536x1024.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                    <div className="new-ielts-test-box">
                        <img src="http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-dolgikh-giftpunditscom-1326947-min_2540x1693-1536x1024.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                    <div className="new-ielts-test-box">
                        <img src="http://holaduhoc.edu.vn/wp-content/uploads/2022/04/pexels-george-dolgikh-giftpunditscom-1326947-min_2540x1693-1536x1024.jpg" />
                        <div className="new-ielts-test-box-title">IELTS Mock Test 04/2022</div>
                    </div>
                </div>

            </section>
            <section id="feedback">
                <div className="feedback-title fs-title-section-25">Đánh giá từ học sinh</div>
                <div className="feedback-box-container d-flex">
                    <div className="feedback-box fs-text-section-15">
                        <div className="feedback-box-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="feedback-box-person-name">Bạn A
                        </div>
                    </div>
                    <div className="feedback-box feedback-second fs-text-section-15">
                        <div className="feedback-box-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="feedback-box-person-name">Bạn A
                        </div>
                    </div>
                    <div className="feedback-box fs-text-section-15">
                        <div className="feedback-box-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="feedback-box-person-name">Bạn A
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}