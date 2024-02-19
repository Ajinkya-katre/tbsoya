import './App.css';
import whatsapp from '../src/assets/img/whatsapp.png'
import topbarbg from '../src/assets/img/home_img/1.jpg'
import Header from './components/Header';
import Footer from './components/footer'

function App() {
  return (
		<><div id="app">

			<Header />

			<div id="start-screen"   className="start-screen start-screen--style-2">
				<div id="start-screen__bg"   className="start-screen__bg" style={{backgroundImage: `url(${topbarbg})`,backgroundPosition: '70% 0'}}></div>

				<div id="start-screen__content-container"   className="start-screen__content-container">
					<div   className="start-screen__content__item is-active  align-items-center">
						<div   className="container">
							<div   className="row">
								<div   className="col-lg-12">
									<h6   className="__title">Organic Soya farm</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      
				     
				<section   className="section">
					<div   className="container-fluid"> 
						<div   className="product-promo product-promo--style-2">
							<div   className="__inner">
								<div   className="row no-gutters  js-isotope"
									data-isotope-options='{
										"itemSelector": ".js-isotope__item",
										"transitionDuration": "0.8s",
										"percentPosition": "true",
										"masonry": { "columnWidth": ".js-isotope__sizer" }
									}'>
									
									<div   className="col-12 col-sm-6 col-md-4  js-isotope__sizer"></div>

								</div>
							</div>
						</div>
						     
					</div>
				</section>
				     

				     
				<section   className="section">
					<div   className="container">
						<div   className="special-offer special-offer--style-3" data-aos="fade" data-aos-duration="600" data-aos-offset="70">
							<div   className="row align-items-center">
								<div   className="col-12 col-lg-6">
									<figure   className="image">
										<img   className="img-fluid  lazy" src="img/blank.gif" data-src="img/img_asd.png" alt="demo" />
									</figure>
								</div>

								<div   className="col-12 my-3 d-lg-none"></div>

								<div   className="col-12 col-lg-6">
									<h2   className="text">
										<span style={{color: '#fcdb5a'}}>Quality</span>
										<span style={{color: '#db2985'}}>food is the</span>
										<span style={{color: '#72aa41'}}>most important</span>
										<span style={{color: '#f2a137'}}>thing in our</span>
										<span style={{color: '#4fb1c9'}}>life</span>
									</h2>
								</div>
							</div>
						</div>
					</div>
				</section>
				     

				     
				<section   className="section section--no-pt">
					<div   className="container">
						<div   className="section-heading section-heading--center" data-aos="fade">
							<h2   className="__title">Agro food <span>Services</span></h2>

							<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
						</div>
  
						<div   className="feature feature--style-3">
							<div   className="__inner">
								<div   className="row">
									     
									<div   className="col-6 col-sm-4 col-lg-2">
										<div   className="__item  text-center" data-aos="fade" data-aos-delay="100" data-aos-offset="100">
											<i   className="__ico">
												<img   className="img-fluid  lazy" src="img/blank.gif" data-src="img/feature_img/15.png" alt="demo" />
											</i>

											<h5   className="__title">Steak House</h5>
										</div>
									</div>
									     

									     
									<div   className="col-6 col-sm-4 col-lg-2">
										<div   className="__item  text-center" data-aos="fade" data-aos-delay="200" data-aos-offset="100">
											<i   className="__ico">
												<img   className="img-fluid  lazy" src="img/blank.gif" data-src="img/feature_img/16.png" alt="demo" />
											</i>

											<h5   className="__title">Tasty Cereals</h5>
										</div>
									</div>
									     

									     
									<div   className="col-6 col-sm-4 col-lg-2">
										<div   className="__item  text-center" data-aos="fade" data-aos-delay="300" data-aos-offset="100">
											<i   className="__ico">
												<img   className="img-fluid  lazy" src="img/blank.gif" data-src="img/feature_img/17.png" alt="demo" />
											</i>

											<h5   className="__title">Italian Pizza</h5>
										</div>
									</div>
									     

									     
									<div   className="col-6 col-sm-4 col-lg-2">
										<div   className="__item  text-center" data-aos="fade" data-aos-delay="400" data-aos-offset="100">
											<i   className="__ico">
												<img   className="img-fluid  lazy" src="img/blank.gif" data-src="img/feature_img/18.png" alt="demo" />
											</i>

											<h5   className="__title">Vegeterian Burgers</h5>
										</div>
									</div>
									     

									     
									<div   className="col-6 col-sm-4 col-lg-2">
										<div   className="__item  text-center" data-aos="fade" data-aos-delay="500" data-aos-offset="100">
											<i   className="__ico">
												<img   className="img-fluid  lazy" src="img/blank.gif" data-src="img/feature_img/19.png" alt="demo" />
											</i>

											<h5   className="__title">Awesome Cupcake</h5>
										</div>
									</div>
									     

									     
									<div   className="col-6 col-sm-4 col-lg-2">
										<div   className="__item  text-center" data-aos="fade" data-aos-delay="600" data-aos-offset="100">
											<i   className="__ico">
												<img   className="img-fluid  lazy" src="img/blank.gif" data-src="img/feature_img/20.png" alt="demo" />
											</i>

											<h5   className="__title">Vegetables</h5>
										</div>
									</div>
									     
								</div>
							</div>
						</div>  
					</div>
				</section>
				     

				     
				<section   className="section section--dark-bg jarallax" data-speed="0.5" data-img-position="50% 80%">
					<img   className="jarallax-img  lazy" data-src="img/bg_3.jpg" alt="demo" />

					<div   className="container">
						<div   className="row">
							<div   className="col-12 col-md-8 col-lg-6">
								<div data-aos="fade-left" data-aos-easing="ease-out-quad" data-aos-duration="700">
									<h2   className="text-white">Agro Perfect <br /><span>farm for you</span></h2>

									<p   className="text-white">
										Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of   classNameical Latin literature from 45 BC, making it over 2000 years old.
									</p>

									<p><a   className="custom-btn custom-btn--medium custom-btn--style-4" href="#">Discover</a></p>
								</div>
							</div>
						</div>
					</div>

					<div   className="py-4 py-lg-10"></div>
				</section>
				     

				     
				<section   className="section section--no-pt section--gray-bg">
					<div   className="container">
						<div   className="recipes">
							<div   className="__inner">
								<div   className="row no-gutters">
									     
									<div   className="col-12 col-lg-6">
										<div   className="__item">
											<div   className="row no-gutters align-items-center">
												<div   className="col-12 col-md-6 align-self-md-stretch">
													<figure   className="__image">
														<img   className="lazy" src="img/blank.gif" data-src="img/recipes_img/1.jpg" alt="demo" />
													</figure>
												</div>

												<div   className="col-12 col-md-6">
													<div   className="__content">
														<h3   className="__title h5"><a href="blog_details.html">Tips for Ripening your Fruit</a></h3>

														<p>
															Dogfish shark, bango hog sucker, baikal oilfish, eeltail catfish regal whiptail catfish; squarehead 
														</p>
													</div>
												</div>
											</div>
										</div>

										<div   className="__item">
											<div   className="row flex-md-row-reverse no-gutters align-items-center">
												<div   className="col-12 col-md-6 align-self-md-stretch">
													<figure   className="__image">
														<img   className="lazy" src="img/blank.gif" data-src="img/recipes_img/3.jpg" alt="demo" />
													</figure>
												</div>

												<div   className="col-12 col-md-6">
													<div   className="__content">
														<h3   className="__title h5"><a href="blog_details.html">Superfoods you should be eating</a></h3>

														<p>
															The generated Lorem Ipsum is therefore always free from repetition injected humour, or 
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									     

									     
									<div   className="col-12 col-lg-6">
										<div   className="__item">
											<div   className="row no-gutters align-items-center">
												<div   className="col-12 col-md-6 align-self-md-stretch">
													<figure   className="__image">
														<img   className="lazy" src="img/blank.gif" data-src="img/recipes_img/2.jpg" alt="demo" />
													</figure>
												</div>

												<div   className="col-12 col-md-6">
													<div   className="__content">
														<h3   className="__title h5"><a href="blog_details.html">Tips for Ripening your Fruit</a></h3>

														<p>
															The generated Lorem Ipsum is therefore always free from repetition injected humour, or 
														</p>
													</div>
												</div>
											</div>
										</div>

										<div   className="__item">
											<div   className="row flex-md-row-reverse no-gutters align-items-center">
												<div   className="col-12 col-md-6 align-self-md-stretch">
													<figure   className="__image">
														<img   className="lazy" src="img/blank.gif" data-src="img/recipes_img/4.jpg" alt="demo" />
													</figure>
												</div>

												<div   className="col-12 col-md-6">
													<div   className="__content">
														<h3   className="__title h5"><a href="blog_details.html">Grunt torrent catfish squaretail Norwegian Atlantic salmon</a></h3>

														<p>
															Northern clingfish searobin betta blue shark. Jackfish leopard danio
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									     
								</div>
							</div>
						</div>
					</div>
				</section>
				     

				     
				<section   className="section section--no-pt section--no-pb">
					  start banner simple  
					<div   className="simple-banner simple-banner--style-3" data-aos="fade" data-aos-offset="50">

						<div   className="__label" data-aos="zoom-in" data-delay="700">
							  <img   className="lazy" data-src="img/banner_label_2.png" alt="demo" />  
						</div>

						  <div   className="container">
							<div   className="row">
								<div   className="col">
									<div   className="__inner">
										<div   className="row">
											<div   className="col-lg-5">
												<div   className="banner__text" data-aos="fade" data-delay="500">
													<h2   className="__title">Tasty Cakes</h2>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>  
					</div>
					  end banner simple  
				</section>
				     

				     
				<section   className="section">
					<div   className="container">
						<div   className="section-heading section-heading--center" data-aos="fade">
							<h2   className="__title">Agro <span>Progress</span></h2>

							<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
						</div>

						  start counters  
						<div   className="counter">
							<div   className="__inner">
								<div   className="row justify-content-sm-center">
									     
									<div   className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3">
										<div   className="__item" data-aos="zoom-in" data-aos-duration="350" data-aos-delay="150">
											<div   className="d-table">
												<div   className="d-table-cell align-middle">
													<i   className="__ico">
														<img   className="img-fluid  lazy" src="img/blank.gif" data-src="img/ico/ico_count_8.png" alt="demo" />
													</i>
												</div>

												<div   className="d-table-cell align-middle">
													<p   className="__count js-count" data-from="0" data-to="350">350</p>

													<p   className="__title">Muffins</p>
												</div>
											</div>
										</div>
									</div>
									     

									     
									<div   className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3">
										<div   className="__item" data-aos="zoom-in" data-aos-duration="350" data-aos-delay="300">
											<div   className="d-table">
												<div   className="d-table-cell align-middle">
													<i   className="__ico">
														<img   className="img-fluid  lazy" src="img/blank.gif" data-src="img/ico/ico_count_9.png" alt="demo" />
													</i>
												</div>

												<div   className="d-table-cell align-middle">
													<p   className="__count js-count" data-from="0" data-to="158">158</p>

													<p   className="__title">Cakes</p>
												</div>
											</div>
										</div>
									</div>
									     

									     
									<div   className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3">
										<div   className="__item" data-aos="zoom-in" data-aos-duration="350" data-aos-delay="450">
											<div   className="d-table">
												<div   className="d-table-cell align-middle">
													<i   className="__ico">
														<img   className="img-fluid  lazy" src="img/blank.gif" data-src="img/ico/ico_count_10.png" alt="demo" />
													</i>
												</div>

												<div   className="d-table-cell align-middle">
													<p   className="__count js-count" data-from="0" data-to="500">500</p>

													<p   className="__title">Cupcakes</p>
												</div>
											</div>
										</div>
									</div>
									     

									     
									<div   className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3">
										<div   className="__item" data-aos="zoom-in" data-aos-duration="350" data-aos-delay="600">
											<div   className="d-table">
												<div   className="d-table-cell align-middle">
													<i   className="__ico">
														<img   className="img-fluid  lazy" src="img/blank.gif" data-src="img/ico/ico_count_11.png" alt="demo" />
													</i>
												</div>

												<div   className="d-table-cell align-middle">
													<p   className="__count js-count" data-from="0" data-to="685">685</p>

													<p   className="__title">Doughnut</p>
												</div>
											</div>
										</div>
									</div>
									     
								</div>
							</div>
						</div>
					</div>
				</section>
				     

				     
				<section   className="section section--no-pt section--no-pb">
					<div   className="gallery gallery--style-3">
						<div   className="__inner">
							<div   className="row no-gutters">
								     
								<div   className="col-12 col-sm-6 col-md-4 col-xl-3">
									<div   className="__item">
										<figure   className="__image">
											<img   className="lazy" src="img/blank.gif" data-src="img/gallery_img/13.jpg" alt="demo"/>

											<div   className="__content">
												<h5   className="__content__title">Testy Jam</h5>
											</div>

											<a   className="__link" data-fancybox="gallery" href="img/gallery_img/13.jpg"></a>
										</figure>
									</div>
								</div>
								     

								     
								<div   className="col-12 col-sm-6 col-md-4 col-xl-3">
									<div   className="__item">
										<figure   className="__image">
											<img   className="lazy" src="img/blank.gif" data-src="img/gallery_img/14.jpg" alt="demo"/>

											<div   className="__content">
												<h5   className="__content__title">Cristmas Sweets</h5>
											</div>

											<a   className="__link" data-fancybox="gallery" href="img/gallery_img/14.jpg"></a>
										</figure>
									</div>
								</div>
								     

								     
								<div   className="col-12 col-sm-6 col-md-4 col-xl-3">
									<div   className="__item">
										<figure   className="__image">
											<img   className="lazy" src="img/blank.gif" data-src="img/gallery_img/15.jpg" alt="demo"/>

											<div   className="__content">
												<h5   className="__content__title">Awesome Dishes</h5>
											</div>

											<a   className="__link" data-fancybox="gallery" href="img/gallery_img/15.jpg"></a>
										</figure>
									</div>
								</div>
								     

								     
								<div   className="col-12 col-sm-6 col-md-4 col-xl-3">
									<div   className="__item">
										<figure   className="__image">
											<img   className="lazy" src="img/blank.gif" data-src="img/gallery_img/16.jpg" alt="demo"/>

											<div   className="__content">
												<h5   className="__content__title">Tasty Desert</h5>
											</div>

											<a   className="__link" data-fancybox="gallery" href="img/gallery_img/16.jpg"></a>
										</figure>
									</div>
								</div>
								     

								     
								<div   className="col-12 col-sm-6 col-md-4 col-xl-3">
									<div   className="__item">
										<figure   className="__image">
											<img   className="lazy" src="img/blank.gif" data-src="img/gallery_img/17.jpg" alt="demo"/>

											<div   className="__content">
												<h5   className="__content__title">Nuts</h5>
											</div>

											<a   className="__link" data-fancybox="gallery" href="img/gallery_img/17.jpg"></a>
										</figure>
									</div>
								</div>
								     

								     
								<div   className="col-12 col-sm-6 col-md-4 col-xl-3">
									<div   className="__item">
										<figure   className="__image">
											<img   className="lazy" src="img/blank.gif" data-src="img/gallery_img/18.jpg" alt="demo"/>

											<div   className="__content">
												<h5   className="__content__title">Jam</h5>
											</div>

											<a   className="__link" data-fancybox="gallery" href="img/gallery_img/18.jpg"></a>
										</figure>
									</div>
								</div>
								     

								     
								<div   className="col-12 col-sm-6 col-md-4 col-xl-3">
									<div   className="__item">
										<figure   className="__image">
											<img   className="lazy" src="img/blank.gif" data-src="img/gallery_img/19.jpg" alt="demo"/>

											<div   className="__content">
												<h5   className="__content__title">Honey</h5>
											</div>

											<a   className="__link" data-fancybox="gallery" href="img/gallery_img/19.jpg"></a>
										</figure>
									</div>
								</div>
								     

								     
								<div   className="col-12 col-sm-6 col-md-4 col-xl-3">
									<div   className="__item">
										<figure   className="__image">
											<img   className="lazy" src="img/blank.gif" data-src="img/gallery_img/20.jpg" alt="demo"/>

											<div   className="__content">
												<h5   className="__content__title">Bread</h5>
											</div>

											<a   className="__link" data-fancybox="gallery" href="img/gallery_img/20.jpg"></a>
										</figure>
									</div>
								</div>
								     
							</div>
						</div>
					</div>
				</section>
				     

				     
				<section   className="section section--dark-bg section--review jarallax" data-speed="0.5" data-img-position="50% 80%">
					<img   className="jarallax-img  lazy" data-src="img/bg_2.jpg" alt="demo" />

					<div   className="container">
						<div   className="section-heading section-heading--white section-heading--center" data-aos="fade">
							<h2   className="__title">People says <span>about agro</span></h2>

							<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
						</div>
 
						<div   className="review review--slider">
							<div   className="js-slick" data-slick='{"autoplay": true, "arrows": false, "dots": true, "speed": 1000}'>
								     
								<div   className="review__item">
									<div   className="review__item__text">
										<p>
											<i>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of   classNameical Latin literature from 45 BC, making it over</i>
										</p>
									</div>

									<div   className="review__item__author  d-table">
										<div   className="d-table-cell align-middle">
											<div   className="review__item__author-image">
												<img   className="circled" src="img/ava.png" alt="ava" />
											</div>
										</div>

										<div   className="d-table-cell align-middle">
											<span   className="review__item__author-name"><strong>Terens Smith</strong></span>
											<span   className="review__item__author-position">/CEO AntalAgro</span>
										</div>
									</div>
								</div>
								     

								     
								<div   className="review__item">
									<div   className="review__item__text">
										<p>
											<i>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of   classNameical Latin literature from 45 BC, making it over</i>
										</p>

										<p>
											<i>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of   classNameical Latin literature from 45 BC, making it over</i>
										</p>
									</div>

									<div   className="review__item__author  d-table">
										<div   className="d-table-cell align-middle">
											<div   className="review__item__author-image">
												<img   className="circled" src="img/ava.png" alt="ava" />
											</div>
										</div>

										<div   className="d-table-cell align-middle">
											<span   className="review__item__author-name"><strong>Terens Smith</strong></span>
											<span   className="review__item__author-position">/CEO AntalAgro</span>
										</div>
									</div>
								</div>
								     
							</div>
						</div>
					</div>
				</section>
				     

				     
				<section   className="section section--no-pb">
					<div   className="container">
						<div   className="section-heading section-heading--center" data-aos="fade">
							<h2   className="__title">Blog <span>Posts</span></h2>

							<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
						</div>

						<div   className="posts posts--style-2">
							<div   className="__inner">
								<div   className="row">
									     
									<div   className="col-12 col-sm-6 col-lg-4">
										<div   className="__item __item--preview" data-aos="flip-up" data-aos-delay="100" data-aos-offset="0">
											<figure   className="__image">
												<img   className="lazy" src="img/blank.gif" data-src="img/posts_img/7.jpg" alt="demo" />

												<span   className="__overlay"></span>

												<div   className="__content">
													<span   className="__date-post">
														<strong>07</strong>Nov
													</span>

													<p   className="__category"><a href="#">ORGANIC FOOD/TIPS & GUIDES</a></p>

													<h3   className="__title h5"><a href="blog_details.html">Tips for Ripening your Fruit</a></h3>
												</div>
											</figure>
										</div>
									</div>
									     

									     
									<div   className="col-12 col-sm-6 col-lg-4">
										<div   className="__item __item--preview" data-aos="flip-up" data-aos-delay="200" data-aos-offset="0">
											<figure   className="__image">
												<img   className="lazy" src="img/blank.gif" data-src="img/posts_img/8.jpg" alt="demo" />

												<span   className="__overlay"></span>

												<div   className="__content">
													<span   className="__date-post">
														<strong>03</strong>Nov
													</span>

													<p   className="__category"><a href="#">DIET/ORGANIC FOOD</a></p>

													<h3   className="__title h5"><a href="blog_details.html">Health Benefits of a Raw Food</a></h3>
												</div>
											</figure>
										</div>
									</div> 
									<div   className="col-12 col-sm-6 col-lg-4">
										<div   className="__item __item--preview" data-aos="flip-up" data-aos-delay="300" data-aos-offset="0">
											<figure   className="__image">
												<img   className="lazy" src="img/blank.gif" data-src="img/posts_img/9.jpg" alt="demo" />

												<span   className="__overlay"></span>

												<div   className="__content">
													<span   className="__date-post">
														<strong>25</strong>oct
													</span>

													<p   className="__category"><a href="#">DIET/ORGANIC FOOD</a></p>

													<h3   className="__title h5"><a href="blog_details.html">Superfoods you should be eating</a></h3>
												</div>
											</figure>
										</div>
									</div>
								</div>
							</div>
						</div>
						  
					</div>
				</section>
				
			</div>

		<div   className="whatsapp-container">
			<a href="https://wa.me/917620849210" target="_blank"><img src={whatsapp} alt="" height="50px"
					width="50px" /></a>
		</div>

		
		<Footer />
    
    </> 
  );
}

export default App;
