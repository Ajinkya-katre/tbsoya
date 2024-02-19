import React from 'react'

function Footer() {
  return (
    <><div>
          <footer id="footer" class="footer footer--style-3">
              <div class="container">
                  <div class="row">
                      <div class="col-12 col-md-7">
                          <div class="row">
                              <div class="col-12 col-sm-4 col-md-4 col-lg-3">
                                  <div class="footer__item">
                                      <a class="site-logo" href="index.html">
                                          <img class="img-fluid  lazy" src="img/blank.gif" data-src="img/main_logo.png" alt="demo" />
                                      </a>
                                  </div>
                              </div>

                              <div class="col-12 col-sm">
                                  <div class="footer__item">
                                      <nav id="footer__navigation" class="navigation">
                                          <div class="row justify-content-sm-center">
                                              <div class="col-auto">
                                                  <ul>
                                                      <li class="active"><a href="index.html">Home</a></li>
                                                      <li><a href="about.html">About</a></li>
                                                      <li><a href="#">Pages</a></li>
                                                      <li><a href="#">Gallery</a></li>
                                                      <li><a href="#">Blog</a></li>
                                                      <li><a href="contacts.html">Contacts</a></li>
                                                      <li><a href="gallery.html">Gallery</a></li>

                                                  </ul>
                                              </div>

                                              <div class="col-auto offset-lg-1">
                                                  <ul>
                                                      <li><a href="#">Partners</a></li>
                                                      <li><a href="#">Customer Service</a></li>
                                                      <li><a href="#">Vegetables</a></li>
                                                      <li><a href="#">Fruits</a></li>
                                                      <li><a href="#">Organic Food</a></li>
                                                      <li><a href="#">Privacy policy</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </nav>
                                  </div>
                              </div>

                              <div class="col-12 my-lg-3"></div>
                          </div>

                          <div class="row align-items-end justify-content-between">
                              <div class="col-12 col-lg-9">
                                  <div class="footer__item">
                                      <address>
                                          <div class="row">
                                              <div class="col-12 col-sm-6 mb-4 mb-sm-0">
                                                  <h5 class="__title">email</h5>

                                                  <p>
                                                      <a href="mailto:support@agrocompany.com">support@agrocompany.com</a>
                                                  </p>
                                              </div>

                                              <div class="col-12 col-sm-6">
                                                  <h5 class="__title">Phone</h5>

                                                  <p>
                                                      +1 (234) 56789,  +1 987 654 3210
                                                  </p>
                                              </div>
                                          </div>
                                      </address>
                                  </div>
                              </div>

                              <div class="col-12 col-lg-auto">
                                  <div class="footer__item">
                                      <div class="social-btns">
                                          <a href="#"><i class="fontello-twitter"></i></a>
                                          <a href="#"><i class="fontello-facebook"></i></a>
                                          <a href="#"><i class="fontello-linkedin-squared"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="row justify-content-lg-between copyright">
                              <div class="col-12 col-lg">
                                  <div class="footer__item">
                                      <span class="__copy">© 2023 TBSOYA. All rights reserved. Created by Ajinkya Katre &hearts;</span>
                                  </div>
                              </div>

                              <div class="col-12 col-lg-auto">
                                  <div class="footer__item">
                                      <span class="__copy">All Rights Reserved.</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div><div class="map-container">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.8454578964042!2d76.1936394!3d18.3998834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5713a1fbe901b%3A0xc12665f2f142b857!2sTulja%20Bhavani%20Soya%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1707344123811!5m2!1sen!2sin" width="600" height="450" style={{border:'0',loading:'lazy', referrerpolicy:'no-referrer-when-downgrade'}}></iframe>
              </div>
          </footer>
            </div><div id="btn-to-top-wrap">
              <a id="btn-to-top" class="circled" href="javascript:void(0);" data-visible-offset="800"></a>
          </div></>

    )
}

export default Footer;