import React, {useState, useEffect} from "react";
import _debounce from 'lodash.debounce'

import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

import {LiaShoppingBagSolid} from "react-icons/lia";

import SearchBar from "./SearchBar/SearchBar";

import Footer from "../Footer/Footer";


import HomePage from "../HomePage/HomePage";
import CatalogPage from "../CatalogPage/CatalogPage";
import ProductPage from "../ProductPage/ProductPage";
import CartPage from "../CartPage/CartPage";
import PaymentPage from "../PaymentPage/PaymentPage";

import ScrollToTop from "../../Components/ScrollToTop";

import {useSelector} from "react-redux";

function Navbar() {
  const quantity = useSelector(state => state.cart.totalQuantity)

  const [isChecked, setIsChecked] = useState(false);

  const close = () => {
    if (isChecked) {
      document.body.classList.remove("overflow-hidden");
      setIsChecked(false)
    }
  }
  const checkHandler = () => {
    if (isChecked) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
    setIsChecked(!isChecked);
  };

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 100)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  if (width > 1300 && isChecked) {
    document.body.classList.remove("overflow-hidden");
    setIsChecked(!isChecked);
  }

  return (
      <Router>
        <ScrollToTop />
        <div>
          <div className="nav">
            <input
                type="checkbox"
                id="nav-check"
                checked={isChecked}
                onChange={checkHandler}
            />
            <div className="nav-header">
              <div className="nav-title">
                <Link to="/">
                  <h1 onClick={close}>edge .</h1>
                </Link>
              </div>
            </div>
            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div className="nav-links" onClick={checkHandler}>
              <Link to="/shop">Catalog</Link>
              <Link to="/about">Inspirations</Link>
              <Link to="/service">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <SearchBar/>
            <div className="nav-icons">
              <Link to="/cart" className="nav-cart" onClick={close}>
                <LiaShoppingBagSolid/>
                <h5 className="nav-cart-quantity">{quantity}</h5>
              </Link>
            </div>
          </div>
          <Routes>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/cart/payment" element={<PaymentPage/>}/>
            <Route path="/shop/:searchQuery" element={<CatalogPage searchQuery=""/>}/>
            <Route path="/shop" element={<CatalogPage searchQuery=""/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/product" element={<ProductPage/>}/>
            <Route path="/about"/>
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

export default Navbar;