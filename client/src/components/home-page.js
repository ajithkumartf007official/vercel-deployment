import React from "react";
import "../css/homepageCss/style.css";
import "../css/homepageCss/bootstrap.min.css";
import "../css/homepageCss/owl.carousel.css";
import "../css/homepageCss/owl.theme.css";
import "../css/homepageCss/style.css";
import "../css/homepageCss/animate.css";


const HomePage = () => {
  return (
    <main>
      {/* <div className="preloader">
        <div className="sk-rotating-plane"></div>
      </div> */}
      {/* INTRO SECTION */}
      <section id="intro" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-sm-12">
              <h3 className="wow bounceIn" data-wow-delay="0.9s">Million Learning System</h3>
              <h1 className="wow fadeInUp" data-wow-delay="1.6s">Learn Anytime, Anywhere!</h1>
              <a href="#overview" className="btn btn-lg btn-default smoothScroll wow fadeInUp hidden-xs" data-wow-delay="2.3s">LEARN MORE</a>
              <a href="#register" className="btn btn-lg btn-danger smoothScroll wow fadeInUp" data-wow-delay="2.3s">REGISTER NOW</a>
            </div>


          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="0.6s">
              <h3>New Event is a fully responsive one-page template for events, conferences or workshops.</h3>
              <p>This is a Bootstrap v3.3.6 layout that is responsive and mobile friendly. You may download and modify this template for your website. Please tell your friends about templatemo.</p>
              <p>Quisque facilisis scelerisque venenatis. Nam vulputate ultricies luctus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
            </div>

            <div className="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="0.9s">
              <img src={process.env.PUBLIC_URL + "/images/homepageImg/overview-img.jpg"} className="img-responsive" alt="Overview" />
            </div>

          </div>
        </div>
      </section>

      {/* DETAIL SECTION */}
      <section id="detail" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="wow fadeInLeft col-md-4 col-sm-4" data-wow-delay="0.3s">
              <i className="fa fa-group"></i>
              <h3>650 Participants</h3>
              <p>Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.</p>
            </div>

            <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">
              <i className="fa fa-clock-o"></i>
              <h3>24 Programs</h3>
              <p>Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.</p>
            </div>

            <div className="wow fadeInRight col-md-4 col-sm-4" data-wow-delay="0.9s">
              <i className="fa fa-microphone"></i>
              <h3>11 Speakers</h3>
              <p>Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.</p>
            </div>

          </div>
        </div>
      </section>
      {/* VIDEO SECTION */}
      <section id="video" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="wow fadeInUp col-md-6 col-sm-10" data-wow-delay="1.3s">
              <h2>Watch Video</h2>
              <h3>Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet consectetuer diam nonummy.</p>
            </div>
            <div className="wow fadeInUp col-md-6 col-sm-10" data-wow-delay="1.6s">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/XDPwXQjAlB0" allowfullscreen></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* SPEAKERS SECTION */}
      <section id="speakers" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-sm-12 wow bounceIn">
              <div className="section-title">
                <h2>Creative Speakers</h2>
                <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.</p>
              </div>
            </div>

            {/* Testimonial Owl Carousel section */}
            <div id="owl-speakers" className="owl-carousel">

              <div className="item wow fadeInUp col-md-3 col-sm-3" data-wow-delay="0.9s">
                <div className="speakers-wrapper">
                  <img src={process.env.PUBLIC_URL + "/images/homepageImg/speakers-img1.jpg"} className="img-responsive" alt="speakers" />
                  <div className="speakers-thumb">
                    <h3>Jenny Green</h3>
                    <h6>UI Designer</h6>
                  </div>
                </div>
              </div>

              <div className="item wow fadeInUp col-md-3 col-sm-3" data-wow-delay="0.6s">
                <div className="speakers-wrapper">
                  <img src={process.env.PUBLIC_URL + "/images/homepageImg/speakers-img2.jpg"} className="img-responsive" alt="speakers" />
                  <div className="speakers-thumb">
                    <h3>David Yoon</h3>
                    <h6>Creative Director</h6>
                  </div>
                </div>
              </div>

              <div className="item wow fadeInUp col-md-3 col-sm-3" data-wow-delay="0.9s">
                <div className="speakers-wrapper">
                  <img src={process.env.PUBLIC_URL + "/images/homepageImg/speakers-img3.jpg"} className="img-responsive" alt="speakers" />
                  <div className="speakers-thumb">
                    <h3>Je Mary Lee</h3>
                    <h6>Web Specialist</h6>
                  </div>
                </div>
              </div>

              <div className="item wow fadeInUp col-md-3 col-sm-3" data-wow-delay="0.6s">
                <div className="speakers-wrapper">
                  <img src={process.env.PUBLIC_URL + "/images/homepageImg/speakers-img4.jpg"} className="img-responsive" alt="speakers" />
                  <div className="speakers-thumb">
                    <h3>Johnathan Doe</h3>
                    <h6>Frontend Dev</h6>
                  </div>
                </div>
              </div>

              <div className="item wow fadeInUp col-md-3 col-sm-3" data-wow-delay="0.6s">
                <div className="speakers-wrapper">
                  <img src={process.env.PUBLIC_URL + "/images/homepageImg/speakers-img5.jpg"} className="img-responsive" alt="speakers" />
                  <div className="speakers-thumb">
                    <h3>Elite Hamilton</h3>
                    <h6>Marketing Guru</h6>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section id="program" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="0.6s">
              <div className="section-title">
                <h2>Our Programs</h2>
                <p>Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.</p>
              </div>
            </div>

            <div className="wow fadeInUp col-md-10 col-sm-10" data-wow-delay="0.9s">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="active"><a href="#fday" aria-controls="fday" role="tab" data-toggle="tab">FIRST DAY</a></li>
                <li><a href="#sday" aria-controls="sday" role="tab" data-toggle="tab">SECOND DAY</a></li>
                <li><a href="#tday" aria-controls="tday" role="tab" data-toggle="tab">THIRD DAY</a></li>
              </ul>
              {/* tab panes */}
              <div className="tab-content">

                <div role="tabpanel" className="tab-pane active" id="fday">
                  {/* program speaker here */}
                  <div className="col-md-2 col-sm-2">
                    <img src={process.env.PUBLIC_URL + "/images/homepageImg/program-img1.jpg"} className="img-responsive" alt="program" />
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h6>
                      <span><i className="fa fa-clock-o"></i> 09.00 AM</span>
                      <span><i className="fa fa-map-marker"></i> Room 240</span>
                    </h6>
                    <h3>Introduction to Design</h3>
                    <h4>By Jenny Green</h4>
                    <p>Maecenas accumsan metus turpis, eu faucibus ligula interdum in. Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum.</p>
                  </div>

                  {/* program divider */}
                  <div className="program-divider col-md-12 col-sm-12"></div>

                  {/* program speaker here */}
                  <div className="col-md-2 col-sm-2">
                    <img src={process.env.PUBLIC_URL + "/images/homepageImg/program-img2.jpg"} className="img-responsive" alt="program" />
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h6>
                      <span><i className="fa fa-clock-o"></i> 10.00 AM</span>
                      <span><i className="fa fa-map-marker"></i> Room 360</span>
                    </h6>
                    <h3>Front-End Development</h3>
                    <h4>By Johnathan Mark</h4>
                    <p>Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum. Praesent ullamcorper mauris fermentum turpis scelerisque rutrum eget eget turpis.</p>
                  </div>

                  {/* program divider */}
                  <div className="program-divider col-md-12 col-sm-12"></div>

                  {/* program speaker here */}
                  <div className="col-md-2 col-sm-2">
                    <img src={process.env.PUBLIC_URL + "/images/homepageImg/program-img3.jpg"} className="img-responsive" alt="program" />
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h6>
                      <span><i className="fa fa-clock-o"></i> 11.00 AM</span>
                      <span><i className="fa fa-map-marker"></i> Room 450</span>
                    </h6>
                    <h3>Social Media Marketing</h3>
                    <h4>By Johnathan Doe</h4>
                    <p>Nam pulvinar, elit vitae rhoncus pretium, massa urna bibendum ex, aliquam efficitur lorem odio vitae erat. Integer rutrum viverra magna, nec ultrices risus rutrum nec.</p>
                  </div>
                </div>

                <div role="tabpanel" className="tab-pane" id="sday">
                  {/* program speaker here */}
                  <div className="col-md-2 col-sm-2">
                    <img src={process.env.PUBLIC_URL + "/images/homepageImg/program-img4.jpg"} className="img-responsive" alt="program" />
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h6>
                      <span><i className="fa fa-clock-o"></i> 11.00 AM</span>
                      <span><i className="fa fa-map-marker"></i> Room 240</span>
                    </h6>
                    <h3>Backend Development</h3>
                    <h4>By Matt Lee</h4>
                    <p>Integer rutrum viverra magna, nec ultrices risus rutrum nec. Pellentesque interdum vel nisi nec tincidunt. Quisque facilisis scelerisque venenatis. Nam vulputate ultricies luctus.</p>
                  </div>

                  {/* program divider */}
                  <div className="program-divider col-md-12 col-sm-12"></div>

                  {/* program speaker here */}
                  <div className="col-md-2 col-sm-2">
                    <img src={process.env.PUBLIC_URL + "/images/homepageImg/program-img5.jpg"} className="img-responsive" alt="program" />
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h6>
                      <span><i className="fa fa-clock-o"></i> 01.00 PM</span>
                      <span><i className="fa fa-map-marker"></i> Room 450</span>
                    </h6>
                    <h3>Web Application Lite</h3>
                    <h4>By David Orlando</h4>
                    <p>Aliquam faucibus lobortis dolor, id pellentesque eros pretium in. Aenean in erat ut quam aliquet commodo. Vivamus aliquam pulvinar ipsum ut sollicitudin. Suspendisse quis sollicitudin mauris.</p>
                  </div>

                  {/* program divider */}
                  <div className="program-divider col-md-12 col-sm-12"></div>

                  {/* program speaker here */}
                  <div className="col-md-2 col-sm-2">
                    <img src={process.env.PUBLIC_URL + "/images/homepageImg/program-img6.jpg"} className="img-responsive" alt="program" />
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h6>
                      <span><i className="fa fa-clock-o"></i> 03.00 PM</span>
                      <span><i className="fa fa-map-marker"></i> Room 650</span>
                    </h6>
                    <h3>Professional UX Design</h3>
                    <h4>By James Lee Mark</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                  </div>
                </div>

                <div role="tabpanel" className="tab-pane" id="tday">
                  {/* program speaker here */}
                  <div className="col-md-2 col-sm-2">
                    <img src={process.env.PUBLIC_URL + "/images/homepageImg/program-img7.jpg"} className="img-responsive" alt="program" />
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h6>
                      <span><i className="fa fa-clock-o"></i> 03.00 PM</span>
                      <span><i className="fa fa-map-marker"></i> Room 750</span>
                    </h6>
                    <h3>Online Shopping Business</h3>
                    <h4>By Michael Walker</h4>
                    <p>Aliquam faucibus lobortis dolor, id pellentesque eros pretium in. Aenean in erat ut quam aliquet commodo. Vivamus aliquam pulvinar ipsum ut sollicitudin. Suspendisse quis sollicitudin mauris.</p>
                  </div>

                  {/* program divider */}
                  <div className="program-divider col-md-12 col-sm-12"></div>

                  {/* program speaker here */}
                  <div className="col-md-2 col-sm-2">
                    <img src={process.env.PUBLIC_URL + "/images/homepageImg/program-img8.jpg"} className="img-responsive" alt="program" />
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h6>
                      <span><i className="fa fa-clock-o"></i> 05.00 PM</span>
                      <span><i className="fa fa-map-marker"></i> Room 850</span>
                    </h6>
                    <h3>Introduction to Mobile App</h3>
                    <h4>By Cherry Stella</h4>
                    <p>Nunc eu nibh vel augue mollis tincidunt id efficitur tortor. Sed pulvinar est sit amet tellus iaculis hendrerit. Mauris justo erat, rhoncus in arcu at, scelerisque tempor erat.</p>
                  </div>

                  {/* program divider */}
                  <div className="program-divider col-md-12 col-sm-12"></div>

                  {/* program speaker here */}
                  <div className="col-md-2 col-sm-2">
                    <img src={process.env.PUBLIC_URL + "/images/homepageImg/program-img9.jpg"} className="img-responsive" alt="program" />
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <h6>
                      <span><i className="fa fa-clock-o"></i> 07.00 PM</span>
                      <span><i className="fa fa-map-marker"></i> Room 750</span>
                    </h6>
                    <h3>Bootstrap UI Design</h3>
                    <h4>By John David</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* REGISTER SECTION */}
      <section id="register" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="wow fadeInUp col-md-7 col-sm-7" data-wow-delay="0.6s">
              <h2>Register Here</h2>
              <h3>Nunc eu nibh vel augue mollis tincidunt id efficitur tortor. Sed pulvinar est sit amet tellus iaculis hendrerit.</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet consectetuer diam nonummy.</p>
            </div>

            <div className="wow fadeInUp col-md-5 col-sm-5" data-wow-delay="1s">
              <form action="#" method="post">
                <input name="firstname" type="text" className="form-control" id="firstname" placeholder="First Name" />
                <input name="lastname" type="text" className="form-control" id="lastname" placeholder="Last Name" />
                <input name="phone" type="telephone" className="form-control" id="phone" placeholder="Phone Number" />
                <input name="email" type="email" className="form-control" id="email" placeholder="Email Address" />
                <div className="col-md-offset-6 col-md-6 col-sm-offset-1 col-sm-10">
                  <input name="submit" type="submit" className="form-control" id="submit" value="REGISTER" />
                </div>
              </form>
            </div>

            <div className="col-md-1"></div>

          </div>
        </div>
      </section>


      {/* FAQ SECTION */}
      <section id="faq" className="parallax-section">
        <div className="container">
          <div className="row">

            {/* Section title */}
            <div className="wow bounceIn col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 text-center">
              <div className="section-title">
                <h2>Do you have Questions?</h2>
                <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.</p>
              </div>
            </div>

            <div className="wow fadeInUp col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10" data-wow-delay="0.9s">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        What is Responsive Design?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div className="panel-body">
                      <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate voluptate neque, curabitur dolor libero sodales vitae elit massa. Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.</p>
                      <p>Nunc eu nibh vel augue mollis tincidunt id efficitur tortor. Sed pulvinar est sit amet tellus iaculis hendrerit. Mauris justo erat, rhoncus in arcu at, scelerisque tempor erat.</p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What are latest UX Developments?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                      <p>Nunc eu nibh vel augue mollis tincidunt id efficitur tortor. Sed pulvinar est sit amet tellus iaculis hendrerit. Mauris justo erat, rhoncus in arcu at, scelerisque tempor erat.</p>
                      <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate voluptate neque, curabitur dolor libero sodales vitae elit massa. Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.</p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What things about Social Media will be discussed?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="panel-body">
                      <p>Aenean vulputate finibus justo et feugiat. Ut turpis lacus, dapibus quis justo id, porttitor tempor justo. Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa.</p>
                      <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate voluptate neque, curabitur dolor libero sodales vitae elit massa. Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* VENUE SECTION */}
      <section id="venue" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="wow fadeInLeft col-md-offset-1 col-md-5 col-sm-8" data-wow-delay="0.9s">
              <h2>Venue</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
              <h4>New Event</h4>
              <h4>120 Market Street, Suite 110</h4>
              <h4>San Francisco, CA 10110</h4>
              <h4>Tel: 010-020-0120</h4>
            </div>

          </div>
        </div>
      </section>


      {/* SPONSORS SECTION */}
      <section id="sponsors" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="wow bounceIn col-md-12 col-sm-12">
              <div className="section-title">
                <h2>Our Sponsors</h2>
                <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.</p>
              </div>
            </div>

            <div className="wow fadeInUp col-md-3 col-sm-6 col-xs-6" data-wow-delay="0.3s">
              <img src={process.env.PUBLIC_URL + "/images/homepageImg/sponsor-img1.jpg"} className="img-responsive" alt="sponsors" />
            </div>

            <div className="wow fadeInUp col-md-3 col-sm-6 col-xs-6" data-wow-delay="0.6s">
              <img src={process.env.PUBLIC_URL + "/images/homepageImg/sponsor-img2.jpg"} className="img-responsive" alt="sponsors" />
            </div>

            <div className="wow fadeInUp col-md-3 col-sm-6 col-xs-6" data-wow-delay="0.9s">
              <img src={process.env.PUBLIC_URL + "/images/homepageImg/sponsor-img3.jpg"} className="img-responsive" alt="sponsors" />
            </div>

            <div className="wow fadeInUp col-md-3 col-sm-6 col-xs-6" data-wow-delay="1s">
              <img src={process.env.PUBLIC_URL + "/images/homepageImg/sponsor-img4.jpg"} className="img-responsive" alt="sponsors" />
            </div>

          </div>
        </div>
      </section>


      {/* CONTACT SECTION */}
      <section id="contact" className="parallax-section">
        <div className="container">
          <div className="row">

            <div className="wow fadeInUp col-md-offset-1 col-md-5 col-sm-6" data-wow-delay="0.6s">
              <div className="contact_des">
                <h3>New Event</h3>
                <p>Proin sodales convallis urna eu condimentum. Morbi tincidunt augue eros, vitae pretium mi condimentum eget. Suspendisse eu turpis sed elit pretium congue.</p>
                <p>Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam fringilla vestibulum. Praesent ullamcorper mauris fermentum turpis scelerisque rutrum eget eget turpis.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor.</p>
                <a href="#" className="btn btn-danger">DOWNLOAD NOW</a>
              </div>
            </div>

            <div className="wow fadeInUp col-md-5 col-sm-6" data-wow-delay="0.9s">
              <div className="contact_detail">
                <div className="section-title">
                  <h2>Keep in touch</h2>
                </div>
                <form action="#" method="post">
                  <input name="name" type="text" className="form-control" id="name" placeholder="Name" />
                  <input name="email" type="email" className="form-control" id="email" placeholder="Email" />
                  <textarea name="message" rows="5" className="form-control" id="message" placeholder="Message"></textarea>
                  <div className="col-md-6 col-sm-10">
                    <input name="submit" type="submit" className="form-control" id="submit" value="SEND" />
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer>
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-sm-12">
              <p className="wow fadeInUp" data-wow-delay="0.6s">Copyright &copy; 2016 Your Company

                | Design: <a rel="nofollow" href="http://www.templatemo.com/page/1" target="_parent">Templatemo</a></p>

              <ul className="social-icon">
                <li><a href="#" className="fa fa-facebook wow fadeInUp" data-wow-delay="1s"></a></li>
                <li><a href="#" className="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a></li>
                <li><a href="#" className="fa fa-dribbble wow fadeInUp" data-wow-delay="1.6s"></a></li>
                <li><a href="#" className="fa fa-behance wow fadeInUp" data-wow-delay="1.9s"></a></li>
                <li><a href="#" className="fa fa-google-plus wow fadeInUp" data-wow-delay="2s"></a></li>
              </ul>

            </div>

          </div>
        </div>
      </footer>

    </main >
  );
};

export default HomePage;
