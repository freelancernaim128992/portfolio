import React from 'react';
import { Link } from 'react-router-dom';
import dry1 from '../../../images/dry/dry-1.png'
import dry2 from '../../../images/dry/dry-2.png'
import dry3 from '../../../images/dry/dry-3.png'
import dry4 from '../../../images/dry/dry-4.png'
import dry5 from '../../../images/dry/dry-5.png'
import dry6 from '../../../images/dry/dry-6.png'

const DryClean = () => {
    return (
        <section className="pt-0">
            <h2 className="text-center">Dry Clean</h2>
            <div className="border-style-container">
                <span className="border-style"></span>
            </div>
            <div className="row">
                <h5 className="mb-5 mt-3">Some ScreenShot of this site</h5>
                <div className="col-md-4 mb-5"><img src={dry1} className="img-fluid" alt=""/></div>
                <div className="col-md-4 mb-5"><img src={dry2} className="img-fluid" alt=""/></div>
                <div className="col-md-4 mb-5"><img src={dry3} className="img-fluid" alt=""/></div>
            </div>
            <div className="row">
                <div className="col-md-4 mt-5"><img src={dry4} className="img-fluid" alt=""/></div>
                <div className="col-md-4 mt-5"><img src={dry5} className="img-fluid" alt=""/></div>
                <div className="col-md-4 mt-5"><img src={dry6} className="img-fluid" alt=""/></div>
            </div>
            <ul className="mt-5">
                <li>In this project, I make a home page and add some service and other sections. If anyone click on the sevice then he go to login
                page and get logged in.</li>
                <li>When he/she get logged in then he/she see a dashboard page and give order by payment and he/she also
                give a review to me.</li>
                <li>If anyone will be admin he/she see all order list and add service in home page and delete service from home
                page and change order pending status to any user.</li>
            </ul>
            <div className="mt-5">
            <a href="https://dry-clean-67773.web.app/" target="_blank" className="btn-style me-3">Live Preview</a>
            <a href="https://github.com/freelancernaim128992/dry-cleaning" target="_blank" className="btn-style me-3">Client Source Code</a>
            <a href="https://github.com/freelancernaim128992/dry-cleaning-server" target="_blank" className="btn-style">Server Source Code</a>
            </div>
        </section>
    );
};

export default DryClean;