import React from 'react';
import Images from "../../../../assets/img/Images/Images";
import {Link} from "react-router-dom";
import MenuList from "../MenuList/MenuList";

function MobileMenu(props) {
    return (
        <div id="mobile" className="mobile">
            <nav>
                <div className="container">
                    <input id="responsive-menu" type="checkbox"/>
                    <label htmlFor="responsive-menu">
                        <img src={Images.group35} alt="" />
                        <span id="menu-icon"></span>
                    </label>
                    <div id="overlay"></div>
                    <div className="overlay-inner">
                        <div className="user d-flex justify-content-start">
                            <div className="basket">
                                <a href="">
                                    <img className="basket" src={Images.vector3} alt=""/>
                                    <div className="circle"></div>
                                    <div className="number">0</div>
                                </a>
                            </div>
                            <p className="username"><a href="">Behbudova</a></p>
                            <a href="">
                                <div className="user-photo-bg"></div>
                                <img className="user-photo" src={Images.ellipse2jpg} alt="" />
                            </a>
                        </div>
                        <div className="start-buttons d-flex justify-content-start">
                            <Link to='login'  id="sign-in-mobile" type="button" className=" btn btn-link">Sign in</Link>
                            <Link to='register'  id="register-mobile" type="button" className="btn btn-link">Register</Link>
                        </div>
                        <ul id="mobile-menu">
                            <MenuList/>
                        </ul>
                        <hr className="mobile-line" />
                        <div className="search-box">
                            <input className="search" id="mobile-search" type="text"
                                   placeholder="Search Product..."
                                   aria-label="Search" />
                        </div>
                        <div className="settings">
                            <Link to='/'>
                                <p><i className="fas fa-user-cog fa-lg"></i> Settings </p>
                            </Link>
                            <Link to='/'>
                                <p><i className="fas fa-sign-out-alt fa-lg"></i> Sign out </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default MobileMenu;
