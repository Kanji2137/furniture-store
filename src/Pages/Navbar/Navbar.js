import React, { useState, useEffect } from "react";
import _debounce from 'lodash.debounce'

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import { LiaShoppingBagSolid } from "react-icons/lia";
import { BsHeart } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

import SearchBar from "../../Components/SearchBar/SearchBar";

import Footer from "../Footer/Footer";


import HomePage from "../HomePage/HomePage";
import CatalogPage from "../CatalogPage/CatalogPage";
// import AboutPage from "../AboutPage/AboutPage";
// import ShopPage from "../ShopPage/ShopPage";
// import ProductPage from "../ProductPage/ProductPage";
// import CartPage from "../CartPage/CartPage";
// import CartProvider from "../../CartProvider";
// import PaymentPage from "../CartPage/PaymentPage/PaymentPage";
// import ServicePage from "../ServicePage/ServicePage";

// import Contact from "../Contact/Contact";

// import logo from "../../images/logo.svg";

function Navbar() {
    const [isChecked, setIsChecked] = useState(false);

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

    if(width > 1300 && isChecked){
        document.body.classList.remove("overflow-hidden");
        setIsChecked(!isChecked);
    }

    return (
        <Router>
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
                                <h1>edge .</h1>
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
                        <Link to="/cart/cart">
                            <BsHeart />
                        </Link>
                        <Link to="/cart/cart">
                            <GoSearch />
                        </Link>
                        <Link to="/cart/cart">
                            <LiaShoppingBagSolid />
                        </Link>
                    </div>
                </div>

                <Routes>
                    <Route path="/cart">

                        <Route path="/cart/pruduct" />
                        <Route path="/cart/cart"/>
                        <Route path="/cart/payment" />
                    </Route>
                    <Route path="/shop/:searchQuery" element={<CatalogPage searchQuery=""/>}/>
                    <Route path="/shop" element={<CatalogPage searchQuery=""/>}/>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/about"/>
                    <Route path="/service"/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default Navbar;