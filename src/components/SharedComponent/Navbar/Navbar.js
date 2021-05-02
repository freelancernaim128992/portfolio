import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-4 navbar-style">
            <div className="container">
                <Link className="navbar-brand logo-style" to="/">My <span className="logo-style-2">Portfolio</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex justify-content-end w-100">
                    <li className="nav-item me-5">
                        <Link className="nav-link link-style" to="/home">Home</Link>
                    </li>
                    <li className="nav-item me-5">
                        <Link className="nav-link link-style" to="/about">About</Link>
                    </li>
                    <li className="nav-item me-5">
                        <a className="nav-link link-style" href="/home#services">Services</a>
                    </li>
                    <li className="nav-item me-5">
                        <Link className="nav-link link-style" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item me-5">
                        <a className="nav-link link-style" href="/blogs">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-style" href="/home#contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;