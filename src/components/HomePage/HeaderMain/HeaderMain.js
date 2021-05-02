import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css'
import Typed from 'typed.js';

const HeaderMain = () => {
    // const typed = new Typed('#animation', {
    //     strings: [" Web Developer  <br/> Naim's Portfolio", "Full Stack Developer  <br/> Naim's Portfolio"],
    //     typeSpeed: 30,
    //     backSpeed: 30,
    //     loop: true
    //   });
    return (
        <section>
            <div className="header-main-container d-flex justify-content-center align-items-center">
                <div className="w-50">
                    <div className="" id="header-main">
                        <h1 className="title-style">Welcome To <span id="animation"></span>Web Developer  <br/> Naim's Portfolio</h1>
                        
                    </div>

                    <p className="text-secondary text-style w-75">I'm a full stack developer.Over the last 4 month, I learn Web development in programming hero. I have done a total of 11 projects. This is my portfolio website. If you want to hire me Please contact with me</p>
                    <div className="mt-5">
                    <a target="_blank" href="https://drive.google.com/file/d/1hgxTLdW9PEBL4vhwoA6U_phsQT_vw_mj/view?usp=sharing">
                        <button className="btn-style">Download Resume</button>
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;