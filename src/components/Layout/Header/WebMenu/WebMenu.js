import React from 'react';
import Images from "../../../../assets/img/Images/Images";
import {Link} from "react-router-dom";
import MenuList from "../MenuList/MenuList";


function WebMenu(props) {
    return (
        <>
           <div id="header"> 
                <div className="container">
                    <button id="back-to-top-btn">
                        <img src={Images.vector1} />
                    </button>
                    <div className="row d-flex">
                        <div className="logo col-3">
                            <Link to="/">
                                <img src={Images.group35} />
                            </Link>
                        </div>
                        <div className="search-box col-6 text-center">
                            <input className="search" id="search" type="text" placeholder="Search Product..."
                                   aria-label="Search" />
                        </div>
                        <div className="start-buttons col-3 justify-content-end">
                            <a to="Login" id="sign-in" type="button" className=" btn btn-link">Sign in</a>
                            <a href="register.html" id="register" type="button" className="btn btn-link">Register</a>
                        </div>
                        {/*<div className="user col-3 ">*/}
                        {/*     <div className="basket">*/}
                        {/*         <a href=""> <img className="basket" src={Images.vector3} alt=""/>*/}
                        {/*             <div className="circle"></div>*/}
                        {/*             <div className="number">0</div>*/}
                        {/*         </a>*/}
                        {/*     </div>*/}
                        {/*     <p className="username"><a href="">Dadashova</a></p>*/}
                        {/*     <a href="">*/}
                        {/*         <div className="user-photo-bg"></div>*/}
                        {/*         <img className="user-photo" src={Images.ellipse2jpg}alt="" />*/}
                        {/*     </a>*/}
                        {/* </div>*/}
                    </div>
                </div>
            </div>
            <div id="navbar">
                <div className="container">
                    <div className="">
                        <div className="logo2"><Link to="/"></Link></div>
                        <ul id="menu">
                            <MenuList/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WebMenu;
