import React from 'react'
import "../../Css/footer.css"
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillMail} from "react-icons/ai"
import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
    return (
        <>
          

 
          <footer class="new_footer_area bg_color">

            <div class="new_footer_top">
                <div class="container">
                <ScrollToTop smooth color="blue" />
                    <div class="row">
                        <div class="col-lg-6 col-md-6 ">
                            <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Upgrade your Parking Space Management experience today!</p>
                                <p>Phone:+919026431305</p>
                                <p>Email: harshitshukla813@gmail.com</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 text-center">
                            <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s"  style={{visibility: "visible",animationDelay: "0.8s", animationName: "fadeInLeft"}}>
                                <h3 class="f-title f_600 t_color f_size_19">Contact Us</h3>
                                <div class="f_social_icon">
                                <a href="www.linkedin.com/in/harshit9026" target="_blank" rel="noopener noreferrer">
                                  <AiFillLinkedin size={32} color="blue"/>
                                  </a>
                                  <a href="https://www.facebook.com/profile.php?id=61550711071774&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                  <AiFillFacebook size={32} color="blue"/>
                                  </a>
                                  <a href="https://www.instagram.com/harshitshukla_05?igsh=bjV3eHczZDFzczFr" target="_blank" rel="noopener noreferrer">
                                  <AiFillInstagram size={32} color="blue"/>
                                  </a>
                                  <a href="harshitshukla813@gmail.com">
                                  <AiFillMail size={32} color="blue"/>
                                  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_bg">
                    <div class="footer_bg_one"></div>
                    <div class="footer_bg_two"></div>
                </div>
            </div>
            
            
        </footer>
        </>
    )
}

export default Footer
