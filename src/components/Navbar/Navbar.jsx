import React from "react";
import "./Navbar.scss";
import logo from "../../assets/imgs/logo.svg";
import book from "../../assets/imgs/book.svg";
import call from "../../assets/imgs/call.svg";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="logo_btn_wrapper">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="btn_wrapper">
                <button>
                  Kurslar <img src={book} alt="book" />
                </button>
              </div>
            </div>
            <div className="select_and_btn_wrapper">
              <ul className="nav_ul">
                <li><a href="#Bizningustozlarimiz">Bizning ustozlarimiz</a></li>
                <li><a href="#Bizhaqimizda">Biz haqimizda</a></li>
              </ul>
              <div className="custom-select">
                <select>
                  <option value="UZ">UZ</option>
                  <option value="EN">EN</option>
                </select>
              </div>
              <button className="btn_call">
                <img src={call} alt="call" /> +998 91 7775411
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
