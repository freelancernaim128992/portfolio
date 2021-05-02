import React from 'react';
import { Link } from 'react-router-dom';
import myImg from '../../../images/naim.png'
import './About.css'

const About = () => {
    return (
        <section>
            <div className="position-relative mb-5 pb-5">
                <h1 className="text-center fw-bold section-title">ABOUT</h1>
                <div className="border-style-container">
                    <span className="border-style"></span>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-3">
                    <div className="col-md-6">
                        <img src={myImg} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="pt-5 pb-3">About Me</h2>
                        <p className="text-secondary lh-lg"> <span className="fw-bold">Hi Dear,</span><br/>I'm Arafat Islam Naim.I'm a junior full stack developer. I learned full stack web development from Programming Hero over the last 4 months. When I did start learning web development then I was a baby web developer. But now, I'm a junior full stack web developer. I can do all kinds of project like as e-commerce and business website. If you Want to know more about me then click see more option.</p>
                        <div className="mt-5">
                            <Link to="/about" className="btn-style">See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;