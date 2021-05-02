import React from 'react';
import { Link } from 'react-router-dom';
import myImg from '../../../images/naim.png'
import Skills from '../Skills/Skills';

const Address = () => {
    return (
        <section className="pt-5">
            <h1 className="text-center section-title">About Me</h1>
            <div className="border-style-container">
                <span className="border-style"></span>
            </div>
            <div className="mt-5 d-flex justify-content-center">
                <Link className="btn-style">Download Resume</Link>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <img src={myImg} alt=""/>
            </div>
            <div className="text-center">
                <h2>Hello, I'm Arafat Islam Naim</h2>
                <p className="fw-bold">I,m a Junior Full stack web Developer</p>
            </div>
            <div className="d-flex justify-content-center">
                <p className="w-50">I learn web development from programming hero website. I was make e-commerce website and full stack website. I also make front end website. I used many kinds of language for use this website. Now, I'm expert for make a full stack website. If you want to Hire me please give me a message.</p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5">
                    <div className="col-md-6">
                        <h3>My Address</h3>
                        <p>Name: Arafat Islam Naim</p>
                        <p>Age: 16</p>
                        <p>developer type: full stack developer</p>
                        <p>address: 406 shaheprotab, Narsingdi Shadar, Narsingdi</p>
                        <p>City: Dhaka</p>
                        <p>Country: Bangladesh</p>
                    </div>
                    <div className="col-md-6">
                        <Skills />
                    </div>
                    <div className="mt-5">
                        <h2>My Other Skills</h2>
                        <p>Firebase | Netlify | github | Material Ui</p>
                    </div>
                    <div className="">
                        <h2>Education</h2>
                        <p>Programming Hero , Dhaka - present</p>
                        <h5>SSC</h5>
                        <p>Satirpara K K Institution school and college - present</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Address;