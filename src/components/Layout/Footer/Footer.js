import React from 'react';
import Images from "../../../assets/img/Images/Images";
import {Link} from "react-router-dom";
function Footer(props) {
    return (
        <div>
            <div id="footer">
                <div className="container">
                    <div className="footer-inner">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="footer-text1">
                                    <p><Link to="/about">About us </Link></p>
                                    <p><Link to="/product">Business partnership</Link></p>
                                    <p><Link to="/product2">Protection of Personal Data</Link></p>
                                    <p><Link to="/agreement">Notice Agreement</Link></p>
                                    <p><Link to="/policy">Cookie Policy</Link></p>
                                    <p><Link to="/contact">Contact us</Link></p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-text2">
                                    <p><Link to="/register">Register</Link></p>
                                    <p><Link to="/login">Login</Link></p>
                                    <p><Link to="/account-settings">My Profile</Link></p>
                                    <p><Link to="/forgot">I forgot my password</Link></p>
                                    <p><Link to="/site-map">Sitemap</Link></p>
                                    <p><Link to="/faq">FAQ</Link></p>
                                </div>
                            </div>
                            <div className="col-md-5 offset-md-1">
                                <div className="row d-flex justify-content-between">
                                    <div id="social-icons">
                                        <div className="row">
                                            <h6> Follow Us</h6>
                                        </div>
                                        <div className="row">
                                            <a href="/"  target='_blank' className="social-icon">
                                                <img className="icon-image1"
                                                    src={Images.vector2}
                                                    alt=""
                                                />
                                            </a>
                                            <a href="/"  target='_blank' className="social-icon">
                                                <img className="icon-image2"
                                                    src={Images.vector_3}
                                                    alt=""
                                                />
                                            </a>
                                            <a href="/" target='_blank'  className="social-icon">
                                                <img className="icon-image3"
                                                    src={Images.vector4}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <h6>Contact Us</h6>
                                        <p><Link to="" className="phoneNumber"> +1 003 100 002 123</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
