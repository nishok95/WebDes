import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="footer-wrappr " data-background="assets/img/gallery/footer-bg.png">
                    <div class="footer-area footer-padding ">
                        <div class="container">
                            <div class="row d-flex justify-content-between">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div class="single-footer-caption mb-50">
                                        {/* <!-- logo --> */}
                                        <div class="footer-logo mb-25">
                                            <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                                        </div>
                                        <div class="footer-tittle mb-50">
                                            <p>Subscribe our newsletter to get updates about our services</p>
                                        </div>
                                        {/* <!-- Form --> */}
                                        <div class="footer-form">
                                            <div id="mc_embed_signup">
                                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscribe_form relative mail_part" novalidate="true">
                                                    <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " class="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" />
                                                    <div class="form-icon">
                                                        <button type="submit" name="submit" id="newsletter-submit" class="email_icon newsletter-submit button-contactForm">
                                                            Subscribe
                                                        </button>
                                                    </div>
                                                    <div class="mt-10 info"></div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!-- social --> */}
                                        <div class="footer-social mt-50">
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="https://bit.ly/sai4ull"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-5">00


                                    <div class="single-footer-caption mb-50">
                                        <div class="footer-tittle">
                                            <h4>Support</h4>
                                            <ul>
                                                <li><a href="#">Technology</a></li>
                                                <li><a href="#"> Products</a></li>
                                                <li><a href="#">Customers</a></li>
                                                <li><a href="#">Quality</a></li>
                                                <li><a href="#">Sales geography</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- footer-bottom area --> */}
                    <div class="footer-bottom-area">
                        <div class="container">
                            <div class="footer-border">
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="footer-copy-right text-center">
                                            <p>
                                            Copyright &copy;
                                            <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made 
                                            by WDUE Team.
                                            
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
