import React from 'react';
import './index.css';
import FacebookLogo from './FacebookLogo.png';
import GanzaPayLogo from './GanzaPayLogo.png';
import InstagramLogo from './Instagram.png';
import YoutubeLogo from './YoutubeLogo.png';
import LinkedinLogo from './LinkedinLogo.png';



function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <img src={GanzaPayLogo} alt="GanzaPay Logo"></img>
          <p>GanzaPay</p>


          <div class="social-media" >
            <a href="#"><img src={FacebookLogo} alt="Facebook"></img></a>
            <a href="#"><img src={YoutubeLogo} alt="YouTube"></img></a>
            <a href="#"><img src={InstagramLogo} alt="Instagram"></img></a>
            <a href="#"><img src={LinkedinLogo} alt="LinkedIn"></img></a>
          </div>
        </div>


        <div class="footer-links" >

          <div class="quick-links" >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>


          <div class="partners" >
            <h4>Our Partners</h4>
            <ul>
              <li><a href="https://www.airtel.co.rw/">Airtel Tigo</a></li>
              <li><a href="https://www.mtn.co.rw/">MTN Rwanda</a></li>
            </ul>
          </div>


          <div class="privacy">
            <h4>Privacy</h4>
            <ul>
              <li><a href="#">Data Privacy</a></li>
              <li><a href="#">General Terms</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
export default Footer;










