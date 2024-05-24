import React from 'react'
import { useState } from 'react'
import '../Css/Div3.css'

const RightSideProduct = ({ imgSrc, title, brand, oldPrice, newPrice }) => (
  <div className="group-8">
    <img className="rectangle-2-copy-4" src={imgSrc} alt="" />
    <div className="product-info">
      <p className="text-61">
        {title}
        <br className="text-style-4" />
        <em className="text-style-5">{brand}</em>
      </p>
      <img
        className="text-62"
        src="images/image_5.png"
        alt="    "
        width={85}
        height={14}
        title="    "
      />
      <p className="text-63">
        <span className="text-style-2">{oldPrice}</span> &nbsp;
        <strong className="text-style-6">{newPrice}</strong>
      </p>
    </div>
    <div className="row-14 group">
      <div className="button">Read More</div>
      <img
        className="text-47"
        src="images/image_13.png"
        alt="   |   "
        width={55}
        height={16}
        title="   |   "
      />
    </div>
  </div>
);

const LeftSideProduct = ({ imgSrc, title, brand, oldPrice, newPrice }) => (
  <div className="group-8">
    <img className="rectangle-2-copy-4" src={imgSrc} alt="" />
    <div className="product-info">
      <p className="text-61">
        {title}
        <br className="text-style-4" />
        <em className="text-style-5">{brand}</em>
      </p>
      <img
        className="text-62"
        src="images/image_5.png"
        alt="    "
        width={85}
        height={14}
        title="    "
      />
      <p className="text-63">
        <span className="text-style-2">{oldPrice}</span> &nbsp;
        <strong className="text-style-6">{newPrice}</strong>
      </p>
    </div>
    <div className="row-14 group">
      <div className="button">Read More</div>
      <img
        className="text-47"
        src="images/image_13.png"
        alt="   |   "
        width={55}
        height={16}
        title="   |   "
      />
    </div>
  </div>
);

const Div3 = () => {
  return (
    <>
<div id='pro' className="product-section">
  <div className="latest-and-hot-products">
    <div className="row-5 group">
    <div className="left-side-product">
    <p className="text-60">Our Brands</p>
    <LeftSideProduct
      imgSrc="images/rectangle_2_copy_4_8.jpg"
      title="Orange T-shirt"
      brand="Nike"
      oldPrice="$74.00"
      newPrice="$69.00"
    />
    <div className="line-2" />
    <LeftSideProduct
      imgSrc="images/rectangle_2_copy_4_7.jpg"
      title="Orange T-shirt"
      brand="Nike"
      oldPrice="$74.00"
      newPrice="$69.00"
    />
    <div className="line-3" />
    <LeftSideProduct
      imgSrc="images/rectangle_2_copy_4_6.jpg"
      title="Orange T-shirt"
      brand="Nike"
      oldPrice="$74.00"
      newPrice="$69.00"
    />
    <div className="line-4" />
    <LeftSideProduct
      imgSrc="images/rectangle_2_copy_4_5.jpg"
      title="Orange T-shirt"
      brand="Nike"
      oldPrice="$74.00"
      newPrice="$69.00"
    />
  </div>
      <div className="center-banner group">
        <img
          className="text-73"
          src="images/summer_sale_discount_upto.png"
          alt="Summer Sale Discount upto"
          width={194}
          height={295}
          title="Summer Sale Discount upto"
        />
        <p className="text-74">80%</p>
      </div>
      <div className="right-side-product">
    <p className="text-75">Our Brands</p>
    <RightSideProduct
      imgSrc="images/rectangle_2_copy_4_4.jpg"
      title="Orange T-shirt"
      brand="Nike"
      oldPrice="$74.00"
      newPrice="$69.00"
    />
    <div className="line-4" />
    <RightSideProduct
      imgSrc="images/rectangle_2_copy_4_3.jpg"
      title="Orange T-shirt"
      brand="Nike"
      oldPrice="$74.00"
      newPrice="$69.00"
    />
    <div className="line-5" />
    <RightSideProduct
      imgSrc="images/rectangle_2_copy_4_2.jpg"
      title="Orange T-shirt"
      brand="Nike"
      oldPrice="$74.00"
      newPrice="$69.00"
    />
    <div className="line-6" />
    <RightSideProduct
      imgSrc="images/rectangle_2_copy_4.jpg"
      title="Orange T-shirt"
      brand="Nike"
      oldPrice="$74.00"
      newPrice="$69.00"
    />
  </div>
    </div>
    <div className="line-6" />
  </div>
  <div className="subscribe-newsletter">
    <div className="heading-3">
      <p className="text-88">Never miss any fashion trending</p>
      <p className="text-89">
        Praesent mauris. Fusce nec tellus sed augue semper porta.
      </p>
    </div>
    <div className="email-box match-height group">
    <input type="text" className="text-box" />
    <button className="button-4">Read More</button>
  </div>
  </div>
</div>

    </>
  )
}

export default Div3
