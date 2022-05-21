
import './Header.css'
import {Container} from 'react-bootstrap'



export default function Header() {
    return (
        <div class="header">
            <section class="logo header-section header-top-section header-element header-section-boxed">
                <div class="header-container">
                    <div class="header-column header-element">
                        <div class="header-widget-wrap header-element-populated">
                            <div class="header-element header-widget header-widget-image">
                                <div class="header-widget-container">
                                    <a href="http://holaduhoc.edu.vn">
                                        <img width="499" height="475" src="http://holaduhoc.edu.vn/wp-content/uploads/2021/12/Logo-HOLA.png" alt="" loading="lazy" srcset="http://holaduhoc.edu.vn/wp-content/uploads/2021/12/Logo-HOLA.png 499w, http://holaduhoc.edu.vn/wp-content/uploads/2021/12/Logo-HOLA-300x286.png 300w" sizes="(max-width: 499px) 100vw, 499px" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="button header-section header-top-section header-element header-section-boxed">
                <div class="header-container">
                    <div class="header-element header-column">
                        <div class="header-widget-wrap header-element-populated">
                            <div class="header-element header-element-button">
                                <div class="header-widget-container">
                                    <div class="header-button-wrapper">
                                        <a href="#" id="header-button" class="fill-button header-button-link header-button" role="button">
                                            <span class="header-button-content-wrapper">
                                                <span class="header-button-text">Đăng nhập</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="header-element header-element-button">
                                <div class="header-widget-container">
                                    <div class="header-button-wrapper">
                                        <a href="#" id="header-button" class="fill-button header-button-link header-button" role="button">
                                            <span class="header-button-content-wrapper">
                                                <span class="header-button-text">Đăng ký</span>
                                            </span>
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