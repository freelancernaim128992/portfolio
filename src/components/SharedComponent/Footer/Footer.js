import React from 'react';
import { Link } from 'react-router-dom';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'

const Footer = () => {
    const noName = [
        {name: '406 masimpur, Shilmandi Union, Shaheprotab'},
        {name: 'Narsingdi Shadar, Narsingdi, Dhaka, Bangladesh'}
    ]
    const projects = [
        {name: 'Dry Clean'},
        {name: 'Grocery Shops'},
        {name: 'Vehicle Ride'},
        {name: 'Doctors Portal'},
        {name: 'Sports League'},
        {name: 'Food Restaurant'}
    ]
    const pages = [
        {name: 'Home'},
        {name: 'About'},
        {name: 'Services'},
        {name: 'Projects'},
        {name: 'Blogs'},
        {name: 'Contact'}
    ]
    const contact = [
        {name: 'Hello, I hope you already getting know about me. Now, if you want to hire me please contact with me Through below links.'}
    ]
    return (
        <footer className="footer-style">
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    <FooterCol title="" itemInfo={noName} />
                    <FooterCol title="Projects" itemInfo={projects} />
                    <FooterCol title="Pages" itemInfo={pages} />
                    <FooterCol title="" itemInfo={contact}>
                        <ul className="list-unstyled d-flex">
                            <li className="me-3 footer-link-container"><a className="contact-link-style" target="_blank" href="https://www.facebook.com/arafat9942"><i className="flaticon-facebook"></i></a></li>
                            <li className="me-3 footer-link-container"><a className="contact-link-style" target="_blank" href="https://www.linkedin.com/in/arafat-islam-naim-400512203/"><i className="flaticon-linkedin"></i></a></li>
                            <li className="me-3 footer-link-container"><a className="contact-link-style" target="_blank" href="https://www.instagram.com/naimislam128992/"><i className="flaticon-instagram"></i></a></li>
                            <li className="me-3 footer-link-container"><a className="contact-link-style" target="_blank" href="https://github.com/freelancernaim128992"><i className="flaticon-github"></i></a></li>
                        </ul>
                    </FooterCol>
                    <div className="text-center text-white my-3">
                        <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;