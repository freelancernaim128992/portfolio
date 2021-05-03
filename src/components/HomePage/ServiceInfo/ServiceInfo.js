import React from 'react';
import './ServiceInfo.css'
import Flip from 'react-reveal/Flip';

const ServiceInfo = ({info}) => {
    return (
        <Flip bottom>
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
        </Flip>
    );
};

export default ServiceInfo;