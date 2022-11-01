import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="home_six_footer">
        <div className="main_footer_wrap">
          <div className="container mx-auto">
            <div className="footer_widget_wrap">
              <div className="footer_widget">
                <div className="footer_title">
                  <h3>QUICK MENU</h3>
                </div>
                <ul className="footer_links">
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq">FAQ</NavLink>
                  </li>
                  <li>
                    <NavLink to="/privecy_policy">Privacy policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/termsCondition">Terms of use</NavLink>
                  </li>
                  <li>
                    <a className="text-white">Return policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer_widget">
                <div className="footer_title">
                  <h3>Partner</h3>
                </div>
                <ul className="footer_links">
                  <li>
                    <NavLink to="/became">Became Author/Publisher</NavLink>
                  </li>
                  <li>
                    <a href="#">Affiliate</a>
                  </li>
                  <li>
                    <a href="#">Gift Vouchers</a>
                  </li>
                </ul>
              </div>
              <div className="footer_widget">
                <div className="footer_title">
                  <h3>MY ACCOUNT</h3>
                </div>
                <ul className="footer_links">
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Order History</a>
                  </li>
                  <li>
                    <a href="/trackorder">Track Order</a>
                  </li>
                  <li>
                    <a href="#">Order History</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                </ul>
              </div>
              <div className="footer_widget">
                <div className="footer_title">
                  <h3>Subscribe to our newsletter</h3>
                </div>
                <p className="synUp_text mb-4">
                  Sign up and get a voucher of worth $250.00
                </p>
                <div className="subcribe-form theme_mailChimp">
                  <form
                    target="_blank"
                    action="#"
                    method="get"
                    className="subscription relative"
                  >
                    <input
                      name="EMAIL"
                      className="form-control"
                      placeholder="Type e-mail address…"
                      required=""
                      type="email"
                    />
                    <button className="">Join Us</button>
                    <div className="info"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_area">
          <div className="container mx-auto">
            <div className="copy_right_text text-center">
              <p>
                © 2022 <a href="#"> DR BRO .</a> All rights reserved. Made By{" "}
                <a href="#">DR BRO</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
