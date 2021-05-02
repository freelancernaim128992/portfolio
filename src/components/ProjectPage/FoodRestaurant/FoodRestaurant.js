import React from 'react';

const FoodRestaurant = () => {
    return (
        <section className="pt-0">
            <h2 className="text-center">Food Restaurant</h2>
            <div className="border-style-container">
                <span className="border-style"></span>
            </div>
            <div className="row">
                <h5 className="mb-5 mt-3">Some ScreenShot of this site</h5>
                <div className="col-md-4 pb-5"><img src={shop1} className="img-fluid" alt=""/></div>
                <div className="col-md-4 pb-5"><img src={shop2} className="img-fluid" alt=""/></div>
                <div className="col-md-4 pb-5"><img src={shop3} className="img-fluid" alt=""/></div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-3"><img src={shop4} className="img-fluid" alt=""/></div>
                <div className="col-md-6 mt-3"><img src={shop5} className="img-fluid" alt=""/></div>
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

export default FoodRestaurant;