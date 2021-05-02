import React from 'react';
import './ServiceInfo.css'

const ServiceInfo = ({info}) => {
    return (
        <div className="col-md-4 text-center">
            <div className="card-container">
                <div className="icon-style">
                    <i className={info.icon}></i>
                </div>
                <div className="">
                    <h3 className="service-info-title">{info.name}</h3>
                    <p className="text-white">{info.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;