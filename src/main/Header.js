import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
            
            <div class="header-area header-transparent">
                <div class="main-header ">
                    <div class="header-bottom  header-sticky">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                
                                <div class="col-xl-2 col-lg-2">
                                    <div class="logo">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-xl-10 col-lg-10">
                                    <div class="menu-wrapper d-flex align-items-center justify-content-end">
                                        <div class="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation"> 
                                                    {/* <li><a>About Us</a></li>
                                                    <li><a>Browse Start Ups</a></li>
                                                    <li><a>Invest Ideas</a>
                                                        <ul class="submenu">
                                                            <li><a>Auto Invest</a></li>
                                                            <li><a>UInvest</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li class="button-header margin-left "><a href="register_main.html" class="btn">Sign Up</a></li>
                                                    <li class="button-header margin-left "><a href="login.html" class="btn">Log In</a></li> */}
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div> 
                                <div class="col-12">
                                    <div class="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
        )
    }
}
