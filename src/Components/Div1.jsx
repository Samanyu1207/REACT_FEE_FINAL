import { useState } from 'react'
import '../Css/Div1.css'


function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="background">
      {isVisible && (
        <div className="top-banner">
          <div className="l-constrained-4 group">
            <p className="text">Free International Shipping with $75 Purchase</p>
            <div className="ellipse-1-holder" onClick={handleClick}>X</div>
          </div>
        </div>
      )}
    </div>
  );
}

const Div1 = () => {
  return (
    <>
<div className="background">
  <Banner />
  </div>
  <div className="top-navation-bar">
    <div className="l-constrained-3">
      <div className="top-navitong-text group">
        <p className="text-2">
          Hello guys! Welcome to Samanyu's Shop
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Email:<strong className="fw700">samanyu@123.com</strong>
        </p>
        <p className="text-3">EN &nbsp;&nbsp;&nbsp;USD</p>
      </div>
      <div className="line" />
      <div className="row group">
        <div className="logo">MeStore</div>
        <div className="navigation match-height group">
          <nav className="nav-2">
            <ul className="nav-list-2 group">
              <li>
                <p className="nav-item-1-7">
                  <a href="#home">Home</a>
                </p>
              </li>
              <li>
                <p className="nav-item-1-8">
                  <a href="#shop">Shop</a>
                </p>
              </li>
              <li>
                <p className="nav-item-1-9">
                  <a href="#pro">Product</a>
                </p>
              </li>
              <li>
                <p className="nav-item-1-10">
                  <a href="#blog">Blog</a>
                </p>
              </li>
              <li>
                <p className="nav-item-1-11">
                  <a href="#portfolio">Portfolio</a>
                </p>
              </li>
            </ul>
          </nav>
          <img
            className="text-4"
            src="images/image_27.png"
            alt="            "
            width={115}
            height={19}
            title="            "
          />
        </div>
      </div>
    </div>
    <div className="toggle-button">
      <span />
      <span />
      <span />
    </div>
  </div>


    </>
  )
}

export default Div1
