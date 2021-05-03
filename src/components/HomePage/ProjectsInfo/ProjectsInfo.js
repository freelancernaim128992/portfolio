import React from 'react';
import './ProjectsInfo.css'
import Bounce from 'react-reveal/Bounce';

const ProjectsInfo = ({info}) => {
    return (
        <Bounce top>
        <div className="col-md-4 text-center">
            <div className="project-card shadow rounded">
                <div className="img-container">
                    <img src={info.img} className="img-fluid img-style" alt="" />
                </div>
                <div className="p-4">
                    <h3>{info.name}</h3>
                    <p>{info.desc}If you want to see details to this website then click to see more</p>
                </div>
            </div>
        </div>
        </Bounce>
    );
};

export default ProjectsInfo;