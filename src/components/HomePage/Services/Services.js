import React from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo'
import './Services.css'

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Web Development',
            desc: 'I can develop a beautiful website and I can make web server very well',
            icon: 'flaticon-coding'
        },
        {
            id: 2,
            name: 'Responsive web design',
            desc: 'I can make Website Responsive very well and I can build beautiful website design',
            icon: 'flaticon-responsive-design'
        },
        {
            id: 3,
            name: 'React',
            desc: 'React is very easy to me. I know about all hooks in react. I develop front end with react',
            icon: 'flaticon-atom'
        },
        {
            id: 4,
            name: 'Javascript',
            desc: 'Javascript is a life of a website. It make a website dynamic and I can do all javascript functionalities',
            icon: 'flaticon-js'
        },
        {
            id: 5,
            name: 'HTML',
            desc: 'HTML is used for make website layout and I can it very well',
            icon: 'flaticon-html'
        },
        {
            id: 6,
            name: 'CSS',
            desc: 'CSS used for design a website. It make a website very beautiful and I can it',
            icon: 'flaticon-css-3'
        }
    ]
    return (
        <section className="service-container" id="services">
            <div className="position-relative mb-5 pb-5">
                <h1 className="text-center fw-bold section-title">Services</h1>
                <div className="border-style-container">
                    <span className="border-style"></span>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        serviceData.map(info => <ServiceInfo key={info.id} info={info} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;