import React from 'react'
import { useState } from 'react'
import '../Css/Div4.css'
const Div4 = ({ imageUrl, title, description }) => {
  return (

<>
  <div id='portfolio' className="popular-brands-logo">
    <img
      className="brand-logo"
      src="images/brand_logo.png"
      alt=""
      width={1149}
      height={100}
    />
  </div>
  <div className="footer-area">
    <div className="l-constrained group">
      <div className="col-6">
        <div className="row-12 group">
          <div className="about-company">
            <p className="text-91">About company</p>
            <p className="text-92">
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
              velit it’s a cold world out there.
            </p>
            <div className="row-3 group">
              <img
                className="text-93"
                src="images/image_4.png"
                alt="  "
                width={14}
                height={73}
                title="  "
              />
              <p className="text-94">
                0123 &nbsp;Main Road, Your City, NY 123456
                <br />
                &nbsp;(000) 2345 - 6789
                <br />
                &nbsp;info@psdfreebies.com
              </p>
            </div>
          </div>
          <div className="my-account group">
            <p className="text-95">My Account</p>
            <p className="text-96">
              My Account
              <br />
              <span className="text-style-7">&nbsp;</span>
              <br />
              Contact
              <br />
              <span className="text-style-7">&nbsp;</span>
              <br />
              Frequently Questions
              <br />
              <span className="text-style-7">&nbsp;</span>
              <br />
              Portfolio
              <br />
              <span className="text-style-7">&nbsp;</span>
              <br />
              Checkout
            </p>
          </div>
          <div className="product">
            <p className="product-2">Product</p>
            <p className="text-97">
              About Us
              <br />
              <span className="text-style-7">&nbsp;</span>
              <br />
              Blog
              <br />
              <span className="text-style-7">&nbsp;</span>
              <br />
              Contact
              <br />
              <span className="text-style-7">&nbsp;</span>
              <br />
              Services
              <br />
              <span className="text-style-7">&nbsp;</span>
              <br />
              Portfolio
            </p>
          </div>
        </div>
        <div className="bottam-text group">
          <nav className="nav">
            <div className="nav-list">
              <p className="nav-item-1">
                <a href="#">Sitemap</a>
              </p>
              <p className="nav-item-3">
                <a href="#">Searchs</a>
              </p>
              <p className="nav-item-1-2">
                <a href="#">Searchs</a>
              </p>
              <p className="nav-item-1-4">
                <a href="#">Advance</a>
              </p>
              <p className="nav-item-1-5">
                <a href="#">Searchs</a>
              </p>
              <p className="nav-item-1-6">
                <a href="#">Contact Us</a>
              </p>
            </div>
          </nav>
          <p className="text-98">
            © 2022 &nbsp;PSDFreebies.com &nbsp;| &nbsp;&nbsp;All Rights
            Reserved.
          </p>
        </div>
      </div>
      <div className="col-2">
        <div className="follow-us group">
          <div className="wrapper-10 group">
            <p className="text-99">Follow us:</p>
            <img
              className="text-101"
              src="images/image_2.png"
              alt="  "
              width={26}
              height={77}
              title="  "
            />
            <p className="text-100">
              Google+
              <br />
              Pinterest
              <br />
              Vimeo
            </p>
          </div>
          <p className="text-103">
            Facebook
            <br />
            Twitter
            <br />
            RSS
          </p>
          <img
            className="text-102"
            src="images/image_3.png"
            alt="  "
            width={19}
            height={78}
            title="  "
          />
        </div>
        <div className="paymethods group">
          <p className="text-104">Payment Methods</p>
          <img
            className="text-105"
            src="images/image.png"
            alt="     "
            width={277}
            height={22}
            title="     "
          />
        </div>
      </div>
    </div>
  </div>
</>



  );
};

export default Div4;
