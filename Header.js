import React, { useState } from "react";
import "../css/style.css"

function Header() {
    const [searchFormActive, setSearchFormActive] = useState(false);
    const [navbarActive, setNavbarActive] = useState(false);

    const toggleSearchForm = () => {
        setSearchFormActive(!searchFormActive);
        setNavbarActive(false);
    };

    const toggleNavbar = () => {
        setNavbarActive(!navbarActive);
        setSearchFormActive(false);
    };

    const handleScroll = () => {
        setSearchFormActive(false);
        setNavbarActive(false);
    };

    return (
        <nav>
            <header className="header">
                <a href = "#" className="logo"><i className="fas fa-graduation-cap"></i>Sha+</a>

                <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/income/combined">Income</a>
                    <a href="/expense/combined">Expense</a>
                    <a href="#/payments">Payments</a>
                    <a href="#home">About</a>
                </nav>

                <div className="icons">
                    <div className="fas fa-bars" id="menu-btn" onClick={toggleNavbar}></div>
                    <div className="fas fa-search" id="search-btn" onClick={toggleSearchForm}></div>
                    <div className="fas fa-user" id="login-btn"></div>
                </div>

                <form action="" className={`search-form ${searchFormActive ? 'active' : ''}`}>
                    <input type="search" id="search-box" placeholder="search ... "/>
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </form>
            </header>
        </nav>
    );
}

export default Header;
