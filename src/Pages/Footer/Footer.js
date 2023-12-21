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
                            The bicycle service located at 54 Druid St is the
                            perfect destination if you seek professionalism and
                            expertise in bike repairs.
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
                        <Link to="/home" className="footer-links">
                            Home
                        </Link>
                        <Link to="/about" className="footer-links">
                            About
                        </Link>
                        <Link to="/service" className="footer-links">
                            Service
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
                <p>© Copyright 2023 Edge.</p>
            </div>
        </footer>
    );
}

export default Footer;