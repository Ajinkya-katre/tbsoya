import React from 'react'
import logo from '../assets/img/main_logo.png'
import topbarbg from '../assets/img/home_img/1.jpg'

function Header() {
  return (
    <div>
        			<header id="top-bar"   className="top-bar top-bar--style-3">
				<div   className="top-bar__bg" style={{backgroundImage: `url(${topbarbg})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: '40% bottom'}}></div>

				<div   className="container position-relative">
					<div   className="row align-items-center no-gutters">

						<a   className="top-bar__logo site-logo" href="index.html" style={{alignItems: 'center', width: '150px', height: 'auto', margin: '0px 0px 10px 0px'}}>
							<img   className="img-fluid" src={logo} alt="demo" />
						</a>
						<a id="top-bar__navigation-toggler"   className="top-bar__navigation-toggler top-bar__navigation-toggler--light" href="javascript:void(0);"><span></span></a>

						<div id="top-bar__inner"   className="top-bar__inner">
							<div>
								<nav id="top-bar__navigation"   className="top-bar__navigation navigation" role="navigation">
									<ul>
										<li   className="active">
											<a href="javascript:void(0);">HOME</a>

										</li>

										<li>
											<a href="about.html">ABOUT</a>
										</li>

										<li>
											<a href="contacts.html">CONTACT</a>
										</li>
										<li>
											<a href="gallery.html"> GALLERY</a>
										</li>

										<li   className="li-btn">
											<a   className="custom-btn custom-btn--small custom-btn--style-5" href="contacts.html">Get in Touch</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>

					</div>
				</div>
			</header>  

    </div>
  )
}

export default Header