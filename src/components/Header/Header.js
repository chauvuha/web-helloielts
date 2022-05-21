
import './Header.css'
import { Fade } from "react-awesome-reveal";

export default function Header() {
    return (
        <div className="header">
            <section className="logo header-section header-top-section header-element header-section-boxed">
                <div className="header-container">
                    <div className="header-column header-element">
                        <div className="header-widget-wrap header-element-populated">
                            <div className="header-element header-widget header-widget-image">
                                <div className="header-widget-container">
                                    <a href="http://holaduhoc.edu.vn">
                                        <img width="499" height="475" src="http://holaduhoc.edu.vn/wp-content/uploads/2021/12/Logo-HOLA.png" alt="" loading="lazy" srcSet="http://holaduhoc.edu.vn/wp-content/uploads/2021/12/Logo-HOLA.png 499w, http://holaduhoc.edu.vn/wp-content/uploads/2021/12/Logo-HOLA-300x286.png 300w" sizes="(max-width: 499px) 100vw, 499px" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="button header-section header-top-section header-element header-section-boxed">
                <div className="header-container">
                    <div className="header-element header-column">
                        <div className="header-widget-wrap header-element-populated">
                            <div className="header-element header-element-button">
                                <div className="header-widget-container">
                                    <div className="header-button-wrapper">
                                        <a href="http://holaduhoc.edu.vn" id="header-button" className="fill-button header-button-link header-button" role="button">
                                            <Fade>
                                                <span className="header-button-content-wrapper">
                                                    <span className="header-button-text">Đăng nhập</span>
                                                </span>
                                            </Fade>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="header-element header-element-button">
                                <div className="header-widget-container">
                                    <div className="header-button-wrapper">
                                        <a href="http://holaduhoc.edu.vn" id="header-button" className="fill-button header-button-link header-button" role="button">
                                            <Fade>
                                                <span className="header-button-content-wrapper">
                                                    <span className="header-button-text">Đăng ký</span>
                                                </span>
                                            </Fade>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}