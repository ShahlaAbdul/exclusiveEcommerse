import React from 'react';
import './style.scss'

function Footer() {
  return (
    <footer>
      <div className="footerContent">

      <div className="footer">
        <div className="footerExclusive">
          <h3>Exclusive</h3>
          <h4>Subsribe</h4>
          <p>Get 10% off your first order</p>
          <div className="footerGmailInp">
            <input type="text" placeholder="enter your gmail" />
            <span>
              <i className="fa-solid fa-paper-plane"></i>
            </span>
          </div>
        </div>

        <div className="footerExclusive">
          <h3>Support</h3>
          <p>111 Bijoy sarani,Dhaka,</p>
          <p>DH 1515,Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="footerExclusive">
          <h3>Account</h3>
          <span>My Account</span>
          <span>Login / Register </span>
          <span>Cart</span>
          <span>Wishlist</span>
          <span>shop</span>
        </div>
        <div className="footerExclusive">
          <h3>Quick Link</h3>
          <span>privacy Policy</span>
          <span>Terms of use</span>
          <span>Fag</span>
          <span>Contact</span>
        </div>
        <div className="footerExclusive">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <p></p>
          <p></p>
          <p></p>
          <p> icon icon icon</p>
        </div>
        </div>
        
        <div className="footerCreated">
          <p>Created by Shahla Abdullayeva</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
