import React from 'react';
import './index.css';



function Footer() {
    return (
        <footer>

            <div className="footer-container">
                <div class="footer-logo">
                    <div className="textlogo">
                        <img id='image' src="images/GanzaPayLogo.png" alt="Logo"></img>
                        <p className="text">GanzaPay</p>
                    </div>


                    <div className="social-media">
                        <a href="#"><img src="images/Facebooklogo.png" alt="Facebook"></img></a>
                        <a href="#"><img src="images/Youtubelogo.png" alt="YouTube"></img></a>
                        <a href="#"><img src="images/instagram.png" alt="Instagram"></img></a>
                        <a href="#"><img src="images/Linkedinlogo.png" alt="LinkedIn"></img></a>
                        <a href="#"><img src="images/XLogo.png" alt="Twitter"></img></a>
                    </div>
                </div>


                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>


                <div className="our-partners">
                    <h4>Our Partners</h4>
                    <ul>
                        <li><a href="https://www.airtel.co.rw/"> Airtel Tigo </a></li>
                        <li><a href="https://www.mtn.co.rw/"> MTN </a></li>
                    </ul>
                </div>


                <div className="privacy">
                    <h4>Privacy</h4>
                    <ul>
                        <li>Data Privacy</li>
                        <li>General Terms</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;










