import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__logo-container footer__row">
                    <div className="footer-header footer__logo-header">
                        <h1>edge .</h1>
                    </div>
                    <div className="logo-des">
                        <p>

                            The furniture emporium situated at 54 Druid St is your
                            ultimate stop if you're in search of professionalism
                            and expertise in furniture solutions.
                        </p>
                        <Link to="/about" className="footer__btn-know">
                            Know More
                        </Link>
                    </div>
                </div>

                <div className="footer__office-container footer__row">
                    <div className="footer-header">
                        <h3>Office</h3>
                    </div>
                    <div className="office-des">
                        <p>
                            ADDRESS:
                            <br />
                            54 DRUID ST, LONDON SE1 2EZ
                        </p>

                        <p>INFO@EMAIL.PL</p>

                        <p className="num">666 666 666</p>
                    </div>
                </div>
                <div className="footer__link-container footer__row">
                    <div className="footer-header">
                        <h3>Links</h3>
                    </div>
                    <div className="footer__link-des">
                        <Link to="/" className="footer-links">
                            Home
                        </Link>
                        <Link to="/about" className="footer-links">
                            About
                        </Link>
                        <Link to="/shop" className="footer-links">
                            Catalog
                        </Link>
                        <Link to="/contact" className="footer-links">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="newsletter footer__row">
                    <div className="footer-header">
                        <h3>Newsletter</h3>
                    </div>
                    <div className="footer__newsletter-des">
                        <div className="footer__subcribe">
                            <input
                                className="footer__input"
                                type="mail"
                                placeholder="Enter Email ID"
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <hr />
                <p>© Copyright 2024 Edge.</p>
            </div>
        </footer>
    );
}

export default Footer;