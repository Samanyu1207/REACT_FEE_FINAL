import React from 'react'
import { useState } from 'react'
import '../Css/Div2.css'

const ProductBanner = ({ bannerClassName, heading, subheading, buttonText }) => (
  <div className={bannerClassName}>
    <p className="text-18">
      <span className="color222222">{heading}</span>
      <br />
      {subheading}
    </p>
    <p className="text-19">
      {subheading}
    </p>
    <button className="rectangle-5-copy-holder">{buttonText}</button>
  </div>
);

const Card = ({ className, shapeSrc, title, subtitle, description }) => (
  <div className={className}>
    <img className="shape" src={shapeSrc} alt="" />
    <div className="text-42">
      <p className="text-43">{title}</p>
      <p className="text-44">{subtitle}</p>
      <p className="text-45">{description}</p>
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


const Div2 = () => {
  return (
    <>
<>
  <div className="main-banner">
    <div className="l-constrained-2">
      <p className="text-5">
        <span className="color222222">Fashion</span>
        <br />
        Carnival
      </p>
      <p className="text-6">2022</p>
      <p className="text-7">
        Lorem Ipsum. Proin gravida nibh velit it's a cold world out there.This
        is Photoshop's version of Lorem Ipsum. Proin gravida nibh velit it’s a
        cold world out there.
      </p>
      <button className="rectangle-5-holder">shop now</button>
    </div>
  </div>
  <div className="banners-and-featured-products">
    <div className="spl-services match-height group">
      <div className="group-2">
        <div className="wrapper-16">
          <div className="rounded-rectangle-1" />
          <p className="text-9">Free Shipping</p>
          <img
            className="text-10"
            src="images/image_26.png"
            alt=""
            width={39}
            height={39}
            title=""
          />
        </div>
        <p className="text-11">With €50 or more orders</p>
      </div>
      <div className="group-3">
        <div className="wrapper-15">
          <div className="rounded-rectangle-1-copy" />
          <p className="text-12">Free Refund</p>
          <img
            className="text-13"
            src="images/image_25.png"
            alt=""
            width={43}
            height={44}
            title=""
          />
        </div>
        <p className="text-14">100% Refund Within 3 days</p>
      </div>
      <div className="group-4">
        <div className="wrapper-14">
          <div className="rounded-rectangle-1-copy-2" />
          <p className="text-15">Support 24.7</p>
          <img
            className="text-16"
            src="images/image_24.png"
            alt=""
            width={50}
            height={51}
            title=""
          />
        </div>
        <p className="text-17">Call us anytime you want</p>
      </div>
    </div>
    <div className="col group">
    <div className="product-banner match-height group">
    <ProductBanner 
      bannerClassName="banner-01"
      heading="Fashion"
      subheading="Carnival"
      buttonText="shop now"
    />
    <ProductBanner 
      bannerClassName="banner-02"
      heading="Fashion"
      subheading="Carnival"
      buttonText="shop now"
    />
  </div>
      <div id='shop' className="featured-products group">
      <div className="product-01">
          <img className="image" src="images/image_23.png" alt="" />
          <div className="info">
            <p className="text-24">
              Orange T-shirt
              <br />
              <span className="text-style">Nike</span>
            </p>
            <img
              className="text-25"
              src="images/image_16.png"
              alt="    "
              width={86}
              height={14}
              title="    "
            />
            <p className="text-26">
              <span className="text-style-2">$74.00</span> &nbsp;
              <strong className="text-style-3">$69.00</strong>
            </p>
          </div>
        </div>
        <div className="col-5">
          <div className="heading">
            <p className="text-27">FEATURED PRODUCTS</p>
            <p className="text-28">
              Praesent mauris. Fusce nec tellus sed augue semper porta.
            </p>
          </div>
          <div className="row-13 match-height group">
            <div className="product-03">
              <img className="image-2" src="images/image_19.png" alt="" />
              <div className="info-2">
                <p className="text-29">
                  Orange T-shirt
                  <br />
                  <span className="text-style">Nike</span>
                </p>
                <img
                  className="text-30"
                  src="images/image_16.png"
                  alt="    "
                  width={86}
                  height={14}
                  title="    "
                />
                <p className="text-31">
                  <span className="text-style-2">$74.00</span> &nbsp;
                  <strong className="text-style-3">$69.00</strong>
                </p>
              </div>
            </div>
            <div className="product-04">
              <img className="image-3" src="images/image_17.png" alt="" />
              <div className="info-3">
                <p className="text-32">
                  Orange T-shirt
                  <br />
                  <span className="text-style">Nike</span>
                </p>
                <img
                  className="text-33"
                  src="images/image_16.png"
                  alt="    "
                  width={86}
                  height={14}
                  title="    "
                />
                <p className="text-34">
                  <span className="text-style-2">$74.00</span> &nbsp;
                  <strong className="text-style-3">$69.00</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="left-right-arrow match-height group">
            <div className="ellipse-1-copy-8-holder">
              <img
                className="text-35"
                src="images/copy_4.png"
                alt=""
                width={6}
                height={9}
                title=""
              />
            </div>
            <div className="ellipse-1-copy-8-holder-2">
              <img
                className="text-36"
                src="images/copy_4_2.png"
                alt=""
                width={5}
                height={9}
                title=""
              />
            </div>
          </div>
        </div>
        <div className="product-02 group">
          <img className="image-4" src="images/image_21.png" alt="" />
          <div className="info-4">
            <p className="text-37">
              Orange T-shirt
              <br />
              <span className="text-style">Nike</span>
            </p>
            <img
              className="text-38"
              src="images/image_16.png"
              alt="    "
              width={86}
              height={14}
              title="    "
            />
            <p className="text-39">
              <span className="text-style-2">$74.00</span> &nbsp;
              <strong className="text-style-3">$69.00</strong>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div><div className="bg">
  <div id='blog' className="latest-news">
    <div className="heading-2">
      <p className="text-40">Latest News</p>
      <p className="text-41">
        Praesent mauris. Fusce nec tellus sed augue semper porta.
      </p>
    </div>
    <div className="row-4 match-height group">
    <Card 
      className="group-5"
      shapeSrc="images/shape_3.jpg"
      title="Porem ipsum dolor sit ame"
      subtitle="Lorem Ipsum. Proin gravida nibh"
      description="Lorem Ipsum. Proin gravida nibh velit it’s a cold world out there.This is Photoshop's version of Lorem Ipsum."
    />
    <Card 
      className="group-6 group"
      shapeSrc="images/shape.jpg"
      title="Porem ipsum dolor sit ame"
      subtitle="Lorem Ipsum. Proin gravida nibh"
      description="Lorem Ipsum. Proin gravida nibh velit it’s a cold world out there.This is Photoshop's version of Lorem Ipsum."
    />
    <Card 
      className="group-7 group"
      shapeSrc="images/shape_2.jpg"
      title="Porem ipsum dolor sit ame"
      subtitle="Lorem Ipsum. Proin gravida nibh"
      description="Lorem Ipsum. Proin gravida nibh velit it’s a cold world out there.This is Photoshop's version of Lorem Ipsum."
    />
  </div>
  </div>
</div>

</>

    </>
  )
}

export default Div2
