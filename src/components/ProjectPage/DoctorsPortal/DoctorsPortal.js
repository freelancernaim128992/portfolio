import React from 'react';
import doc1 from '../../../images/doctor/doc-1.png'
import doc2 from '../../../images/doctor/doc-2.png'
import doc3 from '../../../images/doctor/doc-3.png'
import doc4 from '../../../images/doctor/doc-4.png'
import doc5 from '../../../images/doctor/doc-5.png'
import doc6 from '../../../images/doctor/doc-6.png'

const DoctorsPortal = () => {
    return (
        <section className="pt-0">
            <h2 className="text-center">Doctors Portal</h2>
            <div className="border-style-container">
                <span className="border-style"></span>
            </div>
            <div className="row">
                <h5 className="mb-5 mt-3">Some ScreenShot of this site</h5>
                <div className="col-md-4 pb-5"><img src={doc1} className="img-fluid" alt=""/></div>
                <div className="col-md-4 pb-5"><img src={doc2} className="img-fluid" alt=""/></div>
                <div className="col-md-4 pb-5"><img src={doc3} className="img-fluid" alt=""/></div>
            </div>
            <div className="row">
                <div className="col-md-4 mt-3"><img src={doc4} className="img-fluid" alt=""/></div>
                <div className="col-md-4 mt-3"><img src={doc5} className="img-fluid" alt=""/></div>
                <div className="col-md-4 mt-3"><img src={doc6} className="img-fluid" alt=""/></div>
            </div>
            <ul className="mt-5">
                <li>In this project, I make a home page and add some product.If want to buy any product then he go to login
                page and get logged in.</li>
                <li>After log in he/she go to shipping page and place order.When he/she click order page then he/she see him
                orders.</li>
                <li>If anyone click admin page then he/she go to dashboard and see all products and he add products in home
                page from the dashboard.</li>
            </ul>
            <div className="mt-5">
            <a href="https://grocery-shops-412b4.web.app/" target="_blank" className="btn-style me-3">Live Preview</a>
            <a href="https://github.com/freelancernaim128992/grocery-shops-client" target="_blank" className="btn-style me-3">Client Source Code</a>
            <a href="https://github.com/freelancernaim128992/grocery-shops-server" target="_blank" className="btn-style">Server Source Code</a>
            </div>
        </section>
    );
};

export default DoctorsPortal;